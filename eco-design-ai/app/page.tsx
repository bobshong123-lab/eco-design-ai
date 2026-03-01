'use client';

import { useState } from 'react';
import { Sidebar } from '@/components/Sidebar';
import { ChatWindow } from '@/components/ChatWindow';
import { FeatureCard } from '@/components/FeatureCard';
import { knowledgeBase } from '@/lib/rag';
import { 
  Home, 
  MessageCircle, 
  BookOpen, 
  Settings,
  Trees,
  Flame,
  Hammer,
  Warehouse,
  ArrowRight
} from 'lucide-react';

export default function HomePage() {
  const [activeTab, setActiveTab] = useState('home');
  const [userContext, setUserContext] = useState({
    location: '',
    climate: '',
    terrain: '',
    budget: '',
    needs: ''
  });

  // 获取知识库分类
  const buildingTypes = [
    { key: 'cob', icon: Home, name: '土团房', desc: '泥土+稻草混合建造' },
    { key: 'earthbag', icon: Warehouse, name: '土袋房', desc: '编织袋填充土壤' },
    { key: 'rammedEarth', icon: Hammer, name: '夯土墙', desc: '层层夯实成墙' },
    { key: 'adobe', icon: Home, name: '土砖', desc: '太阳晒干砖' },
    { key: 'rocketStove', icon: Flame, name: '火箭炉', desc: '高效节能灶' },
  ];

  const features = [
    {
      title: '智能咨询',
      description: 'AI分析你的需求，推荐最适合的自然建筑方案',
      icon: MessageCircle,
      onClick: () => setActiveTab('chat')
    },
    {
      title: '知识库',
      description: '泥土建筑、木构建筑、火与热能系统完整技术文档',
      icon: BookOpen,
      onClick: () => setActiveTab('knowledge')
    },
    {
      title: '方案设计',
      description: '根据你的具体情况，定制化设计建议',
      icon: Trees,
      onClick: () => setActiveTab('chat')
    },
  ];

  // 渲染首页
  const renderHome = () => (
    <div className="p-8 overflow-y-auto">
      {/* Hero Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-earth-900 mb-2">
          欢迎使用生态设计AI助手
        </h1>
        <p className="text-earth-600">
          基于自然建筑技术的智能顾问，为您提供专业的生态设计方案
        </p>
      </div>

      {/* Quick Actions */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold text-earth-900 mb-4">快速开始</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>

      {/* Building Types */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold text-earth-900 mb-4">建筑类型</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {buildingTypes.map((type) => (
            <div
              key={type.key}
              className="p-4 bg-white rounded-xl border border-earth-200 hover:border-primary-300 hover:shadow-lg transition-all cursor-pointer"
              onClick={() => setActiveTab('chat')}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                  <type.icon className="w-5 h-5 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-medium text-earth-900">{type.name}</h3>
                  <p className="text-xs text-earth-500">{type.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* User Context Form */}
      <div className="bg-white rounded-2xl p-6 border border-earth-200">
        <h2 className="text-lg font-semibold text-earth-900 mb-4">设置你的建筑需求</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-earth-700 mb-1">所在地区</label>
            <input
              type="text"
              value={userContext.location}
              onChange={(e) => setUserContext({ ...userContext, location: e.target.value })}
              placeholder="如：湖北、浙江等"
              className="w-full px-3 py-2 border border-earth-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-earth-700 mb-1">气候类型</label>
            <select
              value={userContext.climate}
              onChange={(e) => setUserContext({ ...userContext, climate: e.target.value })}
              className="w-full px-3 py-2 border border-earth-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              <option value="">请选择</option>
              <option value="温带">温带</option>
              <option value="热带">热带</option>
              <option value="寒带">寒带</option>
              <option value="干旱">干旱</option>
              <option value="湿润">湿润</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-earth-700 mb-1">地形</label>
            <select
              value={userContext.terrain}
              onChange={(e) => setUserContext({ ...userContext, terrain: e.target.value })}
              className="w-full px-3 py-2 border border-earth-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              <option value="">请选择</option>
              <option value="平地">平地</option>
              <option value="斜坡">斜坡</option>
              <option value="山地">山地</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-earth-700 mb-1">预算范围</label>
            <select
              value={userContext.budget}
              onChange={(e) => setUserContext({ ...userContext, budget: e.target.value })}
              className="w-full px-3 py-2 border border-earth-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              <option value="">请选择</option>
              <option value="5万以下">5万以下</option>
              <option value="5-15万">5-15万</option>
              <option value="15-30万">15-30万</option>
              <option value="30万以上">30万以上</option>
            </select>
          </div>
        </div>
        <button
          onClick={() => setActiveTab('chat')}
          className="mt-4 px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 flex items-center gap-2"
        >
          开始咨询 <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );

  // 渲染知识库页面
  const renderKnowledge = () => (
    <div className="p-8 overflow-y-auto">
      <h1 className="text-2xl font-bold text-earth-900 mb-2">知识库</h1>
      <p className="text-earth-600 mb-8">自然建筑技术完整指南</p>
      
      <div className="space-y-6">
        {Object.entries(knowledgeBase).map(([key, data]: [string, any]) => (
          <div key={key} className="bg-white rounded-2xl p-6 border border-earth-200">
            <h2 className="text-xl font-semibold text-earth-900 mb-2">{data.name}</h2>
            <p className="text-earth-600 mb-4">{data.description}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <h3 className="font-medium text-earth-800 mb-2">材料</h3>
                <ul className="space-y-1 text-earth-600">
                  {data.materials.map((m: string, i: number) => (
                    <li key={i}>• {m}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-earth-800 mb-2">优点</h3>
                <ul className="space-y-1 text-earth-600">
                  {data.pros.map((p: string, i: number) => (
                    <li key={i}>• {p}</li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="mt-4 p-3 bg-primary-50 rounded-lg">
              <span className="text-sm text-primary-700">💰 预算参考：{data.budget}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  // 渲染设置页面
  const renderSettings = () => (
    <div className="p-8 overflow-y-auto">
      <h1 className="text-2xl font-bold text-earth-900 mb-2">设置</h1>
      <p className="text-earth-600 mb-8">配置你的AI助手</p>
      
      <div className="bg-white rounded-2xl p-6 border border-earth-200 max-w-xl">
        <h2 className="text-lg font-semibold text-earth-900 mb-4">API 配置</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-earth-700 mb-1">OpenAI API Key</label>
            <input
              type="password"
              placeholder="sk-..."
              className="w-full px-3 py-2 border border-earth-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
            <p className="text-xs text-earth-500 mt-1">用于调用 GPT 模型</p>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-earth-200">
          <h2 className="text-lg font-semibold text-earth-900 mb-4">关于</h2>
          <p className="text-sm text-earth-600">
            生态设计AI助手 v1.0.0<br />
            基于自然建筑技术知识库构建<br />
            MVP版本
          </p>
        </div>
      </div>
    </div>
  );

  // 渲染聊天页面
  const renderChat = () => (
    <div className="h-full p-4">
      <ChatWindow userContext={userContext} />
    </div>
  );

  return (
    <div className="flex h-screen bg-earth-50">
      <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
      <main className="flex-1 h-screen overflow-hidden">
        {activeTab === 'home' && renderHome()}
        {activeTab === 'chat' && renderChat()}
        {activeTab === 'knowledge' && renderKnowledge()}
        {activeTab === 'settings' && renderSettings()}
      </main>
    </div>
  );
}
