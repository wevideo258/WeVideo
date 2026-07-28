import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import CustomTabBar from '../components/CustomTabBar';

export default function PaymentScreen() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()}><Ionicons name="chevron-back" size={24} color="#5C4033"/></TouchableOpacity>
          <Text style={styles.title}>Payment</Text>
          <View style={{width: 24}}/>
        </View>
        <Text style={styles.amount}>支付金额: ¥ 4,380</Text>
        <TouchableOpacity style={styles.submitBtn} onPress={() => router.push('/order-success')}>
          <Text style={styles.submitText}>立即支付</Text>
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
  amount: { fontSize: 24, fontWeight: 'bold', color: '#2C221E', textAlign: 'center', marginVertical: 20 },
  submitBtn: { backgroundColor: '#D4A373', padding: 16, borderRadius: 20, alignItems: 'center', marginTop: 20 },
  submitText: { color: '#FFF', fontSize: 16, fontWeight: 'bold' }
});