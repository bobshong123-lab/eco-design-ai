'use client';

import { cn } from '@/lib/utils';
import { 
  Home, 
  MessageCircle, 
  BookOpen, 
  Settings, 
  Sparkles,
  Leaf
} from 'lucide-react';
import { useState } from 'react';

interface SidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const tabs = [
  { id: 'home', icon: Home, label: '首页' },
  { id: 'chat', icon: MessageCircle, label: '智能咨询' },
  { id: 'knowledge', icon: BookOpen, label: '知识库' },
  { id: 'settings', icon: Settings, label: '设置' },
];

export function Sidebar({ activeTab, onTabChange }: SidebarProps) {
  return (
    <aside className="w-16 md:w-64 bg-gradient-to-b from-earth-800 to-earth-900 text-white flex flex-col flex-shrink-0">
      {/* Logo - hidden on mobile, visible on desktop */}
      <div className="p-4 md:p-6 border-b border-earth-700 hidden md:flex">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary-500 rounded-xl flex items-center justify-center">
            <Leaf className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-lg font-bold">生态设计AI</h1>
            <p className="text-xs text-earth-300">自然建筑智能顾问</p>
          </div>
        </div>
      </div>

      {/* Mobile logo - simple icon */}
      <div className="p-4 border-b border-earth-700 md:hidden flex justify-center">
        <div className="w-10 h-10 bg-primary-500 rounded-xl flex items-center justify-center">
          <Leaf className="w-6 h-6 text-white" />
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-2 md:p-4">
        <ul className="space-y-2">
          {tabs.map((tab) => (
            <li key={tab.id}>
              <button
                onClick={() => onTabChange(tab.id)}
                className={cn(
                  'w-full flex items-center gap-3 px-3 py-3 rounded-xl transition-all duration-200',
                  activeTab === tab.id
                    ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/25'
                    : 'text-earth-200 hover:bg-earth-800 hover:text-white'
                )}
              >
                <tab.icon className="w-5 h-5 flex-shrink-0" />
                <span className="font-medium hidden md:inline">{tab.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Features highlight */}
      <div className="p-2 md:p-4 border-t border-earth-700">
        <div className="bg-earth-800/50 rounded-xl p-3 md:p-4">
          <div className="flex items-center gap-2 text-primary-400 mb-2">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium hidden md:inline">今日推荐</span>
            <span className="text-xs font-medium md:hidden">推荐</span>
          </div>
          <p className="text-xs text-earth-300 hidden md:block">
            春季最适合建造土团房，气候温和，干燥速度快
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="p-4 text-center text-xs text-earth-500">
        v1.0.0 · MVP版本
      </div>
    </aside>
  );
}
