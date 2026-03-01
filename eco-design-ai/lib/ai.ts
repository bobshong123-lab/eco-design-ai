import { openai } from '@ai-sdk/openai';

// AI Provider 配置
export const aiConfig = {
  provider: 'openai',
  model: 'gpt-4o-mini',
  temperature: 0.7,
  maxTokens: 2000,
};

// 获取 AI 模型
export function getModel() {
  return openai(aiConfig.model);
}

export { openai };
