import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Colors } from '../constants/colors';

export default function ShopScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.subHeader}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={20} color={Colors.textPrimary} />
        </TouchableOpacity>
        <Text style={styles.subHeaderTitle}>商城礼物</Text>
        <View style={{ width: 36 }} />
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>🎁 伴侣专属礼品屋</Text>
          <Text style={styles.cardSub}>用精心挑选的礼物，点亮你们的每一天</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.background },
  subHeader: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
    paddingHorizontal: 16, paddingTop: 50, paddingBottom: 10,
    backgroundColor: Colors.cardBackground, borderBottomWidth: 1, borderBottomColor: Colors.border,
  },
  subHeaderTitle: { fontSize: 16, fontWeight: '700', color: Colors.textPrimary },
  backButton: {
    width: 36, height: 36, borderRadius: 18, backgroundColor: '#F7F3EC',
    borderWidth: 1, borderColor: Colors.border, alignItems: 'center', justifyContent: 'center',
  },
  scrollContent: { padding: 20 },
  card: { backgroundColor: '#F7F3EC', borderRadius: 20, padding: 20, borderWidth: 1, borderColor: Colors.border, alignItems: 'center' },
  cardTitle: { fontSize: 16, fontWeight: '800', color: '#2C2A29', marginBottom: 4 },
  cardSub: { fontSize: 11, color: '#8C857B' }
});