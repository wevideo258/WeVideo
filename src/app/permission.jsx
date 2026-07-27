import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Colors } from '../constants/colors';

export default function PermissionScreen() {
  const router = useRouter();

  // 权限列表配置项
  const permissions = [
    { icon: 'radio-outline', title: 'NFC', desc: '连接你的 Soulara 设备' },
    { icon: 'bluetooth-outline', title: '蓝牙', desc: '保持设备稳定连接' },
    { icon: 'mic-outline', title: '麦克风', desc: '语音互动与通话' },
    { icon: 'notifications-outline', title: '通知', desc: '接收伙伴的消息与提醒' },
    { icon: 'camera-outline', title: '相机', desc: '拍照与记录美好瞬间' },
  ];

  return (
    <View style={styles.container}>
      {/* 顶部返回与标题区 */}
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton} 
          onPress={() => {
            if (router.canGoBack()) {
              router.back();
            } else {
              router.replace('/welcome');
            }
          }}
        >
          <Ionicons name="chevron-back" size={22} color={Colors.textPrimary} />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>为了更好的体验{'\n'}我们需要以下权限</Text>
        <Text style={styles.subtitle}>我们会保障你的隐私安全</Text>

        {/* 权限选项卡片列表 */}
        <View style={styles.listContainer}>
          {permissions.map((item, index) => (
            <View key={index} style={styles.permissionCard}>
              <View style={styles.iconBox}>
                <Ionicons name={item.icon} size={22} color={Colors.primary} />
              </View>
              <View style={styles.textInfo}>
                <Text style={styles.itemTitle}>{item.title}</Text>
                <Text style={styles.itemDesc}>{item.desc}</Text>
              </View>
              <View style={styles.checkbox}>
                <Ionicons name="checkmark" size={14} color={Colors.primary} />
              </View>
            </View>
          ))}
        </View>
      </ScrollView>

      {/* 底部按钮与提示 */}
      <View style={styles.footerContainer}>
        <TouchableOpacity 
          style={styles.button} 
          activeOpacity={0.85}
          onPress={() => router.push('/login')} // 前往下一步：04 登录页
        >
          <Text style={styles.buttonText}>继续</Text>
        </TouchableOpacity>
        <Text style={styles.footerHint}>你可以在设置中随时更改权限</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    justifyContent: 'space-between',
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  backButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#F7F3EC',
    borderWidth: 1,
    borderColor: Colors.border,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollContent: {
    paddingHorizontal: 24,
    paddingTop: 10,
    paddingBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '800',
    color: Colors.textPrimary,
    lineHeight: 32,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: Colors.textSecondary,
    marginBottom: 24,
  },
  listContainer: {
    gap: 12,
  },
  permissionCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F7F3EC',
    padding: 16,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  iconBox: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.accent,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },
  textInfo: {
    flex: 1,
  },
  itemTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: Colors.textPrimary,
    marginBottom: 2,
  },
  itemDesc: {
    fontSize: 13,
    color: Colors.textSecondary,
  },
  checkbox: {
    width: 22,
    height: 22,
    borderRadius: 11,
    borderWidth: 1.5,
    borderColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  footerContainer: {
    paddingHorizontal: 24,
    paddingBottom: 40,
    alignItems: 'center',
  },
  button: {
    backgroundColor: Colors.primary,
    width: '100%',
    paddingVertical: 16,
    borderRadius: 24,
    alignItems: 'center',
    shadowColor: Colors.primary,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.25,
    shadowRadius: 12,
    elevation: 4,
    marginBottom: 12,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 1,
  },
  footerHint: {
    fontSize: 12,
    color: Colors.textSecondary,
  },
});