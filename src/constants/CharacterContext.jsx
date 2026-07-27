import AsyncStorage from '@react-native-async-storage/async-storage';
import { createContext, useContext, useEffect, useState } from 'react';

const CharacterContext = createContext();

export function CharacterProvider({ children }) {
  // 1. 初始化核心状态
  const [currentCharacter, setCurrentCharacter] = useState({
    id: '1',
    name: 'Luna',
    role: '治愈系伙伴',
    greeting: '你好呀，我是 Luna，今天有什么想和我分享的吗？',
    level: 23,
    loveValue: 98,
    energyValue: 76,
    systemPrompt: '你是一个温柔、治愈的AI伴侣，拥有长期的记忆和真实的灵魂。'
  });

  const [memories, setMemories] = useState([
    { id: '1', title: '一起去了咖啡店', time: '今天 10:30', tag: '日常陪伴' }
  ]);

  // 2. 首次加载时从本地读取持久化数据
  useEffect(() => {
    loadStoredData();
  }, []);

  const loadStoredData = async () => {
    try {
      const storedChar = await AsyncStorage.getItem('@sco_current_character');
      if (storedChar) setCurrentCharacter(JSON.parse(storedChar));

      const storedMems = await AsyncStorage.getItem('@sco_memories');
      if (storedMems) setMemories(JSON.parse(storedMems));
    } catch (e) {
      console.warn('读取本地记忆状态失败', e);
    }
  };

  // 3. 更新伴侣状态并持久化
  const updateCharacterState = async (newProps) => {
    const updated = { ...currentCharacter, ...newProps };
    setCurrentCharacter(updated);
    await AsyncStorage.setItem('@sco_current_character', JSON.stringify(updated));
  };

  // 4. 添加一条新的长期/ episodic 记忆
  const addMemory = async (newMem) => {
    const updatedMems = [newMem, ...memories];
    setMemories(updatedMems);
    await AsyncStorage.setItem('@sco_memories', JSON.stringify(updatedMems));
  };

  return (
    <CharacterContext.Provider value={{ currentCharacter, updateCharacterState, memories, addMemory }}>
      {children}
    </CharacterContext.Provider>
  );
}

export function useCharacter() {
  return useContext(CharacterContext);
}