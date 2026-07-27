import { useRouter } from 'expo-router';
import { useEffect } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';

export default function IndexRedirect() {
  const router = useRouter();

  useEffect(() => {
    // 软件一打开，立刻无缝重定向到你的启动页面
    router.replace('/welcome');
  }, []);

  return (
    <View style={styles.container}>
      {/* 缓冲加载时的奶油杏色底色，避免黑屏闪烁 */}
      <ActivityIndicator size="large" color="#C29B75" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FBF7F0', // 奶油杏色设计语言
    alignItems: 'center',
    justifyContent: 'center',
  },
});