// src/components/CompanionHeader.jsx
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useCharacter } from '../context/CharacterContext';
import { evaluateEmotionContext } from '../engine/EmotionEngine';

export default function CompanionHeader() {
  const { currentCharacter } = useCharacter();
  const [emotionState, setEmotionState] = useState(null);

  useEffect(() => {
    // 每次加载或角色状态（如爱意值、等级）更新时，实时评估当前情绪
    const state = evaluateEmotionContext(currentCharacter);
    setEmotionState(state);
  }, [currentCharacter]);

  if (!emotionState) return null;

  return (
    <View style={styles.container}>
      {/* 情感阶段与徽章 */}
      <View style={styles.badgeContainer}>
        <Text style={styles.badgeText}>
          {emotionState.stage.badge} {emotionState.stage.title} (Lv.{currentCharacter.level})
        </Text>
        <Text style={styles.loveText}>❤️ {currentCharacter.loveValue}%</Text>
      </View>

      {/* 动态情绪问候语气泡 */}
      <View style={styles.bubbleContainer}>
        <Text style={styles.greetingText}>{emotionState.greeting}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    padding: 16, 
    backgroundColor: 'rgba(255,255,255,0.08)', 
    borderRadius: 16, 
    marginHorizontal: 16,
    marginVertical: 12,
    borderWidth: 1,
    borderColor: 'rgba(255,105,180,0.2)'
  },
  badgeContainer: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    marginBottom: 8,
    alignItems: 'center'
  },
  badgeText: { 
    color: '#FF69B4', 
    fontWeight: 'bold', 
    fontSize: 14 
  },
  loveText: { 
    color: '#FFB6C1', 
    fontSize: 14,
    fontWeight: '600'
  },
  bubbleContainer: { 
    backgroundColor: 'rgba(255,105,180,0.12)', 
    padding: 12, 
    borderRadius: 12 
  },
  greetingText: { 
    color: '#FFF', 
    fontSize: 15, 
    lineHeight: 22 
  }
});