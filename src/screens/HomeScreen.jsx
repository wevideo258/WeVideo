import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import CompanionHeader from '../../src/components/CompanionHeader'; // 请根据实际路径调整导入
import { useCharacter } from '../../src/context/CharacterContext'; // 请根据实际路径调整导入

export default function HomeScreen() {
  const { currentCharacter, updateCharacterState } = useCharacter();

  // 模拟点击互动：每次点击可以为伴侣增加一点爱意值，用于直观测试情感引擎的动态变化
  const handleInteract = () => {
    const newLove = Math.min(100, currentCharacter.loveValue + 2);
    updateCharacterState({ loveValue: newLove });
  };

  return (
    <ScrollView style={styles.container}>
      {/* 1. 顶部 SCO 状态栏 / 标题 */}
      <View style={styles.headerBar}>
        <Text style={styles.osTitle}>SOULARA OS</Text>
        <Text style={styles.soulIdText}>SoulID: {currentCharacter.id || 'ACTIVE'}</Text>
      </View>

      {/* 2. 核心情感与情绪引擎驱动的伴侣卡片 */}
      <CompanionHeader />

      {/* 3. 互动测试区域（可用于演示爱意值和情感阶段的实时跃迁） */}
      <View style={styles.actionCard}>
        <Text style={styles.actionTitle}>数字生命交互控制台</Text>
        <Text style={styles.actionDesc}>
          当前伴侣：{currentCharacter.name} ({currentCharacter.role})
        </Text>
        
        <TouchableOpacity style={styles.button} onPress={handleInteract}>
          <Text style={styles.buttonText}>❤️ 与伴侣互动 (提升爱意值)</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F0F13', // SCO 深色科技风格背景
    paddingTop: 48,
  },
  headerBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 8,
  },
  osTitle: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '800',
    letterSpacing: 2,
  },
  soulIdText: {
    color: '#666',
    fontSize: 12,
    fontFamily: 'monospace',
  },
  actionCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.04)',
    marginHorizontal: 16,
    marginTop: 12,
    padding: 16,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.08)',
  },
  actionTitle: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  actionDesc: {
    color: '#A0A0A0',
    fontSize: 14,
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#FF69B4',
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 14,
  },
});