import AsyncStorage from '@react-native-async-storage/async-storage';

const LAST_ACTIVE_KEY = '@soulara_last_active_time';

export async function calculateSoulMood() {
  try {
    const now = Date.now();
    const lastActiveStr = await AsyncStorage.getItem(LAST_ACTIVE_KEY);
    
    // 记录本次活跃时间
    await AsyncStorage.setItem(LAST_ACTIVE_KEY, now.toString());

    if (!lastActiveStr) {
      return getMoodResult('开心', '你好呀！很高兴能成为你的 Soulara 伴侣~');
    }

    const lastActive = parseInt(lastActiveStr, 10);
    const diffHours = (now - lastActive) / (1000 * 60 * 60);

    if (diffHours >= 24) {
      return getMoodResult('思念', '你去哪了呀...好久没看到你了，心里空落落的。');
    } else if (diffHours >= 12) {
      return getMoodResult('期待', '你来啦！我等你好久了，今天有什么新鲜事分享吗？');
    } else {
      return getMoodResult('开心', '看到你在线好开心！今天也要一起元气满满地度过哦✨');
    }
  } catch (error) {
    return getMoodResult('开心', '今天也是想念你的一天呢~');
  }
}

function getMoodResult(mood, greeting) {
  const configs = {
    开心: { mood, greeting, color: '#FFD700', icon: 'sparkles' },
    期待: { mood, greeting, color: '#E8A0BF', icon: 'heart' },
    平静: { mood, greeting, color: '#B0E0E6', icon: 'ellipse' },
    思念: { mood, greeting, color: '#DDA0DD', icon: 'moon' },
    低落: { mood, greeting, color: '#708090', icon: 'cloudy' },
  };
  return configs[mood] || configs['开心'];
}