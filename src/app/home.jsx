import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function HomeScreen() {
  const router = useRouter();

  // 底部 5 个核心 Tab 导航配置
  const tabs = [
    { name: '首页', route: '/home', icon: 'home' }, // 当前高亮
    { name: '创建角色', route: '/character', icon: 'people-outline' },
    { name: '聊天', route: '/chat', icon: 'chatbubble-outline' },
    { name: '世界', route: '/world', icon: 'globe-outline' },
    { name: '我的', route: '/me', icon: 'person-outline' },
  ];

  return (
    <View style={styles.container}>
      {/* 首页内容滚动区域 */}
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        
        {/* 顶部天气与定位 */}
        <View style={styles.topBar}>
          <View style={styles.weatherRow}>
            <Ionicons name="sunny-outline" size={16} color="#D4AF37" style={{ marginRight: 4 }} />
            <Text style={styles.weatherText}>24°C 晴朗 · 上海市</Text>
          </View>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="compass-outline" size={18} color="#8C7A6B" />
          </TouchableOpacity>
        </View>

        {/* 3D 模型渲染位卡片 */}
        <View style={styles.renderCard}>
          <View style={styles.renderCircle}>
            <Ionicons name="sparkles" size={32} color="#D4AF37" />
            <Text style={styles.renderText}>Luna 3D 模型渲染位</Text>
          </View>
        </View>

        {/* 问候与状态卡片 */}
        <View style={styles.infoCard}>
          <Text style={styles.greetingTitle}>早上好，Luna</Text>
          <Text style={styles.greetingSub}>今天也要一起创造美好的回忆哦~</Text>
          
          <View style={styles.statusStatsRow}>
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
        </View>

        {/* 功能宫格区域 */}
        <Text style={styles.sectionTitle}>今天想和你在一起...</Text>
        <View style={styles.gridContainer}>
          {/* 1. 点击 NFC 连接跳转至 /nfc 模块 */}
          <TouchableOpacity style={styles.gridItem} onPress={() => router.push('/nfc')}>
            <View style={styles.gridIconCircle}>
              <Ionicons name="radio-outline" size={20} color="#C29B75" />
            </View>
            <Text style={styles.gridText}>NFC连接</Text>
          </TouchableOpacity>

          {/* 2. 点击角色创建跳转至 /character 模块 */}
          <TouchableOpacity style={styles.gridItem} onPress={() => router.push('/character')}>
            <View style={styles.gridIconCircle}>
              <Ionicons name="person-add-outline" size={20} color="#C29B75" />
            </View>
            <Text style={styles.gridText}>角色创建</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.gridItem} onPress={() => router.push('/wallet')}>
            <View style={styles.gridIconCircle}>
              <Ionicons name="gift-outline" size={20} color="#C29B75" />
            </View>
            <Text style={styles.gridText}>商城礼物</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.gridItem}>
            <View style={styles.gridIconCircle}>
              <Ionicons name="shield-checkmark-outline" size={20} color="#C29B75" />
            </View>
            <Text style={styles.gridText}>签到中心</Text>
          </TouchableOpacity>
        </View>

        {/* 最新记忆动态 */}
        <Text style={styles.sectionTitle}>最新记忆</Text>
        <View style={styles.memoryCard}>
          <View style={{ flex: 1 }}>
            <Text style={styles.memoryTitle}>一起去了咖啡店</Text>
            <Text style={styles.memoryTime}>今天 10:30</Text>
          </View>
          <View style={styles.memoryImgBox}>
            <Ionicons name="image-outline" size={20} color="#C29B75" />
          </View>
        </View>

      </ScrollView>

      {/* 底部固定 5 个核心 Tab 导航 */}
      <View style={styles.tabContainer}>
        {tabs.map((tab, index) => {
          const isActive = tab.route === '/home';
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FBF7F0',
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 45,
    paddingBottom: 90, // 底部留白，防止被导航栏遮挡
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  weatherRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#F0E6DC',
  },
  weatherText: {
    fontSize: 12,
    color: '#5C4033',
    fontWeight: '500',
  },
  iconButton: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#F0E6DC',
  },
  renderCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 24,
    alignItems: 'center',
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#F0E6DC',
  },
  renderCircle: {
    width: 140,
    height: 140,
    borderRadius: 70,
    backgroundColor: '#FAF3EB',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#EFE3D5',
  },
  renderText: {
    fontSize: 11,
    color: '#8C7A6B',
    marginTop: 6,
  },
  infoCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#F0E6DC',
  },
  greetingTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#5C4033',
    marginBottom: 4,
  },
  greetingSub: {
    fontSize: 12,
    color: '#8C7A6B',
    marginBottom: 16,
  },
  statusStatsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#F5ECE3',
    paddingTop: 12,
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statLabel: {
    fontSize: 12,
    color: '#5C4033',
    fontWeight: '600',
    marginLeft: 4,
  },
  statDivider: {
    width: 1,
    height: 12,
    backgroundColor: '#EFE3D5',
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: '#5C4033',
    marginBottom: 12,
  },
  gridContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  gridItem: {
    width: '23%',
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    paddingVertical: 14,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#F0E6DC',
  },
  gridIconCircle: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: '#FAF3EB',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 6,
    borderWidth: 1,
    borderColor: '#EFE3D5',
  },
  gridText: {
    fontSize: 11,
    color: '#5C4033',
    fontWeight: '500',
  },
  memoryCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#F0E6DC',
  },
  memoryTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#5C4033',
    marginBottom: 4,
  },
  memoryTime: {
    fontSize: 11,
    color: '#A89F91',
  },
  memoryImgBox: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: '#FAF3EB',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#EFE3D5',
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