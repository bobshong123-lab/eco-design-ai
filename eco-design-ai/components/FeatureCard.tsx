'use client';

import { cn } from '@/lib/utils';
import { LucideIcon, ArrowRight } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  href?: string;
  onClick?: () => void;
  className?: string;
}

export function FeatureCard({ title, description, icon: Icon, href, onClick, className }: FeatureCardProps) {
  const Component = href ? 'a' : 'button';
  
  return (
    <Component
      href={href}
      onClick={onClick}
      className={cn(
        'group block p-6 bg-white rounded-2xl border border-earth-200 hover:border-primary-300 hover:shadow-xl hover:shadow-primary-500/10 transition-all duration-300',
        className
      )}
    >
      <div className="flex items-start justify-between">
        <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center group-hover:bg-primary-500 transition-colors">
          <Icon className="w-6 h-6 text-primary-600 group-hover:text-white" />
        </div>
        <ArrowRight className="w-5 h-5 text-earth-400 group-hover:text-primary-500 group-hover:translate-x-1 transition-all" />
      </div>
      <h3 className="mt-4 text-lg font-semibold text-earth-900">{title}</h3>
      <p className="mt-2 text-sm text-earth-600">{description}</p>
    </Component>
  );
}
