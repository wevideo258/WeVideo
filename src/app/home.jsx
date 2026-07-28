import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        
        {/* ============================== 1. 沉浸式顶部头图区块 ============================== */}
        <ImageBackground
          source={require('../images/luna_hero.png')} // 准确对应 src/images/luna_hero.png
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
        </ImageBackground>

        {/* ============================== 2. 问候与状态白卡片区块 ============================== */}
        <View style={styles.cardContainer}>
          <View style={styles.greetingHeader}>
            <View>
              <Text style={styles.greetingTitle}>早上好，Luna</Text>
              <Text style={styles.greetingSubtitle}>今天也要一起创造美好的回忆哦~</Text>
            </View>
          </View>

          <View style={styles.divider} />

          {/* 属性状态栏 */}
          <View style={styles.statsRow}>
            <View style={styles.statItem}>
              <Ionicons name="flash-outline" size={16} color="#D4A373" />
              <Text style={styles.statText}>Lv.23</Text>
            </View>
            <View style={styles.statDivider} />
            <View style={styles.statItem}>
              <Ionicons name="heart-outline" size={16} color="#E07A5F" />
              <Text style={styles.statText}>82%</Text>
            </View>
            <View style={styles.statDivider} />
            <View style={styles.statItem}>
              <Ionicons name="wallet-outline" size={16} color="#81B29A" />
              <Text style={styles.statText}>76%</Text>
            </View>
            <View style={styles.statDivider} />
            <View style={styles.statItem}>
              <Ionicons name="pulse-outline" size={16} color="#F4A261" />
              <Text style={styles.statText}>76%</Text>
            </View>
          </View>
        </View>

        {/* ============================== 3. 快捷菜单区块 ============================== */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>今天想和你在一起...</Text>
          <View style={styles.menuGrid}>
            <TouchableOpacity style={styles.menuItem}>
              <View style={styles.menuIconBox}>
                <Ionicons name="radio-outline" size={22} color="#D4A373" />
              </View>
              <Text style={styles.menuText}>NFC连接</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.menuItem}>
              <View style={styles.menuIconBox}>
                <Ionicons name="person-add-outline" size={22} color="#D4A373" />
              </View>
              <Text style={styles.menuText}>角色创建</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.menuItem}>
              <View style={styles.menuIconBox}>
                <Ionicons name="gift-outline" size={22} color="#D4A373" />
              </View>
              <Text style={styles.menuText}>商城礼物</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.menuItem}>
              <View style={styles.menuIconBox}>
                <Ionicons name="shield-checkmark-outline" size={22} color="#D4A373" />
              </View>
              <Text style={styles.menuText}>签到中心</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* ============================== 4. 最新记忆区块 ============================== */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>最新记忆</Text>
          <TouchableOpacity style={styles.memoryCard}>
            <View style={styles.memoryContent}>
              <Text style={styles.memoryTitle}>一起去了咖啡店</Text>
              <Text style={styles.memoryTime}>今天 10:30</Text>
            </View>
            <View style={styles.memoryIconBox}>
              <Ionicons name="image-outline" size={20} color="#A8A29E" />
            </View>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDFBF7',
  },
  scrollContent: {
    paddingBottom: 40,
  },
  heroContainer: {
    width: '100%',
    height: 320,
    paddingHorizontal: 20,
    paddingTop: 40,
    justifyContent: 'space-between',
  },
  heroImageStyle: {
    resizeMode: 'cover',
  },
  heroTopBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
  cardContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    marginHorizontal: 16,
    marginTop: -30,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 4,
  },
  greetingHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  greetingTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2C221E',
    marginBottom: 4,
  },
  greetingSubtitle: {
    fontSize: 13,
    color: '#8C7A70',
  },
  divider: {
    height: 1,
    backgroundColor: '#F5EBE6',
    marginVertical: 16,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statText: {
    marginLeft: 6,
    fontSize: 13,
    fontWeight: '600',
    color: '#5C4033',
  },
  statDivider: {
    width: 1,
    height: 16,
    backgroundColor: '#E6DCD5',
  },
  sectionContainer: {
    paddingHorizontal: 20,
    marginTop: 24,
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
    backgroundColor: '#F7F1EC',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
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
    borderWidth: 1,
    borderColor: '#F2E8E1',
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