import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="welcome" />
      <Stack.Screen name="settings" />
      <Stack.Screen name="wallet" />
      <Stack.Screen name="nfc" />
      <Stack.Screen name="marketplace" />
      <Stack.Screen name="share" />
      
      {/* 5个核心页面 */}
      <Stack.Screen name="home" />
      <Stack.Screen name="character" />
      <Stack.Screen name="chat" />
      <Stack.Screen name="world" />
      <Stack.Screen name="me" />

      {/* 新增：商城子模块完整路由 */}
      <Stack.Screen name="character-store" />
      <Stack.Screen name="accessories-store" />
      <Stack.Screen name="gift-store" />
      <Stack.Screen name="product-detail" />
      <Stack.Screen name="cart" />
      <Stack.Screen name="checkout" />
      <Stack.Screen name="payment" />
      <Stack.Screen name="order-success" />
    </Stack>
  );
}