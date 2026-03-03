'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { ChatWindow } from '@/components/ChatWindow';
import { topics, TopicId } from '@/lib/topics';

function ChatPageContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const topicId = (searchParams.get('topic') as TopicId) || 'general';
  const [isValidTopic, setIsValidTopic] = useState(true);

  useEffect(() => {
    if (!topics[topicId]) {
      setIsValidTopic(false);
    }
  }, [topicId]);

  if (!isValidTopic) {
    return (
      <div className="min-h-screen bg-earth-50 flex items-center justify-center p-4">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-earth-900 mb-4">无效的主题</h1>
          <button
            onClick={() => router.push('/')}
            className="px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600"
          >
            返回首页
          </button>
        </div>
      </div>
    );
  }

  return (
    <ChatWindow 
      topicId={topicId} 
      onBack={() => router.push('/')} 
    />
  );
}

export default function ChatPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-earth-50 flex items-center justify-center">
        <div className="text-earth-500">加载中...</div>
      </div>
    }>
      <ChatPageContent />
    </Suspense>
  );
}
