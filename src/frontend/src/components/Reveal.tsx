import { ReactNode } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function Reveal({ children, className = '', delay = 0 }: RevealProps) {
  const { ref, isRevealed } = useScrollReveal();

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${className} ${
        isRevealed
          ? 'motion-safe:opacity-100 motion-safe:translate-y-0 motion-reduce:opacity-100'
          : 'motion-safe:opacity-0 motion-safe:translate-y-8 motion-reduce:opacity-100'
      }`}
      style={{
        transitionDelay: isRevealed ? `${delay}ms` : '0ms',
      }}
    >
      {children}
    </div>
  );
}
