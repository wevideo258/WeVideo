import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import CustomTabBar from '../components/CustomTabBar';

export default function AccessoriesStoreScreen() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()}><Ionicons name="chevron-back" size={24} color="#5C4033"/></TouchableOpacity>
          <Text style={styles.title}>Accessories</Text>
          <TouchableOpacity onPress={() => router.push('/cart')}><Ionicons name="cart-outline" size={22} color="#5C4033"/></TouchableOpacity>
        </View>
        <Text style={{textAlign: 'center', color: '#8C7A70', marginTop: 40}}>配件商城分类列表内容...</Text>
      </ScrollView>
      <CustomTabBar />
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FDFBF7' },
  scrollContent: { paddingBottom: 90, paddingHorizontal: 20 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingTop: 50, marginBottom: 20 },
  title: { fontSize: 18, fontWeight: 'bold', color: '#2C221E' }
});