import { Children, useCallback, useEffect, useRef, useState, type ReactNode } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { snapRow } from './siteData';

type Props = { className?: string; children: ReactNode };

const btn = 'h-11 w-11 rounded-full border border-white/10 bg-surface-container-high text-on-surface flex items-center justify-center transition-colors hover:bg-surface-container-highest disabled:opacity-40 disabled:pointer-events-none';

// Fila con scroll horizontal + snap en mobile (con flechas y contador), grilla desde md
const SnapRow = ({ className = '', children }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const total = Children.count(children);
  const [index, setIndex] = useState(0);
  const [edges, setEdges] = useState({ start: true, end: false });

  const step = useCallback(() => {
    const el = ref.current;
    const first = el?.firstElementChild as HTMLElement | null;
    if (!el || !first) return 0;
    const gap = parseFloat(getComputedStyle(el).columnGap) || 0;
    return first.offsetWidth + gap;
  }, []);

  const update = useCallback(() => {
    const el = ref.current;
    const s = step();
    if (!el || !s) return;
    setIndex(Math.min(total - 1, Math.round(el.scrollLeft / s)));
    setEdges({ start: el.scrollLeft <= 4, end: el.scrollLeft + el.clientWidth >= el.scrollWidth - 4 });
  }, [step, total]);

  useEffect(() => {
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, [update]);

  const go = (dir: 1 | -1) => ref.current?.scrollBy({ left: dir * step(), behavior: 'smooth' });

  return (
    <div>
      <div ref={ref} onScroll={update} className={`${snapRow} ${className}`}>{children}</div>
      <div className="md:hidden flex items-center justify-between mt-space-xs">
        <span className="text-label-sm text-on-surface-variant" aria-live="polite">{index + 1} / {total}</span>
        <div className="flex items-center gap-space-sm">
          <button type="button" aria-label="Anterior" onClick={() => go(-1)} disabled={edges.start} className={btn}><ChevronLeft className="w-5 h-5" /></button>
          <button type="button" aria-label="Siguiente" onClick={() => go(1)} disabled={edges.end} className={btn}><ChevronRight className="w-5 h-5" /></button>
        </div>
      </div>
    </div>
  );
};

export default SnapRow;
