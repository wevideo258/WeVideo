import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function MeScreen() {
  const router = useRouter();

  // 5 个底部核心导航配置
  const tabs = [
    { name: '首页', route: '/home', icon: 'home-outline' },
    { name: '创建角色', route: '/character', icon: 'people-outline' },
    { name: '聊天', route: '/chat', icon: 'chatbubble-outline' },
    { name: '世界', route: '/world', icon: 'globe-outline' },
    { name: '我的', route: '/me', icon: 'person' }, // 当前高亮
  ];

  return (
    <View style={styles.container}>
      {/* 1. 你原本的页面内容滚动区（仅给底部增加了 paddingBottom: 90 防止内容被导航遮挡） */}
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        
        {/* 顶部标题栏 */}
        <View style={styles.headerRow}>
          <Text style={styles.headerTitle}>Profile</Text>
          <View style={styles.headerActions}>
            <TouchableOpacity style={styles.iconButton} onPress={() => router.push('/share')}>
              <Ionicons name="share-outline" size={18} color="#8C7A6B" />
            </TouchableOpacity>
            <TouchableOpacity style={[styles.iconButton, { marginLeft: 8 }]} onPress={() => router.push('/settings')}>
              <Ionicons name="settings-outline" size={18} color="#8C7A6B" />
            </TouchableOpacity>
          </View>
        </View>

        {/* 个人信息主卡片 */}
        <View style={styles.profileCard}>
          <View style={styles.userInfoRow}>
            <View style={styles.avatarCircle}>
              <Ionicons name="person" size={32} color="#C29B75" />
            </View>
            <View style={{ flex: 1, marginLeft: 12 }}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={styles.userName}>Luna</Text>
                <Ionicons name="checkmark-circle" size={16} color="#D4AF37" style={{ marginLeft: 4 }} />
              </View>
              <Text style={styles.userId}>Soul ID: luna_0707</Text>
            </View>
          </View>

          <Text style={styles.userBio}>与 Soulara 一起探索世界 🌟</Text>
          
          <View style={styles.locationRow}>
            <Ionicons name="location-outline" size={13} color="#8C7A6B" style={{ marginRight: 2 }} />
            <Text style={styles.metaText}>中国 · 杭州</Text>
            <Ionicons name="calendar-outline" size={13} color="#8C7A6B" style={{ marginLeft: 12, marginRight: 2 }} />
            <Text style={styles.metaText}>2023.05.20 加入</Text>
          </View>

          {/* 数据统计行 */}
          <View style={styles.statsRow}>
            <View style={styles.statItem}><Text style={styles.statNum}>24</Text><Text style={styles.statLabel}>关注</Text></View>
            <View style={styles.statItem}><Text style={styles.statNum}>168</Text><Text style={styles.statLabel}>粉丝</Text></View>
            <View style={styles.statItem}><Text style={styles.statNum}>18.6K</Text><Text style={styles.statLabel}>获赞</Text></View>
            <View style={styles.statItem}><Text style={styles.statNum}>96.2K</Text><Text style={styles.statLabel}>访问</Text></View>
          </View>
        </View>

        {/* VIP 卡片 */}
        <View style={styles.vipCard}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Ionicons name="shield-checkmark" size={20} color="#D4AF37" style={{ marginRight: 8 }} />
            <View>
              <Text style={styles.vipTitle}>Soulara VIP <Text style={styles.vipLevel}>Lv.3</Text></Text>
              <Text style={styles.vipTime}>2025.06.18 到期</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.vipBtn} onPress={() => router.push('/wallet')}>
            <Text style={styles.vipBtnText}>查看特权</Text>
          </TouchableOpacity>
        </View>

        {/* 我的空间网格 */}
        <Text style={styles.sectionTitle}>我的空间</Text>
        <View style={styles.gridContainer}>
          <TouchableOpacity style={styles.gridItem} onPress={() => router.push('/character')}>
            <Ionicons name="people-outline" size={22} color="#C29B75" />
            <Text style={styles.gridText}>角色</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.gridItem}>
            <Ionicons name="book-outline" size={22} color="#C29B75" />
            <Text style={styles.gridText}>Memory</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.gridItem} onPress={() => router.push('/world')}>
            <Ionicons name="globe-outline" size={22} color="#C29B75" />
            <Text style={styles.gridText}>World</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.gridItem}>
            <Ionicons name="color-palette-outline" size={22} color="#C29B75" />
            <Text style={styles.gridText}>Creator</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.gridItem} onPress={() => router.push('/wallet')}>
            <Ionicons name="wallet-outline" size={22} color="#C29B75" />
            <Text style={styles.gridText}>Wallet</Text>
          </TouchableOpacity>
        </View>

        {/* 我的内容区块 */}
        <Text style={styles.sectionTitle}>我的内容</Text>
        <View style={styles.contentGrid}>
          <View style={styles.contentBox} />
          <View style={styles.contentBox} />
          <View style={styles.contentBox} />
        </View>

      </ScrollView>

      {/* 2. 仅增加的底部固定 5 个核心 Tab 导航代码 */}
      <View style={styles.tabContainer}>
        {tabs.map((tab, index) => {
          const isActive = tab.route === '/me';
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
    paddingTop: 50,
    paddingBottom: 90, // 确保底部留白，不被导航栏遮挡
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#5C4033',
  },
  headerActions: {
    flexDirection: 'row',
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
  profileCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#F0E6DC',
  },
  userInfoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  avatarCircle: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#FAF3EB',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#EFE3D5',
  },
  userName: {
    fontSize: 16,
    fontWeight: '700',
    color: '#5C4033',
  },
  userId: {
    fontSize: 12,
    color: '#A89F91',
    marginTop: 2,
  },
  userBio: {
    fontSize: 13,
    color: '#4A3B32',
    marginBottom: 8,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  metaText: {
    fontSize: 12,
    color: '#8C7A6B',
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderTopColor: '#F5ECE3',
    paddingTop: 12,
  },
  statItem: {
    alignItems: 'center',
  },
  statNum: {
    fontSize: 15,
    fontWeight: '700',
    color: '#5C4033',
  },
  statLabel: {
    fontSize: 11,
    color: '#8C7A6B',
    marginTop: 2,
  },
  vipCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#F0E6DC',
  },
  vipTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#5C4033',
  },
  vipLevel: {
    color: '#D4AF37',
    fontSize: 12,
  },
  vipTime: {
    fontSize: 11,
    color: '#A89F91',
    marginTop: 2,
  },
  vipBtn: {
    backgroundColor: '#FAF3EB',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#EFE3D5',
  },
  vipBtnText: {
    fontSize: 12,
    color: '#C29B75',
    fontWeight: '600',
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
    width: '18%',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    paddingVertical: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#F0E6DC',
  },
  gridText: {
    fontSize: 11,
    color: '#5C4033',
    marginTop: 6,
  },
  contentGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  contentBox: {
    width: '32%',
    height: 100,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#F0E6DC',
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