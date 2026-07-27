import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function NfcScreen() {
  const router = useRouter();
  const [nfcStep, setNfcStep] = useState(1);

  // 统一的 5 个核心 Tab 导航配置
  const tabs = [
    { name: '首页', route: '/home', icon: 'home-outline' },
    { name: '创建角色', route: '/character', icon: 'people-outline' },
    { name: '聊天', route: '/chat', icon: 'chatbubble-outline' },
    { name: '世界', route: '/world', icon: 'globe-outline' },
    { name: '我的', route: '/me', icon: 'person-outline' },
  ];

  return (
    <View style={styles.container}>
      
      {/* ================= 01 NFC 首页 ================= */}
      {nfcStep === 1 && (
        <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
          <View style={styles.headerRow}>
            <Text style={styles.headerTitle}>NFC 连接</Text>
            <TouchableOpacity style={styles.iconButton}>
              <Ionicons name="information-circle-outline" size={18} color="#8C7A6B" />
            </TouchableOpacity>
          </View>

          <View style={styles.bannerCard}>
            <View style={{ flex: 1 }}>
              <Text style={styles.cardMainTitle}>连接你的专属伙伴</Text>
              <Text style={styles.cardSubTitle}>将角色 NFC 卡贴近设备，开启专属陪伴之旅</Text>
            </View>
            <View style={styles.bannerAvatarBox}>
              <Ionicons name="sparkles" size={24} color="#D4AF37" />
            </View>
          </View>

          <View style={styles.radarCard}>
            <View style={styles.radarCircle}>
              <Ionicons name="radio" size={32} color="#C29B75" />
            </View>
            <Text style={styles.radarTitle}>请将角色 NFC 卡贴近设备顶部</Text>
            <Text style={styles.radarSub}>支持的设备：Soulara NFC 卡 / 手办底座</Text>
            
            <TouchableOpacity style={styles.primaryBtn} onPress={() => setNfcStep(2)}>
              <Text style={styles.primaryBtnText}>开始感应连接</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={{ alignItems: 'center', marginTop: 10 }} onPress={() => setNfcStep(8)}>
            <Text style={{ fontSize: 13, color: '#C29B75', fontWeight: '600' }}>管理已绑定的 NFC 卡 &gt;</Text>
          </TouchableOpacity>
        </ScrollView>
      )}

      {/* ================= 02 连接中 ================= */}
      {nfcStep === 2 && (
        <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
          <View style={styles.subHeader}>
            <TouchableOpacity onPress={() => setNfcStep(1)} style={styles.backBtn}>
              <Ionicons name="chevron-back" size={20} color="#5C4033" />
            </TouchableOpacity>
            <Text style={styles.subHeaderTitle}>NFC 连接</Text>
          </View>

          <View style={[styles.radarCard, { paddingVertical: 40, marginTop: 10 }]}>
            <Text style={[styles.radarTitle, { marginBottom: 6, fontSize: 18 }]}>正在连接...</Text>
            <Text style={[styles.radarSub, { marginBottom: 30 }]}>请将 NFC 卡保持近设备</Text>
            <View style={[styles.radarCircle, { width: 120, height: 120, borderRadius: 60 }]}>
              <Ionicons name="radio" size={48} color="#C29B75" />
              <Text style={{ fontSize: 12, fontWeight: '700', color: '#C29B75', marginTop: 4 }}>NFC</Text>
            </View>
          </View>

          <TouchableOpacity style={[styles.primaryBtn, { marginTop: 20 }]} onPress={() => setNfcStep(3)}>
            <Text style={styles.primaryBtnText}>模拟连接成功 (下一步 03)</Text>
          </TouchableOpacity>
        </ScrollView>
      )}

      {/* ================= 03 连接成功 ================= */}
      {nfcStep === 3 && (
        <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
          <View style={styles.subHeader}>
            <TouchableOpacity onPress={() => setNfcStep(1)} style={styles.backBtn}>
              <Ionicons name="chevron-back" size={20} color="#5C4033" />
            </TouchableOpacity>
            <Text style={styles.subHeaderTitle}>NFC 连接</Text>
          </View>

          <View style={[styles.radarCard, { alignItems: 'center', paddingVertical: 30 }]}>
            <View style={styles.successCircle}>
              <Ionicons name="checkmark" size={32} color="#FFFFFF" />
            </View>
            <Text style={[styles.radarTitle, { fontSize: 18 }]}>连接成功</Text>
            <Text style={styles.radarSub}>已检测到 NFC 卡</Text>
          </View>

          <TouchableOpacity style={[styles.primaryBtn, { marginTop: 20 }]} onPress={() => setNfcStep(4)}>
            <Text style={styles.primaryBtnText}>下一步 (识别角色 04)</Text>
          </TouchableOpacity>
        </ScrollView>
      )}

      {/* ================= 04 角色识别 ================= */}
      {nfcStep === 4 && (
        <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
          <View style={styles.subHeader}>
            <TouchableOpacity onPress={() => setNfcStep(3)} style={styles.backBtn}>
              <Ionicons name="chevron-back" size={20} color="#5C4033" />
            </TouchableOpacity>
            <Text style={styles.subHeaderTitle}>角色识别</Text>
          </View>

          <View style={styles.mainCard}>
            <Text style={styles.cardMainTitle}>小王子 Leo <Text style={styles.badgeText}>稀有</Text></Text>
            <View style={styles.infoRow}><Text style={styles.infoLbl}>系列</Text><Text style={styles.infoVal}>星球探险系列</Text></View>
            <View style={styles.infoRow}><Text style={styles.infoLbl}>稀有度</Text><Text style={styles.infoVal}>⭐⭐⭐⭐⭐</Text></View>
          </View>

          <TouchableOpacity style={styles.primaryBtn} onPress={() => setNfcStep(5)}>
            <Text style={styles.primaryBtnText}>确认绑定</Text>
          </TouchableOpacity>
        </ScrollView>
      )}

      {/* ================= 05 绑定角色 ================= */}
      {nfcStep === 5 && (
        <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
          <View style={styles.subHeader}>
            <TouchableOpacity onPress={() => setNfcStep(4)} style={styles.backBtn}>
              <Ionicons name="chevron-back" size={20} color="#5C4033" />
            </TouchableOpacity>
            <Text style={styles.subHeaderTitle}>绑定角色</Text>
          </View>

          <TouchableOpacity style={styles.primaryBtn} onPress={() => setNfcStep(6)}>
            <Text style={styles.primaryBtnText}>确认绑定并写入</Text>
          </TouchableOpacity>
        </ScrollView>
      )}

      {/* ================= 06 写入中 ================= */}
      {nfcStep === 6 && (
        <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
          <View style={styles.subHeader}>
            <TouchableOpacity onPress={() => setNfcStep(5)} style={styles.backBtn}>
              <Ionicons name="chevron-back" size={20} color="#5C4033" />
            </TouchableOpacity>
            <Text style={styles.subHeaderTitle}>写入中</Text>
          </View>

          <View style={[styles.radarCard, { alignItems: 'center', paddingVertical: 40 }]}>
            <Text style={[styles.radarTitle, { marginBottom: 20 }]}>正在写入数据... 68%</Text>
          </View>

          <TouchableOpacity style={styles.primaryBtn} onPress={() => setNfcStep(7)}>
            <Text style={styles.primaryBtnText}>模拟写入成功</Text>
          </TouchableOpacity>
        </ScrollView>
      )}

      {/* ================= 07 写入成功 ================= */}
      {nfcStep === 7 && (
        <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
          <View style={styles.subHeader}>
            <TouchableOpacity onPress={() => setNfcStep(6)} style={styles.backBtn}>
              <Ionicons name="chevron-back" size={20} color="#5C4033" />
            </TouchableOpacity>
            <Text style={styles.subHeaderTitle}>写入成功</Text>
          </View>

          <View style={[styles.radarCard, { alignItems: 'center', paddingVertical: 30 }]}>
            <View style={styles.successCircle}>
              <Ionicons name="checkmark" size={32} color="#FFFFFF" />
            </View>
            <Text style={styles.radarTitle}>写入成功</Text>
          </View>

          <TouchableOpacity style={styles.primaryBtn} onPress={() => setNfcStep(8)}>
            <Text style={styles.primaryBtnText}>完成</Text>
          </TouchableOpacity>
        </ScrollView>
      )}

      {/* ================= 08 管理已绑定 ================= */}
      {nfcStep === 8 && (
        <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
          <View style={styles.subHeader}>
            <TouchableOpacity onPress={() => setNfcStep(1)} style={styles.backBtn}>
              <Ionicons name="chevron-back" size={20} color="#5C4033" />
            </TouchableOpacity>
            <Text style={styles.subHeaderTitle}>NFC 管理</Text>
          </View>

          <View style={styles.mainCard}>
            <Text style={styles.cardMainTitle}>已绑定的 NFC 卡：小王子 Leo</Text>
          </View>

          <TouchableOpacity style={styles.outlineBtn} onPress={() => setNfcStep(1)}>
            <Text style={styles.outlineBtnText}>返回 NFC 首页</Text>
          </TouchableOpacity>
        </ScrollView>
      )}

      {/* 底部固定 5 个核心 Tab 导航 */}
      <View style={styles.tabContainer}>
        {tabs.map((tab, index) => {
          const isActive = tab.route === '/nfc'; // NFC 页面本身不在这 5 个 Tab 中，因此全不激活或根据需要高亮
          return (
            <TouchableOpacity
              key={index}
              style={styles.tabItem}
              activeOpacity={0.8}
              onPress={() => router.replace(tab.route)}
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
  headerRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 },
  headerTitle: { fontSize: 20, fontWeight: '700', color: '#5C4033' },
  iconButton: { width: 34, height: 34, borderRadius: 17, backgroundColor: '#FFFFFF', alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: '#F0E6DC' },
  bannerCard: { backgroundColor: '#FFFFFF', borderRadius: 16, padding: 16, flexDirection: 'row', alignItems: 'center', marginBottom: 16, borderWidth: 1, borderColor: '#F0E6DC' },
  cardMainTitle: { fontSize: 16, fontWeight: '700', color: '#5C4033', marginBottom: 4 },
  cardSubTitle: { fontSize: 12, color: '#8C7A6B', lineHeight: 18 },
  bannerAvatarBox: { width: 48, height: 48, borderRadius: 24, backgroundColor: '#FAF3EB', alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: '#EFE3D5' },
  radarCard: { backgroundColor: '#FFFFFF', borderRadius: 16, padding: 20, alignItems: 'center', marginBottom: 16, borderWidth: 1, borderColor: '#F0E6DC' },
  radarCircle: { width: 70, height: 70, borderRadius: 35, backgroundColor: '#FAF3EB', alignItems: 'center', justifyContent: 'center', marginBottom: 14, borderWidth: 1, borderColor: '#EFE3D5' },
  radarTitle: { fontSize: 15, fontWeight: '700', color: '#5C4033', marginBottom: 4, textAlign: 'center' },
  radarSub: { fontSize: 12, color: '#8C7A6B', textAlign: 'center', marginBottom: 16 },
  subHeader: { flexDirection: 'row', alignItems: 'center', marginBottom: 16 },
  backBtn: { width: 34, height: 34, borderRadius: 17, backgroundColor: '#FFFFFF', alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: '#F0E6DC', marginRight: 12 },
  subHeaderTitle: { fontSize: 16, fontWeight: '700', color: '#5C4033' },
  primaryBtn: { width: '100%', backgroundColor: '#D4AF37', borderRadius: 14, paddingVertical: 14, alignItems: 'center' },
  primaryBtnText: { color: '#FFFFFF', fontSize: 15, fontWeight: '600' },
  successCircle: { width: 60, height: 60, borderRadius: 30, backgroundColor: '#52C41A', alignItems: 'center', justifyContent: 'center', marginBottom: 12 },
  mainCard: { backgroundColor: '#FFFFFF', borderRadius: 16, padding: 16, marginBottom: 16, borderWidth: 1, borderColor: '#F0E6DC' },
  badgeText: { fontSize: 10, color: '#D4AF37', backgroundColor: '#FAF3EB', paddingHorizontal: 6, paddingVertical: 2, borderRadius: 6, overflow: 'hidden' },
  infoRow: { flexDirection: 'row', justifyContent: 'space-between', width: '100%', marginTop: 8 },
  infoLbl: { fontSize: 12, color: '#8C7A6B' },
  infoVal: { fontSize: 12, color: '#5C4033', fontWeight: '600' },
  outlineBtn: { backgroundColor: '#FFFFFF', borderRadius: 14, paddingVertical: 14, alignItems: 'center', borderWidth: 1, borderColor: '#EFE3D5' },
  outlineBtnText: { color: '#5C4033', fontSize: 14, fontWeight: '600' },
  tabContainer: { position: 'absolute', bottom: 0, left: 0, right: 0, flexDirection: 'row', height: 60, backgroundColor: '#FFFFFF', borderTopWidth: 1, borderTopColor: '#F0E6DC', alignItems: 'center', justifyContent: 'space-around', paddingBottom: 4 },
  tabItem: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  tabText: { fontSize: 11, color: '#A89F91', marginTop: 2 },
  activeTabText: { color: '#C29B75', fontWeight: '600' },
});