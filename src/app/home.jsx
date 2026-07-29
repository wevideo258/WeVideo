import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import CustomTabBar from '../components/CustomTabBar';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* 整体背景图铺满 */}
      <ImageBackground
        source={require('../images/luna_hero.png')}
        style={styles.heroBackground}
        imageStyle={styles.heroImageStyle}
      >
        <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
          
          {/* ============================== 1. 顶部状态栏（天气 & 罗盘） ============================== */}
          <View style={styles.heroTopBar}>
            <View style={styles.weatherBadge}>
              <Ionicons name="sunny-outline" size={16} color="#5C4033" style={{ marginRight: 4 }} />
              <Text style={styles.weatherText}>24°C 晴朗 · 上海市</Text>
            </View>
            <TouchableOpacity style={styles.iconButton} onPress={() => router.push('/world')}>
              <Ionicons name="compass-outline" size={18} color="#5C4033" />
            </TouchableOpacity>
          </View>

          {/* ============================== 2. 悬浮在图片之上的毛玻璃卡片（对应图二） ============================== */}
          <View style={styles.floatingCardArea}>
            
            {/* 问候小卡片 */}
            <View style={styles.glassCard}>
              <Text style={styles.greetingTitle}>早上好，Luna</Text>
              <Text style={styles.greetingSubtitle}>今天也要一起创造美好的回忆哦~</Text>
            </View>

            {/* 属性状态悬浮横条 */}
            <View style={styles.glassStatsRow}>
              <View style={styles.statItem}>
                <Ionicons name="flash-outline" size={15} color="#D4A373" />
                <Text style={styles.statText}>Lv.23</Text>
              </View>
              <View style={styles.statDivider} />
              <View style={styles.statItem}>
                <Ionicons name="heart-outline" size={15} color="#E07A5F" />
                <Text style={styles.statText}>82%</Text>
              </View>
              <View style={styles.statDivider} />
              <View style={styles.statItem}>
                <Ionicons name="wallet-outline" size={15} color="#81B29A" />
                <Text style={styles.statText}>76%</Text>
              </View>
              <View style={styles.statDivider} />
              <View style={styles.statItem}>
                <Ionicons name="pulse-outline" size={15} color="#F4A261" />
                <Text style={styles.statText}>76%</Text>
              </View>
            </View>

          </View>

          {/* ============================== 3. 下半部分常规内容（快捷菜单 & 最新记忆） ============================== */}
          <View style={styles.contentBody}>
            
            {/* 快捷菜单区块 */}
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>今天想和你在一起...</Text>
              <View style={styles.menuGrid}>
                <TouchableOpacity style={styles.menuItem} onPress={() => router.push('/nfc')}>
                  <View style={styles.menuIconBox}>
                    <Ionicons name="radio-outline" size={22} color="#D4A373" />
                  </View>
                  <Text style={styles.menuText}>NFC连接</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.menuItem} onPress={() => router.push('/character')}>
                  <View style={styles.menuIconBox}>
                    <Ionicons name="person-add-outline" size={22} color="#D4A373" />
                  </View>
                  <Text style={styles.menuText}>角色创建</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.menuItem} onPress={() => router.push('/marketplace')}>
                  <View style={styles.menuIconBox}>
                    <Ionicons name="gift-outline" size={22} color="#D4A373" />
                  </View>
                  <Text style={styles.menuText}>商城礼物</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.menuItem} onPress={() => router.push('/wallet')}>
                  <View style={styles.menuIconBox}>
                    <Ionicons name="shield-checkmark-outline" size={22} color="#D4A373" />
                  </View>
                  <Text style={styles.menuText}>签到中心</Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* 最新记忆区块 */}
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>最新记忆</Text>
              {/* 已经修正为 /chatscreen，防止黑屏 */}
              <TouchableOpacity style={styles.memoryCard} onPress={() => router.push('/chatscreen')}>
                <View style={styles.memoryContent}>
                  <Text style={styles.memoryTitle}>一起去了咖啡店</Text>
                  <Text style={styles.memoryTime}>Today 10:30</Text>
                </View>
                <View style={styles.memoryIconBox}>
                  <Ionicons name="image-outline" size={20} color="#A8A29E" />
                </View>
              </TouchableOpacity>
            </View>

          </View>

        </ScrollView>
      </ImageBackground>

      {/* 底部固定的自定义导航栏 */}
      <CustomTabBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDFBF7',
  },
  heroBackground: {
    flex: 1,
    width: '100%',
  },
  heroImageStyle: {
    resizeMode: 'cover',
    height: 520, // 保证大背景图能完美覆盖上半部分
  },
  scrollContent: {
    paddingBottom: 90, // 留出底部 Tab 栏空间
  },
  heroTopBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 45,
  },
  weatherBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  weatherText: {
    fontSize: 13,
    color: '#5C4033',
    fontWeight: '500',
  },
  iconButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  floatingCardArea: {
    paddingHorizontal: 16,
    marginTop: 180, // 将悬浮卡片向下推，完美压在角色胸前/腰部位置（对应图二）
  },
  glassCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.90)', // 半透明毛玻璃质感
    borderRadius: 20,
    padding: 16,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  greetingTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2C221E',
    marginBottom: 4,
  },
  greetingSubtitle: {
    fontSize: 12,
    color: '#8C7A70',
  },
  glassStatsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.90)', // 半透明毛玻璃质感
    borderRadius: 16,
    paddingVertical: 12,
    paddingHorizontal: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statText: {
    marginLeft: 4,
    fontSize: 12,
    fontWeight: '600',
    color: '#5C4033',
  },
  statDivider: {
    width: 1,
    height: 14,
    backgroundColor: '#E6DCD5',
  },
  contentBody: {
    backgroundColor: '#FDFBF7', // 下半部分转为柔和背景色
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    marginTop: 20,
    paddingTop: 10,
    minHeight: 400,
  },
  sectionContainer: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2C221E',
    marginBottom: 12,
  },
  menuGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  menuItem: {
    alignItems: 'center',
    width: '22%',
  },
  menuIconBox: {
    width: 56,
    height: 56,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  menuText: {
    fontSize: 12,
    color: '#5C4033',
    fontWeight: '500',
  },
  memoryCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2,
  },
  memoryContent: {
    flex: 1,
  },
  memoryTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#2C221E',
    marginBottom: 4,
  },
  memoryTime: {
    fontSize: 12,
    color: '#A8A29E',
  },
  memoryIconBox: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: '#F7F1EC',
    justifyContent: 'center',
    alignItems: 'center',
  },
});