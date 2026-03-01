'use client';

import { cn } from '@/lib/utils';
import { User, Bot } from 'lucide-react';

interface MessageProps {
  role: 'user' | 'assistant';
  content: string;
  isLoading?: boolean;
}

export function Message({ role, content, isLoading }: MessageProps) {
  const isUser = role === 'user';
  
  return (
    <div className={cn(
      'flex gap-4 p-4',
      isUser ? 'bg-white' : 'bg-primary-50'
    )}>
      {/* Avatar */}
      <div className={cn(
        'w-8 h-8 rounded-full flex items-center justify-center shrink-0',
        isUser ? 'bg-earth-200' : 'bg-primary-500'
      )}>
        {isUser ? (
          <User className="w-5 h-5 text-earth-600" />
        ) : (
          <Bot className="w-5 h-5 text-white" />
        )}
      </div>
      
      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <span className={cn(
            'text-sm font-medium',
            isUser ? 'text-earth-600' : 'text-primary-600'
          )}>
            {isUser ? '你' : '生态设计AI助手'}
          </span>
        </div>
        
        <div className={cn(
          'prose prose-sm max-w-none',
          isUser ? 'text-earth-800' : 'text-earth-700'
        )}>
          {isLoading ? (
            <div className="flex items-center gap-1">
              <span className="w-2 h-2 bg-primary-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
              <span className="w-2 h-2 bg-primary-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
              <span className="w-2 h-2 bg-primary-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
            </div>
          ) : (
            <div className="whitespace-pre-wrap">
              {content}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
