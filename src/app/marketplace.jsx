import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import CustomTabBar from '../components/CustomTabBar'; // 确保路径正确

export default function MarketplaceScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        
        {/* ============================== 1. 顶部标题栏 ============================== */}
        <View style={styles.headerBar}>
          <Text style={styles.headerTitle}>Marketplace</Text>
          <TouchableOpacity style={styles.cartButton}>
            <Ionicons name="cart-outline" size={20} color="#5C4033" />
          </TouchableOpacity>
        </View>

        {/* ============================== 2. 搜索框区块 ============================== */}
        <View style={styles.searchSection}>
          <View style={styles.searchBar}>
            <Ionicons name="search-outline" size={18} color="#A8A29E" style={{ marginRight: 8 }} />
            <TextInput 
              placeholder="搜索角色、配件、礼物..." 
              placeholderTextColor="#A8A29E"
              style={styles.searchInput}
            />
            <Ionicons name="scan-outline" size={18} color="#A8A29E" />
          </View>
        </View>

        {/* ============================== 3. 新品上线横幅卡片 ============================== */}
        <View style={styles.bannerContainer}>
          <View style={styles.bannerTextContent}>
            <Text style={styles.bannerTag}>新品上线</Text>
            <Text style={styles.bannerTitle}>Luna的探险套装</Text>
            <TouchableOpacity style={styles.bannerButton}>
              <Text style={styles.bannerButtonText}>立即查看</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.bannerIconBox}>
            <Ionicons name="sparkles-outline" size={28} color="#D4A373" />
          </View>
        </View>

        {/* ============================== 4. 分类快捷导航 ============================== */}
        <View style={styles.categoryGrid}>
          <TouchableOpacity style={styles.categoryItem}>
            <View style={styles.categoryIconBox}>
              <Ionicons name="person-outline" size={20} color="#D4A373" />
            </View>
            <Text style={styles.categoryText}>角色商城</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.categoryItem}>
            <View style={styles.categoryIconBox}>
              <Ionicons name="shirt-outline" size={20} color="#D4A373" />
            </View>
            <Text style={styles.categoryText}>配件商城</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.categoryItem}>
            <View style={styles.categoryIconBox}>
              <Ionicons name="gift-outline" size={20} color="#D4A373" />
            </View>
            <Text style={styles.categoryText}>礼物商城</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.categoryItem}>
            <View style={styles.categoryIconBox}>
              <Ionicons name="time-outline" size={20} color="#D4A373" />
            </View>
            <Text style={styles.categoryText}>限时活动</Text>
          </TouchableOpacity>
        </View>

        {/* ============================== 5. 精选推荐区块 ============================== */}
        <View style={styles.sectionContainer}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>精选推荐</Text>
            <TouchableOpacity>
              <Text style={styles.seeMoreText}>查看全部 &gt;</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.recommendGrid}>
            <TouchableOpacity style={styles.productCard}>
              <View style={styles.productImageBox}>
                <Ionicons name="image-outline" size={24} color="#A8A29E" />
              </View>
              <Text style={styles.productName}>星光摇篮套装</Text>
              <Text style={styles.productPrice}>💎 1,280</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.productCard}>
              <View style={styles.productImageBox}>
                <Ionicons name="image-outline" size={24} color="#A8A29E" />
              </View>
              <Text style={styles.productName}>旅行者背包</Text>
              <Text style={styles.productPrice}>💎 680</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.productCard}>
              <View style={styles.productImageBox}>
                <Ionicons name="image-outline" size={24} color="#A8A29E" />
              </View>
              <Text style={styles.productName}>樱花小屋场景</Text>
              <Text style={styles.productPrice}>💎 1,980</Text>
            </TouchableOpacity>
          </View>
        </View>

      </ScrollView>

      {/* 确保所有子页面底部都挂载自定义导航栏 */}
      <CustomTabBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDFBF7',
  },
  scrollContent: {
    paddingBottom: 90, // 底部预留高度，防止内容被导航栏遮挡
  },
  headerBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 10,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2C221E',
  },
  cartButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#F7F1EC',
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchSection: {
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    paddingHorizontal: 16,
    height: 44,
    borderWidth: 1,
    borderColor: '#F2E8E1',
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    color: '#2C221E',
  },
  bannerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    marginHorizontal: 20,
    marginTop: 10,
    padding: 20,
    borderWidth: 1,
    borderColor: '#F2E8E1',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04,
    shadowRadius: 6,
    elevation: 2,
  },
  bannerTextContent: {
    flex: 1,
  },
  bannerTag: {
    fontSize: 12,
    color: '#D4A373',
    fontWeight: '600',
    marginBottom: 4,
  },
  bannerTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2C221E',
    marginBottom: 12,
  },
  bannerButton: {
    backgroundColor: '#D4A373',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 14,
    alignSelf: 'flex-start',
  },
  bannerButtonText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '600',
  },
  bannerIconBox: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#F7F1EC',
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 20,
  },
  categoryItem: {
    alignItems: 'center',
    width: '22%',
  },
  categoryIconBox: {
    width: 56,
    height: 56,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#F2E8E1',
  },
  categoryText: {
    fontSize: 12,
    color: '#5C4033',
    fontWeight: '500',
  },
  sectionContainer: {
    paddingHorizontal: 20,
    marginTop: 24,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2C221E',
  },
  seeMoreText: {
    fontSize: 12,
    color: '#A8A29E',
  },
  recommendGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  productCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 12,
    width: '31%',
    borderWidth: 1,
    borderColor: '#F2E8E1',
  },
  productImageBox: {
    width: '100%',
    height: 90,
    backgroundColor: '#F7F1EC',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  productName: {
    fontSize: 12,
    fontWeight: '600',
    color: '#2C221E',
    marginBottom: 4,
  },
  productPrice: {
    fontSize: 12,
    color: '#D4A373',
    fontWeight: 'bold',
  },
});