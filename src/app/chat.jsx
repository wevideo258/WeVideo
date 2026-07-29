import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';
import { useEffect, useRef, useState } from 'react';
import { ActivityIndicator, Alert, Animated, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { calculateSoulMood } from '../engine/moodEngine';

// 本地存储 Key
const CHAT_STORAGE_KEY = '@soulara_chat_history';

export default function ChatScreen({ userId = "user_001" }) {
  const router = useRouter();
  const scrollViewRef = useRef(null);
  const websocketRef = useRef(null); // 🔌 WebSocket 引用，用于打断与实时流通信
  const audioRef = useRef(null);     // 🔊 预留音频播放引用
  
  const [inputText, setInputText] = useState('');
  const [isVoiceMode, setIsVoiceMode] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // ⚡ SCO 第一层 - 语音交互 5 态状态机 (IDLE, LISTENING, THINKING, SPEAKING, INTERRUPTED)
  const [voiceState, setVoiceState] = useState('IDLE');

  // 情绪状态机管理
  const [soulMood, setSoulMood] = useState({
    mood: '开心',
    greeting: '你好呀！很高兴能成为你的 Soulara 伴侣~',
    color: '#FFD700',
    icon: 'sparkles'
  });

  // 💡 新增：情感化功能状态（记忆气泡与当前情感标签）
  const [showMemoryBubble, setShowMemoryBubble] = useState(true);
  const fadeAnim = useRef(new Animated.Value(0)).current;

  // 初始化消息流
  const [messages, setMessages] = useState([
    { id: 1, sender: 'system', type: 'system', text: '你们相识 326 天', time: '' },
    { id: 2, sender: 'ai', type: 'text', text: '加载中...', time: '刚刚' }
  ]);

  // 话题标签与快捷关怀
  const topics = ['#日常', '#思念', '#睡眠', '#工作', '#咖啡'];
  const suggestedReplies = ['今天有什么推荐的歌吗？', '陪我聊会儿天吧~', '等下一起去喝咖啡！'];

  const tabs = [
    { name: '首页', route: '/home', icon: 'home-outline' },
    { name: '创建角色', route: '/character', icon: 'people-outline' },
    { name: '聊天', route: '/chat', icon: 'chatbubble' },
    { name: '世界', route: '/world', icon: 'globe-outline' },
    { name: '我的', route: '/me', icon: 'person-outline' },
  ];

  // 1. 页面加载时：计算情绪状态并加载历史，同时初始化 WebSocket 实时通道
  useEffect(() => {
    initMoodAndHistory();
    initWebSocketConnection();

    // 渐显记忆气泡动画
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 800,
      useNativeDriver: true,
    }).start();

    return () => {
      if (websocketRef.current) {
        websocketRef.current.close();
      }
    };
  }, []);

  // 🔌 初始化 WebSocket 连接以支持与云端后端闭环交互、Barge-in 打断与流式传输
  const initWebSocketConnection = () => {
    try {
      // 统一指向后端 WebSocket 网关（已使用 127.0.0.1 确保本地回环稳定）
      const wsUrl = `ws://127.0.0.1:8001/ws/soulara/${userId}`;
      websocketRef.current = new WebSocket(wsUrl);

      websocketRef.current.onopen = () => {
        console.log("[WebSocket] 已成功连接到 SoularaOS 云端网关");
        setVoiceState('IDLE');
      };

      websocketRef.current.onmessage = async (event) => {
        // 兼容后端发来的二进制音频流
        if (event.data instanceof Blob) {
          const audioUrl = URL.createObjectURL(event.data);
          if (audioRef.current) {
            audioRef.current.src = audioUrl;
            audioRef.current.play();
          }
          setVoiceState("SPEAKING");
          return;
        }

        // 解析后端下发的结构化 JSON 响应
        try {
          const data = JSON.parse(event.data);
          if (data.state === "SPEAKING" || data.status === "SPEAKING" || data.type === 'tts_start') {
            setVoiceState('SPEAKING');
          } else if (data.state === "IDLE" || data.status === "IDLE" || data.type === 'tts_ended') {
            setVoiceState('IDLE');
          }

          // 如果包含文本回复，将其追加到聊天记录中
          if (data.content) {
            const aiReplyMsg = { 
              id: Date.now() + 1, 
              sender: 'ai', 
              type: 'text', 
              text: data.content, 
              emotion: data.emotion || soulMood.mood,
              time: '刚刚' 
            };
            setMessages(prev => {
              const updated = [...prev, aiReplyMsg];
              saveChatHistory(updated);
              return updated;
            });
            setIsLoading(false);
          }
        } catch (e) {
          console.log("解析 WS 消息失败", e);
        }
      };

      websocketRef.current.onerror = (error) => {
        console.log("⚠️ WebSocket 连接异常", error);
        setVoiceState('IDLE');
      };

      websocketRef.current.onclose = () => {
        console.log("🔌 WebSocket 连接已断开");
        setVoiceState('IDLE');
      };
    } catch (err) {
      console.log("WebSocket 初始化错误:", err);
    }
  };

  // ⚡ SCO 第一层 - Barge-in 语音打断处理函数
  const handleBargeIn = () => {
    if (websocketRef.current && websocketRef.current.readyState === WebSocket.OPEN) {
      websocketRef.current.send(JSON.stringify({
        state: "INTERRUPTED",
        content: "[Barge-in 用户打断]"
      }));
    }
    setVoiceState('IDLE');
  };

  const initMoodAndHistory = async () => {
    const moodResult = await calculateSoulMood();
    setSoulMood(moodResult);

    try {
      const savedHistory = await AsyncStorage.getItem(CHAT_STORAGE_KEY);
      if (savedHistory) {
        setMessages(JSON.parse(savedHistory));
      } else {
        const initialMsgs = [
          { id: 1, sender: 'system', type: 'system', text: '你们相识 326 天', time: '' },
          { id: 2, sender: 'ai', type: 'text', text: moodResult.greeting, time: '刚刚' }
        ];
        setMessages(initialMsgs);
      }
    } catch (error) {
      console.log('读取聊天历史失败:', error);
    }
  };

  const saveChatHistory = async (newMessages) => {
    try {
      await AsyncStorage.setItem(CHAT_STORAGE_KEY, JSON.stringify(newMessages));
    } catch (error) {
      console.log('保存聊天历史失败:', error);
    }
  };

  // 发送文字消息（严格兼容后端 5 态状态机 JSON 格式）
  const handleSend = (textToSend) => {
    if (voiceState === 'SPEAKING') {
      handleBargeIn();
    }

    const content = textToSend || inputText;
    if (!content.trim() || isLoading) return;
    
    const newMsg = { id: Date.now(), sender: 'user', type: 'text', text: content, time: '刚刚' };
    const updatedMessages = [...messages, newMsg];
    
    setMessages(updatedMessages);
    saveChatHistory(updatedMessages);
    if (!textToSend) setInputText('');
    
    setTimeout(() => {
      scrollViewRef.current?.scrollToEnd({ animated: true });
    }, 100);

    // 状态切换为思考中，并通过 WebSocket 发送标准的 state + content 结构给后端
    setIsLoading(true);
    setVoiceState('THINKING');

    if (websocketRef.current && websocketRef.current.readyState === WebSocket.OPEN) {
      websocketRef.current.send(JSON.stringify({
        state: "LISTENING", // 对应后端的 5 态状态
        content: content
      }));
    } else {
      // 容灾降级本地模拟回复
      setTimeout(() => {
        const mockReply = {
          id: Date.now() + 1,
          sender: 'ai',
          type: 'text',
          text: `哼~听到你说“${content}”了，本伴侣有认真记在心里哦！`,
          emotion: soulMood.mood,
          time: '刚刚'
        };
        const updated = [...updatedMessages, mockReply];
        setMessages(updated);
        saveChatHistory(updated);
        setIsLoading(false);
        setVoiceState('IDLE');
      }, 1000);
    }
  };

  const handleSendVoice = () => {
    if (voiceState === 'SPEAKING') {
      handleBargeIn();
    }
    if (isLoading) return;
    const newMsg = { id: Date.now(), sender: 'user', type: 'voice', text: '[语音消息]', duration: '03\"', time: '刚刚' };
    const updatedMessages = [...messages, newMsg];
    
    setMessages(updatedMessages);
    saveChatHistory(updatedMessages);
    setIsVoiceMode(false);
  };

  const handleUploadImage = () => {
    Alert.alert(
      "上传图片",
      "请选择图片来源",
      [
        { text: "拍照", onPress: () => pushImageMsg() },
        { text: "从相册选择", onPress: () => pushImageMsg() },
        { text: "取消", style: "cancel" }
      ]
    );
  };

  const pushImageMsg = () => {
    if (isLoading) return;
    const newMsg = { id: Date.now(), sender: 'user', type: 'image', text: '[图片记忆]', time: '刚刚' };
    const updatedMessages = [...messages, newMsg];
    
    setMessages(updatedMessages);
    saveChatHistory(updatedMessages);
  };

  return (
    <KeyboardAvoidingView 
      style={styles.container} 
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      {/* 顶部导航栏，动态反映当前情绪色彩 */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.replace('/home')}>
          <Ionicons name="chevron-back" size={24} color="#5C4033" />
        </TouchableOpacity>
        
        <View style={styles.headerTitleContainer}>
          <Text style={styles.headerTitle}>Luna</Text>
          <View style={styles.statusRow}>
            <View style={[styles.onlineDot, { backgroundColor: soulMood.color }]} />
            <Text style={styles.headerSub}>
              {voiceState === 'SPEAKING' ? '🎤 正在讲话...' : voiceState === 'THINKING' ? '🧠 思考中...' : `当前心情：${soulMood.mood} · 状态: ${voiceState}`}
            </Text>
          </View>
        </View>

        <TouchableOpacity style={styles.backButton} onPress={() => router.push('/character')}>
          <Ionicons name="ellipsis-horizontal" size={20} color="#5C4033" />
        </TouchableOpacity>
      </View>

      {/* 💡 增强区域 1：沉浸式手办状态看板与心语飘带 */}
      <View style={styles.renderContainer}>
        <View style={styles.modelBox}>
          <Ionicons name="cube" size={32} color="#C29B75" />
          <Text style={styles.modelText}>Luna 3D 伴侣实时渲染位</Text>
        </View>
        <View style={styles.speechBadge}>
          <Ionicons name="sparkles" size={12} color="#D4AF37" style={{ marginRight: 4 }} />
          <Text style={styles.speechBadgeText}>“{soulMood.greeting}”</Text>
        </View>
      </View>

      {/* 💡 增强区域 2：记忆气泡提示 (Memory Activation) */}
      {showMemoryBubble && (
        <Animated.View style={[styles.memoryCard, { opacity: fadeAnim }]}>
          <Ionicons name="bulb" size={15} color="#D4AF37" style={{ marginRight: 6 }} />
          <Text style={styles.memoryText} numberOfLines={1}>
            💡 记忆唤醒：已联动半年前关于“抹茶蛋糕”的灵魂记忆档案
          </Text>
          <TouchableOpacity onPress={() => setShowMemoryBubble(false)}>
            <Ionicons name="close" size={14} color="#A89F91" />
          </TouchableOpacity>
        </Animated.View>
      )}

      {/* 聊天内容滚动区域 */}
      <ScrollView 
        ref={scrollViewRef}
        contentContainerStyle={styles.chatScroll} 
        showsVerticalScrollIndicator={false}
        onContentSizeChange={() => scrollViewRef.current?.scrollToEnd({ animated: true })}
      >
        {messages.map((item) => {
          if (item.type === 'system') {
            return (
              <View key={item.id} style={styles.systemMsgContainer}>
                <View style={styles.systemMsgBox}>
                  <Text style={styles.systemMsgText}>{item.text}</Text>
                </View>
              </View>
            );
          }

          const isAi = item.sender === 'ai';
          return (
            <View key={item.id} style={[styles.msgRow, isAi ? styles.aiRow : styles.userRow]}>
              {isAi && (
                <View style={styles.avatarCircle}>
                  <Ionicons name={soulMood.icon} size={16} color={soulMood.color} />
                </View>
              )}
              <View style={[styles.bubble, isAi ? styles.aiBubble : styles.userBubble]}>
                {item.type === 'text' && (
                  <Text style={[styles.msgText, isAi ? styles.aiMsgText : styles.userMsgText]}>
                    {item.text}
                  </Text>
                )}
                {item.type === 'voice' && (
                  <View style={{ flexDirection: 'row', alignItems: 'center', width: 80, justifyContent: 'space-between' }}>
                    <Ionicons name="radio-outline" size={16} color="#FFFFFF" />
                    <Text style={{ color: '#FFFFFF', fontSize: 13, fontWeight: '600' }}>{item.duration}</Text>
                  </View>
                )}
                {item.type === 'image' && (
                  <View style={{ width: 140, height: 100, backgroundColor: '#FAF3EB', borderRadius: 8, alignItems: 'center', justifyContent: 'center' }}>
                    <Ionicons name="image" size={32} color="#C29B75" />
                    <Text style={{ fontSize: 11, color: '#8C7A6B', marginTop: 4 }}>[图片已发送]</Text>
                  </View>
                )}
                {isAi && item.emotion && (
                  <View style={styles.emotionTag}>
                    <Text style={styles.emotionTagText}>#{item.emotion}</Text>
                  </View>
                )}
                <Text style={[styles.timeText, isAi ? styles.aiTimeText : styles.userTimeText]}>
                  {item.time}
                </Text>
              </View>
            </View>
          );
        })}

        {isLoading && (
          <View style={[styles.msgRow, styles.aiRow]}>
            <View style={styles.avatarCircle}>
              <Ionicons name={soulMood.icon} size={16} color={soulMood.color} />
            </View>
            <View style={[styles.bubble, styles.aiBubble, { flexDirection: 'row', alignItems: 'center' }]}>
              <ActivityIndicator size="small" color="#C29B75" style={{ marginRight: 6 }} />
              <Text style={{ fontSize: 13, color: '#8C7A6B' }}>Luna 正在思考中...</Text>
            </View>
          </View>
        )}
      </ScrollView>

      {/* 底部输入控制区 */}
      <View style={styles.inputArea}>
        {/* 💡 增强区域 3：快捷关怀胶囊栏 (Quick Actions) */}
        <View style={styles.quickActionContainer}>
          <TouchableOpacity style={styles.actionChip} onPress={() => handleSend('✋ 摸摸头')}>
            <Text style={styles.actionChipText}>✋ 摸摸头</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionChip} onPress={() => handleSend('🌙 发送早安仪式')}>
            <Text style={styles.actionChipText}>🌙 早安仪式</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionChip} onPress={() => handleSend('🧹 今天有点烦恼，陪我清理心事')}>
            <Text style={styles.actionChipText}>🧹 清理心事</Text>
          </TouchableOpacity>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.topicsScroll}>
          {topics.map((topic, index) => (
            <TouchableOpacity key={index} style={styles.topicChip} onPress={() => setInputText(topic + ' ')}>
              <Text style={styles.topicText}>{topic}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.repliesScroll}>
          {suggestedReplies.map((reply, index) => (
            <TouchableOpacity key={index} style={styles.replyChip} onPress={() => handleSend(reply)}>
              <Text style={styles.replyText}>{reply}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <View style={styles.inputRow}>
          <TouchableOpacity 
            style={[styles.actionIconBtn, isVoiceMode && { backgroundColor: '#C29B75' }]} 
            activeOpacity={0.8}
            onPress={() => setIsVoiceMode(!isVoiceMode)}
          >
            <Ionicons name={isVoiceMode ? "keypad-outline" : "mic-outline"} size={20} color={isVoiceMode ? "#FFFFFF" : "#8C7A6B"} />
          </TouchableOpacity>

          <TouchableOpacity style={[styles.actionIconBtn, { marginRight: 6 }]} activeOpacity={0.8} onPress={handleUploadImage}>
            <Ionicons name="image-outline" size={20} color="#8C7A6B" />
          </TouchableOpacity>

          {isVoiceMode ? (
            <TouchableOpacity 
              style={styles.voiceRecordBtn} 
              activeOpacity={0.7}
              onPressIn={handleSendVoice}
            >
              <Text style={styles.voiceRecordText}>按住 说话 (点击发送语音)</Text>
            </TouchableOpacity>
          ) : (
            <TextInput
              style={styles.input}
              placeholder="和 Luna 说点什么..."
              placeholderTextColor="#A89F91"
              value={inputText}
              onChangeText={setInputText}
              editable={!isLoading}
              multiline
            />
          )}

          {!isVoiceMode && (
            <TouchableOpacity style={[styles.sendButton, (isLoading || !inputText.trim()) && { opacity: 0.6 }]} onPress={() => handleSend()} activeOpacity={0.8} disabled={isLoading || !inputText.trim()}>
              <Ionicons name="arrow-up" size={18} color="#FFFFFF" />
            </TouchableOpacity>
          )}
        </View>
      </View>

      {/* 底部固定 5 个核心 Tab 导航 */}
      <View style={styles.tabContainer}>
        {tabs.map((tab, index) => {
          const isActive = tab.route === '/chat';
          return (
            <TouchableOpacity
              key={index}
              style={styles.tabItem}
              activeOpacity={0.8}
              onPress={() => router.replace(tab.route)}
            >
              <Ionicons
                name={tab.icon}
                size={22}
                color={isActive ? '#C29B75' : '#A89F91'}
              />
              <Text style={[styles.tabText, isActive && styles.activeTabText]}>
                {tab.name}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FBF7F0' },
  header: { flexDirection: 'row', alignItems: 'center', paddingTop: 45, paddingHorizontal: 16, paddingBottom: 10, backgroundColor: '#FFFFFF', borderBottomWidth: 1, borderBottomColor: '#F0E6DC' },
  backButton: { width: 36, height: 36, alignItems: 'center', justifyContent: 'center', borderRadius: 18, backgroundColor: '#FAF3EB' },
  headerTitleContainer: { flex: 1, alignItems: 'center' },
  headerTitle: { fontSize: 15, fontWeight: '700', color: '#5C4033' },
  statusRow: { flexDirection: 'row', alignItems: 'center', marginTop: 2 },
  onlineDot: { width: 6, height: 6, borderRadius: 3, marginRight: 4 },
  headerSub: { fontSize: 11, color: '#C29B75' },
  
  /* 💡 增强样式：顶部 3D 渲染与开场白 */
  renderContainer: { height: 100, backgroundColor: '#FAF3EB', marginHorizontal: 16, marginTop: 10, borderRadius: 12, alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: '#F0E6DC' },
  modelBox: { alignItems: 'center' },
  modelText: { fontSize: 11, color: '#8C7A6B', marginTop: 2 },
  speechBadge: { position: 'absolute', bottom: 8, flexDirection: 'row', alignItems: 'center', backgroundColor: '#FFFFFF', paddingHorizontal: 10, paddingVertical: 3, borderRadius: 10, borderWidth: 1, borderColor: '#EFE3D5' },
  speechBadgeText: { fontSize: 11, color: '#5C4033', fontWeight: '500' },

  /* 💡 增强样式：记忆唤醒气泡 */
  memoryCard: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#FFFDF9', marginHorizontal: 16, marginTop: 8, paddingHorizontal: 12, paddingVertical: 8, borderRadius: 10, borderWidth: 1, borderColor: '#FCE3A7' },
  memoryText: { flex: 1, fontSize: 11, color: '#8C7A6B' },

  chatScroll: { paddingHorizontal: 16, paddingTop: 12, paddingBottom: 220 },
  systemMsgContainer: { alignItems: 'center', marginVertical: 12 },
  systemMsgBox: { backgroundColor: '#F0E6DC', paddingHorizontal: 12, paddingVertical: 4, borderRadius: 12 },
  systemMsgText: { fontSize: 11, color: '#8C7A6B' },
  msgRow: { flexDirection: 'row', marginBottom: 16, alignItems: 'flex-end' },
  aiRow: { justifyContent: 'flex-start' },
  userRow: { justifyContent: 'flex-end' },
  avatarCircle: { width: 32, height: 32, borderRadius: 16, backgroundColor: '#FAF3EB', borderWidth: 1, borderColor: '#EFE3D5', alignItems: 'center', justifyContent: 'center', marginRight: 8 },
  bubble: { maxWidth: '75%', padding: 12, borderRadius: 16 },
  aiBubble: { backgroundColor: '#FCE7F3', borderWidth: 1, borderColor: '#F7D4E5', borderBottomLeftRadius: 4 },
  userBubble: { backgroundColor: '#C29B75', borderBottomRightRadius: 4 },
  msgText: { fontSize: 14, lineHeight: 20 },
  aiMsgText: { color: '#4A3B32' },
  userMsgText: { color: '#FFFFFF' },
  emotionTag: { marginTop: 4, alignSelf: 'flex-start', backgroundColor: '#FFFFFF', paddingHorizontal: 6, paddingVertical: 2, borderRadius: 6, borderWidth: 1, borderColor: '#F0E6DC' },
  emotionTagText: { fontSize: 9, color: '#D4AF37', fontWeight: '600' },
  timeText: { fontSize: 10, marginTop: 4, textAlign: 'right' },
  aiTimeText: { color: '#A89F91' },
  userTimeText: { color: '#F5ECE3' },

  inputArea: { position: 'absolute', bottom: 60, left: 0, right: 0, backgroundColor: '#FFFFFF', borderTopWidth: 1, borderTopColor: '#F0E6DC', paddingTop: 6, paddingBottom: 6 },
  
  /* 💡 增强样式：快捷关怀胶囊栏 */
  quickActionContainer: { flexDirection: 'row', paddingHorizontal: 12, paddingBottom: 6, justifyContent: 'space-between' },
  actionChip: { backgroundColor: '#FAF3EB', paddingVertical: 5, paddingHorizontal: 10, borderRadius: 10, borderWidth: 1, borderColor: '#EFE3D5' },
  actionChipText: { fontSize: 11, color: '#5C4033', fontWeight: '500' },

  topicsScroll: { paddingHorizontal: 12, marginBottom: 6 },
  topicChip: { backgroundColor: '#FAF3EB', paddingHorizontal: 10, paddingVertical: 4, borderRadius: 12, marginRight: 6, borderWidth: 1, borderColor: '#EFE3D5' },
  topicText: { fontSize: 11, color: '#5C4033' },
  repliesScroll: { paddingHorizontal: 12, marginBottom: 8 },
  replyChip: { backgroundColor: '#FFFFFF', borderWidth: 1, borderColor: '#D4AF37', paddingHorizontal: 10, paddingVertical: 5, borderRadius: 14, marginRight: 8 },
  replyText: { fontSize: 12, color: '#C29B75', fontWeight: '500' },
  inputRow: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 12 },
  actionIconBtn: { width: 34, height: 34, borderRadius: 17, backgroundColor: '#FAF3EB', alignItems: 'center', justifyContent: 'center', marginRight: 6, borderWidth: 1, borderColor: '#EFE3D5' },
  input: { flex: 1, backgroundColor: '#FAF3EB', borderRadius: 20, paddingHorizontal: 14, paddingVertical: 8, fontSize: 14, color: '#5C4033', borderWidth: 1, borderColor: '#EFE3D5', maxHeight: 100 },
  voiceRecordBtn: { flex: 1, backgroundColor: '#FAF3EB', borderRadius: 20, paddingVertical: 10, alignItems: 'center', borderWidth: 1, borderColor: '#C29B75' },
  voiceRecordText: { color: '#5C4033', fontSize: 13, fontWeight: '600' },
  sendButton: { width: 36, height: 36, borderRadius: 18, backgroundColor: '#D4AF37', alignItems: 'center', justifyContent: 'center', marginLeft: 8 },
  tabContainer: { position: 'absolute', bottom: 0, left: 0, right: 0, flexDirection: 'row', height: 60, backgroundColor: '#FFFFFF', borderTopWidth: 1, borderTopColor: '#F0E6DC', alignItems: 'center', justifyContent: 'space-around', paddingBottom: 4 },
  tabItem: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  tabText: { fontSize: 11, color: '#A89F91', marginTop: 2 },
  activeTabText: { color: '#C29B75', fontWeight: '600' },
});