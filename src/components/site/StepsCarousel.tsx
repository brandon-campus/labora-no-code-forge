import { useCallback, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from '@/components/ui/carousel';

type Step = readonly [number: string, title: string, description: string];

const btn = 'h-11 w-11 rounded-full border border-white/10 bg-surface-container-high text-on-surface flex items-center justify-center transition-colors hover:bg-surface-container-highest disabled:opacity-40 disabled:pointer-events-none';

/**
 * Etapas en carrusel (web y mobile): barra de progreso con un punto por etapa (clickeable),
 * tarjetas deslizables, flechas y contador. La última etapa (la meta) usa el acento neón.
 */
const StepsCarousel = ({ steps }: { steps: readonly Step[] }) => {
  const [api, setApi] = useState<CarouselApi>();
  const [inView, setInView] = useState<number[]>([0]);
  const [edges, setEdges] = useState({ start: true, end: false });
  const last = steps.length - 1;

  const update = useCallback(() => {
    if (!api) return;
    const visible = api.slidesInView();
    if (visible.length) setInView(visible);
    setEdges({ start: !api.canScrollPrev(), end: !api.canScrollNext() });
  }, [api]);

  useEffect(() => {
    if (!api) return;
    update();
    api.on('select', update).on('slidesInView', update).on('reInit', update);
    return () => { api.off('select', update).off('slidesInView', update).off('reInit', update); };
  }, [api, update]);

  const first = Math.min(...inView) + 1;
  const lastVisible = Math.max(...inView) + 1;
  const progress = (Math.max(...inView) / last) * 100;

  return (
    <div>
      {/* Barra de progreso: un punto por etapa */}
      <div className="relative mb-space-md px-3">
        <div className="absolute left-3 right-3 top-1/2 -translate-y-1/2 h-px bg-white/10" />
        <div className="absolute left-3 top-1/2 -translate-y-1/2 h-px bg-gradient-to-r from-primary-container to-primary transition-all duration-300" style={{ width: `calc((100% - 1.5rem) * ${progress / 100})` }} />
        <ol className="relative flex justify-between">
          {steps.map(([n, title], i) => {
            const active = inView.includes(i);
            const goal = i === last;
            return (
              <li key={n} className="list-none">
                <button
                  type="button"
                  onClick={() => api?.scrollTo(i)}
                  aria-label={`Ir a la etapa ${n}: ${title}`}
                  aria-current={active ? 'step' : undefined}
                  className="relative w-6 h-6 -m-1 p-1 flex items-center justify-center"
                >
                  <span className={`block rounded-full transition-all duration-300 ${
                    goal
                      ? `bg-labora-neon ${active ? 'w-3.5 h-3.5 shadow-[0_0_10px_rgba(193,255,114,0.8)]' : 'w-2.5 h-2.5 opacity-60'}`
                      : active ? 'w-3.5 h-3.5 bg-primary-container ring-4 ring-primary-container/25' : 'w-2.5 h-2.5 bg-surface-bright'
                  }`} />
                </button>
              </li>
            );
          })}
        </ol>
      </div>

      <Carousel setApi={setApi} opts={{ align: 'start', inViewThreshold: 0.6 }}>
        <CarouselContent>
          {steps.map(([n, title, desc], i) => {
            const goal = i === last;
            return (
              <CarouselItem key={n} className="basis-[80%] sm:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                <article className={`h-full rounded-2xl p-space-md border ${goal ? 'bg-surface-container-low border-labora-neon/40 shadow-[0_0_24px_-12px_rgba(193,255,114,0.5)]' : 'bg-surface-container-low border-white/[0.07]'}`}>
                  <span className={`text-headline-lg font-jakarta block ${goal ? 'text-labora-neon' : 'text-primary'}`}>{n}</span>
                  <h3 className="text-headline-sm text-on-surface normal-case mt-1">{title}</h3>
                  <p className="text-body-sm text-on-surface-variant mt-1">{desc}</p>
                </article>
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>

      <div className="flex items-center justify-between mt-space-md">
        <span className="text-label-sm text-on-surface-variant" aria-live="polite">
          {first === lastVisible ? `Etapa ${first} de ${steps.length}` : `Etapas ${first}–${lastVisible} de ${steps.length}`}
        </span>
        <div className="flex items-center gap-space-sm">
          <button type="button" aria-label="Etapa anterior" onClick={() => api?.scrollPrev()} disabled={edges.start} className={btn}><ChevronLeft className="w-5 h-5" /></button>
          <button type="button" aria-label="Etapa siguiente" onClick={() => api?.scrollNext()} disabled={edges.end} className={btn}><ChevronRight className="w-5 h-5" /></button>
        </div>
      </div>
    </div>
  );
};

export default StepsCarousel;
