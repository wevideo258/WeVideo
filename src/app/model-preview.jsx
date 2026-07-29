import { useLocalSearchParams, useRouter } from 'expo-router';
import { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function ModelPreviewScreen() {
  const router = useRouter();
  const params = useLocalSearchParams();
  const glbUrl = params.glbUrl || "https://modelviewer.dev/shared-assets/models/Astronaut.glb";
  
  // 页面 06：细节微调参数状态机
  const [smileFactor, setSmileFactor] = useState(0.8);
  const [eyeSize, setEyeSize] = useState(1.0);
  const [faceRoundness, setFaceRoundness] = useState(0.6);

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
      {/* 头部标题 */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
          <Text style={styles.backText}>‹ 返回</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Soulara 3D 手办预览</Text>
      </View>

      {/* 3D 模型渲染视口区域 */}
      <View style={styles.canvasContainer}>
        <View style={styles.mockModelBox}>
          <Text style={styles.modelPlaceholderText}>✨ 3D 模型已加载完成</Text>
          <Text style={styles.modelUrlText} numberOfLines={1}>GLB 路径: {glbUrl}</Text>
          <Text style={styles.tipText}>（提示：当前运行在 Web 预览模式，真机或移动端将通过 Three.js 呈现 360° 交互）</Text>
        </View>
      </View>

      {/* 页面 06：细节微调控制面板（参数驱动滑动条） */}
      <View style={styles.controlPanel}>
        <Text style={styles.panelTitle}>⚙️ 个性化细节调整 (Morph Targets)</Text>
        
        <View style={styles.sliderGroup}>
          <Text style={styles.label}>微笑容度调整: {Math.round(smileFactor * 100)}%</Text>
          <View style={styles.sliderTrack}>
            <View style={[styles.sliderFill, { width: `${smileFactor * 100}%` }]} />
          </View>
        </View>

        <View style={styles.sliderGroup}>
          <Text style={styles.label}>眼睛大小: {Math.round(eyeSize * 100)}%</Text>
          <View style={styles.sliderTrack}>
            <View style={[styles.sliderFill, { width: `${(eyeSize / 1.5) * 100}%` }]} />
          </View>
        </View>

        <View style={styles.sliderGroup}>
          <Text style={styles.label}>脸部圆润度: {Math.round(faceRoundness * 100)}%</Text>
          <View style={styles.sliderTrack}>
            <View style={[styles.sliderFill, { width: `${faceRoundness * 100}%` }]} />
          </View>
        </View>
        
        <TouchableOpacity 
          style={styles.nextButton}
          onPress={() => router.push('/chat')}
        >
          <Text style={styles.nextButtonText}>确认并开启对话</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#1a1a1a' },
  scrollContent: { flexGrow: 1 },
  header: { height: 60, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 20, backgroundColor: '#111' },
  backBtn: { marginRight: 15 },
  backText: { color: '#C29875', fontSize: 16, fontWeight: '600' },
  headerTitle: { color: '#FFF', fontSize: 18, fontWeight: 'bold' },
  canvasContainer: { height: 260, justifyContent: 'center', alignItems: 'center', backgroundColor: '#252525', margin: 20, borderRadius: 16 },
  mockModelBox: { padding: 20, alignItems: 'center' },
  modelPlaceholderText: { color: '#C29875', fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
  modelUrlText: { color: '#888', fontSize: 12, marginBottom: 15, textAlign: 'center', width: 280 },
  tipText: { color: '#aaa', fontSize: 12, textAlign: 'center', paddingHorizontal: 10 },
  controlPanel: { padding: 20, backgroundColor: '#222', borderTopLeftRadius: 20, borderTopRightRadius: 20, paddingBottom: 40 },
  panelTitle: { color: '#FFF', fontSize: 16, fontWeight: 'bold', marginBottom: 16 },
  sliderGroup: { marginBottom: 16 },
  label: { color: '#DDD', fontSize: 14, marginBottom: 8, fontWeight: '500' },
  sliderTrack: { width: '100%', height: 6, backgroundColor: '#444', borderRadius: 3, overflow: 'hidden' },
  sliderFill: { height: '100%', backgroundColor: '#C29875', borderRadius: 3 },
  nextButton: { backgroundColor: '#C29875', paddingVertical: 14, borderRadius: 25, alignItems: 'center', marginTop: 10 },
  nextButtonText: { color: '#FFF', fontSize: 16, fontWeight: 'bold' }
});