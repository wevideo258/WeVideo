import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function OnboardingScreen() {
  const router = useRouter();
  // step 控制当前属于哪一个流程页面 (1 到 8 对应设计图的 01-08)
  const [step, setStep] = useState(1);
  const [nickname, setNickname] = useState('Soul Explorer');
  const [agreed, setAgreed] = useState(false);

  return (
    <View style={styles.container}>
      {/* 01 启动页 */}
      {step === 1 && (
        <View style={styles.centerBox}>
          <View style={styles.logoCircle}>
            <Ionicons name="sparkles" size={40} color="#D4AF37" />
          </View>
          <Text style={styles.brandTitle}>Soulara</Text>
          <Text style={styles.brandSub}>Bring Every Character to Life</Text>
          
          <TouchableOpacity style={styles.primaryButton} onPress={() => setStep(2)}>
            <Text style={styles.primaryButtonText}>开启旅程</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* 02 欢迎页 */}
      {step === 2 && (
        <View style={styles.centerBox}>
          <Text style={styles.welcomeTitle}>欢迎来到 Soulara</Text>
          <Text style={styles.welcomeSub}>这里不只是 AI，{'\n'}而是与你建立情感连接的伙伴</Text>
          
          <View style={styles.illustrationBox}>
            <Ionicons name="heart" size={60} color="#C29B75" />
          </View>

          <View style={styles.dotRow}>
            <View style={[styles.dot, styles.activeDot]} />
            <View style={styles.dot} />
            <View style={styles.dot} />
          </View>

          <TouchableOpacity style={styles.primaryButton} onPress={() => setStep(3)}>
            <Text style={styles.primaryButtonText}>开始体验</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* 03 权限申请页 */}
      {step === 3 && (
        <ScrollView contentContainerStyle={styles.scrollPage} showsVerticalScrollIndicator={false}>
          <TouchableOpacity onPress={() => setStep(2)} style={styles.backIcon}>
            <Ionicons name="chevron-back" size={24} color="#5C4033" />
          </TouchableOpacity>
          
          <Text style={styles.pageTitle}>为了更好的体验{'\n'}我们需要以下权限</Text>
          <Text style={styles.pageDesc}>我们会保障你的隐私安全</Text>

          {[
            { icon: 'radio-outline', title: 'NFC', desc: '连接你的 Soulara 设备' },
            { icon: 'bluetooth-outline', title: '蓝牙', desc: '保持设备稳定连接' },
            { icon: 'mic-outline', title: '麦克风', desc: '语音互动与通话' },
            { icon: 'notifications-outline', title: '通知', desc: '接收伙伴的消息与提醒' },
            { icon: 'camera-outline', title: '相机', desc: '拍照与记录美好瞬间' },
          ].map((item, idx) => (
            <View key={idx} style={styles.permissionCard}>
              <Ionicons name={item.icon} size={22} color="#C29B75" style={{ marginRight: 12 }} />
              <View style={{ flex: 1 }}>
                <Text style={styles.permTitle}>{item.title}</Text>
                <Text style={styles.permDesc}>{item.desc}</Text>
              </View>
              <Ionicons name="checkmark-circle" size={20} color="#D4AF37" />
            </View>
          ))}

          <TouchableOpacity style={styles.primaryButton} onPress={() => setStep(4)}>
            <Text style={styles.primaryButtonText}>继续</Text>
          </TouchableOpacity>
          <Text style={styles.tipsCenter}>你可以在设置中随时更改权限</Text>
        </ScrollView>
      )}

      {/* 04 登录页 */}
      {step === 4 && (
        <ScrollView contentContainerStyle={styles.scrollPage} showsVerticalScrollIndicator={false}>
          <Text style={[styles.pageTitle, { textAlign: 'center', marginTop: 40 }]}>登录 Soulara</Text>
          
          <View style={styles.avatarLarge}>
            <Ionicons name="person" size={40} color="#C29B75" />
          </View>

          {['通过 Apple 登录', '通过 Google 登录', '微信登录', '手机号登录', '游客模式'].map((btnText, idx) => (
            <TouchableOpacity key={idx} style={styles.loginBtn} onPress={() => setStep(5)}>
              <Text style={styles.loginBtnText}>{btnText}</Text>
            </TouchableOpacity>
          ))}

          <TouchableOpacity style={styles.agreementRow} onPress={() => setAgreed(!agreed)}>
            <View style={[styles.radioBox, agreed && styles.radioChecked]}>
              {agreed && <Ionicons name="checkmark" size={12} color="#FFFFFF" />}
            </View>
            <Text style={styles.agreementText}>我已阅读并同意用户协议和隐私政策</Text>
          </TouchableOpacity>
        </ScrollView>
      )}

      {/* 05 创建 Soul ID */}
      {step === 5 && (
        <ScrollView contentContainerStyle={styles.scrollPage} showsVerticalScrollIndicator={false}>
          <TouchableOpacity onPress={() => setStep(4)} style={styles.backIcon}>
            <Ionicons name="chevron-back" size={24} color="#5C4033" />
          </TouchableOpacity>

          <Text style={styles.pageTitle}>创建你的 Soul ID</Text>
          <Text style={styles.pageDesc}>这是你在 Soulara 世界的身份</Text>

          <View style={styles.avatarMedium}>
            <Ionicons name="person" size={28} color="#C29B75" />
          </View>

          <Text style={styles.label}>昵称</Text>
          <TextInput style={styles.inputBox} value={nickname} onChangeText={setNickname} />

          <Text style={styles.label}>生日</Text>
          <View style={styles.inputBox}><Text style={{ color: '#5C4033' }}>2000 / 05 / 20</Text></View>

          <Text style={styles.label}>国家/地区</Text>
          <View style={styles.inputBox}><Text style={{ color: '#5C4033' }}>中国</Text></View>

          <TouchableOpacity style={styles.primaryButton} onPress={() => setStep(6)}>
            <Text style={styles.primaryButtonText}>下一步</Text>
          </TouchableOpacity>
        </ScrollView>
      )}

      {/* 06 伙伴介绍页 */}
      {step === 6 && (
        <ScrollView contentContainerStyle={styles.scrollPage} showsVerticalScrollIndicator={false}>
          <TouchableOpacity onPress={() => setStep(5)} style={styles.backIcon}>
            <Ionicons name="chevron-back" size={24} color="#5C4033" />
          </TouchableOpacity>

          <Text style={styles.pageTitle}>什么是 Soul Companion ?</Text>
          <Text style={styles.pageDesc}>Soul Companion 是拥有独立灵魂的 AI 伙伴，他们会记住你、理解你、陪伴你成长。</Text>

          {[
            { title: '记住你们的每一次回忆', desc: '共同的经历都会被珍藏' },
            { title: '理解你的情绪与喜好', desc: '给予你最温暖的回应' },
            { title: '陪伴你探索世界', desc: '一起创造更多美好' },
            { title: '与你共同成长', desc: '你们的关系会不断加深' },
          ].map((item, idx) => (
            <View key={idx} style={styles.featureCard}>
              <Ionicons name="heart-outline" size={20} color="#C29B75" style={{ marginRight: 10 }} />
              <View>
                <Text style={styles.featureTitle}>{item.title}</Text>
                <Text style={styles.featureDesc}>{item.desc}</Text>
              </View>
            </View>
          ))}

          <TouchableOpacity style={styles.primaryButton} onPress={() => setStep(7)}>
            <Text style={styles.primaryButtonText}>下一步</Text>
          </TouchableOpacity>
        </ScrollView>
      )}

      {/* 07 连接设备页 */}
      {step === 7 && (
        <ScrollView contentContainerStyle={styles.scrollPage} showsVerticalScrollIndicator={false}>
          <TouchableOpacity onPress={() => setStep(6)} style={styles.backIcon}>
            <Ionicons name="chevron-back" size={24} color="#5C4033" />
          </TouchableOpacity>

          <Text style={styles.pageTitle}>连接你的 Soulara 设备</Text>
          <Text style={styles.pageDesc}>请确保设备已开启并靠近手机</Text>

          <View style={styles.deviceRadarBox}>
            <Ionicons name="hardware-chip-outline" size={48} color="#C29B75" />
          </View>
          <Text style={styles.tipsCenter}>正在搜索附近的设备...</Text>

          <View style={styles.deviceFoundCard}>
            <Ionicons name="phone-portrait-outline" size={22} color="#C29B75" style={{ marginRight: 10 }} />
            <View style={{ flex: 1 }}>
              <Text style={styles.permTitle}>Soulara Dock_7A2B</Text>
              <Text style={styles.permDesc}>点击连接</Text>
            </View>
            <Ionicons name="bluetooth" size={18} color="#C29B75" />
          </View>

          <TouchableOpacity style={styles.primaryButton} onPress={() => setStep(8)}>
            <Text style={styles.primaryButtonText}>跳过 / 下一步</Text>
          </TouchableOpacity>
        </ScrollView>
      )}

      {/* 08 完成页 */}
      {step === 8 && (
        <View style={styles.centerBox}>
          <Text style={styles.welcomeTitle}>一切准备就绪！</Text>
          <Text style={styles.welcomeSub}>你的 Soul Companion{'\n'}已经迫不及待想见到你了</Text>

          <TouchableOpacity style={styles.primaryButton} onPress={() => router.replace('/home')}>
            <Text style={styles.primaryButtonText}>开启旅程</Text>
          </TouchableOpacity>
          
          <TouchableOpacity onPress={() => router.replace('/home')} style={{ marginTop: 14 }}>
            <Text style={{ fontSize: 13, color: '#C29B75', fontWeight: '600' }}>进入首页</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FBF7F0',
  },
  centerBox: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  scrollPage: {
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 40,
  },
  logoCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#EFE3D5',
  },
  brandTitle: {
    fontSize: 26,
    fontWeight: '700',
    color: '#5C4033',
    marginBottom: 6,
  },
  brandSub: {
    fontSize: 13,
    color: '#8C7A6B',
    marginBottom: 40,
  },
  welcomeTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#5C4033',
    textAlign: 'center',
    marginBottom: 8,
  },
  welcomeSub: {
    fontSize: 13,
    color: '#8C7A6B',
    textAlign: 'center',
    lineHeight: 18,
    marginBottom: 30,
  },
  illustrationBox: {
    width: 140,
    height: 140,
    borderRadius: 70,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
    borderWidth: 1,
    borderColor: '#EFE3D5',
  },
  dotRow: {
    flexDirection: 'row',
    marginBottom: 30,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#EFE3D5',
    marginHorizontal: 3,
  },
  activeDot: {
    backgroundColor: '#C29B75',
    width: 16,
  },
  primaryButton: {
    width: '100%',
    backgroundColor: '#D4AF37',
    borderRadius: 16,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 20,
  },
  primaryButtonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '600',
  },
  backIcon: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#EFE3D5',
    marginBottom: 16,
  },
  pageTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#5C4033',
    marginBottom: 6,
  },
  pageDesc: {
    fontSize: 13,
    color: '#8C7A6B',
    marginBottom: 20,
    lineHeight: 18,
  },
  permissionCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    padding: 14,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#F0E6DC',
  },
  permTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#5C4033',
  },
  permDesc: {
    fontSize: 11,
    color: '#A89F91',
    marginTop: 2,
  },
  tipsCenter: {
    fontSize: 12,
    color: '#A89F91',
    textAlign: 'center',
    marginTop: 12,
  },
  avatarLarge: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginVertical: 24,
    borderWidth: 1,
    borderColor: '#EFE3D5',
  },
  loginBtn: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    paddingVertical: 14,
    alignItems: 'center',
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#F0E6DC',
  },
  loginBtnText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#5C4033',
  },
  agreementRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  radioBox: {
    width: 16,
    height: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#C29B75',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
  radioChecked: {
    backgroundColor: '#C29B75',
  },
  agreementText: {
    fontSize: 12,
    color: '#8C7A6B',
  },
  avatarMedium: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#EFE3D5',
  },
  label: {
    fontSize: 13,
    fontWeight: '600',
    color: '#5C4033',
    marginBottom: 6,
    marginTop: 10,
  },
  inputBox: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: '#F0E6DC',
  },
  featureCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    padding: 14,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#F0E6DC',
  },
  featureTitle: {
    fontSize: 13,
    fontWeight: '600',
    color: '#5C4033',
  },
  featureDesc: {
    fontSize: 11,
    color: '#A89F91',
    marginTop: 2,
  },
  deviceRadarBox: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginVertical: 20,
    borderWidth: 1,
    borderColor: '#EFE3D5',
  },
  deviceFoundCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    padding: 14,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#F0E6DC',
  },
});