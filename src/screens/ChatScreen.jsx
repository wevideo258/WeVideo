import { useEffect, useRef, useState } from 'react';

const ChatScreen = ({ userId = "user_001" }) => {
  const [socket, setSocket] = useState(null);
  const [currentState, setCurrentState] = useState("IDLE"); // IDLE, LISTENING, THINKING, SPEAKING, INTERRUPTED
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState("");
  const [currentEmotion, setCurrentEmotion] = useState("tsundere");
  const [currentAction, setCurrentAction] = useState("pout");
  
  const audioRef = useRef(null);

  useEffect(() => {
    // 建立与云端后端 WebSocket 网关的连接
    const ws = new WebSocket(`ws://localhost:8000/ws/soulara/${userId}`);
    
    ws.onopen = () => {
      console.log("[WebSocket] 已成功连接到 SoularaOS 云端网关");
      setCurrentState("IDLE");
    };

    ws.onmessage = async (event) => {
      // 兼容后端发来的二进制音频流
      if (event.data instanceof Blob) {
        const audioUrl = URL.createObjectURL(event.data);
        if (audioRef.current) {
          audioRef.current.src = audioUrl;
          audioRef.current.play();
        }
        setCurrentState("SPEAKING");
        return;
      }

      // 兼容后端发来的结构化 JSON 响应
      try {
        const data = JSON.parse(event.data);
        if (data.type === "structured_response") {
          setCurrentEmotion(data.emotion || "tsundere");
          setCurrentAction(data.action || "pout");
          setCurrentState("SPEAKING");
          
          setMessages(prev => [
            ...prev, 
            { sender: 'user', text: data.user_input },
            { sender: 'soulara', text: data.content, emotion: data.emotion }
          ]);
        }
      } catch (e) {
        console.error("解析 WebSocket 消息失败:", e);
      }
    };

    ws.onclose = () => {
      console.log("[WebSocket] 连接已断开");
      setCurrentState("IDLE");
    };

    setSocket(ws);

    return () => {
      ws.close();
    };
  }, [userId]);

  // 发送文本消息与状态给后端
  const sendMessage = () => {
    if (!inputText.trim() || !socket) return;
    
    setCurrentState("THINKING");
    
    const payload = JSON.stringify({
      state: "LISTENING",
      content: inputText
    });
    
    socket.send(payload);
    setInputText("");
  };

  // 💡 核心：Barge-in 打断逻辑（当用户点击打断或强行说话时触发）
  const handleBargeIn = () => {
    if (!socket) return;
    setCurrentState("INTERRUPTED");
    
    // 停止当前播放的音频
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }

    // 向云端发送打断指令
    socket.send(JSON.stringify({
      state: "INTERRUPTED",
      content: "Barge-in triggered by user"
    }));
  };

  return (
    <div className="chat-screen" style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h2>SoularaOS 3D 终端模拟器</h2>
      <div style={{ marginBottom: '10px' }}>
        <strong>当前数字生命状态: </strong> 
        <span style={{ color: 'magenta', fontWeight: 'bold' }}>{currentState}</span> | 
        <strong> 情绪: </strong> {currentEmotion} | 
        <strong> 动作: </strong> {currentAction}
      </div>

      {/* 隐藏的音频播放器，用于渲染后端返回的 TTS 语音流 */}
      <audio ref={audioRef} onEnded={() => setCurrentState("IDLE")} />

      <div className="chat-box" style={{ border: '1px solid #ccc', height: '300px', overflowY: 'scroll', padding: '10px', marginBottom: '10px', background: '#f9f9f9' }}>
        {messages.map((msg, index) => (
          <div key={index} style={{ margin: '8px 0', textAlign: msg.sender === 'user' ? 'right' : 'left' }}>
            <span style={{ background: msg.sender === 'user' ? '#daf8cb' : '#eee', padding: '8px 12px', borderRadius: '8px', display: 'inline-block' }}>
              <strong>{msg.sender === 'user' ? '主人' : 'Soulara'}:</strong> {msg.text}
            </span>
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', gap: '10px' }}>
        <input 
          type="text" 
          value={inputText} 
          onChange={(e) => setInputText(e.target.value)} 
          placeholder="和 Soulara 说点什么..." 
          style={{ flex: 1, padding: '8px' }}
        />
        <button onClick={sendMessage} style={{ padding: '8px 16px' }}>发送</button>
        <button onClick={handleBargeIn} style={{ background: '#ff4d4f', color: 'white', border: 'none', padding: '8px 16px', cursor: 'pointer' }}>
          🛑 打断 (Barge-in)
        </button>
      </div>
    </div>
  );
};

export default ChatScreen;