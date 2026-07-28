import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';
import { useEffect, useRef, useState } from 'react';
import { ActivityIndicator, Alert, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

// 本地存储 Key
const CHAT_STORAGE_KEY = '@soulara_chat_history';

export default function ChatScreen() {
  const router = useRouter();
  const scrollViewRef = useRef(null);
  const [inputText, setInputText] = useState('');
  const [isVoiceMode, setIsVoiceMode] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // OpenAI 配置信息（通过 Expo 环境变量安全读取）
  const OPENAI_API_KEY = process.env.EXPO_PUBLIC_OPENAI_API_KEY || '';
  const OPENAI_API_URL = "https://api.openai.com/v1/chat/completions";

  // 初始化消息流（包含 PRD 要求的系统提示及初始对话）
  const [messages, setMessages] = useState([
    { id: 1, sender: 'system', type: 'system', text: '你们相识 326 天', time: '' },
    { id: 2, sender: 'ai', type: 'text', text: '你好呀！我是你的 Soulara 伴侣。我已经成功接入 OpenAI 并且开启了本地历史持久化，今天想聊点什么？', time: '刚刚' }
  ]);

  // PRD 定义的建议回复（AI 实时生成）
  const suggestedReplies = [
    '今天有什么推荐的歌吗？',
    '陪我聊会儿天吧~',
    '等下一起去喝咖啡！'
  ];

  // 话题标签
  const topics = ['#日常', '#思念', '#睡眠', '#工作', '#咖啡'];

  const tabs = [
    { name: '首页', route: '/home', icon: 'home-outline' },
    { name: '创建角色', route: '/character', icon: 'people-outline' },
    { name: '聊天', route: '/chat', icon: 'chatbubble' },
    { name: '世界', route: '/world', icon: 'globe-outline' },
    { name: '我的', route: '/me', icon: 'person-outline' },
  ];

  // 1. 页面加载时，从本地读取聊天历史
  useEffect(() => {
    loadChatHistory();
  }, []);

  const loadChatHistory = async () => {
    try {
      const savedHistory = await AsyncStorage.getItem(CHAT_STORAGE_KEY);
      if (savedHistory) {
        setMessages(JSON.parse(savedHistory));
      }
    } catch (error) {
      console.log('读取聊天历史失败:', error);
    }
  };

  // 2. 保存聊天历史到本地
  const saveChatHistory = async (newMessages) => {
    try {
      await AsyncStorage.setItem(CHAT_STORAGE_KEY, JSON.stringify(newMessages));
    } catch (error) {
      console.log('保存聊天历史失败:', error);
    }
  };

  // 调用 OpenAI 真实大模型接口
  const callOpenAI = async (currentMessages) => {
    setIsLoading(true);
    try {
      // 过滤系统消息再发给大模型
      const formattedMessages = currentMessages
        .filter(msg => msg.sender !== 'system')
        .map(msg => ({
          role: msg.sender === 'user' ? 'user' : 'assistant',
          content: msg.text || '[图片或语音消息]'
        }));

      const response = await fetch(OPENAI_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${OPENAI_API_KEY.trim()}`
        },
        body: JSON.stringify({
          model: 'gpt-4o-mini',
          messages: [
            { role: 'system', content: '你是一个温柔、贴心的数字生命伴侣 Soulara，说话语气充满治愈与陪伴感。' },
            ...formattedMessages
          ],
          temperature: 0.7
        })
      });

      const data = await response.json();
      
      if (data.choices && data.choices.length > 0) {
        const aiReply = data.choices[0].message.content;
        const updatedWithAi = [
          ...currentMessages,
          { id: Date.now() + 1, sender: 'ai', type: 'text', text: aiReply, time: '刚刚' }
        ];
        setMessages(updatedWithAi);
        saveChatHistory(updatedWithAi);
      } else {
        throw new Error(data.error?.message || '未知错误');
      }
    } catch (error) {
      Alert.alert("API 请求失败", error.message || "请检查网络或密钥有效性");
      const fallbackMessages = [
        ...currentMessages,
        { id: Date.now() + 1, sender: 'ai', type: 'text', text: '呜呜，刚才走神了一下没听清，能再跟我说一遍吗？', time: '刚刚' }
      ];
      setMessages(fallbackMessages);
      saveChatHistory(fallbackMessages);
    } finally {
      setIsLoading(false);
      setTimeout(() => {
        scrollViewRef.current?.scrollToEnd({ animated: true });
      }, 100);
    }
  };

  // 发送文字消息
  const handleSend = (textToSend) => {
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

    callOpenAI(updatedMessages);
  };

  // 发送语音消息模拟
  const handleSendVoice = () => {
    if (isLoading) return;
    const newMsg = { id: Date.now(), sender: 'user', type: 'voice', text: '[语音消息]', duration: '03\"', time: '刚刚' };
    const updatedMessages = [...messages, newMsg];
    
    setMessages(updatedMessages);
    saveChatHistory(updatedMessages);
    setIsVoiceMode(false);
    
    callOpenAI(updatedMessages);
  };

  // 上传图片处理
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
    
    callOpenAI(updatedMessages);
  };

  return (
    <KeyboardAvoidingView 
      style={styles.container} 
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      {/* 顶部导航栏与 PRD 规范的灵魂元信息条 */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.replace('/home')}>
          <Ionicons name="chevron-back" size={24} color="#5C4033" />
        </TouchableOpacity>
        
        <View style={styles.headerTitleContainer}>
          <Text style={styles.headerTitle}>Luna</Text>
          <View style={styles.statusRow}>
            <View style={styles.onlineDot} />
            <Text style={styles.headerSub}>在线 · Lv.7 永恒 | 亲密度 68%</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.backButton} onPress={() => router.push('/character')}>
          <Ionicons name="ellipsis-horizontal" size={20} color="#5C4033" />
        </TouchableOpacity>
      </View>

      {/* 聊天内容滚动区域 */}
      <ScrollView 
        ref={scrollViewRef}
        contentContainerStyle={styles.chatScroll} 
        showsVerticalScrollIndicator={false}
        onContentSizeChange={() => scrollViewRef.current?.scrollToEnd({ animated: true })}
      >
        {messages.map((item) => {
          // 系统消息类型
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
                  <Ionicons name="sparkles" size={16} color="#D4AF37" />
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
              <Ionicons name="sparkles" size={16} color="#D4AF37" />
            </View>
            <View style={[styles.bubble, styles.aiBubble, { flexDirection: 'row', alignItems: 'center' }]}>
              <ActivityIndicator size="small" color="#C29B75" style={{ marginRight: 6 }} />
              <Text style={{ fontSize: 13, color: '#8C7A6B' }}>Luna 正在思考中...</Text>
            </View>
          </View>
        )}
      </ScrollView>

      {/* 底部输入控制区（内含话题标签、建议回复、输入框） */}
      <View style={styles.inputArea}>
        {/* 话题标签横滑 */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.topicsScroll}>
          {topics.map((topic, index) => (
            <TouchableOpacity key={index} style={styles.topicChip} onPress={() => setInputText(topic + ' ')}>
              <Text style={styles.topicText}>{topic}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* 建议回复气泡 (PRD规范：AI 实时生成 3 条) */}
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
  container: {
    flex: 1,
    backgroundColor: '#FBF7F0',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 45,
    paddingHorizontal: 16,
    paddingBottom: 10,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#F0E6DC',
  },
  backButton: {
    width: 36,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 18,
    backgroundColor: '#FAF3EB',
  },
  headerTitleContainer: {
    flex: 1,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: '#5C4033',
  },
  statusRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 2,
  },
  onlineDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#81B29A',
    marginRight: 4,
  },
  headerSub: {
    fontSize: 11,
    color: '#C29B75',
  },
  chatScroll: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 200, // 避开底部复合输入栏
  },
  systemMsgContainer: {
    alignItems: 'center',
    marginVertical: 12,
  },
  systemMsgBox: {
    backgroundColor: '#F0E6DC',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  systemMsgText: {
    fontSize: 11,
    color: '#8C7A6B',
  },
  msgRow: {
    flexDirection: 'row',
    marginBottom: 16,
    alignItems: 'flex-end',
  },
  aiRow: {
    justifyContent: 'flex-start',
  },
  userRow: {
    justifyContent: 'flex-end',
  },
  avatarCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#FAF3EB',
    borderWidth: 1,
    borderColor: '#EFE3D5',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
  bubble: {
    maxWidth: '75%',
    padding: 12,
    borderRadius: 16,
  },
  aiBubble: {
    backgroundColor: '#FCE7F3', // 对齐 PRD 规范的粉色气泡
    borderWidth: 1,
    borderColor: '#F7D4E5',
    borderBottomLeftRadius: 4,
  },
  userBubble: {
    backgroundColor: '#C29B75',
    borderBottomRightRadius: 4,
  },
  msgText: {
    fontSize: 14,
    lineHeight: 20,
  },
  aiMsgText: {
    color: '#4A3B32',
  },
  userMsgText: {
    color: '#FFFFFF',
  },
  timeText: {
    fontSize: 10,
    marginTop: 4,
    textAlign: 'right',
  },
  aiTimeText: {
    color: '#A89F91',
  },
  userTimeText: {
    color: '#F5ECE3',
  },
  inputArea: {
    position: 'absolute',
    bottom: 60,
    left: 0,
    right: 0,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#F0E6DC',
    paddingTop: 8,
    paddingBottom: 6,
  },
  topicsScroll: {
    paddingHorizontal: 12,
    marginBottom: 6,
  },
  topicChip: {
    backgroundColor: '#FAF3EB',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    marginRight: 6,
    borderWidth: 1,
    borderColor: '#EFE3D5',
  },
  topicText: {
    fontSize: 11,
    color: '#5C4033',
  },
  repliesScroll: {
    paddingHorizontal: 12,
    marginBottom: 8,
  },
  replyChip: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#D4AF37',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 14,
    marginRight: 8,
  },
  replyText: {
    fontSize: 12,
    color: '#C29B75',
    fontWeight: '500',
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
  },
  actionIconBtn: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: '#FAF3EB',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 6,
    borderWidth: 1,
    borderColor: '#EFE3D5',
  },
  input: {
    flex: 1,
    backgroundColor: '#FAF3EB',
    borderRadius: 20,
    paddingHorizontal: 14,
    paddingVertical: 8,
    fontSize: 14,
    color: '#5C4033',
    borderWidth: 1,
    borderColor: '#EFE3D5',
    maxHeight: 100,
  },
  voiceRecordBtn: {
    flex: 1,
    backgroundColor: '#FAF3EB',
    borderRadius: 20,
    paddingVertical: 10,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#C29B75',
  },
  voiceRecordText: {
    color: '#5C4033',
    fontSize: 13,
    fontWeight: '600',
  },
  sendButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#D4AF37',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 8,
  },
  tabContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    height: 60,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#F0E6DC',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingBottom: 4,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabText: {
    fontSize: 11,
    color: '#A89F91',
    marginTop: 2,
  },
  activeTabText: {
    color: '#C29B75',
    fontWeight: '600',
  },
});