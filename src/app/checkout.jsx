import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import CustomTabBar from '../components/CustomTabBar';

export default function CheckoutScreen() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()}><Ionicons name="chevron-back" size={24} color="#5C4033"/></TouchableOpacity>
          <Text style={styles.title}>Checkout</Text>
          <View style={{width: 24}}/>
        </View>
        <View style={styles.section}>
          <Text style={styles.secTitle}>合计金额: ¥ 4,380</Text>
        </View>
        <TouchableOpacity style={styles.payBtn} onPress={() => router.push('/payment')}>
          <Text style={styles.payText}>提交订单并支付</Text>
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
  section: { backgroundColor: '#FFF', padding: 20, borderRadius: 16, marginVertical: 10, borderWidth: 1, borderColor: '#F2E8E1' },
  secTitle: { fontSize: 18, fontWeight: 'bold', color: '#D4A373' },
  payBtn: { backgroundColor: '#D4A373', padding: 16, borderRadius: 20, alignItems: 'center', marginTop: 20 },
  payText: { color: '#FFF', fontSize: 16, fontWeight: 'bold' }
});