import { Ionicons } from '@expo/vector-icons';
import { usePathname, useRouter } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function CustomTabBar() {
  const router = useRouter();
  const pathname = usePathname();

  const tabs = [
    { name: '首页', route: '/home', icon: 'home-outline', activeIcon: 'home' },
    { name: '创建角色', route: '/character', icon: 'people-outline', activeIcon: 'people' },
    { name: '聊天', route: '/chat', icon: 'chatbubble-outline', activeIcon: 'chatbubble' },
    { name: '世界', route: '/world', icon: 'globe-outline', activeIcon: 'globe' },
    { name: '我的', route: '/me', icon: 'person-outline', activeIcon: 'person' },
  ];

  return (
    <View style={styles.tabContainer}>
      {tabs.map((tab, index) => {
        // 判断当前路径是否激活
        const isActive = pathname === tab.route || (tab.route === '/home' && pathname === '/');
        
        return (
          <TouchableOpacity
            key={index}
            style={styles.tabItem}
            activeOpacity={0.8}
            onPress={() => router.replace(tab.route)}
          >
            <Ionicons
              name={isActive ? tab.activeIcon : tab.icon}
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
  );
}

const styles = StyleSheet.create({
  tabContainer: {
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