import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import CustomTabBar from '../components/CustomTabBar';

export default function ProductDetailScreen() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()}><Ionicons name="chevron-back" size={24} color="#5C4033"/></TouchableOpacity>
          <View style={{flexDirection: 'row', gap: 15}}>
            <Ionicons name="share-social-outline" size={22} color="#5C4033"/>
            <Ionicons name="heart-outline" size={22} color="#5C4033"/>
          </View>
        </View>
        <Text style={styles.prodName}>小王子 Leo</Text>
        <Text style={styles.price}>💎 2,980</Text>
        
        <View style={styles.actionRow}>
          <TouchableOpacity style={styles.cartBtn} onPress={() => router.push('/cart')}><Text style={styles.cartText}>加入购物车</Text></TouchableOpacity>
          <TouchableOpacity style={styles.buyBtn} onPress={() => router.push('/checkout')}><Text style={styles.buyText}>立即购买</Text></TouchableOpacity>
        </View>
      </ScrollView>
      <CustomTabBar />
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FDFBF7' },
  scrollContent: { paddingBottom: 90, paddingHorizontal: 20 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingTop: 50, marginBottom: 20 },
  prodName: { fontSize: 22, fontWeight: 'bold', color: '#2C221E' },
  price: { fontSize: 18, color: '#D4A373', fontWeight: 'bold', marginVertical: 8 },
  actionRow: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 30 },
  cartBtn: { flex: 1, backgroundColor: '#F7F1EC', padding: 14, borderRadius: 20, alignItems: 'center', marginRight: 10 },
  cartText: { color: '#5C4033', fontWeight: 'bold' },
  buyBtn: { flex: 1, backgroundColor: '#D4A373', padding: 14, borderRadius: 20, alignItems: 'center' },
  buyText: { color: '#FFF', fontWeight: 'bold' }
});