import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function WorldScreen() {
  const router = useRouter();
  // worldStep 控制 01-10 的子页面切换
  const [worldStep, setWorldStep] = useState(1);
  const [searchText, setSearchText] = useState('');

  const tabs = [
    { name: '首页', route: '/home', icon: 'home-outline' },
    { name: '创建角色', route: '/character', icon: 'people-outline' },
    { name: '聊天', route: '/chat', icon: 'chatbubble-outline' },
    { name: '世界', route: '/world', icon: 'globe' },
    { name: '我的', route: '/me', icon: 'person-outline' },
  ];

  return (
    <View style={styles.container}>
      
      {/* ================= 01 World 首页 ================= */}
      {worldStep === 1 && (
        <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
          <View style={styles.headerRow}>
            <Text style={styles.headerTitle}>World</Text>
            <View style={styles.headerActions}>
              <TouchableOpacity style={styles.iconButton} onPress={() => setWorldStep(9)}>
                <Ionicons name="search-outline" size={18} color="#8C7A6B" />
              </TouchableOpacity>
              <TouchableOpacity style={[styles.iconButton, { marginLeft: 8 }]} onPress={() => setWorldStep(5)}>
                <Ionicons name="calendar-outline" size={18} color="#8C7A6B" />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.onlineBadge}>
            <View style={styles.greenDot} />
            <Text style={styles.onlineText}>128 在线</Text>
          </View>

          <View style={styles.mainCard}>
            <Text style={styles.cardMainTitle}>连接全球 Soulara 伙伴</Text>
            <Text style={styles.cardSubTitle}>发现更多温暖的陪伴</Text>
            
            <TouchableOpacity style={styles.mapPlaceholder} onPress={() => setWorldStep(2)}>
              <Ionicons name="map-outline" size={32} color="#C29B75" />
              <View style={styles.mapButton}>
                <Ionicons name="navigate-outline" size={14} color="#FFFFFF" style={{ marginRight: 6 }} />
                <Text style={styles.mapButtonText}>点击打开全景雷达地图 (02)</Text>
              </View>
            </TouchableOpacity>
          </View>

          {/* 4 个网格入口，直接对应其他子页面 */}
          <View style={styles.gridContainer}>
            <TouchableOpacity style={styles.gridItem} onPress={() => setWorldStep(4)}>
              <View style={styles.gridIconCircle}><Ionicons name="globe-outline" size={20} color="#C29B75" /></View>
              <Text style={styles.gridText}>全球动态</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.gridItem} onPress={() => setWorldStep(5)}>
              <View style={styles.gridIconCircle}><Ionicons name="calendar-outline" size={20} color="#C29B75" /></View>
              <Text style={styles.gridText}>活动中心</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.gridItem} onPress={() => setWorldStep(6)}>
              <View style={styles.gridIconCircle}><Ionicons name="color-palette-outline" size={20} color="#C29B75" /></View>
              <Text style={styles.gridText}>创作者广场</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.gridItem} onPress={() => setWorldStep(7)}>
              <View style={styles.gridIconCircle}><Ionicons name="paper-plane-outline" size={20} color="#C29B75" /></View>
              <Text style={styles.gridText}>世界旅程</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>今日世界动态</Text>
            <TouchableOpacity onPress={() => setWorldStep(4)}><Text style={styles.moreText}>查看全部 &gt;</Text></TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.dynamicCard} onPress={() => setWorldStep(3)}>
            <View style={styles.dynamicUserRow}>
              <View style={styles.avatarMini}><Ionicons name="sparkles" size={14} color="#D4AF37" /></View>
              <View>
                <Text style={styles.dynamicUserName}>Luna 在日本东京分享了新的记忆 (点击看主页 03)</Text>
                <Text style={styles.dynamicTime}>2 分钟前</Text>
              </View>
            </View>
            <View style={styles.dynamicImgBox}><Text style={styles.dynamicImgText}>圣托里尼海岛风景照 (点击看详情 10)</Text></View>
          </TouchableOpacity>
        </ScrollView>
      )}

      {/* ================= 02 Nearby 附近伙伴 ================= */}
      {worldStep === 2 && (
        <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
          <View style={styles.subHeader}>
            <TouchableOpacity onPress={() => setWorldStep(1)} style={styles.backBtn}><Ionicons name="chevron-back" size={20} color="#5C4033" /></TouchableOpacity>
            <Text style={styles.subHeaderTitle}>Nearby 附近伙伴</Text>
          </View>
          <View style={[styles.mapPlaceholder, { height: 220, marginBottom: 20 }]}>
            <Ionicons name="location" size={40} color="#C29B75" />
            <Text style={{ color: '#8C7A6B', marginTop: 8, fontSize: 12 }}>2 km 内雷达扫描中...</Text>
          </View>
          <Text style={styles.sectionTitle}>附近的伙伴</Text>
          {[
            { name: 'Miko', dist: '1.2 km', lv: 'Lv.18' },
            { name: '小宇同学', dist: '1.5 km', lv: 'Lv.16' },
            { name: '星星睡不醒', dist: '1.8 km', lv: 'Lv.14' },
          ].map((item, idx) => (
            <TouchableOpacity key={idx} style={styles.listItem} onPress={() => setWorldStep(3)}>
              <View style={styles.avatarMini}><Ionicons name="person" size={14} color="#C29B75" /></View>
              <View style={{ flex: 1, marginLeft: 10 }}>
                <Text style={styles.listName}>{item.name}</Text>
                <Text style={styles.listSub}>{item.dist} · {item.lv}</Text>
              </View>
              <Ionicons name="chatbubble-outline" size={18} color="#C29B75" />
            </TouchableOpacity>
          ))}
        </ScrollView>
      )}

      {/* ================= 03 Friend Profile 好友主页 ================= */}
      {worldStep === 3 && (
        <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
          <View style={styles.subHeader}>
            <TouchableOpacity onPress={() => setWorldStep(1)} style={styles.backBtn}><Ionicons name="chevron-back" size={20} color="#5C4033" /></TouchableOpacity>
            <Text style={styles.subHeaderTitle}>Miko 的主页</Text>
          </View>
          <View style={styles.mainCard}>
            <View style={styles.avatarLarge}><Ionicons name="person" size={32} color="#C29B75" /></View>
            <Text style={styles.cardMainTitle}>Miko ♀</Text>
            <Text style={styles.cardSubTitle}>日本 · 东京 | Soulara ID: MIKO_1024</Text>
            <View style={styles.statsRow}>
              <View style={styles.statBox}><Text style={styles.statNum}>Lv.18</Text><Text style={styles.statLbl}>亲密度 86%</Text></View>
              <View style={styles.statBox}><Text style={styles.statNum}>32</Text><Text style={styles.statLbl}>共同记忆</Text></View>
              <View style={styles.statBox}><Text style={styles.statNum}>12</Text><Text style={styles.statLbl}>一起去过的地方</Text></View>
            </View>
            <View style={{ flexDirection: 'row', width: '100%', marginTop: 16 }}>
              <TouchableOpacity style={[styles.primaryBtn, { flex: 1, marginRight: 8 }]} onPress={() => router.replace('/chat')}>
                <Text style={styles.primaryBtnText}>发消息</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.outlineBtn, { flex: 1 }]}><Text style={styles.outlineBtnText}>送礼物</Text></TouchableOpacity>
            </View>
          </View>
          <Text style={styles.sectionTitle}>共同记忆</Text>
          <View style={styles.contentGrid}>
            <View style={styles.contentBox}><Ionicons name="image" size={20} color="#C29B75" /></View>
            <View style={styles.contentBox}><Ionicons name="image" size={20} color="#C29B75" /></View>
            <View style={styles.contentBox}><Ionicons name="image" size={20} color="#C29B75" /></View>
          </View>
        </ScrollView>
      )}

      {/* ================= 04 Global Feed 全球动态 ================= */}
      {worldStep === 4 && (
        <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
          <View style={styles.subHeader}>
            <TouchableOpacity onPress={() => setWorldStep(1)} style={styles.backBtn}><Ionicons name="chevron-back" size={20} color="#5C4033" /></TouchableOpacity>
            <Text style={styles.subHeaderTitle}>Global Feed 全球动态</Text>
          </View>
          <View style={styles.feedTabRow}>
            <Text style={styles.feedTab}>关注</Text>
            <Text style={[styles.feedTab, styles.activeFeedTab]}>推荐</Text>
            <Text style={styles.feedTab}>最新</Text>
          </View>
          <View style={styles.dynamicCard}>
            <View style={styles.dynamicUserRow}>
              <View style={styles.avatarMini}><Ionicons name="person" size={14} color="#C29B75" /></View>
              <View><Text style={styles.dynamicUserName}>Luna 在法国巴黎分享了照片</Text><Text style={styles.dynamicTime}>3 分钟前 · 巴黎，法国</Text></View>
            </View>
            <View style={[styles.dynamicImgBox, { height: 140 }]}><Ionicons name="image-outline" size={32} color="#C29B75" /></View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 12, borderTopWidth: 1, borderTopColor: '#F5ECE3', paddingTop: 8 }}>
              <Text style={{ fontSize: 12, color: '#8C7A6B' }}>❤️ 128</Text>
              <Text style={{ fontSize: 12, color: '#8C7A6B' }}>💬 36</Text>
              <Text style={{ fontSize: 12, color: '#8C7A6B' }}>📤 分享</Text>
            </View>
          </View>
        </ScrollView>
      )}

      {/* ================= 05 Events 活动中心 ================= */}
      {worldStep === 5 && (
        <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
          <View style={styles.subHeader}>
            <TouchableOpacity onPress={() => setWorldStep(1)} style={styles.backBtn}><Ionicons name="chevron-back" size={20} color="#5C4033" /></TouchableOpacity>
            <Text style={styles.subHeaderTitle}>Events 活动中心</Text>
          </View>
          <Text style={styles.sectionTitle}>正在进行</Text>
          <View style={styles.mainCard}>
            <Text style={styles.cardMainTitle}>春日樱花季</Text>
            <Text style={styles.cardSubTitle}>一起欣赏樱花，收集限定回忆吧！</Text>
            <TouchableOpacity style={styles.primaryBtn}><Text style={styles.primaryBtnText}>参加活动</Text></TouchableOpacity>
          </View>
          <Text style={styles.sectionTitle}>即将开始</Text>
          <View style={styles.listItem}><Text style={styles.listName}>全球摄影大赛</Text><Text style={styles.listSub}>06.01 - 06.30 &gt;</Text></View>
        </ScrollView>
      )}

      {/* ================= 06 Creator Square 创作者广场 ================= */}
      {worldStep === 6 && (
        <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
          <View style={styles.subHeader}>
            <TouchableOpacity onPress={() => setWorldStep(1)} style={styles.backBtn}><Ionicons name="chevron-back" size={20} color="#5C4033" /></TouchableOpacity>
            <Text style={styles.subHeaderTitle}>Creator Square 创作者广场</Text>
          </View>
          <View style={[styles.mainCard, { backgroundColor: '#FAF3EB' }]}><Text style={styles.cardMainTitle}>优秀创作者</Text><Text style={styles.cardSubTitle}>本周精选推荐</Text></View>
          <Text style={styles.sectionTitle}>热门创作者</Text>
          {['Kuma Studio', '森的小屋', '明月设计'].map((name, idx) => (
            <View key={idx} style={styles.listItem}>
              <View style={styles.avatarMini}><Ionicons name="brush" size={14} color="#C29B75" /></View>
              <View style={{ flex: 1, marginLeft: 10 }}><Text style={styles.listName}>{name}</Text><Text style={styles.listSub}>粉丝 12.8k</Text></View>
              <TouchableOpacity style={styles.smallBtn}><Text style={styles.smallBtnText}>关注</Text></TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      )}

      {/* ================= 07 Journey 世界探索 ================= */}
      {worldStep === 7 && (
        <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
          <View style={styles.subHeader}>
            <TouchableOpacity onPress={() => setWorldStep(1)} style={styles.backBtn}><Ionicons name="chevron-back" size/></TouchableOpacity>
            <Text style={styles.subHeaderTitle}>Journey 世界之旅</Text>
          </View>
          <View style={[styles.mapPlaceholder, { height: 200, marginBottom: 20 }]}><Ionicons name="earth" size={48} color="#C29B75" /></View>
          <View style={styles.statsRow}>
            <View style={styles.statBox}><Text style={styles.statNum}>23</Text><Text style={styles.statLbl}>去过的国家</Text></View>
            <View style={styles.statBox}><Text style={styles.statNum}>56</Text><Text style={styles.statLbl}>去过的城市</Text></View>
            <View style={styles.statBox}><Text style={styles.statNum}>128</Text><Text style={styles.statLbl}>打卡地点</Text></View>
          </View>
          <TouchableOpacity style={[styles.primaryBtn, { marginTop: 20 }]} onPress={() => setWorldStep(8)}><Text style={styles.primaryBtnText}>探索新地点 (进入国家社区 08)</Text></TouchableOpacity>
        </ScrollView>
      )}

      {/* ================= 08 Country Explorer 国家社区 ================= */}
      {worldStep === 8 && (
        <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
          <View style={styles.subHeader}>
            <TouchableOpacity onPress={() => setWorldStep(7)} style={styles.backBtn}><Ionicons name="chevron-back" size={20} color="#5C4033" /></TouchableOpacity>
            <Text style={styles.subHeaderTitle}>Country 国家社区</Text>
          </View>
          <View style={styles.mainCard}>
            <Text style={styles.cardMainTitle}>🇯🇵 日本</Text>
            <Text style={styles.cardSubTitle}>12,345 人在玩</Text>
            <TouchableOpacity style={styles.primaryBtn}><Text style={styles.primaryBtnText}>加入社区</Text></TouchableOpacity>
          </View>
          <Text style={styles.sectionTitle}>热门城市</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            {['东京', '大阪', '京都', '北海道'].map((city, idx) => (
              <TouchableOpacity key={idx} style={[styles.gridItem, { width: '23%' }]} onPress={() => setWorldStep(10)}>
                <View style={styles.avatarMini}><Ionicons name="location" size={14} color="#C29B75" /></View>
                <Text style={styles.gridText}>{city}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      )}

      {/* ================= 09 Search 搜索页面 ================= */}
      {worldStep === 9 && (
        <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
          <View style={styles.subHeader}>
            <TouchableOpacity onPress={() => setWorldStep(1)} style={styles.backBtn}><Ionicons name="chevron-back" size={20} color="#5C4033" /></TouchableOpacity>
            <TextInput style={styles.searchInput} placeholder="搜索玩家、角色或地点" value={searchText} onChangeText={setSearchText} />
            <TouchableOpacity onPress={() => setWorldStep(1)}><Text style={{ color: '#C29B75', fontSize: 13, marginLeft: 10 }}>取消</Text></TouchableOpacity>
          </View>
          <Text style={styles.sectionTitle}>最近搜索</Text>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 8, marginBottom: 20 }}>
            {['Miko', '东京', '巴黎', 'Kuma Studio'].map((tag, idx) => (
              <View key={idx} style={styles.tagBox}><Text style={styles.tagText}>{tag}</Text></View>
            ))}
          </View>
          <Text style={styles.sectionTitle}>热门搜索</Text>
          {['Luna', 'Miko', '小宇同学', '日本'].map((item, idx) => (
            <TouchableOpacity key={idx} style={styles.listItem} onPress={() => setWorldStep(3)}>
              <Text style={styles.listName}>{idx + 1}.  {item}</Text>
              <Text style={styles.listSub}>980 人在玩</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      )}

      {/* ================= 10 World Detail 地点详情 ================= */}
      {worldStep === 10 && (
        <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
          <View style={styles.subHeader}>
            <TouchableOpacity onPress={() => setWorldStep(1)} style={styles.backBtn}><Ionicons name="chevron-back" size={20} color="#5C4033" /></TouchableOpacity>
            <Text style={styles.subHeaderTitle}>圣托里尼岛</Text>
          </View>
          <View style={[styles.mapPlaceholder, { height: 160, marginBottom: 16 }]}><Ionicons name="image" size={36} color="#C29B75" /></View>
          <Text style={styles.cardMainTitle}>圣托里尼岛</Text>
          <Text style={styles.cardSubTitle}>Santorini, Greece</Text>
          <View style={styles.statsRow}>
            <View style={styles.statBox}><Text style={styles.statNum}>22°C</Text><Text style={styles.statLbl}>天气 晴朗</Text></View>
            <View style={styles.statBox}><Text style={styles.statNum}>16:45</Text><Text style={styles.statLbl}>当地时间</Text></View>
            <View style={styles.statBox}><Text style={styles.statNum}>Lv.15+</Text><Text style={styles.statLbl}>推荐等级</Text></View>
          </View>
          <TouchableOpacity style={[styles.primaryBtn, { marginTop: 20 }]}><Text style={styles.primaryBtnText}>打卡这个地方</Text></TouchableOpacity>
        </ScrollView>
      )}

      {/* 底部固定 5 个核心 Tab 导航 */}
      <View style={styles.tabContainer}>
        {tabs.map((tab, index) => {
          const isActive = tab.route === '/world';
          return (
            <TouchableOpacity
              key={index}
              style={styles.tabItem}
              activeOpacity={0.8}
              onPress={() => {
                if (tab.route === '/world') {
                  setWorldStep(1); // 点击世界 Tab 自动回到 01 主页
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
  headerRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 },
  headerTitle: { fontSize: 20, fontWeight: '700', color: '#5C4033' },
  headerActions: { flexDirection: 'row' },
  iconButton: { width: 34, height: 34, borderRadius: 17, backgroundColor: '#FFFFFF', alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: '#F0E6DC' },
  onlineBadge: { flexDirection: 'row', alignItems: 'center', marginBottom: 16 },
  greenDot: { width: 8, height: 8, borderRadius: 4, backgroundColor: '#52C41A', marginRight: 6 },
  onlineText: { fontSize: 12, color: '#8C7A6B', fontWeight: '500' },
  mainCard: { backgroundColor: '#FFFFFF', borderRadius: 16, padding: 16, alignItems: 'center', marginBottom: 20, borderWidth: 1, borderColor: '#F0E6DC' },
  cardMainTitle: { fontSize: 16, fontWeight: '700', color: '#5C4033', marginBottom: 4 },
  cardSubTitle: { fontSize: 12, color: '#8C7A6B', marginBottom: 16 },
  mapPlaceholder: { width: '100%', height: 130, backgroundColor: '#FAF3EB', borderRadius: 12, alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: '#EFE3D5' },
  mapButton: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#C29B75', paddingHorizontal: 16, paddingVertical: 8, borderRadius: 20, marginTop: 10 },
  mapButtonText: { color: '#FFFFFF', fontSize: 12, fontWeight: '600' },
  gridContainer: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 },
  gridItem: { width: '23%', backgroundColor: '#FFFFFF', borderRadius: 14, paddingVertical: 14, alignItems: 'center', borderWidth: 1, borderColor: '#F0E6DC' },
  gridIconCircle: { width: 36, height: 36, borderRadius: 18, backgroundColor: '#FAF3EB', alignItems: 'center', justifyContent: 'center', marginBottom: 6 },
  gridText: { fontSize: 11, color: '#5C4033', fontWeight: '500' },
  sectionHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 },
  sectionTitle: { fontSize: 15, fontWeight: '700', color: '#5C4033', marginBottom: 10 },
  moreText: { fontSize: 12, color: '#C29B75' },
  dynamicCard: { backgroundColor: '#FFFFFF', borderRadius: 16, padding: 16, borderWidth: 1, borderColor: '#F0E6DC', marginBottom: 12 },
  dynamicUserRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 12 },
  avatarMini: { width: 28, height: 28, borderRadius: 14, backgroundColor: '#FAF3EB', alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: '#EFE3D5', marginRight: 8 },
  dynamicUserName: { fontSize: 13, fontWeight: '600', color: '#5C4033' },
  dynamicTime: { fontSize: 11, color: '#A89F91' },
  dynamicImgBox: { height: 70, backgroundColor: '#FAF3EB', borderRadius: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: '#EFE3D5' },
  dynamicImgText: { fontSize: 13, color: '#8C7A6B', fontWeight: '500' },
  subHeader: { flexDirection: 'row', alignItems: 'center', marginBottom: 16 },
  backBtn: { width: 34, height: 34, borderRadius: 17, backgroundColor: '#FFFFFF', alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: '#F0E6DC', marginRight: 12 },
  subHeaderTitle: { fontSize: 16, fontWeight: '700', color: '#5C4033' },
  listItem: { backgroundColor: '#FFFFFF', borderRadius: 12, padding: 14, flexDirection: 'row', alignItems: 'center', marginBottom: 8, borderWidth: 1, borderColor: '#F0E6DC' },
  listName: { fontSize: 13, fontWeight: '600', color: '#5C4033' },
  listSub: { fontSize: 11, color: '#A89F91', marginTop: 2 },
  avatarLarge: { width: 64, height: 64, borderRadius: 32, backgroundColor: '#FAF3EB', alignItems: 'center', justifyContent: 'center', marginBottom: 10, borderWidth: 1, borderColor: '#EFE3D5' },
  statsRow: { flexDirection: 'row', justifyContent: 'space-around', width: '100%', borderTopWidth: 1, borderTopColor: '#F5ECE3', paddingTop: 12, marginTop: 10 },
  statBox: { alignItems: 'center' },
  statNum: { fontSize: 14, fontWeight: '700', color: '#5C4033' },
  statLbl: { fontSize: 11, color: '#8C7A6B', marginTop: 2 },
  primaryBtn: { width: '100%', backgroundColor: '#D4AF37', borderRadius: 12, paddingVertical: 12, alignItems: 'center' },
  primaryBtnText: { color: '#FFFFFF', fontSize: 14, fontWeight: '600' },
  outlineBtn: { backgroundColor: '#FFFFFF', borderRadius: 12, paddingVertical: 12, alignItems: 'center', borderWidth: 1, borderColor: '#EFE3D5' },
  outlineBtnText: { color: '#5C4033', fontSize: 14, fontWeight: '600' },
  contentGrid: { flexDirection: 'row', justifyContent: 'space-between' },
  contentBox: { width: '32%', height: 90, backgroundColor: '#FFFFFF', borderRadius: 10, alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: '#F0E6DC' },
  feedTabRow: { flexDirection: 'row', marginBottom: 16, borderBottomWidth: 1, borderBottomColor: '#F0E6DC', paddingBottom: 8 },
  feedTab: { fontSize: 14, color: '#A89F91', marginRight: 20 },
  activeFeedTab: { color: '#5C4033', fontWeight: '700' },
  smallBtn: { backgroundColor: '#FAF3EB', paddingHorizontal: 12, paddingVertical: 6, borderRadius: 10, borderWidth: 1, borderColor: '#EFE3D5' },
  smallBtnText: { fontSize: 11, color: '#C29B75', fontWeight: '600' },
  searchInput: { flex: 1, backgroundColor: '#FFFFFF', borderRadius: 16, paddingHorizontal: 14, paddingVertical: 8, fontSize: 13, borderWidth: 1, borderColor: '#F0E6DC', color: '#5C4033' },
  tagBox: { backgroundColor: '#FFFFFF', paddingHorizontal: 12, paddingVertical: 6, borderRadius: 12, borderWidth: 1, borderColor: '#F0E6DC' },
  tagText: { fontSize: 12, color: '#5C4033' },
  tabContainer: { position: 'absolute', bottom: 0, left: 0, right: 0, flexDirection: 'row', height: 60, backgroundColor: '#FFFFFF', borderTopWidth: 1, borderTopColor: '#F0E6DC', alignItems: 'center', justifyContent: 'space-around', paddingBottom: 4 },
  tabItem: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  tabText: { fontSize: 11, color: '#A89F91', marginTop: 2 },
  activeTabText: { color: '#C29B75', fontWeight: '600' },
});