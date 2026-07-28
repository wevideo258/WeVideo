import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        
        {/* ==================== 1. 沉浸式顶部头图区块 ==================== */}
        <ImageBackground 
          source={require('../luna_hero.png')}// 引入本地图片
          style={styles.heroContainer}
          imageStyle={styles.heroImageStyle}
        >
          {/* 顶栏：天气与罗盘 */}
          <View style={styles.heroTopBar}>
            <View style={styles.weatherBadge}>
              <Ionicons name="sunny-outline" size={16} color="#5C4033" style={{ marginRight: 4 }} />
              <Text style={styles.weatherText}>24°C 晴朗 · 上海市</Text>
            </View>
            <TouchableOpacity style={styles.iconButton}>
              <Ionicons name="compass-outline" size={18} color="#5C4033" />
            </TouchableOpacity>
          </View>

          {/* 中间留空，让背景图的角色完整展示 */}
          <View style={{ flex: 1 }} />

          {/* 底部浮动问候气泡 */}
          <View style={styles.greetingCard}>
            <Text style={styles.greetingTitle}>早上好，Luna</Text>
            <Text style={styles.greetingSub}>今天也要一起创造美好的回忆哦~</Text>
          </View>
        </ImageBackground>

        {/* ==================== 2. 数据状态栏 (Lv.23 等) ==================== */}
        <View style={styles.statsBar}>
          <View style={styles.statItem}>
            <Ionicons name="flash-outline" size={14} color="#C29B75" />
            <Text style={styles.statLabel}>Lv.23</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statItem}>
            <Ionicons name="heart-outline" size={14} color="#C29B75" />
            <Text style={styles.statLabel}>82%</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statItem}>
            <Ionicons name="battery-charging-outline" size={14} color="#C29B75" />
            <Text style={styles.statLabel}>76%</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statItem}>
            <Ionicons name="pulse-outline" size={14} color="#C29B75" />
            <Text style={styles.statLabel}>76%</Text>
          </View>
        </View>

        {/* ==================== 3. 功能快捷入口 ==================== */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionHeaderTitle}>今天想和你一起...</Text>
          <View style={styles.menuGrid}>
            <TouchableOpacity style={styles.menuItem} activeOpacity={0.8}>
              <Ionicons name="scan-outline" size={24} color="#C29B75" />
              <Text style={styles.menuText}>NFC连接</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem} activeOpacity={0.8} onPress={() => router.push('/character')}>
              <Ionicons name="person-add-outline" size={24} color="#C29B75" />
              <Text style={styles.menuText}>角色创建</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem} activeOpacity={0.8}>
              <Ionicons name="gift-outline" size={24} color="#C29B75" />
              <Text style={styles.menuText}>商城礼物</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem} activeOpacity={0.8}>
              <Ionicons name="shield-checkmark-outline" size={24} color="#C29B75" />
              <Text style={styles.menuText}>签到中心</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* ==================== 4. 最新记忆区块 ==================== */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionHeaderTitle}>最新记忆</Text>
          <View style={styles.memoryCard}>
            <View style={{ flex: 1 }}>
              <Text style={styles.memoryTitle}>一起去了咖啡店</Text>
              <Text style={styles.memoryTime}>今天 10:30</Text>
            </View>
            <View style={styles.memoryIconBox}>
              <Ionicons name="image-outline" size={20} color="#C29B75" />
            </View>
          </View>
        </View>

      </ScrollView>

      {/* 底部 5 Tab 导航栏组件（保持你原有的即可） */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FBF7F0',
  },
  scrollContent: {
    paddingBottom: 100,
  },
  heroContainer: {
    width: '100%',
    height: 460, // 高度可以根据图片比例自由调整（例如 440-480 之间）
    paddingTop: 45,
    paddingHorizontal: 16,
    justifyContent: 'space-between',
  },
  heroImageStyle: {
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    resizeMode: 'cover', // 让图片等比例平铺填满容器
  },
  heroTopBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  weatherBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.75)',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 14,
  },
  weatherText: {
    fontSize: 12,
    color: '#5C4033',
    fontWeight: '600',
  },
  iconButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.75)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  greetingCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
    borderRadius: 16,
    padding: 14,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.6)',
  },
  greetingTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: '#5C4033',
    marginBottom: 4,
  },
  greetingSub: {
    fontSize: 12,
    color: '#8C7A6B',
  },
  statsBar: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    marginHorizontal: 16,
    marginTop: -16, // 让状态栏卡片轻微上浮，压在背景图下方，增强层次感
    borderRadius: 16,
    paddingVertical: 12,
    paddingHorizontal: 16,
    justifyContent: 'space-around',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#F0E6DC',
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statLabel: {
    fontSize: 12,
    fontWeight: '600',
    color: '#5C4033',
    marginLeft: 4,
  },
  statDivider: {
    width: 1,
    height: 12,
    backgroundColor: '#EFE3D5',
  },
  sectionContainer: {
    marginTop: 20,
    paddingHorizontal: 16,
  },
  sectionHeaderTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#5C4033',
    marginBottom: 10,
  },
  menuGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: '#F0E6DC',
  },
  menuItem: {
    alignItems: 'center',
    flex: 1,
  },
  menuText: {
    fontSize: 12,
    color: '#5C4033',
    marginTop: 6,
  },
  memoryCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    padding: 14,
    borderWidth: 1,
    borderColor: '#F0E6DC',
  },
  memoryTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#5C4033',
  },
  memoryTime: {
    fontSize: 11,
    color: '#A89F91',
    marginTop: 2,
  },
  memoryIconBox: {
    width: 36,
    height: 36,
    borderRadius: 8,
    backgroundColor: '#FAF3EB',
    alignItems: 'center',
    justifyContent: 'center',
  },
});