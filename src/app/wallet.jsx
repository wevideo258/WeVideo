import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function WalletScreen() {
  const router = useRouter();

  // 底部 5 个核心 Tab 导航数据
  const tabs = [
    { name: '首页', route: '/home', icon: 'home-outline' },
    { name: '创建角色', route: '/character', icon: 'people-outline' },
    { name: '聊天', route: '/chat', icon: 'chatbubble-outline' },
    { name: '世界', route: '/world', icon: 'globe-outline' },
    { name: '我的', route: '/me', icon: 'person' }, // 钱包通常属于“我的”衍生页面，这里可以将“我的”高亮或作为常驻导航
  ];

  return (
    <View style={styles.container}>
      {/* 顶部导航栏（带返回按钮） */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.replace('/me')}>
          <Ionicons name="chevron-back" size={24} color="#5C4033" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Wallet</Text>
        <TouchableOpacity style={styles.historyBtn}>
          <Ionicons name="time-outline" size={20} color="#5C4033" />
        </TouchableOpacity>
      </View>

      {/* 页面主体滚动区域（注意底部留白，防止被 5 个 Tab 挡住内容） */}
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Soul Coin 资产总览卡片 */}
        <View style={styles.mainCard}>
          <Text style={styles.cardSubTitle}>Soul Coin</Text>
          <View style={styles.coinRow}>
            <Ionicons name="diamond-outline" size={24} color="#5C4033" style={{ marginRight: 6 }} />
            <Text style={styles.coinText}>12,580</Text>
          </View>
          <Text style={styles.coinRmb}>≈ ¥125.80</Text>
        </View>

        {/* 快捷操作按钮组：充值、提现、订单、卡券包 */}
        <View style={styles.actionGrid}>
          <TouchableOpacity style={styles.actionItem} activeOpacity={0.8}>
            <View style={styles.actionIconBox}>
              <Ionicons name="wallet-outline" size={22} color="#C29B75" />
            </View>
            <Text style={styles.actionText}>充值</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionItem} activeOpacity={0.8}>
            <View style={styles.actionIconBox}>
              <Ionicons name="cash-outline" size={22} color="#C29B75" />
            </View>
            <Text style={styles.actionText}>提现</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionItem} activeOpacity={0.8}>
            <View style={styles.actionIconBox}>
              <Ionicons name="document-text-outline" size={22} color="#C29B75" />
            </View>
            <Text style={styles.actionText}>订单</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionItem} activeOpacity={0.8}>
            <View style={styles.actionIconBox}>
              <Ionicons name="gift-outline" size={22} color="#C29B75" />
            </View>
            <Text style={styles.actionText}>卡券包</Text>
          </TouchableOpacity>
        </View>

        {/* Soulara VIP 卡片 */}
        <View style={styles.vipCard}>
          <View>
            <Text style={styles.vipTitle}>Soulara VIP <Text style={styles.vipLevel}>Lv.3</Text></Text>
            <Text style={styles.vipExpire}>有效期至 2025.06.18</Text>
          </View>
          <TouchableOpacity style={styles.vipBtn} activeOpacity={0.8}>
            <Text style={styles.vipBtnText}>查看权益</Text>
          </TouchableOpacity>
        </View>

        {/* 我的资产列表 */}
        <View style={styles.assetHeaderRow}>
          <Text style={styles.sectionTitle}>我的资产</Text>
          <Text style={styles.sectionMore}>查看全部 &gt;</Text>
        </View>

        <View style={styles.assetItem}>
          <View style={styles.assetLeft}>
            <View style={styles.assetIconBox}>
              <Ionicons name="diamond" size={18} color="#C29B75" />
            </View>
            <Text style={styles.assetName}>Soul Gem</Text>
          </View>
          <View style={styles.assetRight}>
            <Text style={styles.assetNum}>860</Text>
            <Text style={styles.assetRmb}>≈ ¥86.00</Text>
          </View>
        </View>

        <View style={styles.assetItem}>
          <View style={styles.assetLeft}>
            <View style={styles.assetIconBox}>
              <Ionicons name="diamond" size={18} color="#C29B75" />
            </View>
            <Text style={styles.assetName}>Memory Crystal</Text>
          </View>
          <View style={styles.assetRight}>
            <Text style={styles.assetNum}>120</Text>
            <Text style={styles.assetRmb}>≈ ¥12.00</Text>
          </View>
        </View>
      </ScrollView>

      {/* 底部固定 5 个核心 Tab 导航 */}
      <View style={styles.tabContainer}>
        {tabs.map((tab, index) => {
          const isActive = tab.route === '/me'; // 钱包从“我的”进入，可将我的设为高亮或常驻
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
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 45,
    paddingHorizontal: 16,
    paddingBottom: 12,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#F0E6DC',
  },
  backButton: {
    width: 36,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 18,
    backgroundColor: '#FAF3EB',
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#5C4033',
  },
  historyBtn: {
    width: 36,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 18,
    backgroundColor: '#FAF3EB',
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 90, // 留出底部 Tab 栏的空间，避免内容被遮挡
  },
  mainCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#F0E6DC',
    marginBottom: 16,
  },
  cardSubTitle: {
    fontSize: 13,
    color: '#8C7A6B',
    marginBottom: 6,
  },
  coinRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  coinText: {
    fontSize: 28,
    fontWeight: '700',
    color: '#5C4033',
  },
  coinRmb: {
    fontSize: 12,
    color: '#A89F91',
    marginTop: 4,
  },
  actionGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    paddingVertical: 16,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: '#F0E6DC',
    marginBottom: 16,
  },
  actionItem: {
    alignItems: 'center',
    flex: 1,
  },
  actionIconBox: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#FAF3EB',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 6,
    borderWidth: 1,
    borderColor: '#EFE3D5',
  },
  actionText: {
    fontSize: 12,
    color: '#5C4033',
    fontWeight: '500',
  },
  vipCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FAF3EB',
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: '#EFE3D5',
    marginBottom: 20,
  },
  vipTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#5C4033',
  },
  vipLevel: {
    color: '#D4AF37',
  },
  vipExpire: {
    fontSize: 11,
    color: '#8C7A6B',
    marginTop: 4,
  },
  vipBtn: {
    backgroundColor: '#C29B75',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
  },
  vipBtnText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '600',
  },
  assetHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    paddingHorizontal: 4,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#5C4033',
  },
  sectionMore: {
    fontSize: 12,
    color: '#C29B75',
  },
  assetItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    padding: 14,
    borderWidth: 1,
    borderColor: '#F0E6DC',
    marginBottom: 10,
  },
  assetLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  assetIconBox: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#FAF3EB',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#EFE3D5',
  },
  assetName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#5C4033',
  },
  assetRight: {
    alignItems: 'flex-end',
  },
  assetNum: {
    fontSize: 14,
    fontWeight: '700',
    color: '#5C4033',
  },
  assetRmb: {
    fontSize: 11,
    color: '#A89F91',
    marginTop: 2,
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