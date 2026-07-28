import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import CustomTabBar from '../components/CustomTabBar';

export default function CartScreen() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()}><Ionicons name="chevron-back" size={24} color="#5C4033"/></TouchableOpacity>
          <Text style={styles.title}>Cart</Text>
          <Text style={{color: '#5C4033', fontWeight: '600'}}>编辑</Text>
        </View>
        <View style={styles.card}><Text style={styles.itemText}>📦 小王子 Leo (💎 2,980)</Text></View>
        <View style={styles.card}><Text style={styles.itemText}>📦 星空翅膀 (💎 880)</Text></View>

        <TouchableOpacity style={styles.checkoutBtn} onPress={() => router.push('/checkout')}>
          <Text style={styles.checkoutText}>去结算 (3)</Text>
        </TouchableOpacity>
      </ScrollView>
      <CustomTabBar />
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FDFBF7' },
  scrollContent: { paddingBottom: 90, paddingHorizontal: 20 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingTop: 50, marginBottom: 20 },
  title: { fontSize: 18, fontWeight: 'bold', color: '#2C221E' },
  card: { backgroundColor: '#FFF', padding: 16, borderRadius: 16, marginBottom: 12, borderWidth: 1, borderColor: '#F2E8E1' },
  itemText: { fontSize: 14, color: '#2C221E', fontWeight: '600' },
  checkoutBtn: { backgroundColor: '#D4A373', padding: 16, borderRadius: 20, alignItems: 'center', marginTop: 20 },
  checkoutText: { color: '#FFF', fontSize: 16, fontWeight: 'bold' }
});