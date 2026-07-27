import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function CharacterScreen() {
  const router = useRouter();
  // charStep 控制 01-08 的子页面流程切换
  const [charStep, setCharStep] = useState(1);
  const [selectedStyle, setSelectedStyle] = useState('写实风');
  const [selectedSize, setSelectedSize] = useState('8cm');

  const tabs = [
    { name: '首页', route: '/home', icon: 'home-outline' },
    { name: '创建角色', route: '/character', icon: 'people' },
    { name: '聊天', route: '/chat', icon: 'chatbubble-outline' },
    { name: '世界', route: '/world', icon: 'globe-outline' },
    { name: '我的', route: '/me', icon: 'person-outline' },
  ];

  return (
    <View style={styles.container}>
      
      {/* ================= 01 创建首页 ================= */}
      {charStep === 1 && (
        <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
          <Text style={styles.headerTitle}>创建自己的 3D 手办</Text>
          <Text style={styles.headerSub}>上传照片，生成专属 3D 陪伴伙伴</Text>

          <View style={styles.mainCard}>
            <View style={styles.renderPlaceholder}>
              <Ionicons name="cube-outline" size={48} color="#C29B75" />
              <Text style={styles.renderText}>Luna 3D 模型渲染位</Text>
            </View>
            <TouchableOpacity style={styles.primaryBtn} onPress={() => setCharStep(2)}>
              <Text style={styles.primaryBtnText}>开始创建</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.gridContainer}>
            <View style={styles.gridItem}>
              <Ionicons name="shield-checkmark-outline" size={20} color="#C29B75" />
              <Text style={styles.gridText}>高精度建模</Text>
            </View>
            <View style={styles.gridItem}>
              <Ionicons name="person-outline" size={20} color="#C29B75" />
              <Text style={styles.gridText}>个性化定制</Text>
            </View>
            <View style={styles.gridItem}>
              <Ionicons name="lock-closed-outline" size={20} color="#C29B75" />
              <Text style={styles.gridText}>安全隐私保护</Text>
            </View>
          </View>
        </ScrollView>
      )}

      {/* ================= 02 上传照片 ================= */}
      {charStep === 2 && (
        <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
          <View style={styles.subHeader}>
            <TouchableOpacity onPress={() => setCharStep(1)} style={styles.backBtn}><Ionicons name="chevron-back" size={20} color="#5C4033" /></TouchableOpacity>
            <Text style={styles.subHeaderTitle}>上传照片</Text>
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 }}>
            <View style={[styles.mainCard, { width: '48%', height: 160, marginBottom: 0 }]}>
              <Ionicons name="person" size={40} color="#C29B75" />
              <Text style={styles.cardSub}>正面照参考</Text>
            </View>
            <TouchableOpacity style={[styles.mainCard, { width: '48%', height: 160, marginBottom: 0, backgroundColor: '#FAF3EB', borderStyle: 'dashed' }]} onPress={() => setCharStep(3)}>
              <Ionicons name="camera-outline" size={32} color="#C29B75" />
              <Text style={[styles.cardSub, { marginTop: 8 }]}>点击上传照片</Text>
              <Text style={{ fontSize: 10, color: '#A89F91' }}>支持 JPG / PNG 格式</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.mainCard}>
            <Text style={styles.cardTitle}>照片要求</Text>
            <Text style={styles.reqText}>✓ 正面照片，效果更佳</Text>
            <Text style={styles.reqText}>✓ 光线充足，五官清晰</Text>
            <Text style={styles.reqText}>✓ 无遮挡，表情自然</Text>
          </View>

          <TouchableOpacity style={styles.primaryBtn} onPress={() => setCharStep(3)}>
            <Text style={styles.primaryBtnText}>下一步</Text>
          </TouchableOpacity>
        </ScrollView>
      )}

      {/* ================= 03 风格选择 ================= */}
      {charStep === 3 && (
        <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
          <View style={styles.subHeader}>
            <TouchableOpacity onPress={() => setCharStep(2)} style={styles.backBtn}><Ionicons name="chevron-back" size={20} color="#5C4033" /></TouchableOpacity>
            <Text style={styles.subHeaderTitle}>风格选择</Text>
          </View>

          <Text style={styles.sectionTitle}>选择你喜欢的风格</Text>
          <View style={styles.styleGrid}>
            {['写实风', '二次元风', '卡通 3D 风', 'Q 版风', '二次元', '手绘风格'].map((style, idx) => (
              <TouchableOpacity key={idx} style={[styles.styleCard, selectedStyle === style && styles.activeStyleCard]} onPress={() => setSelectedStyle(style)}>
                <View style={styles.styleAvatar}><Ionicons name="sparkles" size={16} color="#C29B75" /></View>
                <Text style={styles.styleText}>{style}</Text>
              </TouchableOpacity>
            ))}
          </View>

          <Text style={styles.sectionTitle}>选择尺寸</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 }}>
            {['8cm', '12cm', '20cm'].map((size, idx) => (
              <TouchableOpacity key={idx} style={[styles.sizeBtn, selectedSize === size && styles.activeSizeBtn]} onPress={() => setSelectedSize(size)}>
                <Text style={[styles.sizeText, selectedSize === size && styles.activeSizeText]}>{size}</Text>
              </TouchableOpacity>
            ))}
          </View>

          <TouchableOpacity style={styles.primaryBtn} onPress={() => setCharStep(4)}>
            <Text style={styles.primaryBtnText}>下一步</Text>
          </TouchableOpacity>
        </ScrollView>
      )}

      {/* ================= 04 预览模型 ================= */}
      {charStep === 4 && (
        <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
          <View style={styles.subHeader}>
            <TouchableOpacity onPress={() => setCharStep(3)} style={styles.backBtn}><Ionicons name="chevron-back" size={20} color="#5C4033" /></TouchableOpacity>
            <Text style={styles.subHeaderTitle}>预览模型</Text>
          </View>

          <View style={[styles.mainCard, { height: 240 }]}>
            <Ionicons name="cube" size={60} color="#C29B75" />
            <Text style={styles.cardTitle}>3D 手办模型预览</Text>
            <View style={styles.rotateTag}><Ionicons name="refresh" size={12} color="#C29B75" /><Text style={{ fontSize: 10, color: '#C29B75', marginLeft: 4 }}>360°</Text></View>
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 }}>
            {[1, 2, 3, 4].map((_, idx) => (
              <View key={idx} style={styles.angleBox}><Ionicons name="person-outline" size={18} color="#C29B75" /></View>
            ))}
          </View>

          <TouchableOpacity style={styles.primaryBtn} onPress={() => setCharStep(5)}>
            <Text style={styles.primaryBtnText}>下一步</Text>
          </TouchableOpacity>
        </ScrollView>
      )}

      {/* ================= 05 个性化定制 ================= */}
      {charStep === 5 && (
        <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
          <View style={styles.subHeader}>
            <TouchableOpacity onPress={() => setCharStep(4)} style={styles.backBtn}><Ionicons name="chevron-back" size={20} color="#5C4033" /></TouchableOpacity>
            <Text style={styles.subHeaderTitle}>个性化定制</Text>
          </View>

          <Text style={styles.sectionTitle}>选择服装</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 16 }}>
            {[1, 2, 3, 4].map((_, idx) => (
              <View key={idx} style={styles.optionBox}><Ionicons name="shirt-outline" size={20} color="#C29B75" /></View>
            ))}
          </View>

          <Text style={styles.sectionTitle}>选择底座</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 16 }}>
            {[1, 2, 3].map((_, idx) => (
              <View key={idx} style={[styles.optionBox, { width: '31%' }]}><Ionicons name="disc-outline" size={20} color="#C29B75" /></View>
            ))}
          </View>

          <Text style={styles.sectionTitle}>添加配件 (可选)</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 }}>
            {[1, 2, 3, 4].map((_, idx) => (
              <View key={idx} style={styles.optionBox}><Ionicons name="gift-outline" size={20} color="#C29B75" /></View>
            ))}
          </View>

          <TouchableOpacity style={styles.primaryBtn} onPress={() => setCharStep(6)}>
            <Text style={styles.primaryBtnText}>下一步</Text>
          </TouchableOpacity>
        </ScrollView>
      )}

      {/* ================= 06 细节调整 ================= */}
      {charStep === 6 && (
        <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
          <View style={styles.subHeader}>
            <TouchableOpacity onPress={() => setCharStep(5)} style={styles.backBtn}><Ionicons name="chevron-back" size={20} color="#5C4033" /></TouchableOpacity>
            <Text style={styles.subHeaderTitle}>细节调整</Text>
          </View>

          <View style={[styles.mainCard, { height: 180 }]}>
            <Ionicons name="happy-outline" size={48} color="#C29B75" />
          </View>

          {['微笑容度', '眼睛大小', '脸部圆润度'].map((label, idx) => (
            <View key={idx} style={styles.sliderContainer}>
              <Text style={styles.sliderLabel}>{label}</Text>
              <View style={styles.sliderTrack}><View style={[styles.sliderFill, { width: idx === 0 ? '80%' : idx === 1 ? '100%' : '60%' }]} /></View>
            </View>
          ))}

          <TouchableOpacity style={[styles.primaryBtn, { marginTop: 10 }]} onPress={() => setCharStep(7)}>
            <Text style={styles.primaryBtnText}>下一步</Text>
          </TouchableOpacity>
        </ScrollView>
      )}

      {/* ================= 07 确认订单 ================= */}
      {charStep === 7 && (
        <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
          <View style={styles.subHeader}>
            <TouchableOpacity onPress={() => setCharStep(6)} style={styles.backBtn}><Ionicons name="chevron-back" size={20} color="#5C4033" /></TouchableOpacity>
            <Text style={styles.subHeaderTitle}>确认订单</Text>
          </View>

          <View style={styles.mainCard}>
            <Text style={styles.cardTitle}>专属 3D 手办</Text>
            <Text style={styles.cardSub}>{selectedStyle} · {selectedSize} · 包含：模型生体 + 底座 + 基础包装</Text>
            <Text style={styles.priceText}>¥299.00</Text>
          </View>

          <View style={styles.mainCard}>
            <Text style={styles.cardTitle}>定制信息</Text>
            <View style={styles.infoRow}><Text style={styles.infoLbl}>风格</Text><Text style={styles.infoVal}>{selectedStyle}</Text></View>
            <View style={styles.infoRow}><Text style={styles.infoLbl}>尺寸</Text><Text style={styles.infoVal}>{selectedSize}</Text></View>
            <View style={styles.infoRow}><Text style={styles.infoLbl}>服装</Text><Text style={styles.infoVal}>休闲套装</Text></View>
            <View style={styles.infoRow}><Text style={styles.infoLbl}>底座</Text><Text style={styles.infoVal}>圆形底座</Text></View>
          </View>

          <View style={styles.mainCard}>
            <View style={styles.infoRow}><Text style={styles.infoLbl}>商品金额</Text><Text style={styles.infoVal}>¥299.00</Text></View>
            <View style={styles.infoRow}><Text style={styles.infoLbl}>优惠券</Text><Text style={styles.infoVal}>- ¥30.00</Text></View>
            <View style={[styles.infoRow, { borderTopWidth: 1, borderTopColor: '#F5ECE3', paddingTop: 10, marginTop: 10 }]}>
              <Text style={[styles.cardTitle, { marginBottom: 0 }]}>实付款</Text>
              <Text style={[styles.priceText, { marginBottom: 0 }]}>¥269.00</Text>
            </View>
          </View>

          <TouchableOpacity style={styles.primaryBtn} onPress={() => setCharStep(8)}>
            <Text style={styles.primaryBtnText}>提交订单</Text>
          </TouchableOpacity>
        </ScrollView>
      )}

      {/* ================= 08 下单成功 ================= */}
      {charStep === 8 && (
        <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
          <View style={[styles.mainCard, { alignItems: 'center', paddingVertical: 30 }]}>
            <View style={styles.successCircle}><Ionicons name="checkmark" size={32} color="#FFFFFF" /></View>
            <Text style={styles.cardTitle}>下单成功！</Text>
            <Text style={styles.cardSub}>您的专属 3D 手办正在制作中{'\n'}预计 7-15 个工作日发货</Text>
            <TouchableOpacity style={[styles.primaryBtn, { width: '80%', marginTop: 16 }]} onPress={() => router.replace('/home')}>
              <Text style={styles.primaryBtnText}>查看订单</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.sectionTitle}>你可能喜欢</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            {['星空玻璃罩', '定制铭牌', '防尘展示盒'].map((item, idx) => (
              <View key={idx} style={[styles.gridItem, { width: '32%', paddingVertical: 12 }]}>
                <Ionicons name="cube-outline" size={20} color="#C29B75" />
                <Text style={[styles.gridText, { marginTop: 6 }]}>{item}</Text>
                <Text style={{ fontSize: 11, color: '#C29B75', marginTop: 2 }}>¥39.00</Text>
              </View>
            ))}
          </View>
        </ScrollView>
      )}

      {/* 底部固定 5 个核心 Tab 导航 */}
      <View style={styles.tabContainer}>
        {tabs.map((tab, index) => {
          const isActive = tab.route === '/character';
          return (
            <TouchableOpacity
              key={index}
              style={styles.tabItem}
              activeOpacity={0.8}
              onPress={() => {
                if (tab.route === '/character') {
                  setCharStep(1); // 点击创建角色 Tab 自动回到 01 首页
                } else {
                  router.replace(tab.route);
                }
              }}
            >
              <Ionicons name={tab.icon} size={22} color={isActive ? '#C29B75' : '#A89F91'} />
              <Text style={[styles.tabText, isActive && styles.activeTabText]}>{tab.name}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FBF7F0' },
  scrollContent: { paddingHorizontal: 20, paddingTop: 50, paddingBottom: 90 },
  headerTitle: { fontSize: 22, fontWeight: '700', color: '#5C4033', marginBottom: 4 },
  headerSub: { fontSize: 13, color: '#8C7A6B', marginBottom: 20 },
  mainCard: { backgroundColor: '#FFFFFF', borderRadius: 16, padding: 16, alignItems: 'center', marginBottom: 16, borderWidth: 1, borderColor: '#F0E6DC' },
  renderPlaceholder: { width: '100%', height: 180, backgroundColor: '#FAF3EB', borderRadius: 12, alignItems: 'center', justifyContent: 'center', marginBottom: 16, borderWidth: 1, borderColor: '#EFE3D5' },
  renderText: { fontSize: 13, color: '#8C7A6B', marginTop: 8 },
  primaryBtn: { width: '100%', backgroundColor: '#D4AF37', borderRadius: 14, paddingVertical: 14, alignItems: 'center' },
  primaryBtnText: { color: '#FFFFFF', fontSize: 15, fontWeight: '600' },
  gridContainer: { flexDirection: 'row', justifyContent: 'space-between' },
  gridItem: { width: '31%', backgroundColor: '#FFFFFF', borderRadius: 14, paddingVertical: 16, alignItems: 'center', borderWidth: 1, borderColor: '#F0E6DC' },
  gridText: { fontSize: 11, color: '#5C4033', marginTop: 8 },
  subHeader: { flexDirection: 'row', alignItems: 'center', marginBottom: 16 },
  backBtn: { width: 34, height: 34, borderRadius: 17, backgroundColor: '#FFFFFF', alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: '#F0E6DC', marginRight: 12 },
  subHeaderTitle: { fontSize: 16, fontWeight: '700', color: '#5C4033' },
  cardSub: { fontSize: 12, color: '#8C7A6B', marginTop: 4, textAlign: 'center' },
  cardTitle: { fontSize: 15, fontWeight: '700', color: '#5C4033', marginBottom: 6 },
  reqText: { fontSize: 12, color: '#8C7A6B', marginBottom: 4, width: '100%' },
  sectionTitle: { fontSize: 15, fontWeight: '700', color: '#5C4033', marginBottom: 12 },
  styleGrid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', marginBottom: 16 },
  styleCard: { width: '31%', backgroundColor: '#FFFFFF', borderRadius: 14, paddingVertical: 14, alignItems: 'center', marginBottom: 12, borderWidth: 1, borderColor: '#F0E6DC' },
  activeStyleCard: { borderColor: '#C29B75', backgroundColor: '#FAF3EB' },
  styleAvatar: { width: 36, height: 36, borderRadius: 18, backgroundColor: '#FAF3EB', alignItems: 'center', justifyContent: 'center', marginBottom: 6 },
  styleText: { fontSize: 12, color: '#5C4033', fontWeight: '500' },
  sizeBtn: { width: '31%', backgroundColor: '#FFFFFF', borderRadius: 12, paddingVertical: 12, alignItems: 'center', borderWidth: 1, borderColor: '#F0E6DC' },
  activeSizeBtn: { backgroundColor: '#C29B75', borderColor: '#C29B75' },
  sizeText: { fontSize: 13, color: '#5C4033', fontWeight: '600' },
  activeSizeText: { color: '#FFFFFF' },
  rotateTag: { position: 'absolute', top: 12, right: 12, flexDirection: 'row', alignItems: 'center', backgroundColor: '#FAF3EB', paddingHorizontal: 8, paddingVertical: 4, borderRadius: 10 },
  angleBox: { width: '23%', height: 60, backgroundColor: '#FFFFFF', borderRadius: 10, alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: '#F0E6DC' },
  optionBox: { width: '23%', height: 70, backgroundColor: '#FFFFFF', borderRadius: 12, alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: '#F0E6DC' },
  sliderContainer: { backgroundColor: '#FFFFFF', borderRadius: 12, padding: 14, marginBottom: 12, borderWidth: 1, borderColor: '#F0E6DC' },
  sliderLabel: { fontSize: 13, color: '#5C4033', marginBottom: 8 },
  sliderTrack: { width: '100%', height: 6, backgroundColor: '#FAF3EB', borderRadius: 3 },
  sliderFill: { height: '100%', backgroundColor: '#D4AF37', borderRadius: 3 },
  priceText: { fontSize: 20, fontWeight: '700', color: '#D4AF37', marginTop: 6 },
  infoRow: { flexDirection: 'row', justifyContent: 'space-between', width: '100%', marginBottom: 6 },
  infoLbl: { fontSize: 12, color: '#8C7A6B' },
  infoVal: { fontSize: 12, color: '#5C4033', fontWeight: '600' },
  successCircle: { width: 60, height: 60, borderRadius: 30, backgroundColor: '#52C41A', alignItems: 'center', justifyContent: 'center', marginBottom: 12 },
  tabContainer: { position: 'absolute', bottom: 0, left: 0, right: 0, flexDirection: 'row', height: 60, backgroundColor: '#FFFFFF', borderTopWidth: 1, borderTopColor: '#F0E6DC', alignItems: 'center', justifyContent: 'space-around', paddingBottom: 4 },
  tabItem: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  tabText: { fontSize: 11, color: '#A89F91', marginTop: 2 },
  activeTabText: { color: '#C29B75', fontWeight: '600' },
});