import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function SettingsScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* 顶部导航栏 */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={24} color="#5C4033" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Settings 设置</Text>
        <View style={{ width: 40 }} />
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>账号与安全</Text>
          <Ionicons name="chevron-forward" size={18} color="#A89F91" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>隐私设置</Text>
          <Ionicons name="chevron-forward" size={18} color="#A89F91" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>通知设置</Text>
          <Ionicons name="chevron-forward" size={18} color="#A89F91" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>通用设置</Text>
          <Ionicons name="chevron-forward" size={18} color="#A89F91" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>语言</Text>
          <View style={styles.rightValueContainer}>
            <Text style={styles.rightValueText}>简体中文</Text>
            <Ionicons name="chevron-forward" size={18} color="#A89F91" />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>帮助与反馈</Text>
          <Ionicons name="chevron-forward" size={18} color="#A89F91" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>关于 Soulara</Text>
          <View style={styles.rightValueContainer}>
            <Text style={styles.rightValueText}>v1.2.0</Text>
            <Ionicons name="chevron-forward" size={18} color="#A89F91" />
          </View>
        </TouchableOpacity>

        {/* 关键修改：将跳转路径精确指向 /welcome 启动页 */}
        <TouchableOpacity 
          style={styles.logoutButton}
          onPress={() => {
            router.replace('/welcome');
          }}
        >
          <Ionicons name="log-out-outline" size={20} color="#D9534F" style={{ marginRight: 8 }} />
          <Text style={styles.logoutText}>退出账户</Text>
        </TouchableOpacity>
      </ScrollView>
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
    paddingHorizontal: 16,
    paddingTop: 50,
    paddingBottom: 16,
    backgroundColor: '#FBF7F0',
    borderBottomWidth: 1,
    borderBottomColor: '#EFE3D5',
  },
  backButton: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#5C4033',
  },
  scrollContent: {
    padding: 16,
    paddingBottom: 40,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    paddingVertical: 16,
    paddingHorizontal: 20,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#F0E6DC',
  },
  menuText: {
    fontSize: 16,
    color: '#4A3B32',
    fontWeight: '500',
  },
  rightValueContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightValueText: {
    fontSize: 14,
    color: '#8C7A6B',
    marginRight: 6,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF5F2',
    borderRadius: 16,
    paddingVertical: 16,
    paddingHorizontal: 20,
    marginTop: 8,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#F5D0C5',
    shadowColor: '#E6A192',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  logoutText: {
    color: '#D9534F',
    fontSize: 16,
    fontWeight: '600',
  },
});