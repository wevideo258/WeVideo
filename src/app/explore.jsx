import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import {
  Alert,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

export default function ExploreScreen() {
  const router = useRouter();
  const [step, setStep] = useState(1);

  const [selectedStyle, setSelectedStyle] = useState('写实风');
  const [selectedSize, setSelectedSize] = useState('8cm');

  const [selectedOutfit, setSelectedOutfit] = useState('休闲套装');
  const [selectedBase, setSelectedBase] = useState('圆形底座');
  const [selectedAccessory, setSelectedAccessory] = useState('小熊玩偶');

  const [smileDegree, setSmileDegree] = useState(80);
  const [eyeSize, setEyeSize] = useState(100);
  const [faceRound, setFaceRound] = useState(60);

  const handleNext = () => {
    if (step < 8) {
      setStep(step + 1);
    } else {
      Alert.alert('恭喜', '您的 3D 手办订单已成功提交！', [
        { text: '返回首页', onPress: () => router.push('/') }
      ]);
    }
  };

  const handlePrev = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backBtn} onPress={handlePrev} disabled={step === 1}>
          <Ionicons name={step > 1 ? "chevron-back" : "sparkles"} size={22} color={step > 1 ? "#5A3E2B" : "transparent"} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>
          {step === 1 && '01 创建首页'}
          {step === 2 && '02 上传照片'}
          {step === 3 && '03 风格选择'}
          {step === 4 && '04 预览模型'}
          {step === 5 && '05 个性化定制'}
          {step === 6 && '06 细节调整'}
          {step === 7 && '07 确认订单'}
          {step === 8 && '08 下单成功'}
        </Text>
        <View style={{ width: 32 }} />
      </View>

      <ScrollView contentContainerStyle={styles.scrollArea} showsVerticalScrollIndicator={false}>
        
        {step === 1 && (
          <View style={styles.stepContainer}>
            <Text style={styles.mainTitle}>创建自己的 3D 手办</Text>
            <Text style={styles.subTitle}>上传照片，生成专属 3D 陪伴伙伴</Text>

            <View style={styles.previewCardBig}>
              <View style={styles.modelPlaceholderBox}>
                <Ionicons name="cube-outline" size={64} color="#C29B75" />
                <Text style={styles.modelPlaceholderText}>3D 手办预览模型</Text>
              </View>
            </View>

            <TouchableOpacity style={styles.primaryButton} onPress={handleNext}>
              <Text style={styles.primaryButtonText}>开始创建</Text>
            </TouchableOpacity>

            <View style={styles.featureRow}>
              <View style={styles.featureBadge}>
                <Ionicons name="shield-checkmark-outline" size={16} color="#8C5830" style={{ marginRight: 4 }} />
                <Text style={styles.featureText}>高精度建模</Text>
              </View>
              <View style={styles.featureBadge}>
                <Ionicons name="color-palette-outline" size={16} color="#8C5830" style={{ marginRight: 4 }} />
                <Text style={styles.featureText}>个性定制</Text>
              </View>
              <View style={styles.featureBadge}>
                <Ionicons name="lock-closed-outline" size={16} color="#8C5830" style={{ marginRight: 4 }} />
                <Text style={styles.featureText}>隐私保护</Text>
              </View>
            </View>
          </View>
        )}

        {step === 2 && (
          <View style={styles.stepContainer}>
            <View style={styles.uploadRow}>
              <View style={styles.photoBox}>
                <Ionicons name="person" size={48} color="#C29B75" />
                <Text style={styles.photoBoxLabel}>已选自拍</Text>
              </View>
              <TouchableOpacity style={styles.uploadActionBox} onPress={() => alert('已调用相册上传')}>
                <Ionicons name="camera-outline" size={32} color="#8C5830" style={{ marginBottom: 8 }} />
                <Text style={styles.uploadText}>上传照片</Text>
                <Text style={styles.uploadSubText}>支持 JPG / PNG 格式</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.tipCard}>
              <Text style={styles.tipTitle}>照片要求</Text>
              <Text style={styles.tipItem}>✓ 正面照片，效果更佳</Text>
              <Text style={styles.tipItem}>✓ 光线充足，五官清晰</Text>
              <Text style={styles.tipItem}>✓ 无遮挡，表情自然</Text>
            </View>

            <TouchableOpacity style={styles.primaryButton} onPress={handleNext}>
              <Text style={styles.primaryButtonText}>下一步</Text>
            </TouchableOpacity>
          </View>
        )}

        {step === 3 && (
          <View style={styles.stepContainer}>
            <Text style={styles.sectionLabel}>选择你喜欢的风格</Text>
            <View style={styles.gridStyles}>
              {['写实风', '二次元风', '卡通 3D 风', 'Q 版风', '二次元', '手绘风格'].map((item) => (
                <TouchableOpacity 
                  key={item} 
                  style={[styles.styleCard, selectedStyle === item && styles.styleCardSelected]}
                  onPress={() => setSelectedStyle(item)}
                >
                  <Ionicons name="image-outline" size={24} color="#8C5830" style={{ marginBottom: 4 }} />
                  <Text style={styles.styleCardText}>{item}</Text>
                </TouchableOpacity>
              ))}
            </View>

            <Text style={styles.sectionLabel}>选择尺寸</Text>
            <View style={styles.sizeRow}>
              {['8cm', '12cm', '20cm'].map((sz) => (
                <TouchableOpacity 
                  key={sz} 
                  style={[styles.sizeBtn, selectedSize === sz && styles.sizeBtnSelected]}
                  onPress={() => setSelectedSize(sz)}
                >
                  <Text style={[styles.sizeText, selectedSize === sz && styles.sizeTextSelected]}>{sz}</Text>
                </TouchableOpacity>
              ))}
            </View>

            <TouchableOpacity style={styles.primaryButton} onPress={handleNext}>
              <Text style={styles.primaryButtonText}>下一步</Text>
            </TouchableOpacity>
          </View>
        )}

        {step === 4 && (
          <View style={styles.stepContainer}>
            <View style={styles.previewCardBig}>
              <Ionicons name="cube" size={72} color="#C29B75" />
              <Text style={styles.modelPlaceholderText}>360° 3D 手办模型渲染中</Text>
            </View>

            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.angleRow}>
              {[1, 2, 3, 4].map((i) => (
                <View key={i} style={styles.angleThumb}>
                  <Ionicons name="person-outline" size={20} color="#8C5830" />
                </View>
              ))}
            </ScrollView>

            <TouchableOpacity style={styles.primaryButton} onPress={handleNext}>
              <Text style={styles.primaryButtonText}>下一步</Text>
            </TouchableOpacity>
          </View>
        )}

        {step === 5 && (
          <View style={styles.stepContainer}>
            <Text style={styles.sectionLabel}>选择服装</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
              {['休闲套装', '学院风', '甜美裙装', '工装风'].map((outfit) => (
                <TouchableOpacity 
                  key={outfit} 
                  style={[styles.choiceItem, selectedOutfit === outfit && styles.choiceItemActive]}
                  onPress={() => setSelectedOutfit(outfit)}
                >
                  <Ionicons name="shirt-outline" size={24} color="#8C5830" />
                  <Text style={styles.choiceText}>{outfit}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>

            <Text style={styles.sectionLabel}>选择底座</Text>
            <View style={styles.gridRow}>
              {['圆形底座', '木纹底座', '生态底座'].map((base) => (
                <TouchableOpacity 
                  key={base} 
                  style={[styles.choiceItemBox, selectedBase === base && styles.choiceItemActive]}
                  onPress={() => setSelectedBase(base)}
                >
                  <Ionicons name="ellipse-outline" size={22} color="#8C5830" />
                  <Text style={styles.choiceText}>{base}</Text>
                </TouchableOpacity>
              ))}
            </View>

            <Text style={styles.sectionLabel}>添加配件 (可选)</Text>
            <View style={styles.gridRow}>
              {['小熊玩偶', '书籍', '绿植', '咖啡杯'].map((acc) => (
                <TouchableOpacity 
                  key={acc} 
                  style={[styles.choiceItemBox, selectedAccessory === acc && styles.choiceItemActive]}
                  onPress={() => setSelectedAccessory(acc)}
                >
                  <Ionicons name="gift-outline" size={20} color="#8C5830" />
                  <Text style={styles.choiceText}>{acc}</Text>
                </TouchableOpacity>
              ))}
            </View>

            <TouchableOpacity style={styles.primaryButton} onPress={handleNext}>
              <Text style={styles.primaryButtonText}>下一步</Text>
            </TouchableOpacity>
          </View>
        )}

        {step === 6 && (
          <View style={styles.stepContainer}>
            <View style={styles.previewCardMedium}>
              <Ionicons name="happy-outline" size={56} color="#C29B75" />
            </View>

            <View style={styles.tabRow}>
              {['面部', '发型', '姿势', '服装'].map((tab, idx) => (
                <View key={tab} style={[styles.tabItem, idx === 0 && styles.tabItemActive]}>
                  <Text style={[styles.tabText, idx === 0 && styles.tabTextActive]}>{tab}</Text>
                </View>
              ))}
            </View>

            <View style={styles.sliderBox}>
              <Text style={styles.sliderLabel}>微笑程度: {smileDegree}%</Text>
              <TouchableOpacity style={styles.sliderBar} onPress={() => setSmileDegree(90)}>
                <View style={[styles.sliderFill, { width: `${smileDegree}%` }]} />
              </TouchableOpacity>

              <Text style={styles.sliderLabel}>眼睛大小: {eyeSize}%</Text>
              <TouchableOpacity style={styles.sliderBar} onPress={() => setEyeSize(95)}>
                <View style={[styles.sliderFill, { width: `${eyeSize}%` }]} />
              </TouchableOpacity>

              <Text style={styles.sliderLabel}>脸部圆润度: {faceRound}%</Text>
              <TouchableOpacity style={styles.sliderBar} onPress={() => setFaceRound(70)}>
                <View style={[styles.sliderFill, { width: `${faceRound}%` }]} />
              </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.primaryButton} onPress={handleNext}>
              <Text style={styles.primaryButtonText}>下一步</Text>
            </TouchableOpacity>
          </View>
        )}

        {step === 7 && (
          <View style={styles.stepContainer}>
            <View style={styles.orderCard}>
              <View style={styles.orderSummaryTop}>
                <View style={styles.orderThumb}>
                  <Ionicons name="cube" size={32} color="#C29B75" />
                </View>
                <View style={{ flex: 1, marginLeft: 12 }}>
                  <Text style={styles.orderTitle}>专属 3D 手办</Text>
                  <Text style={styles.orderSub}>{selectedStyle} · {selectedSize}</Text>
                  <Text style={styles.orderDesc}>包含：模型主体 + 底座 + 基础包装</Text>
                </View>
                <Text style={styles.orderPrice}>¥299.00</Text>
              </View>

              <View style={styles.divider} />

              <Text style={styles.infoTitle}>定制信息</Text>
              <View style={styles.infoRow}><Text style={styles.infoKey}>风格</Text><Text style={styles.infoVal}>{selectedStyle}</Text></View>
              <View style={styles.infoRow}><Text style={styles.infoKey}>尺寸</Text><Text style={styles.infoVal}>{selectedSize}</Text></View>
              <View style={styles.infoRow}><Text style={styles.infoKey}>服装</Text><Text style={styles.infoVal}>{selectedOutfit}</Text></View>
              <View style={styles.infoRow}><Text style={styles.infoKey}>底座</Text><Text style={styles.infoVal}>{selectedBase}</Text></View>
              <View style={styles.infoRow}><Text style={styles.infoKey}>配件</Text><Text style={styles.infoVal}>{selectedAccessory}</Text></View>

              <View style={styles.divider} />

              <View style={styles.infoRow}><Text style={styles.infoKey}>商品金额</Text><Text style={styles.infoVal}>¥299.00</Text></View>
              <View style={styles.infoRow}><Text style={styles.infoKey}>优惠券</Text><Text style={styles.infoValRed}>- ¥30.00</Text></View>
              <View style={styles.infoRow}><Text style={styles.infoKey}>运费</Text><Text style={styles.infoVal}>¥ 0.00</Text></View>

              <View style={styles.totalRow}>
                <Text style={styles.totalLabel}>实付款</Text>
                <Text style={styles.totalPrice}>¥ 269.00</Text>
              </View>
            </View>

            <TouchableOpacity style={styles.primaryButton} onPress={handleNext}>
              <Text style={styles.primaryButtonText}>提交订单</Text>
            </TouchableOpacity>
          </View>
        )}

        {step === 8 && (
          <View style={styles.stepContainer}>
            <View style={styles.successBox}>
              <View style={styles.successCheckCircle}>
                <Ionicons name="checkmark" size={32} color="#FFF" />
              </View>
              <Text style={styles.successTitle}>下单成功！</Text>
              <Text style={styles.successDesc}>您的专属 3D 手办正在制作中</Text>
              <Text style={styles.successTime}>预计 7-15 个工作日发货</Text>

              <TouchableOpacity style={styles.outlineButton} onPress={() => alert('查看订单详情')}>
                <Text style={styles.outlineButtonText}>查看订单</Text>
              </TouchableOpacity>
            </View>

            <Text style={styles.sectionLabel}>你可能还喜欢</Text>
            <View style={styles.gridRow}>
              {['星空玻璃罩', '定制铭牌', '防尘展示盒'].map((item, index) => (
                <View key={item} style={styles.recommendCard}>
                  <View style={styles.recommendThumb}>
                    <Ionicons name="gift-outline" size={20} color="#8C5830" />
                  </View>
                  <Text style={styles.recommendName}>{item}</Text>
                  <Text style={styles.recommendPrice}>¥{index === 0 ? '59.00' : index === 1 ? '39.00' : '69.00'}</Text>
                </View>
              ))}
            </View>
          </View>
        )}

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FBF7F0'
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 14,
    backgroundColor: '#FFF',
    borderBottomWidth: 1,
    borderBottomColor: '#EFE3D5'
  },
  backBtn: {
    width: 32,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4A3321'
  },
  scrollArea: {
    padding: 16,
    paddingBottom: 100
  },
  stepContainer: {
    flex: 1
  },
  mainTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#4A3321',
    marginBottom: 4
  },
  subTitle: {
    fontSize: 13,
    color: '#8C6D53',
    marginBottom: 16
  },
  previewCardBig: {
    width: '100%',
    height: 280,
    backgroundColor: '#FFFDF9',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#EFE3D5',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.03,
    shadowRadius: 6
  },
  modelPlaceholderBox: {
    alignItems: 'center'
  },
  modelPlaceholderText: {
    fontSize: 13,
    color: '#8C6D53',
    marginTop: 8,
    fontWeight: '600'
  },
  primaryButton: {
    width: '100%',
    backgroundColor: '#C29B75',
    borderRadius: 24,
    paddingVertical: 14,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 16,
    shadowColor: '#C29B75',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 6
  },
  primaryButtonText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#FFFFFF'
  },
  featureRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10
  },
  featureBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3E8DC',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E4D3C0'
  },
  featureText: {
    fontSize: 11,
    color: '#5A3E2B',
    fontWeight: '600'
  },
  uploadRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20
  },
  photoBox: {
    flex: 1,
    height: 160,
    backgroundColor: '#F3E8DC',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#E4D3C0'
  },
  photoBoxLabel: {
    fontSize: 12,
    color: '#5A3E2B',
    marginTop: 6,
    fontWeight: '600'
  },
  uploadActionBox: {
    flex: 1,
    height: 160,
    backgroundColor: '#FFFDF9',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    borderWidth: 1,
    borderColor: '#EFE3D5'
  },
  uploadText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#4A3321'
  },
  uploadSubText: {
    fontSize: 11,
    color: '#9E826C',
    marginTop: 2
  },
  tipCard: {
    backgroundColor: '#FFFDF9',
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: '#EFE3D5',
    marginBottom: 10
  },
  tipTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#4A3321',
    marginBottom: 8
  },
  tipItem: {
    fontSize: 12,
    color: '#6B503D',
    marginBottom: 4
  },
  sectionLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#4A3321',
    marginBottom: 10,
    marginTop: 6
  },
  gridStyles: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 10
  },
  styleCard: {
    width: '31%',
    backgroundColor: '#FFFDF9',
    borderRadius: 14,
    paddingVertical: 16,
    alignItems: 'center',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#EFE3D5'
  },
  styleCardSelected: {
    borderColor: '#C29B75',
    backgroundColor: '#F9F1EA'
  },
  styleCardText: {
    fontSize: 12,
    color: '#5A3E2B',
    fontWeight: '600'
  },
  sizeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20
  },
  sizeBtn: {
    flex: 1,
    backgroundColor: '#FFFDF9',
    borderRadius: 12,
    paddingVertical: 12,
    alignItems: 'center',
    marginHorizontal: 4,
    borderWidth: 1,
    borderColor: '#EFE3D5'
  },
  sizeBtnSelected: {
    backgroundColor: '#C29B75',
    borderColor: '#C29B75'
  },
  sizeText: {
    fontSize: 13,
    color: '#5A3E2B',
    fontWeight: '600'
  },
  sizeTextSelected: {
    color: '#FFF'
  },
  angleRow: {
    flexDirection: 'row',
    marginBottom: 10
  },
  angleThumb: {
    width: 64,
    height: 64,
    backgroundColor: '#FFFDF9',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#EFE3D5'
  },
  horizontalScroll: {
    marginBottom: 14
  },
  choiceItem: {
    width: 90,
    backgroundColor: '#FFFDF9',
    borderRadius: 14,
    paddingVertical: 14,
    alignItems: 'center',
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#EFE3D5'
  },
  choiceItemActive: {
    borderColor: '#C29B75',
    backgroundColor: '#F9F1EA'
  },
  choiceText: {
    fontSize: 11,
    color: '#5A3E2B',
    fontWeight: '600',
    marginTop: 4
  },
  gridRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 14
  },
  choiceItemBox: {
    flex: 1,
    backgroundColor: '#FFFDF9',
    borderRadius: 14,
    paddingVertical: 12,
    alignItems: 'center',
    marginHorizontal: 4,
    borderWidth: 1,
    borderColor: '#EFE3D5'
  },
  previewCardMedium: {
    width: '100%',
    height: 180,
    backgroundColor: '#FFFDF9',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#EFE3D5',
    marginBottom: 12
  },
  tabRow: {
    flexDirection: 'row',
    backgroundColor: '#EFE3D5',
    borderRadius: 10,
    padding: 2,
    marginBottom: 16
  },
  tabItem: {
    flex: 1,
    paddingVertical: 8,
    alignItems: 'center',
    borderRadius: 8
  },
  tabItemActive: {
    backgroundColor: '#FFFDF9'
  },
  tabText: {
    fontSize: 12,
    color: '#8C6D53',
    fontWeight: '600'
  },
  tabTextActive: {
    color: '#4A3321'
  },
  sliderBox: {
    backgroundColor: '#FFFDF9',
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: '#EFE3D5',
    marginBottom: 10
  },
  sliderLabel: {
    fontSize: 12,
    color: '#5A3E2B',
    marginBottom: 6,
    fontWeight: '600'
  },
  sliderBar: {
    width: '100%',
    height: 6,
    backgroundColor: '#EFE3D5',
    borderRadius: 3,
    marginBottom: 14,
    overflow: 'hidden'
  },
  sliderFill: {
    height: '100%',
    backgroundColor: '#C29B75'
  },
  orderCard: {
    backgroundColor: '#FFFDF9',
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: '#EFE3D5',
    marginBottom: 10
  },
  orderSummaryTop: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12
  },
  orderThumb: {
    width: 56,
    height: 56,
    backgroundColor: '#F3E8DC',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E4D3C0'
  },
  orderTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#4A3321'
  },
  orderSub: {
    fontSize: 12,
    color: '#C29B75',
    fontWeight: '600',
    marginTop: 2
  },
  orderDesc: {
    fontSize: 10,
    color: '#9E826C',
    marginTop: 2
  },
  orderPrice: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#4A3321'
  },
  divider: {
    height: 1,
    backgroundColor: '#EFE3D5',
    marginVertical: 10
  },
  infoTitle: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#4A3321',
    marginBottom: 6
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 4
  },
  infoKey: {
    fontSize: 12,
    color: '#8C6D53'
  },
  infoVal: {
    fontSize: 12,
    color: '#4A3321',
    fontWeight: '600'
  },
  infoValRed: {
    fontSize: 12,
    color: '#D97706',
    fontWeight: '600'
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    paddingTop: 8,
    borderTopWidth: 1,
    borderTopColor: '#EFE3D5'
  },
  totalLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#4A3321'
  },
  totalPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#C29B75'
  },
  successBox: {
    backgroundColor: '#FFFDF9',
    borderRadius: 20,
    padding: 24,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#EFE3D5',
    marginBottom: 20
  },
  successCheckCircle: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#10B981',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12
  },
  successTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4A3321',
    marginBottom: 4
  },
  successDesc: {
    fontSize: 13,
    color: '#6B503D',
    marginBottom: 2
  },
  successTime: {
    fontSize: 11,
    color: '#9E826C',
    marginBottom: 16
  },
  outlineButton: {
    paddingVertical: 8,
    paddingHorizontal: 24,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#C29B75'
  },
  outlineButtonText: {
    fontSize: 13,
    color: '#C29B75',
    fontWeight: '600'
  },
  recommendCard: {
    flex: 1,
    backgroundColor: '#FFFDF9',
    borderRadius: 14,
    padding: 10,
    alignItems: 'center',
    marginHorizontal: 4,
    borderWidth: 1,
    borderColor: '#EFE3D5'
  },
  recommendThumb: {
    width: 48,
    height: 48,
    backgroundColor: '#F3E8DC',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 6
  },
  recommendName: {
    fontSize: 11,
    color: '#4A3321',
    fontWeight: '600',
    marginBottom: 2
  },
  recommendPrice: {
    fontSize: 11,
    color: '#C29B75',
    fontWeight: 'bold'
  }
});