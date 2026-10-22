import { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { SiteLink } from './SiteLink';
import { APPLY_PATH, navLinks, programLinks } from './siteData';

type Anchor = { label: string; href: string };

type Props = {
  applyPath?: string;
  /** 'funnel': landings de campañas; solo anclas internas (sin links a otras páginas) */
  variant?: 'site' | 'funnel';
  anchors?: Anchor[];
  /** Callback extra al hacer click en "Aplicar" (p. ej. eventos de Meta Pixel de la landing) */
  onApplyClick?: () => void;
};

const SiteHeader = ({ applyPath = APPLY_PATH, onApplyClick, variant = 'site', anchors = [] }: Props) => {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  const funnel = variant === 'funnel';
  const links = funnel ? anchors : navLinks;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface/80 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <div className="h-20 w-full max-w-[1240px] mx-auto px-margin-mobile md:px-margin flex items-center justify-between">
        <div className="flex items-center gap-space-lg">
          <SiteLink to={funnel ? '#top' : '/'} className="flex items-center gap-space-sm">
            <img src="/lovable-uploads/logolabora.webp" alt="Labora" className="h-8 w-auto object-contain" />
          </SiteLink>

          <nav className={`hidden ${funnel ? 'lg:flex' : 'xl:flex'} items-center gap-space-sm`}>
            {!funnel && (
            <div className="relative group">
              <button type="button" className="flex items-center gap-1 text-label-md text-on-surface-variant hover:text-on-surface transition-colors py-space-xs px-space-sm rounded-lg">
                <span>Programas</span>
                <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
              </button>
              <div className="absolute left-0 top-full pt-space-xs hidden group-hover:block group-focus-within:block z-50">
                <div className="w-72 bg-surface-container-low shadow-[0_12px_32px_-8px_rgba(0,0,0,0.5)] rounded-xl p-space-sm flex flex-col gap-1">
                  {programLinks.map((p) => (
                    <SiteLink key={p.title} to={p.to} className="block px-space-md py-space-sm rounded-lg hover:bg-surface-container-high transition-all">
                      <span className="text-label-md block text-on-surface">{p.title}</span>
                      <span className="text-body-sm text-on-surface-variant">{p.desc}</span>
                    </SiteLink>
                  ))}
                </div>
              </div>
            </div>
            )}
            {links.map((l) => (
              <SiteLink key={l.label} to={l.href} className="text-label-md text-on-surface-variant hover:text-on-surface transition-colors py-space-xs px-space-sm">
                {l.label}
              </SiteLink>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-space-sm md:gap-space-md">
          {!funnel && <SiteLink to="/campus" className="hidden md:inline-flex items-center justify-center text-label-md text-on-surface bg-surface-container-high hover:bg-surface-container-highest transition-colors rounded-full px-space-md py-space-xs">
            Campus
          </SiteLink>}
          <SiteLink to={applyPath} track="header_apply" onClick={onApplyClick} className="hidden sm:inline-flex items-center justify-center text-label-md text-on-primary-container bg-primary-container hover:bg-secondary-container transition-all shadow-[inset_0_1px_0_rgba(255,255,255,0.25)] rounded-full px-space-md py-space-xs">
            Agendar llamada
          </SiteLink>
          <button type="button" aria-label={open ? 'Cerrar menú' : 'Abrir menú'} aria-expanded={open} onClick={() => setOpen(!open)} className={`${funnel ? 'lg:hidden' : 'xl:hidden'} p-2.5 -mr-2.5 text-on-surface-variant hover:text-on-surface`}>
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className={`${funnel ? 'lg:hidden' : 'xl:hidden'} bg-surface-container-low border-t border-white/5 max-h-[calc(100vh-5rem)] overflow-y-auto`}>
          <div className="max-w-[1240px] mx-auto px-margin-mobile md:px-margin py-space-md flex flex-col gap-1">
            {!funnel && <span className="text-badge-caps text-primary uppercase px-space-sm pt-space-xs">Programas</span>}
            {!funnel && programLinks.map((p) => (
              <SiteLink key={p.title} to={p.to} onClick={close} className="px-space-sm py-space-sm rounded-lg hover:bg-surface-container-high">
                <span className="text-label-md block text-on-surface">{p.title}</span>
                <span className="text-body-sm text-on-surface-variant">{p.desc}</span>
              </SiteLink>
            ))}
            {links.map((l) => (
              <SiteLink key={l.label} to={l.href} onClick={close} className="px-space-sm py-space-sm text-label-md text-on-surface-variant hover:text-on-surface">
                {l.label}
              </SiteLink>
            ))}
            {funnel ? (
              <SiteLink to={applyPath} onClick={() => { onApplyClick?.(); close(); }} track="menu_apply" className="mt-space-sm text-center text-label-md text-on-primary-container bg-primary-container rounded-full py-space-sm">
                Agendar llamada
              </SiteLink>
            ) : (
              <SiteLink to="/campus" onClick={close} className="mt-space-sm text-center text-label-md text-on-surface bg-surface-container-high rounded-full py-space-sm">
                Campus
              </SiteLink>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default SiteHeader;
