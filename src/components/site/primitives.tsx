import { useEffect, type ReactNode } from 'react';
import { useLocation } from 'react-router-dom';

export const Container = ({ children, className = '' }: { children: ReactNode; className?: string }) => (
  <div className={`w-full max-w-[1240px] mx-auto px-margin-mobile md:px-margin ${className}`}>{children}</div>
);

export const Eyebrow = ({ children }: { children: ReactNode }) => (
  <span className="text-badge-caps uppercase tracking-wider text-primary px-space-sm py-1 rounded-full bg-primary-container/10 inline-block mb-space-xs">
    {children}
  </span>
);

export const H2 = ({ children, className = '' }: { children: ReactNode; className?: string }) => (
  <h2 className={`text-headline-lg md:text-headline-xl text-on-surface tracking-tight normal-case ${className}`}>{children}</h2>
);

export const GradientText = ({ children }: { children: ReactNode }) => (
  <span className="bg-gradient-to-r from-primary via-primary-container to-secondary bg-clip-text text-transparent">{children}</span>
);

// Al llegar con "#id" desde otra página, el contenido aún no está renderizado: reintenta el scroll
export const useHashScroll = () => {
  const { hash } = useLocation();
  useEffect(() => {
    if (!hash) return;
    const t = setTimeout(() => document.getElementById(hash.slice(1))?.scrollIntoView(), 150);
    return () => clearTimeout(t);
  }, [hash]);
};

/** Contenedor raíz de las páginas v2: aplica los tokens aislados bajo .site-v2 */
export const SitePage = ({ children }: { children: ReactNode }) => {
  useHashScroll();
  return <div id="top" className="site-v2 bg-surface font-sans text-on-surface antialiased min-h-screen">{children}</div>;
};
