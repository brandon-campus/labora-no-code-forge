import type { InputHTMLAttributes, ReactNode, TextareaHTMLAttributes } from 'react';
import { Loader2 } from 'lucide-react';

// Piezas de interfaz del panel /admin con el diseño v2 (tokens de .site-v2)

export const inputClass =
  'w-full bg-surface-container-lowest border border-white/10 rounded-xl px-space-sm py-2.5 text-body-md text-on-surface placeholder:text-outline focus:outline-none focus:border-primary-container focus:ring-2 focus:ring-primary-container/20 transition-colors disabled:opacity-50';

export const primaryButton =
  'inline-flex items-center justify-center gap-2 text-label-md text-on-primary-container bg-gradient-to-r from-primary-container to-secondary-container hover:brightness-110 active:scale-[0.99] transition-all rounded-full px-space-lg py-space-sm shadow-md disabled:opacity-60 disabled:pointer-events-none';

export const secondaryButton =
  'inline-flex items-center justify-center gap-2 text-label-md text-on-surface bg-white/[0.03] border border-white/10 hover:border-primary-container transition-colors rounded-full px-space-md py-space-xs disabled:opacity-50';

export const iconButton =
  'h-10 w-10 inline-flex items-center justify-center rounded-full text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors disabled:opacity-40';

export const PageHeader = ({ title, description, actions }: { title: string; description?: string; actions?: ReactNode }) => (
  <div className="mb-space-lg flex flex-col md:flex-row md:items-end justify-between gap-space-md">
    <div>
      <h1 className="text-headline-lg md:text-headline-xl text-on-surface tracking-tight normal-case">{title}</h1>
      {description && <p className="text-body-md text-on-surface-variant mt-1">{description}</p>}
    </div>
    {actions && <div className="flex flex-wrap gap-space-sm">{actions}</div>}
  </div>
);

export const Card = ({ title, description, children, className = '' }: { title?: string; description?: string; children: ReactNode; className?: string }) => (
  <section className={`bg-surface-container-low border border-white/[0.07] rounded-2xl p-space-md md:p-space-lg ${className}`}>
    {title && (
      <div className="mb-space-md">
        <h2 className="text-headline-sm text-on-surface normal-case">{title}</h2>
        {description && <p className="text-body-sm text-on-surface-variant mt-0.5">{description}</p>}
      </div>
    )}
    {children}
  </section>
);

type FieldProps = { label: string; hint?: string; children: ReactNode; className?: string };

export const Field = ({ label, hint, children, className = '' }: FieldProps) => (
  <label className={`flex flex-col gap-1.5 ${className}`}>
    <span className="text-label-sm text-on-surface">{label}</span>
    {children}
    {hint && <span className="text-body-sm text-on-surface-variant">{hint}</span>}
  </label>
);

export const TextInput = (props: InputHTMLAttributes<HTMLInputElement>) => <input {...props} className={`${inputClass} ${props.className ?? ''}`} />;

export const TextArea = (props: TextareaHTMLAttributes<HTMLTextAreaElement>) => <textarea {...props} className={`${inputClass} ${props.className ?? ''}`} />;

export const Loading = () => (
  <div className="flex justify-center items-center py-20">
    <Loader2 className="h-8 w-8 animate-spin text-primary-container" />
  </div>
);

export const Badge = ({ children, tone = 'neutral' }: { children: ReactNode; tone?: 'neutral' | 'live' | 'warn' }) => {
  const tones = {
    neutral: 'bg-surface-container-high text-on-surface-variant border-white/10',
    live: 'bg-labora-neon/10 text-labora-neon border-labora-neon/30',
    warn: 'bg-primary-container/10 text-primary border-primary-container/30',
  };
  return <span className={`inline-flex items-center gap-1.5 text-badge-caps uppercase rounded-full border px-2 py-0.5 ${tones[tone]}`}>{children}</span>;
};

/**
 * Barra de guardado fija abajo: siempre visible al editar formularios largos (sobre todo en mobile).
 * Muestra si hay cambios sin guardar.
 */
export const SaveBar = ({ dirty, saving, label = 'Guardar cambios', onDiscard }: { dirty: boolean; saving: boolean; label?: string; onDiscard?: () => void }) => (
  <div className="sticky bottom-0 z-30 -mx-margin-mobile md:mx-0 mt-space-lg">
    <div className="bg-surface/90 backdrop-blur-xl border-t md:border border-white/10 md:rounded-2xl px-margin-mobile md:px-space-md py-space-sm flex items-center justify-between gap-space-sm shadow-[0_-8px_24px_rgba(0,0,0,0.4)]">
      <span className="flex items-center gap-2 text-body-sm text-on-surface-variant">
        <span className={`w-2 h-2 rounded-full ${dirty ? 'bg-primary-container animate-pulse motion-reduce:animate-none' : 'bg-labora-neon'}`} />
        {dirty ? 'Cambios sin guardar' : 'Todo guardado'}
      </span>
      <div className="flex items-center gap-space-sm">
        {dirty && onDiscard && (
          <button type="button" onClick={onDiscard} className={secondaryButton}>Descartar</button>
        )}
        <button type="submit" disabled={saving || !dirty} className={primaryButton}>
          {saving && <Loader2 className="w-4 h-4 animate-spin" />}
          {label}
        </button>
      </div>
    </div>
  </div>
);
