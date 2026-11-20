import { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function GlassCard({ children, className = '', hover = false }: GlassCardProps) {
  return (
    <div
      className={`
        relative overflow-hidden rounded-2xl bg-white/[0.02] backdrop-blur-xl 
        border border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)]
        ${hover ? 'transition-all duration-300 hover:bg-white/[0.05] hover:border-white/20 hover:shadow-[0_8px_40px_rgba(0,0,0,0.2)] hover:-translate-y-1' : ''}
        ${className}
      `}
    >
      {/* Subtle top highlight for the glass effect */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      {children}
    </div>
  );
}