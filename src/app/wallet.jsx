import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import {
    Alert,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

export default function WalletScreen() {
  const router = useRouter();
  // 视图状态：'01' 到 '08' 对应设计图的八个核心子模块
  const [currentView, setCurrentView] = useState('01');

  // 充值与提现选择状态
  const [selectedRecharge, setSelectedRecharge] = useState('680');
  const [selectedWithdraw, setSelectedWithdraw] = useState('50');
  const [selectedPlan, setSelectedPlan] = useState('季度计划');

  return (
    <SafeAreaView style={styles.container}>
      {/* 顶栏：非首页时显示返回按钮与对应标题 */}
      <View style={styles.header}>
        {currentView !== '01' ? (
          <TouchableOpacity style={styles.backBtn} onPress={() => setCurrentView('01')}>
            <Ionicons name="chevron-back" size={22} color="#5A3E2B" />
          </TouchableOpacity>
        ) : (
          <View style={{ width: 32 }} />
        )}

        <Text style={styles.headerTitle}>
          {currentView === '01' && 'Wallet'}
          {currentView === '02' && 'Soul Coin 详情'}
          {currentView === '03' && 'VIP 会员中心'}
          {currentView === '04' && 'Membership 订阅'}
          {currentView === '05' && 'Rewards 奖励中心'}
          {currentView === '06' && 'Transactions 交易记录'}
          {currentView === '07' && 'Recharge 充值'}
          {currentView === '08' && 'Withdraw 提现'}
        </Text>

        <View style={styles.headerRightIcons}>
          {currentView === '01' && (
            <TouchableOpacity style={styles.iconBtn} onPress={() => setCurrentView('06')}>
              <Ionicons name="time-outline" size={18} color="#5A3E2B" />
            </TouchableOpacity>
          )}
          {currentView !== '01' && <View style={{ width: 32 }} />}
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollArea} showsVerticalScrollIndicator={false}>
        
        {/* ==================== 01 Wallet 首页 ==================== */}
        {currentView === '01' && (
          <View>
            <View style={styles.balanceHeroCard}>
              <Text style={styles.balanceLabel}>Soul Coin</Text>
              <Text style={styles.balanceNum}>🪙 12,580</Text>
              <Text style={styles.balanceSub}>≈ ¥125.80</Text>
            </View>

            <View style={styles.actionRow}>
              <TouchableOpacity style={styles.actionBtn} onPress={() => setCurrentView('07')}>
                <View style={styles.actionIconCircle}><Ionicons name="wallet" size={18} color="#8C5830" /></View>
                <Text style={styles.actionText}>充值</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.actionBtn} onPress={() => setCurrentView('08')}>
                <View style={styles.actionIconCircle}><Ionicons name="cash" size={18} color="#8C5830" /></View>
                <Text style={styles.actionText}>提现</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.actionBtn} onPress={() => setCurrentView('06')}>
                <View style={styles.actionIconCircle}><Ionicons name="document-text" size={18} color="#8C5830" /></View>
                <Text style={styles.actionText}>订单</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.actionBtn} onPress={() => alert('卡券包功能')}>
                <View style={styles.actionIconCircle}><Ionicons name="gift" size={18} color="#8C5830" /></View>
                <Text style={styles.actionText}>卡券包</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.vipBannerCard} onPress={() => setCurrentView('03')}>
              <View style={{ flex: 1 }}>
                <Text style={styles.vipBannerTitle}>Soulara VIP <Text style={styles.vipBannerLv}>Lv.3</Text></Text>
                <Text style={styles.vipBannerDate}>有效期至 2025.06.18</Text>
              </View>
              <View style={styles.vipCheckBtn}><Text style={styles.vipCheckBtnText}>查看权益</Text></View>
            </TouchableOpacity>

            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>我的资产</Text>
              <TouchableOpacity onPress={() => setCurrentView('02')}><Text style={styles.linkText}>查看全部 &gt;</Text></TouchableOpacity>
            </View>

            {[
              { name: 'Soul Gem', val: '860', rmb: '≈ ¥86.00' },
              { name: 'Memory Crystal', val: '120', rmb: '≈ ¥12.00' }
            ].map((asset, i) => (
              <View key={i} style={styles.assetItemRow}>
                <View style={styles.assetIconMock}><Ionicons name="diamond" size={16} color="#C29B75" /></View>
                <View style={{ flex: 1, marginLeft: 12 }}>
                  <Text style={styles.assetName}>{asset.name}</Text>
                </View>
                <View style={{ alignItems: 'flex-end' }}>
                  <Text style={styles.assetVal}>{asset.val}</Text>
                  <Text style={styles.assetRmb}>{asset.rmb}</Text>
                </View>
              </View>
            ))}
          </View>
        )}

        {/* ==================== 02 Soul Coin 详情 ==================== */}
        {currentView === '02' && (
          <View>
            <View style={styles.balanceHeroCard}>
              <Text style={styles.balanceLabel}>Soul Coin 余额</Text>
              <Text style={styles.balanceNum}>🪙 12,580</Text>
              <Text style={styles.balanceSub}>≈ ¥125.80</Text>
            </View>

            <View style={styles.actionRow}>
              <TouchableOpacity style={styles.actionBtn} onPress={() => setCurrentView('07')}>
                <View style={styles.actionIconCircle}><Ionicons name="wallet" size={18} color="#8C5830" /></View>
                <Text style={styles.actionText}>充值</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.actionBtn} onPress={() => setCurrentView('08')}>
                <View style={styles.actionIconCircle}><Ionicons name="cash" size={18} color="#8C5830" /></View>
                <Text style={styles.actionText}>提现</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.actionBtn} onPress={() => setCurrentView('05')}>
                <View style={styles.actionIconCircle}><Ionicons name="gift" size={18} color="#8C5830" /></View>
                <Text style={styles.actionText}>赚取</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.actionBtn} onPress={() => setCurrentView('06')}>
                <View style={styles.actionIconCircle}><Ionicons name="time" size={18} color="#8C5830" /></View>
                <Text style={styles.actionText}>使用记录</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.infoBoxCard}>
              <Text style={styles.infoBoxTitle}>什么是 Soul Coin?</Text>
              <Text style={styles.infoBoxDesc}>Soul Coin 是 Soulara 世界的通用货币，可用于购买商品、赠送礼物、解锁特权等。</Text>
              <Text style={styles.linkText}>了解更多 &gt;</Text>
            </View>

            <Text style={styles.sectionTitle}>获取 Soul Coin</Text>
            <TouchableOpacity style={styles.earnTaskRow} onPress={() => setCurrentView('05')}>
              <View style={styles.earnIconMock}><Ionicons name="calendar" size={16} color="#C29B75" /></View>
              <View style={{ flex: 1, marginLeft: 12 }}>
                <Text style={styles.earnTitle}>每日签到</Text>
              </View>
              <Text style={styles.earnReward}>+50</Text>
              <View style={styles.goTaskBtn}><Text style={styles.goTaskBtnText}>去签到</Text></View>
            </TouchableOpacity>
          </View>
        )}

        {/* ==================== 03 VIP 会员中心 ==================== */}
        {currentView === '03' && (
          <View>
            <View style={styles.vipCenterCard}>
              <Text style={styles.vipCenterHeader}>Soulara VIP</Text>
              <Text style={styles.vipCenterLv}>Lv.3</Text>
              <View style={styles.progressBarMock}>
                <View style={styles.progressFillMock} />
              </View>
              <Text style={styles.progressText}>680 / 1000 成长值       Lv.4</Text>
            </View>

            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>VIP 等级权益对比</Text>
              <TouchableOpacity onPress={() => setCurrentView('04')}><Text style={styles.linkText}>查看全部权益 &gt;</Text></TouchableOpacity>
            </View>

            <View style={styles.tableCard}>
              {[
                { name: '每日 Soul Coin', lv1: '+50', lv2: '+100', lv3: '+150', lv4: '+200' },
                { name: '专属徽章', lv1: '✔️', lv2: '✔️', lv3: '✔️', lv4: '✔️' },
                { name: '限定礼物折扣', lv1: '95折', lv2: '9折', lv3: '85折', lv4: '8折' },
                { name: 'AI 记忆扩容', lv1: '1GB', lv2: '5GB', lv3: '10GB', lv4: '20GB' }
              ].map((row, idx) => (
                <View key={idx} style={styles.tableRow}>
                  <Text style={styles.tableColName}>{row.name}</Text>
                  <Text style={styles.tableColVal}>{row.lv1}</Text>
                  <Text style={styles.tableColVal}>{row.lv2}</Text>
                  <Text style={styles.tableColValActive}>{row.lv3}</Text>
                  <Text style={styles.tableColVal}>{row.lv4}</Text>
                </View>
              ))}
            </View>

            <TouchableOpacity style={styles.primaryButton} onPress={() => setCurrentView('04')}>
              <Text style={styles.primaryButtonText}>去升级</Text>
            </TouchableOpacity>
          </View>
        )}

        {/* ==================== 04 Membership 订阅 ==================== */}
        {currentView === '04' && (
          <View>
            <Text style={styles.subMainTitle}>Membership 订阅</Text>
            <Text style={styles.subMainSub}>选择适合你的会员计划</Text>

            <View style={styles.premiumBannerCard}>
              <Text style={styles.premiumTitle}>👑 Soulara Premium</Text>
            </View>

            <View style={styles.planCardRow}>
              {[
                { name: '月度计划', price: '¥ 28', unit: '/月', sub: '每月自动续费' },
                { name: '季度计划', price: '¥ 68', unit: '/季', sub: '约 ¥22.7 /月', popular: true },
                { name: '年度计划', price: '¥ 198', unit: '/年', sub: '约 ¥16.5 /月', discount: '享8折优惠' }
              ].map((p, i) => (
                <TouchableOpacity 
                  key={i} 
                  style={[styles.planCard, selectedPlan === p.name && styles.planCardActive]}
                  onPress={() => setSelectedPlan(p.name)}
                >
                  {p.popular && <View style={styles.badgePopular}><Text style={styles.badgeText}>推荐</Text></View>}
                  {p.discount && <View style={styles.badgeDiscount}><Text style={styles.badgeText}>{p.discount}</Text></View>}
                  <Text style={styles.planName}>{p.name}</Text>
                  <Text style={styles.planPrice}>{p.price}<Text style={styles.planUnit}>{p.unit}</Text></Text>
                  <Text style={styles.planSub}>{p.sub}</Text>
                  <View style={[styles.planBtn, selectedPlan === p.name && styles.planBtnActive]}><Text style={[styles.planBtnText, selectedPlan === p.name && styles.planBtnTextActive]}>订阅</Text></View>
                </TouchableOpacity>
              ))}
            </View>

            <Text style={styles.sectionTitle}>会员专属权益</Text>
            <View style={styles.gridRow}>
              {['专属徽章', '限定角色', '每月礼包', '双倍奖励', '更多权益'].map(perk => (
                <View key={perk} style={styles.perkBadge}>
                  <Ionicons name="star" size={16} color="#C29B75" style={{ marginBottom: 4 }} />
                  <Text style={styles.perkText}>{perk}</Text>
                </View>
              ))}
            </View>
          </View>
        )}

        {/* ==================== 05 Rewards 奖励中心 ==================== */}
        {currentView === '05' && (
          <View>
            <View style={styles.feedTabsRow}>
              <Text style={styles.feedTabActive}>每日任务</Text>
              <Text style={styles.feedTabInactive}>成就任务</Text>
              <Text style={styles.feedTabInactive}>活动奖励</Text>
            </View>

            <View style={styles.rewardBoxCard}>
              <Text style={styles.rewardBoxTitle}>每日活跃奖励</Text>
              <Text style={styles.rewardBoxSub}>完成任务领取 Soul Coin</Text>
              <View style={styles.rewardProgressMock}>
                <View style={styles.rewardProgressFill} />
              </View>
            </View>

            {[
              { task: '登录 Soulara', pts: '+10', status: '领取' },
              { task: '与 AI 聊天 1 次', pts: '+20', status: '去完成' },
              { task: '赠送 1 个礼物', pts: '+20', status: '去完成' },
              { task: '探索世界 1 次', pts: '+20', status: '去完成' },
              { task: '分享动态 1 次', pts: '+10', status: '去完成' }
            ].map((t, idx) => (
              <View key={idx} style={styles.taskItemRow}>
                <View style={styles.taskIconMock}><Ionicons name="checkmark-circle" size={16} color="#C29B75" /></View>
                <View style={{ flex: 1, marginLeft: 12 }}>
                  <Text style={styles.taskTitle}>{t.task}</Text>
                  <Text style={styles.taskPts}>{t.pts}</Text>
                </View>
                <TouchableOpacity style={[styles.taskBtn, t.status === '领取' && styles.taskBtnClaim]} onPress={() => alert(`${t.status}成功`)}>
                  <Text style={[styles.taskBtnText, t.status === '领取' && styles.taskBtnTextClaim]}>{t.status}</Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        )}

        {/* ==================== 06 Transactions 交易记录 ==================== */}
        {currentView === '06' && (
          <View>
            <View style={styles.feedTabsRow}>
              <Text style={styles.feedTabActive}>全部</Text>
              <Text style={styles.feedTabInactive}>收入</Text>
              <Text style={styles.feedTabInactive}>支出</Text>
            </View>

            <Text style={styles.sectionTitle}>2024年 5月</Text>
            {[
              { title: '购买角色 - 小王子 Leo', time: '05-28 14:32', amt: '-2,980', type: 'out' },
              { title: '每日签到奖励', time: '05-28 09:10', amt: '+50', type: 'in' },
              { title: '赠送礼物 - 星星灯', time: '05-27 21:45', amt: '-520', type: 'out' },
              { title: '完成任务奖励', time: '05-27 18:22', amt: '+30', type: 'in' },
              { title: '余额充值', time: '05-26 16:08', amt: '+6,000', type: 'in' }
            ].map((tx, idx) => (
              <View key={idx} style={styles.txItemRow}>
                <View style={styles.txIconMock}><Ionicons name={tx.type === 'in' ? 'add' : 'remove'} size={14} color="#C29B75" /></View>
                <View style={{ flex: 1, marginLeft: 12 }}>
                  <Text style={styles.txTitle}>{tx.title}</Text>
                  <Text style={styles.txTime}>{tx.time}</Text>
                </View>
                <Text style={[styles.txAmt, tx.type === 'in' ? styles.txAmtIn : styles.txAmtOut]}>{tx.amt}</Text>
              </View>
            ))}
          </View>
        )}

        {/* ==================== 07 Recharge 充值 ==================== */}
        {currentView === '07' && (
          <View>
            <View style={styles.rechargeTopCard}>
              <Text style={styles.rechargeTopLbl}>当前余额</Text>
              <Text style={styles.rechargeTopVal}>🪙 12,580</Text>
            </View>

            <Text style={styles.sectionTitle}>选择充值面额</Text>
            <View style={styles.rechargeGrid}>
              {[
                { coin: '60', gift: '', rmb: '¥6' },
                { coin: '300', gift: '送 30', rmb: '¥30' },
                { coin: '680', gift: '送 80', rmb: '¥68' },
                { coin: '1280', gift: '送 180', rmb: '¥128' },
                { coin: '3280', gift: '送 500', rmb: '¥328' },
                { coin: '6480', gift: '送 1000', rmb: '¥648' }
              ].map((rc, i) => (
                <TouchableOpacity 
                  key={i} 
                  style={[styles.rechargeCard, selectedRecharge === rc.coin && styles.rechargeCardActive]}
                  onPress={() => setSelectedRecharge(rc.coin)}
                >
                  {rc.gift !== '' && <View style={styles.giftBadge}><Text style={styles.giftBadgeText}>{rc.gift}</Text></View>}
                  <Text style={styles.rechargeCoin}>🪙 {rc.coin}</Text>
                  <Text style={styles.rechargeRmb}>{rc.rmb}</Text>
                </TouchableOpacity>
              ))}
            </View>

            <Text style={styles.sectionTitle}>支付方式</Text>
            {[
              { name: '微信支付' },
              { name: '支付宝支付' },
              { name: 'Apple Pay' }
            ].map((pay, i) => (
              <View key={i} style={styles.payItemRow}>
                <Ionicons name="radio-button-on" size={16} color="#C29B75" style={{ marginRight: 10 }} />
                <Text style={styles.payName}>{pay.name}</Text>
              </View>
            ))}

            <TouchableOpacity style={styles.primaryButton} onPress={() => { Alert.alert('充值成功'); setCurrentView('01'); }}>
              <Text style={styles.primaryButtonText}>立即充值</Text>
            </TouchableOpacity>
          </View>
        )}

        {/* ==================== 08 Withdraw 提现 ==================== */}
        {currentView === '08' && (
          <View>
            <View style={styles.withdrawCard}>
              <View>
                <Text style={styles.withdrawLbl}>可提现余额 (Soul Coin)</Text>
                <Text style={styles.withdrawNum}>6,580</Text>
                <Text style={styles.withdrawSub}>≈ ¥65.80</Text>
              </View>
              <View style={styles.withdrawAvatarMock}><Ionicons name="person" size={24} color="#C29B75" /></View>
            </View>

            <Text style={styles.sectionTitle}>提现到</Text>
            <View style={styles.accountBoundRow}>
              <Ionicons name="shield-checkmark" size={18} color="#10B981" style={{ marginRight: 8 }} />
              <View style={{ flex: 1 }}>
                <Text style={styles.boundTitle}>支付宝 (已绑定)</Text>
                <Text style={styles.boundSub}>zhang***@163.com</Text>
              </View>
              <Ionicons name="chevron-forward" size={16} color="#8C5830" />
            </View>

            <Text style={styles.sectionTitle}>提现金额</Text>
            <View style={styles.withdrawGrid}>
              {['10', '30', '50', '100', '其他'].map(amt => (
                <TouchableOpacity 
                  key={amt} 
                  style={[styles.withdrawAmtBtn, selectedWithdraw === amt && styles.withdrawAmtBtnActive]}
                  onPress={() => setSelectedWithdraw(amt)}
                >
                  <Text style={[styles.withdrawAmtText, selectedWithdraw === amt && styles.withdrawAmtTextActive]}>¥{amt}</Text>
                </TouchableOpacity>
              ))}
            </View>
            <Text style={styles.withdrawTip}>预计到账 ¥{selectedWithdraw}.00 (每天可提现 1 次，单笔量低 10 元)</Text>

            <TouchableOpacity style={styles.primaryButton} onPress={() => { Alert.alert('提现申请已提交'); setCurrentView('01'); }}>
              <Text style={styles.primaryButtonText}>确认提现</Text>
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
  balanceHeroCard: {
    backgroundColor: '#FFFDF9',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#EFE3D5',
    marginBottom: 16
  },
  balanceLabel: { fontSize: 12, color: '#8C6D53' },
  balanceNum: { fontSize: 26, fontWeight: 'bold', color: '#4A3321', marginVertical: 4 },
  balanceSub: { fontSize: 11, color: '#9E826C' },
  actionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#FFFDF9',
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: '#EFE3D5',
    marginBottom: 16
  },
  actionBtn: { alignItems: 'center', flex: 1 },
  actionIconCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F3E8DC',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 6,
    borderWidth: 1,
    borderColor: '#E4D3C0'
  },
  actionText: { fontSize: 12, fontWeight: '600', color: '#5A3E2B' },
  vipBannerCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3E8DC',
    borderRadius: 14,
    padding: 14,
    borderWidth: 1,
    borderColor: '#E4D3C0',
    marginBottom: 16
  },
  vipBannerTitle: { fontSize: 13, fontWeight: 'bold', color: '#4A3321' },
  vipBannerLv: { color: '#D97706' },
  vipBannerDate: { fontSize: 10, color: '#8C6D53', marginTop: 2 },
  vipCheckBtn: { backgroundColor: '#C29B75', paddingHorizontal: 12, paddingVertical: 6, borderRadius: 12 },
  vipCheckBtnText: { color: '#FFF', fontSize: 11, fontWeight: 'bold' },
  sectionHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 },
  sectionTitle: { fontSize: 14, fontWeight: 'bold', color: '#4A3321', marginBottom: 8, marginTop: 6 },
  linkText: { fontSize: 12, color: '#C29B75', fontWeight: '600' },
  assetItemRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFDF9',
    borderRadius: 12,
    padding: 12,
    borderWidth: 1,
    borderColor: '#EFE3D5',
    marginBottom: 8
  },
  assetIconMock: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#F3E8DC',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E4D3C0'
  },
  assetName: { fontSize: 13, fontWeight: 'bold', color: '#4A3321' },
  assetVal: { fontSize: 13, fontWeight: 'bold', color: '#4A3321' },
  assetRmb: { fontSize: 10, color: '#9E826C' },
  infoBoxCard: {
    backgroundColor: '#FFFDF9',
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: '#EFE3D5',
    marginBottom: 16
  },
  infoBoxTitle: { fontSize: 14, fontWeight: 'bold', color: '#4A3321', marginBottom: 6 },
  infoBoxDesc: { fontSize: 12, color: '#6B503D', lineHeight: 18, marginBottom: 8 },
  earnTaskRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFDF9',
    borderRadius: 12,
    padding: 12,
    borderWidth: 1,
    borderColor: '#EFE3D5',
    marginBottom: 8
  },
  earnIconMock: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#F3E8DC',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E4D3C0'
  },
  earnTitle: { fontSize: 13, fontWeight: 'bold', color: '#4A3321' },
  earnReward: { fontSize: 12, color: '#D97706', fontWeight: 'bold', marginRight: 10 },
  goTaskBtn: { backgroundColor: '#F3E8DC', paddingHorizontal: 10, paddingVertical: 6, borderRadius: 10 },
  goTaskBtnText: { fontSize: 11, color: '#5A3E2B', fontWeight: 'bold' },
  vipCenterCard: {
    backgroundColor: '#2D2218',
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
    marginBottom: 16
  },
  vipCenterHeader: { fontSize: 14, color: '#E4D3C0' },
  vipCenterLv: { fontSize: 24, fontWeight: 'bold', color: '#FCD34D', marginVertical: 4 },
  progressBarMock: { width: '100%', height: 6, backgroundColor: '#4A3D30', borderRadius: 3, marginVertical: 10, overflow: 'hidden' },
  progressFillMock: { width: '68%', height: '100%', backgroundColor: '#FCD34D' },
  progressText: { fontSize: 11, color: '#C29B75' },
  tableCard: {
    backgroundColor: '#FFFDF9',
    borderRadius: 16,
    padding: 12,
    borderWidth: 1,
    borderColor: '#EFE3D5',
    marginBottom: 16
  },
  tableRow: { flexDirection: 'row', paddingVertical: 8, borderBottomWidth: 1, borderBottomColor: '#F8F2EC', alignItems: 'center' },
  tableColName: { flex: 2, fontSize: 12, color: '#5A3E2B', fontWeight: '600' },
  tableColVal: { flex: 1, textAlign: 'center', fontSize: 11, color: '#9E826C' },
  tableColValActive: { flex: 1, textAlign: 'center', fontSize: 11, color: '#D97706', fontWeight: 'bold' },
  primaryButton: {
    backgroundColor: '#C29B75',
    borderRadius: 20,
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: 10
  },
  primaryButtonText: { color: '#FFF', fontSize: 14, fontWeight: 'bold' },
  subMainTitle: { fontSize: 18, fontWeight: 'bold', color: '#4A3321', textAlign: 'center' },
  subMainSub: { fontSize: 12, color: '#8C6D53', textAlign: 'center', marginBottom: 16 },
  premiumBannerCard: {
    backgroundColor: '#FFFDF9',
    borderRadius: 14,
    padding: 14,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#EFE3D5',
    marginBottom: 16
  },
  premiumTitle: { fontSize: 14, fontWeight: 'bold', color: '#4A3321' },
  planCardRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 16 },
  planCard: {
    flex: 1,
    backgroundColor: '#FFFDF9',
    borderRadius: 14,
    padding: 12,
    alignItems: 'center',
    marginHorizontal: 3,
    borderWidth: 1,
    borderColor: '#EFE3D5',
    position: 'relative'
  },
  planCardActive: { borderColor: '#C29B75', backgroundColor: '#F9F1EA' },
  badgePopular: { position: 'absolute', top: -6, right: 6, backgroundColor: '#D97706', paddingHorizontal: 6, paddingVertical: 2, borderRadius: 6 },
  badgeDiscount: { position: 'absolute', top: -6, right: 6, backgroundColor: '#10B981', paddingHorizontal: 6, paddingVertical: 2, borderRadius: 6 },
  badgeText: { fontSize: 9, color: '#FFF', fontWeight: 'bold' },
  planName: { fontSize: 12, fontWeight: 'bold', color: '#4A3321', marginBottom: 4 },
  planPrice: { fontSize: 15, fontWeight: 'bold', color: '#C29B75', marginBottom: 2 },
  planUnit: { fontSize: 10 },
  planSub: { fontSize: 9, color: '#9E826C', marginBottom: 10 },
  planBtn: { backgroundColor: '#F3E8DC', paddingHorizontal: 12, paddingVertical: 4, borderRadius: 10 },
  planBtnActive: { backgroundColor: '#C29B75' },
  planBtnText: { fontSize: 10, color: '#5A3E2B', fontWeight: 'bold' },
  planBtnTextActive: { color: '#FFF' },
  perkBadge: {
    flex: 1,
    backgroundColor: '#FFFDF9',
    borderRadius: 12,
    paddingVertical: 10,
    alignItems: 'center',
    marginHorizontal: 2,
    borderWidth: 1,
    borderColor: '#EFE3D5'
  },
  perkText: { fontSize: 10, fontWeight: '600', color: '#5A3E2B' },
  feedTabsRow: { flexDirection: 'row', justifyContent: 'space-around', marginBottom: 14 },
  feedTabActive: { fontSize: 13, fontWeight: 'bold', color: '#4A3321', borderBottomWidth: 2, borderBottomColor: '#C29B75', paddingBottom: 2 },
  feedTabInactive: { fontSize: 13, color: '#9E826C' },
  rewardBoxCard: {
    backgroundColor: '#FFFDF9',
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: '#EFE3D5',
    marginBottom: 16
  },
  rewardBoxTitle: { fontSize: 14, fontWeight: 'bold', color: '#4A3321' },
  rewardBoxSub: { fontSize: 11, color: '#9E826C', marginBottom: 10 },
  rewardProgressMock: { width: '100%', height: 6, backgroundColor: '#EFE3D5', borderRadius: 3, overflow: 'hidden' },
  rewardProgressFill: { width: '40%', height: '100%', backgroundColor: '#C29B75' },
  taskItemRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFDF9',
    borderRadius: 12,
    padding: 12,
    borderWidth: 1,
    borderColor: '#EFE3D5',
    marginBottom: 8
  },
  taskIconMock: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#F3E8DC',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E4D3C0'
  },
  taskTitle: { fontSize: 13, fontWeight: 'bold', color: '#4A3321' },
  taskPts: { fontSize: 11, color: '#D97706', fontWeight: 'bold' },
  taskBtn: { backgroundColor: '#F3E8DC', paddingHorizontal: 12, paddingVertical: 6, borderRadius: 12 },
  taskBtnClaim: { backgroundColor: '#C29B75' },
  taskBtnText: { fontSize: 11, color: '#5A3E2B', fontWeight: 'bold' },
  taskBtnTextClaim: { color: '#FFF' },
  txItemRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFDF9',
    borderRadius: 12,
    padding: 12,
    borderWidth: 1,
    borderColor: '#EFE3D5',
    marginBottom: 8
  },
  txIconMock: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#F3E8DC',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E4D3C0'
  },
  txTitle: { fontSize: 12, fontWeight: 'bold', color: '#4A3321' },
  txTime: { fontSize: 10, color: '#9E826C' },
  txAmt: { fontSize: 13, fontWeight: 'bold' },
  txAmtIn: { color: '#10B981' },
  txAmtOut: { color: '#D97706' },
  rechargeTopCard: {
    backgroundColor: '#FFFDF9',
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#EFE3D5',
    marginBottom: 16
  },
  rechargeTopLbl: { fontSize: 12, color: '#8C6D53' },
  rechargeTopVal: { fontSize: 20, fontWeight: 'bold', color: '#4A3321', marginTop: 2 },
  rechargeGrid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', marginBottom: 16 },
  rechargeCard: {
    width: '31%',
    backgroundColor: '#FFFDF9',
    borderRadius: 14,
    paddingVertical: 14,
    alignItems: 'center',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#EFE3D5',
    position: 'relative'
  },
  rechargeCardActive: { borderColor: '#C29B75', backgroundColor: '#F9F1EA' },
  giftBadge: { position: 'absolute', top: -6, right: 6, backgroundColor: '#D97706', paddingHorizontal: 6, paddingVertical: 2, borderRadius: 6 },
  giftBadgeText: { fontSize: 9, color: '#FFF', fontWeight: 'bold' },
  rechargeCoin: { fontSize: 13, fontWeight: 'bold', color: '#4A3321', marginBottom: 2 },
  rechargeRmb: { fontSize: 11, color: '#9E826C' },
  payItemRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFDF9',
    borderRadius: 12,
    padding: 14,
    borderWidth: 1,
    borderColor: '#EFE3D5',
    marginBottom: 8
  },
  payName: { fontSize: 13, fontWeight: '600', color: '#4A3321' },
  withdrawCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFFDF9',
    borderRadius: 16,
    padding: 18,
    borderWidth: 1,
    borderColor: '#EFE3D5',
    marginBottom: 16
  },
  withdrawLbl: { fontSize: 11, color: '#8C6D53' },
  withdrawNum: { fontSize: 24, fontWeight: 'bold', color: '#4A3321', marginVertical: 2 },
  withdrawSub: { fontSize: 10, color: '#9E826C' },
  withdrawAvatarMock: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#F3E8DC',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E4D3C0'
  },
  accountBoundRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFDF9',
    borderRadius: 12,
    padding: 14,
    borderWidth: 1,
    borderColor: '#EFE3D5',
    marginBottom: 16
  },
  boundTitle: { fontSize: 13, fontWeight: 'bold', color: '#4A3321' },
  boundSub: { fontSize: 11, color: '#9E826C' },
  withdrawGrid: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 },
  withdrawAmtBtn: {
    flex: 1,
    backgroundColor: '#FFFDF9',
    borderRadius: 12,
    paddingVertical: 12,
    alignItems: 'center',
    marginHorizontal: 3,
    borderWidth: 1,
    borderColor: '#EFE3D5'
  },
  withdrawAmtBtnActive: { backgroundColor: '#C29B75', borderColor: '#C29B75' },
  withdrawAmtText: { fontSize: 13, fontWeight: 'bold', color: '#5A3E2B' },
  withdrawAmtTextActive: { color: '#FFF' },
  withdrawTip: { fontSize: 10, color: '#9E826C', textAlign: 'center', marginBottom: 10 }
});