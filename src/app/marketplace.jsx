import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';

export default function MarketplaceScreen() {
  const router = useRouter();
  // 视图状态：'01' 到 '10' 对应设计图的十个核心子模块
  const [currentView, setCurrentView] = useState('01');
  const [searchText, setSearchText] = useState('');
  const [selectedPay, setSelectedPay] = useState('Soul Coin');

  return (
    <SafeAreaView style={styles.container}>
      {/* 顶栏 */}
      <View style={styles.header}>
        {currentView !== '01' ? (
          <TouchableOpacity style={styles.backBtn} onPress={() => setCurrentView('01')}>
            <Ionicons name="chevron-back" size={22} color="#5A3E2B" />
          </TouchableOpacity>
        ) : (
          <View style={{ width: 32 }} />
        )}

        <Text style={styles.headerTitle}>
          {currentView === '01' && 'Marketplace'}
          {currentView === '02' && 'Product 分类'}
          {currentView === '03' && 'Product 详情'}
          {currentView === '04' && 'Character 角色商城'}
          {currentView === '05' && 'Accessories 配件商城'}
          {currentView === '06' && 'Gift 礼物商城'}
          {currentView === '07' && 'Cart 购物车'}
          {currentView === '08' && 'Checkout 结算'}
          {currentView === '09' && 'Payment 支付'}
          {currentView === '10' && '购买成功'}
        </Text>

        <View style={styles.headerRightIcons}>
          {currentView === '01' ? (
            <TouchableOpacity style={styles.iconBtn} onPress={() => setCurrentView('07')}>
              <Ionicons name="cart-outline" size={18} color="#5A3E2B" />
            </TouchableOpacity>
          ) : (
            <View style={{ width: 32 }} />
          )}
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollArea} showsVerticalScrollIndicator={false}>
        
        {/* ==================== 01 Marketplace 首页 ==================== */}
        {currentView === '01' && (
          <View>
            <View style={styles.searchBarRow}>
              <Ionicons name="search" size={16} color="#8C5830" style={{ marginRight: 6 }} />
              <TextInput 
                style={styles.searchInput}
                placeholder="搜索角色、配件、礼物..."
                placeholderTextColor="#9E826C"
                value={searchText}
                onChangeText={setSearchText}
              />
              <Ionicons name="scan-outline" size={18} color="#8C5830" />
            </View>

            <View style={styles.marketHeroCard} onPress={() => setCurrentView('03')}>
              <View style={{ flex: 1 }}>
                <Text style={styles.heroSubText}>新品上线</Text>
                <Text style={styles.heroMainTitle}>Luna的探险套装</Text>
                <TouchableOpacity style={styles.heroBtn} onPress={() => setCurrentView('03')}>
                  <Text style={styles.heroBtnText}>立即查看</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.heroImgMock}><Ionicons name="sparkles" size={28} color="#C29B75" /></View>
            </View>

            <View style={styles.categoryGridRow}>
              <TouchableOpacity style={styles.catGridItem} onPress={() => setCurrentView('04')}>
                <View style={styles.catIconCircle}><Ionicons name="person" size={18} color="#8C5830" /></View>
                <Text style={styles.catText}>角色商城</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.catGridItem} onPress={() => setCurrentView('05')}>
                <View style={styles.catIconCircle}><Ionicons name="shirt" size={18} color="#8C5830" /></View>
                <Text style={styles.catText}>配件商城</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.catGridItem} onPress={() => setCurrentView('06')}>
                <View style={styles.catIconCircle}><Ionicons name="gift" size={18} color="#8C5830" /></View>
                <Text style={styles.catText}>礼物商城</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.catGridItem} onPress={() => alert('限时活动')}>
                <View style={styles.catIconCircle}><Ionicons name="time" size={18} color="#8C5830" /></View>
                <Text style={styles.catText}>限时活动</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>精选推荐</Text>
              <TouchableOpacity onPress={() => setCurrentView('02')}><Text style={styles.linkText}>查看全部 &gt;</Text></TouchableOpacity>
            </View>

            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {[
                { name: '星光摇篮套装', price: '🪙 1,280' },
                { name: '旅行者背包', price: '🪙 680' },
                { name: '樱花小屋场景', price: '🪙 1,980' }
              ].map((item, i) => (
                <TouchableOpacity key={i} style={styles.recommendThumbCard} onPress={() => setCurrentView('03')}>
                  <View style={styles.thumbImgMock}><Ionicons name="image" size={22} color="#C29B75" /></View>
                  <Text style={styles.thumbTitle}>{item.name}</Text>
                  <Text style={styles.thumbPrice}>{item.price}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        )}

        {/* ==================== 02 Product 分类 ==================== */}
        {currentView === '02' && (
          <View>
            <View style={styles.filterTabsRow}>
              {['全部', '角色', '配件', '场景', '套装'].map((tab, idx) => (
                <Text key={idx} style={idx === 0 ? styles.filterTabActive : styles.filterTabInactive}>{tab}</Text>
              ))}
            </View>

            <View style={styles.productGrid}>
              {[
                { name: '小王子 Leo', price: '🪙 2,980' },
                { name: '人鱼公主 Marina', price: '🪙 2,980' },
                { name: '魔法师 Eliot', price: '🪙 2,480' },
                { name: '治愈天使 Angel', price: '🪙 2,480' }
              ].map((p, idx) => (
                <TouchableOpacity key={idx} style={styles.productCard} onPress={() => setCurrentView('03')}>
                  <View style={styles.prodImgMock}><Ionicons name="image" size={28} color="#C29B75" /></View>
                  <Text style={styles.prodName}>{p.name}</Text>
                  <Text style={styles.prodPrice}>{p.price}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        )}

        {/* ==================== 03 Product 详情 ==================== */}
        {currentView === '03' && (
          <View>
            <View style={styles.detailBannerMock}>
              <Ionicons name="cube" size={56} color="#FFF" />
              <View style={styles.tag3dBadge}><Text style={styles.tag3dText}>🌐 3D 预览</Text></View>
            </View>

            <View style={styles.detailMainCard}>
              <Text style={styles.detailTitle}>小王子 Leo <Text style={styles.newBadge}>NEW</Text></Text>
              <Text style={styles.detailPrice}>🪙 2,980</Text>
              <Text style={styles.detailSub}>温柔 · 勇敢 · 陪伴。来自B612星球的小王子，喜欢探索和交朋友。</Text>

              <Text style={styles.sectionTitle}>包含内容</Text>
              <View style={styles.contentRow}>
                {['角色本体', '专属语音包', '专属动作', '成长故事'].map(c => (
                  <View key={c} style={styles.contentItem}>
                    <Ionicons name="checkmark-circle" size={16} color="#C29B75" style={{ marginBottom: 4 }} />
                    <Text style={styles.contentText}>{c}</Text>
                  </View>
                ))}
              </View>

              <View style={styles.bottomBtnRow}>
                <TouchableOpacity style={styles.cartIconBtn} onPress={() => setCurrentView('07')}><Ionicons name="cart" size={18} color="#5A3E2B" /></TouchableOpacity>
                <TouchableOpacity style={styles.addToCartBtn} onPress={() => alert('已加入购物车')}><Text style={styles.addToCartText}>加入购物车</Text></TouchableOpacity>
                <TouchableOpacity style={styles.buyNowBtn} onPress={() => setCurrentView('08')}><Text style={styles.buyNowText}>立即购买</Text></TouchableOpacity>
              </View>
            </View>
          </View>
        )}

        {/* ==================== 04 Character 角色商城 ==================== */}
        {currentView === '04' && (
          <View>
            <View style={styles.filterTabsRow}>
              {['全部', '经典', '奇幻', '治愈', '未来', '动物'].map((t, i) => (
                <Text key={i} style={i === 0 ? styles.filterTabActive : styles.filterTabInactive}>{t}</Text>
              ))}
            </View>

            <View style={styles.marketHeroCard}>
              <View style={{ flex: 1 }}>
                <Text style={styles.heroSubText}>新角色上架</Text>
                <Text style={styles.heroMainTitle}>遇见你的Soulmate</Text>
                <TouchableOpacity style={styles.heroBtn}><Text style={styles.heroBtnText}>探索更多</Text></TouchableOpacity>
              </View>
              <View style={styles.heroImgMock}><Ionicons name="sparkles" size={28} color="#C29B75" /></View>
            </View>

            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>热门角色</Text>
              <Text style={styles.linkText}>查看全部 &gt;</Text>
            </View>

            <View style={styles.productGrid}>
              {[
                { name: '小王子 Leo', price: '🪙 2,980' },
                { name: '人鱼公主 Marina', price: '🪙 2,980' },
                { name: '魔法师 Eliot', price: '🪙 2,480' }
              ].map((p, idx) => (
                <TouchableOpacity key={idx} style={styles.productCard} onPress={() => setCurrentView('03')}>
                  <View style={styles.prodImgMock}><Ionicons name="person" size={24} color="#C29B75" /></View>
                  <Text style={styles.prodName}>{p.name}</Text>
                  <Text style={styles.prodPrice}>{p.price}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        )}

        {/* ==================== 05 Accessories 配件商城 ==================== */}
        {currentView === '05' && (
          <View>
            <View style={styles.filterTabsRow}>
              {['全部', '服饰', '背饰', '道具', '场景', '特效'].map((t, i) => (
                <Text key={i} style={i === 0 ? styles.filterTabActive : styles.filterTabInactive}>{t}</Text>
              ))}
            </View>

            <View style={styles.productGrid}>
              {[
                { name: '星星睡帽', price: '🪙 480' },
                { name: '云朵背包', price: '🪙 580' },
                { name: '魔法棒', price: '🪙 680' },
                { name: '星空翅膀', price: '🪙 880' }
              ].map((p, idx) => (
                <TouchableOpacity key={idx} style={styles.productCard} onPress={() => setCurrentView('03')}>
                  <View style={styles.prodImgMock}><Ionicons name="shirt" size={24} color="#C29B75" /></View>
                  <Text style={styles.prodName}>{p.name}</Text>
                  <Text style={styles.prodPrice}>{p.price}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        )}

        {/* ==================== 06 Gift 礼物商城 ==================== */}
        {currentView === '06' && (
          <View>
            <View style={styles.filterTabsRow}>
              {['全部', '热门', '生日', '日常', '限定'].map((t, i) => (
                <Text key={i} style={i === 0 ? styles.filterTabActive : styles.filterTabInactive}>{t}</Text>
              ))}
            </View>

            <View style={styles.marketHeroCard}>
              <View style={{ flex: 1 }}>
                <Text style={styles.heroSubText}>给特别的TA</Text>
                <Text style={styles.heroMainTitle}>一份温暖的礼物</Text>
                <TouchableOpacity style={styles.heroBtn}><Text style={styles.heroBtnText}>挑选礼物</Text></TouchableOpacity>
              </View>
              <View style={styles.heroImgMock}><Ionicons name="gift" size={28} color="#C29B75" /></View>
            </View>

            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>热门礼物</Text>
              <Text style={styles.linkText}>查看全部 &gt;</Text>
            </View>

            <View style={styles.productGrid}>
              {[
                { name: '心动玫瑰', price: '🪙 520' },
                { name: '甜蜜蛋糕', price: '🪙 880' },
                { name: '星空礼盒', price: '🪙 1,314' }
              ].map((p, idx) => (
                <TouchableOpacity key={idx} style={styles.productCard} onPress={() => setCurrentView('03')}>
                  <View style={styles.prodImgMock}><Ionicons name="gift" size={24} color="#C29B75" /></View>
                  <Text style={styles.prodName}>{p.name}</Text>
                  <Text style={styles.prodPrice}>{p.price}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        )}

        {/* ==================== 07 Cart 购物车 ==================== */}
        {currentView === '07' && (
          <View>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>已选商品 (3)</Text>
              <Text style={styles.linkText}>编辑</Text>
            </View>

            {[
              { name: '小王子 Leo', price: '🪙 2,980' },
              { name: '星空翅膀', price: '🪙 880' },
              { name: '心动玫瑰', price: '🪙 520' }
            ].map((c, i) => (
              <View key={i} style={styles.cartItemRow}>
                <Ionicons name="checkbox" size={18} color="#C29B75" style={{ marginRight: 10 }} />
                <View style={styles.cartThumbMock}><Ionicons name="image" size={16} color="#C29B75" /></View>
                <View style={{ flex: 1, marginLeft: 10 }}>
                  <Text style={styles.cartName}>{c.name}</Text>
                  <Text style={styles.cartPrice}>{c.price}</Text>
                </View>
                <Text style={styles.qtyText}>x 1</Text>
              </View>
            ))}

            <TouchableOpacity style={styles.primaryButton} onPress={() => setCurrentView('08')}>
              <Text style={styles.primaryButtonText}>去结算 (¥ 4,380)</Text>
            </TouchableOpacity>
          </View>
        )}

        {/* ==================== 08 Checkout 结算 ==================== */}
        {currentView === '08' && (
          <View>
            <View style={styles.checkoutAddressCard}>
              <Ionicons name="location" size={20} color="#C29B75" style={{ marginRight: 10 }} />
              <View style={{ flex: 1 }}>
                <Text style={styles.addrName}>Luna  +86 138 0000 1234</Text>
                <Text style={styles.addrDetail}>上海市浦东新区世纪大道 100 号</Text>
              </View>
              <Text style={styles.linkText}>修改 &gt;</Text>
            </View>

            <Text style={styles.sectionTitle}>商品清单</Text>
            {['小王子 Leo', '星空翅膀', '心动玫瑰'].map((it, i) => (
              <View key={i} style={styles.checkoutItemRow}>
                <Text style={styles.checkoutItemName}>{it}</Text>
                <Text style={styles.checkoutItemPrice}>🪙 1,000+</Text>
              </View>
            ))}

            <View style={styles.totalRow}>
              <Text style={styles.totalLbl}>合计</Text>
              <Text style={styles.totalVal}>¥ 4,380</Text>
            </View>

            <TouchableOpacity style={styles.primaryButton} onPress={() => setCurrentView('09')}>
              <Text style={styles.primaryButtonText}>提交订单</Text>
            </TouchableOpacity>
          </View>
        )}

        {/* ==================== 09 Payment 支付 ==================== */}
        {currentView === '09' && (
          <View>
            <View style={styles.payHeaderCard}>
              <Text style={styles.payTimeTip}>订单将在 14:53 后失效</Text>
              <Text style={styles.payAmountLbl}>支付金额</Text>
              <Text style={styles.payAmountVal}>¥ 4,380</Text>
            </View>

            <Text style={styles.sectionTitle}>选择支付方式</Text>
            {[
              { name: 'Soul Coin (余额 2,000)' },
              { name: 'Apple Pay' },
              { name: '微信支付' },
              { name: '支付宝' }
            ].map((pay, i) => (
              <TouchableOpacity key={i} style={styles.payMethodRow} onPress={() => setSelectedPay(pay.name)}>
                <Ionicons name={selectedPay === pay.name ? "radio-button-on" : "radio-button-off"} size={16} color="#C29B75" style={{ marginRight: 10 }} />
                <Text style={styles.payMethodName}>{pay.name}</Text>
              </TouchableOpacity>
            ))}

            <TouchableOpacity style={styles.primaryButton} onPress={() => setCurrentView('10')}>
              <Text style={styles.primaryButtonText}>立即支付</Text>
            </TouchableOpacity>
          </View>
        )}

        {/* ==================== 10 Order Success 购买成功 ==================== */}
        {currentView === '10' && (
          <View style={styles.centerContainer}>
            <View style={styles.successCheckCircle}>
              <Ionicons name="checkmark" size={36} color="#FFF" />
            </View>
            <Text style={styles.successTitle}>购买成功！</Text>
            <Text style={styles.successSub}>感谢你的购买，Luna 已收到新礼物~</Text>

            <View style={styles.successCardBox}>
              <Text style={styles.successMeta}>订单号：SO20240515094123</Text>
              <Text style={styles.successMeta}>支付金额：¥ 4,380</Text>
              <Text style={styles.successMeta}>支付方式：Apple Pay</Text>
            </View>

            <TouchableOpacity style={styles.primaryButton} onPress={() => setCurrentView('01')}>
              <Text style={styles.primaryButtonText}>继续购物</Text>
            </TouchableOpacity>
          </View>
        )}

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FBF7F0' },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 14,
    backgroundColor: '#FFF',
    borderBottomWidth: 1,
    borderBottomColor: '#EFE3D5'
  },
  backBtn: { width: 32, height: 32, justifyContent: 'center', alignItems: 'center' },
  headerTitle: { fontSize: 16, fontWeight: 'bold', color: '#4A3321' },
  headerRightIcons: { flexDirection: 'row' },
  iconBtn: { width: 32, height: 32, borderRadius: 16, backgroundColor: '#F3E8DC', justifyContent: 'center', alignItems: 'center' },
  scrollArea: { padding: 16, paddingBottom: 100 },
  searchBarRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFDF9',
    borderRadius: 14,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: '#EFE3D5',
    marginBottom: 16
  },
  searchInput: { flex: 1, fontSize: 13, color: '#4A3321' },
  marketHeroCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFDF9',
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: '#EFE3D5',
    marginBottom: 16
  },
  heroSubText: { fontSize: 11, color: '#C29B75', fontWeight: 'bold' },
  heroMainTitle: { fontSize: 16, fontWeight: 'bold', color: '#4A3321', marginVertical: 4 },
  heroBtn: { backgroundColor: '#C29B75', paddingHorizontal: 12, paddingVertical: 6, borderRadius: 12, alignSelf: 'flex-start', marginTop: 4 },
  heroBtnText: { color: '#FFF', fontSize: 11, fontWeight: 'bold' },
  heroImgMock: { width: 60, height: 60, borderRadius: 30, backgroundColor: '#F3E8DC', justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: '#E4D3C0' },
  categoryGridRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 16 },
  catGridItem: { flex: 1, backgroundColor: '#FFFDF9', borderRadius: 14, paddingVertical: 12, alignItems: 'center', marginHorizontal: 3, borderWidth: 1, borderColor: '#EFE3D5' },
  catIconCircle: { width: 36, height: 36, borderRadius: 18, backgroundColor: '#F3E8DC', justifyContent: 'center', alignItems: 'center', marginBottom: 4, borderWidth: 1, borderColor: '#E4D3C0' },
  catText: { fontSize: 11, fontWeight: '600', color: '#5A3E2B' },
  sectionHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 },
  sectionTitle: { fontSize: 14, fontWeight: 'bold', color: '#4A3321', marginBottom: 8, marginTop: 6 },
  linkText: { fontSize: 12, color: '#C29B75', fontWeight: '600' },
  recommendThumbCard: { width: 110, backgroundColor: '#FFFDF9', borderRadius: 14, padding: 10, marginRight: 10, borderWidth: 1, borderColor: '#EFE3D5' },
  thumbImgMock: { width: '100%', height: 90, backgroundColor: '#F3E8DC', borderRadius: 10, justifyContent: 'center', alignItems: 'center', marginBottom: 6, borderWidth: 1, borderColor: '#E4D3C0' },
  thumbTitle: { fontSize: 12, fontWeight: 'bold', color: '#4A3321' },
  thumbPrice: { fontSize: 11, color: '#D97706', fontWeight: 'bold', marginTop: 2 },
  filterTabsRow: { flexDirection: 'row', justifyContent: 'space-around', marginBottom: 14 },
  filterTabActive: { fontSize: 13, fontWeight: 'bold', color: '#4A3321', borderBottomWidth: 2, borderBottomColor: '#C29B75', paddingBottom: 2 },
  filterTabInactive: { fontSize: 13, color: '#9E826C' },
  productGrid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
  productCard: { width: '48%', backgroundColor: '#FFFDF9', borderRadius: 16, padding: 12, marginBottom: 12, borderWidth: 1, borderColor: '#EFE3D5' },
  prodImgMock: { width: '100%', height: 120, backgroundColor: '#F3E8DC', borderRadius: 12, justifyContent: 'center', alignItems: 'center', marginBottom: 8, borderWidth: 1, borderColor: '#E4D3C0' },
  prodName: { fontSize: 13, fontWeight: 'bold', color: '#4A3321' },
  prodPrice: { fontSize: 12, color: '#D97706', fontWeight: 'bold', marginTop: 2 },
  detailBannerMock: { width: '100%', height: 220, backgroundColor: '#C29B75', justifyContent: 'center', alignItems: 'center', position: 'relative' },
  tag3dBadge: { position: 'absolute', bottom: 12, right: 12, backgroundColor: 'rgba(0,0,0,0.3)', paddingHorizontal: 10, paddingVertical: 4, borderRadius: 12 },
  tag3dText: { fontSize: 11, color: '#FFF', fontWeight: 'bold' },
  detailMainCard: { backgroundColor: '#FFFDF9', borderTopLeftRadius: 20, borderTopRightRadius: 20, marginTop: -20, padding: 18, borderWidth: 1, borderColor: '#EFE3D5' },
  detailTitle: { fontSize: 18, fontWeight: 'bold', color: '#4A3321', marginBottom: 4 },
  newBadge: { fontSize: 10, color: '#FFF', backgroundColor: '#D97706', paddingHorizontal: 6, paddingVertical: 2, borderRadius: 6 },
  detailPrice: { fontSize: 16, fontWeight: 'bold', color: '#D97706', marginBottom: 8 },
  detailSub: { fontSize: 12, color: '#6B503D', lineHeight: 18, marginBottom: 16 },
  contentRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 },
  contentItem: { alignItems: 'center', backgroundColor: '#F8F2EC', flex: 1, marginHorizontal: 2, paddingVertical: 10, borderRadius: 10 },
  contentText: { fontSize: 10, color: '#5A3E2B', fontWeight: '600' },
  bottomBtnRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  cartIconBtn: { width: 40, height: 40, borderRadius: 20, backgroundColor: '#F3E8DC', justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: '#E4D3C0' },
  addToCartBtn: { flex: 1, backgroundColor: '#F3E8DC', paddingVertical: 12, borderRadius: 20, alignItems: 'center', marginHorizontal: 8, borderWidth: 1, borderColor: '#E4D3C0' },
  addToCartText: { color: '#5A3E2B', fontSize: 13, fontWeight: 'bold' },
  buyNowBtn: { flex: 1, backgroundColor: '#C29B75', paddingVertical: 12, borderRadius: 20, alignItems: 'center' },
  buyNowText: { color: '#FFF', fontSize: 13, fontWeight: 'bold' },
  cartItemRow: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#FFFDF9', borderRadius: 14, padding: 12, borderWidth: 1, borderColor: '#EFE3D5', marginBottom: 10 },
  cartThumbMock: { width: 44, height: 44, borderRadius: 10, backgroundColor: '#F3E8DC', justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: '#E4D3C0' },
  cartName: { fontSize: 13, fontWeight: 'bold', color: '#4A3321' },
  cartPrice: { fontSize: 11, color: '#D97706', fontWeight: 'bold', marginTop: 2 },
  qtyText: { fontSize: 12, color: '#9E826C' },
  primaryButton: { width: '100%', backgroundColor: '#C29B75', borderRadius: 20, paddingVertical: 12, alignItems: 'center', marginTop: 14 },
  primaryButtonText: { color: '#FFF', fontSize: 14, fontWeight: 'bold' },
  checkoutAddressCard: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#FFFDF9', borderRadius: 16, padding: 16, borderWidth: 1, borderColor: '#EFE3D5', marginBottom: 16 },
  addrName: { fontSize: 13, fontWeight: 'bold', color: '#4A3321' },
  addrDetail: { fontSize: 11, color: '#8C6D53', marginTop: 2 },
  checkoutItemRow: { flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#FFFDF9', padding: 12, borderRadius: 12, borderWidth: 1, borderColor: '#EFE3D5', marginBottom: 6 },
  checkoutItemName: { fontSize: 13, color: '#4A3321', fontWeight: '600' },
  checkoutItemPrice: { fontSize: 13, color: '#D97706', fontWeight: 'bold' },
  totalRow: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 12, paddingHorizontal: 4 },
  totalLbl: { fontSize: 14, fontWeight: 'bold', color: '#4A3321' },
  totalVal: { fontSize: 16, fontWeight: 'bold', color: '#D97706' },
  payHeaderCard: { backgroundColor: '#FFFDF9', borderRadius: 16, padding: 20, alignItems: 'center', borderWidth: 1, borderColor: '#EFE3D5', marginBottom: 16 },
  payTimeTip: { fontSize: 11, color: '#D97706', marginBottom: 10 },
  payAmountLbl: { fontSize: 12, color: '#8C6D53' },
  payAmountVal: { fontSize: 26, fontWeight: 'bold', color: '#4A3321', marginTop: 4 },
  payMethodRow: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#FFFDF9', borderRadius: 12, padding: 14, borderWidth: 1, borderColor: '#EFE3D5', marginBottom: 8 },
  payMethodName: { fontSize: 13, fontWeight: '600', color: '#4A3321' },
  centerContainer: { alignItems: 'center', paddingVertical: 30 },
  successCheckCircle: { width: 64, height: 64, borderRadius: 32, backgroundColor: '#10B981', justifyContent: 'center', alignItems: 'center', marginBottom: 12 },
  successTitle: { fontSize: 18, fontWeight: 'bold', color: '#4A3321', marginBottom: 4 },
  successSub: { fontSize: 12, color: '#8C6D53', marginBottom: 20 },
  successCardBox: { width: '100%', backgroundColor: '#FFFDF9', borderRadius: 16, padding: 16, borderWidth: 1, borderColor: '#EFE3D5', marginBottom: 20 },
  successMeta: { fontSize: 12, color: '#6B503D', marginBottom: 6 }
});