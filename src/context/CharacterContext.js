import { createContext, useContext, useState } from 'react';

const CharacterContext = createContext();

// 预设的多角色数据库
export const charactersData = [
  { 
    id: '1', 
    name: 'Luna', 
    role: '治愈系伙伴', 
    desc: '温暖、倾听与陪伴你的每一天',
    greeting: '你好呀，我是 Luna，今天有什么想和我分享的吗？',
    systemPrompt: '你是一个治愈系、温柔的 AI 伴侣 Luna，陪伴用户度过温暖的每一天。',
    bgTheme: '#FDFBF7'
  },
  { 
    id: '2', 
    name: 'Mochi', 
    role: '元气少女', 
    desc: '充满活力与好奇心的冒险家',
    greeting: '嗨！我是 Mochi！今天也是充满元气的一天，快带我去探索新事物吧！',
    systemPrompt: '你是一个充满活力、乐观开朗的元气少女 AI 伴侣 Mochi。',
    bgTheme: '#FFFDF5'
  },
  { 
    id: '3', 
    name: 'Kuma', 
    role: '深沉学者', 
    desc: '睿智冷静，陪你思考人生哲学',
    greeting: '你好，我是 Kuma。静下心来，我们可以探讨一些有趣的哲学或技术问题。',
    systemPrompt: '你是一个睿智、冷静、深沉的学者型 AI 伴侣 Kuma。',
    bgTheme: '#F4F6F8'
  },
];

export function CharacterProvider({ children }) {
  const [currentCharacter, setCurrentCharacter] = useState(charactersData[0]);

  const switchCharacter = (id) => {
    const found = charactersData.find(item => item.id === id);
    if (found) {
      setCurrentCharacter(found);
    }
  };

  return (
    <CharacterContext.Provider value={{ currentCharacter, switchCharacter, charactersList: charactersData }}>
      {children}
    </CharacterContext.Provider>
  );
}

export const useCharacter = () => useContext(CharacterContext);