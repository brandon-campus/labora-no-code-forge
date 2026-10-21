import { useId, useState, type ReactNode } from 'react';
import { ArrowRight } from 'lucide-react';
import { useActiveCohorte } from '@/hooks/useActiveCohorte';
import { SiteLink } from './SiteLink';
import { fallbackBootcampPricing } from './siteData';

type Price = { currency: string; unico: number; unicoOriginal?: number; cuotas3?: number };
const fmt = (n: number) => n.toLocaleString('es-AR');

/** Precio vigente del Bootcamp para un país: Supabase (`precios_regionales`) o respaldo */
export const useBootcampPrice = (country = 'Otro'): Price => {
  const { data: cohorte } = useActiveCohorte();
  const pricing = (cohorte?.precios_regionales || fallbackBootcampPricing) as Record<string, Price>;
  return pricing[country] ?? fallbackBootcampPricing[country] ?? fallbackBootcampPricing.Otro;
};

export const formatPrice = (p: Price) => `${p.currency} ${fmt(p.unico)}`;

type Props = {
  applyPath: string;
  track: string;
  onApplyClick?: () => void;
  size?: 'md' | 'lg';
  children?: ReactNode;
};

// Caja de precio con selector de país; `children` se muestra entre el precio y el botón (p. ej. lo que incluye)
const BootcampPriceBox = ({ applyPath, track, onApplyClick, size = 'md', children }: Props) => {
  const id = useId();
  const { data: cohorte } = useActiveCohorte();
  const [country, setCountry] = useState('Otro');
  const p = useBootcampPrice(country);

  return (
    <div className="bg-surface-container-low border border-white/[0.07] rounded-2xl p-space-md flex flex-col gap-space-sm">
      <div className="flex items-center justify-between gap-2">
        <label htmlFor={id} className="text-badge-caps text-on-surface-variant uppercase">Ver precio en</label>
        <select
          id={id}
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          className="bg-surface-container-high text-on-surface text-label-sm rounded-full px-space-sm py-1.5 border border-white/10 focus:outline-none focus:border-primary-container"
        >
          {Object.keys(fallbackBootcampPricing).map((c) => <option key={c} value={c}>{c === 'Otro' ? 'Otro país (USD)' : c}</option>)}
        </select>
      </div>
      <div>
        {cohorte?.promocion_texto_badge && (
          <span className="inline-block text-badge-caps text-on-primary-container bg-primary-container rounded-full px-2 py-0.5 mb-1">{cohorte.promocion_texto_badge}</span>
        )}
        <div className="flex items-baseline gap-2 flex-wrap">
          <span className={`${size === 'lg' ? 'text-display-hero-mobile md:text-display-hero' : 'text-headline-xl'} text-on-surface font-bold`}>{formatPrice(p)}</span>
          {p.unicoOriginal && <span className="text-body-md text-on-surface-variant line-through">{fmt(p.unicoOriginal)}</span>}
        </div>
        <span className="text-body-sm text-on-surface-variant">
          Pago único · sin costos ocultos{p.cuotas3 ? ` · o 3 cuotas de ${p.currency} ${fmt(p.cuotas3)}` : ''}
        </span>
      </div>
      {children}
      <SiteLink to={applyPath} track={track} onClick={onApplyClick} className="w-full inline-flex items-center justify-center gap-2 text-label-md text-on-primary-container bg-gradient-to-r from-primary-container to-secondary-container hover:brightness-110 transition-all py-space-sm rounded-full shadow-md">
        <span>Aplicar al Bootcamp</span><ArrowRight className="w-4 h-4" />
      </SiteLink>
    </div>
  );
};

export default BootcampPriceBox;
