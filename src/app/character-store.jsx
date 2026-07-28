import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import CustomTabBar from '../components/CustomTabBar';

export default function CharacterStoreScreen() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()}><Ionicons name="chevron-back" size={24} color="#5C4033"/></TouchableOpacity>
          <Text style={styles.title}>Character</Text>
          <View style={{width: 24}}/>
        </View>
        <View style={styles.banner}>
          <Text style={styles.bannerTag}>新角色上架</Text>
          <Text style={styles.bannerTitle}>遇见你的Soulmate</Text>
          <TouchableOpacity style={styles.btn} onPress={() => router.push('/product-detail')}><Text style={styles.btnText}>探索更多</Text></TouchableOpacity>
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
  title: { fontSize: 18, fontWeight: 'bold', color: '#2C221E' },
  banner: { backgroundColor: '#FFFFFF', borderRadius: 20, padding: 20, borderWidth: 1, borderColor: '#F2E8E1' },
  bannerTag: { fontSize: 12, color: '#D4A373', fontWeight: '600' },
  bannerTitle: { fontSize: 16, fontWeight: 'bold', color: '#2C221E', marginVertical: 6 },
  btn: { backgroundColor: '#D4A373', paddingHorizontal: 12, paddingVertical: 6, borderRadius: 14, alignSelf: 'flex-start', marginTop: 8 },
  btnText: { color: '#FFF', fontSize: 12, fontWeight: '600' }
});