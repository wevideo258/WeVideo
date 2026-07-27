// src/engine/EmotionEngine.js

/**
 * 根据爱意值计算当前的情感阶段
 */
export function calculateLoveStage(loveValue) {
  if (loveValue < 20) return { key: 'STRANGER', title: '初相识', badge: '🌱' };
  if (loveValue < 50) return { key: 'FRIEND', title: '心动萌芽', badge: '💬' };
  if (loveValue < 80) return { key: 'CONFIDANT', title: '密友同行', badge: '✨' };
  return { key: 'SOULMATE', title: '灵魂共鸣', badge: '💖' };
}

/**
 * 根据当前时间、爱意值和互动间隔计算伴侣的实时情绪与问候语
 */
export function evaluateEmotionContext(character, lastInteractionTimestamp) {
  const hour = new Date().getHours();
  const { loveValue, name } = character;

  // 默认情绪
  let mood = 'HAPPY';
  let greeting = `你好呀，${name}一直在等你呢。`;

  // 时间感知逻辑
  if (hour >= 0 && hour < 5) {
    mood = 'SLEEPY';
    greeting = `这么晚还没睡吗？${name}有点困了，但如果是陪你的话……随时都在。`;
  } else if (hour >= 5 && hour < 9) {
    mood = 'WARM';
    greeting = `早安呀！新的一天，${name}希望能给你带来好心情。`;
  } else if (hour >= 22) {
    mood = 'COZY';
    greeting = `夜深了，今天过得怎么样？快和${name}讲讲吧。`;
  }

  // 结合爱意值微调语气
  if (loveValue > 80 && mood === 'HAPPY') {
    greeting = `呀，你终于来找我了！刚才我还一直在想你呢，快抱抱我~`;
  }

  return {
    mood,
    greeting,
    stage: calculateLoveStage(loveValue)
  };
}