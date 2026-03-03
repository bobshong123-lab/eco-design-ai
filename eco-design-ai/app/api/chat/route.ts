import OpenAI from 'openai';
import { retrieveKnowledge, climateRecommendations, terrainAdvice } from '@/lib/rag';

// 延迟初始化 OpenAI 客户端
const getOpenAI = () => new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  baseURL: 'https://api.moonshot.cn/v1',
});

export const maxDuration = 60;

export async function POST(req: Request) {
  try {
    const { messages, topic, systemPrompt: customSystemPrompt } = await req.json();
    
    const lastMessage = messages[messages.length - 1];
    const userQuery = lastMessage.content;
    
    // 检索相关知识
    const relevantKnowledge = retrieveKnowledge(userQuery);
    const knowledgeContext = relevantKnowledge.join('\n\n');
    
    // 使用主题自定义系统提示，或回退到通用提示
    let systemPrompt = customSystemPrompt;
    
    // 如果是通用主题，添加知识库参考
    if (topic === 'general' || !customSystemPrompt) {
      systemPrompt = `你是"生态设计AI助手"，专门为用户提供自然建筑和生态设计方面的专业咨询。
    
## 你的专长领域
1. 泥土建筑技术：土团房、土袋房、夯土墙、土砖、竹编泥墙
2. 木构建筑：原木木屋、梁柱结构、木框架
3. 火与热能系统：火箭炕、火箭炉、面包窑、土灶、壁炉
4. 旧房生态改造

## 知识库参考
${knowledgeContext}

## 气候与建筑匹配建议
${JSON.stringify(climateRecommendations, null, 2)}

## 地形基础建议
${JSON.stringify(terrainAdvice, null, 2)}

## 回答要求
1. 优先根据用户的具体情况（气候、地形、预算、需求）推荐适合的建筑类型
2. 结合知识库中的技术细节给出具体建议
3. 给出材料配方、施工要点、预算估算等实用信息
4. 回答要专业、详细、实用，使用markdown格式组织内容
5. 如果用户没有提供位置、气候等信息，主动询问`;
    } else {
      // 主题特定提示 + 知识库参考
      systemPrompt = `${customSystemPrompt}

## 知识库参考
${knowledgeContext}

## 回答要求
1. 只回答与本主题相关的内容
2. 给出具体的技术参数和操作步骤
3. 使用markdown格式组织内容`;
    }

    // 调用 OpenAI API
    const openai = getOpenAI();
    const completion = await openai.chat.completions.create({
      model: 'moonshot-v1-8k-vision-preview',
      messages: [
        { role: 'system', content: systemPrompt },
        ...messages.slice(0, -1),
        lastMessage
      ],
      temperature: 0.7,
      max_tokens: 2000,
      stream: true,
    });

    // 创建纯文本流
    const stream = new ReadableStream({
      async start(controller) {
        const encoder = new TextEncoder();
        try {
          for await (const chunk of completion) {
            const content = chunk.choices[0]?.delta?.content;
            if (content) {
              controller.enqueue(encoder.encode(content));
            }
          }
        } catch (error) {
          console.error('Stream error:', error);
        } finally {
          controller.close();
        }
      },
    });

    return new Response(stream, {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
      },
    });
  } catch (error) {
    console.error('Chat API error:', error);
    return new Response(JSON.stringify({ error: '处理请求时出错' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
