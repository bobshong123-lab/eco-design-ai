'use client';

import { useCompletion } from 'ai/react';
import { useRef, useEffect, useState } from 'react';
import { Send, Loader2 } from 'lucide-react';
import { Message } from './Message';
import { cn } from '@/lib/utils';

interface ChatWindowProps {
  userContext?: {
    location?: string;
    climate?: string;
    terrain?: string;
    budget?: string;
    needs?: string;
  };
}

interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
}

export function ChatWindow({ userContext }: ChatWindowProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      content: input,
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [...messages, userMessage],
          userContext,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to fetch');
      }

      const reader = response.body?.getReader();
      const decoder = new TextDecoder();
      let assistantMessage = '';

      if (reader) {
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          assistantMessage += decoder.decode(value, { stream: true });
        }
      }

      const assistantMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: assistantMessage,
      };

      setMessages(prev => [...prev, assistantMsg]);
    } catch (error) {
      console.error('Chat error:', error);
      const errorMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: '抱歉，发生了错误，请稍后重试。',
      };
      setMessages(prev => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  return (
    <div className="flex flex-col h-full bg-white rounded-2xl overflow-hidden border border-earth-200">
      {/* Header */}
      <div className="px-6 py-4 border-b border-earth-200 bg-gradient-to-r from-primary-50 to-white">
        <h2 className="text-lg font-semibold text-earth-900">智能咨询</h2>
        <p className="text-sm text-earth-500">描述你的需求，获取专业建议</p>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-center p-8">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-4">
              <Send className="w-8 h-8 text-primary-500" />
            </div>
            <h3 className="text-lg font-medium text-earth-900 mb-2">开始咨询</h3>
            <p className="text-sm text-earth-500 max-w-sm">
              告诉我你的位置、气候、地形、预算等信息，我可以为你推荐适合的自然建筑方案
            </p>
            {/* Quick prompts */}
            <div className="mt-6 flex flex-wrap gap-2 justify-center">
              <button
                onClick={() => setInput('我想在南方建一个土团房，应该注意什么？')}
                className="px-3 py-1.5 text-sm bg-earth-100 text-earth-700 rounded-full hover:bg-earth-200 transition-colors"
              >
                土团房建造指南
              </button>
              <button
                onClick={() => setInput('推荐适合温带地区的自然建筑类型')}
                className="px-3 py-1.5 text-sm bg-earth-100 text-earth-700 rounded-full hover:bg-earth-200 transition-colors"
              >
                温带建筑推荐
              </button>
              <button
                onClick={() => setInput('如何建造一个高效的火箭炉？')}
                className="px-3 py-1.5 text-sm bg-earth-100 text-earth-700 rounded-full hover:bg-earth-200 transition-colors"
              >
                火箭炉建造
              </button>
            </div>
          </div>
        ) : (
          messages.map((message, index) => (
            <Message
              key={message.id}
              role={message.role}
              content={message.content}
              isLoading={isLoading && index === messages.length - 1 && message.role === 'user'}
            />
          ))
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <form onSubmit={handleSubmit} className="p-4 border-t border-earth-200 bg-earth-50">
        <div className="flex gap-3">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="输入你的问题..."
            className="flex-1 px-4 py-3 bg-white border border-earth-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
          <button
            type="submit"
            disabled={isLoading || !input.trim()}
            className={cn(
              'px-4 py-3 bg-primary-500 text-white rounded-xl transition-all',
              'hover:bg-primary-600 disabled:opacity-50 disabled:cursor-not-allowed',
              'flex items-center justify-center'
            )}
          >
            {isLoading ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              <Send className="w-5 h-5" />
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
