import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import CustomTabBar from '../components/CustomTabBar';

export default function OrderSuccessScreen() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent} alignItems="center">
        <View style={styles.successIcon}>
          <Ionicons name="checkmark" size={40} color="#FFF"/>
        </View>
        <Text style={styles.title}>购买成功！</Text>
        <Text style={styles.subText}>感谢您的购买，Luna 已收到礼物~</Text>

        <TouchableOpacity style={styles.btn} onPress={() => router.push('/marketplace')}>
          <Text style={styles.btnText}>继续购物</Text>
        </TouchableOpacity>
      </ScrollView>
      <CustomTabBar />
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FDFBF7' },
  scrollContent: { paddingBottom: 90, paddingHorizontal: 20, alignItems: 'center', paddingTop: 60 },
  successIcon: { width: 80, height: 80, borderRadius: 40, backgroundColor: '#81B29A', justifyContent: 'center', alignItems: 'center', marginBottom: 20 },
  title: { fontSize: 22, fontWeight: 'bold', color: '#2C221E', marginBottom: 8 },
  subText: { fontSize: 14, color: '#8C7A70', marginBottom: 30 },
  btn: { backgroundColor: '#D4A373', paddingVertical: 14, paddingHorizontal: 40, borderRadius: 20, alignItems: 'center' },
  btnText: { color: '#FFF', fontSize: 16, fontWeight: 'bold' }
});