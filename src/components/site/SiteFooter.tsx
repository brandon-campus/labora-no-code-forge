import { useEffect, useState } from 'react';
import { ArrowRight, Instagram, Linkedin, MessageCircle, PlayCircle } from 'lucide-react';
import { SiteLink } from './SiteLink';
import { APPLY_PATH, LINKEDIN_URL, WHATSAPP_URL, footerColumns } from './siteData';

type StickyProps = { to?: string; label?: string; detail?: string; onClick?: () => void };

// Aparece al pasar el hero para no competir con el CTA principal en la primera pantalla
export const StickyMobileCta = ({ to = APPLY_PATH, label = 'Agendar llamada', detail, onClick }: StickyProps) => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  if (!visible) return null;
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 p-space-sm bg-surface-container-lowest/90 backdrop-blur-xl sm:hidden shadow-[0_-4px_16px_rgba(0,0,0,0.4)]">
      <SiteLink to={to} track="sticky_apply" onClick={onClick} className="w-full flex items-center justify-center gap-space-xs text-label-md text-on-primary-container bg-primary-container active:bg-secondary-container transition-all rounded-full py-space-sm shadow-[inset_0_1px_0_rgba(255,255,255,0.25)]">
        {detail && <span className="opacity-80 font-normal">{detail} ·</span>}
        <span>{label}</span><ArrowRight className="w-4 h-4" />
      </SiteLink>
    </div>
  );
};

const socialClass = 'w-10 h-10 rounded-full bg-surface-container-low hover:bg-surface-container-high flex items-center justify-center text-on-surface-variant hover:text-on-surface transition-all';

/** variant 'funnel': sin columnas de navegación hacia otras páginas */
const SiteFooter = ({ variant = 'site' }: { variant?: 'site' | 'funnel' }) => (
  <footer className="w-full bg-surface-container-lowest py-space-xl pb-24 sm:pb-space-xl">
    <div className="w-full max-w-[1240px] mx-auto px-margin-mobile md:px-margin">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-space-md gap-y-space-xl mb-space-xl">
        <div className="col-span-2 md:col-span-3 lg:col-span-2 flex flex-col gap-space-md">
          <img src="/lovable-uploads/logolabora.webp" alt="Labora" className="h-8 w-auto object-contain self-start" />
          <p className="text-body-md text-on-surface-variant max-w-sm">
            La academia para construir productos con IA. De cero al lanzamiento de tu producto, paso a paso y acompañado.
          </p>
          <div className="flex items-center gap-space-sm pt-space-xs">
            <a href="https://instagram.com/labora.ar" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className={socialClass}><Instagram className="w-5 h-5" /></a>
            <a href="https://tiktok.com/@labora.ai" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className={socialClass}><PlayCircle className="w-5 h-5" /></a>
            <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={socialClass}><Linkedin className="w-5 h-5" /></a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className={socialClass}><MessageCircle className="w-5 h-5" /></a>
          </div>
        </div>
        {variant === 'site' && footerColumns.map((col) => (
          <div key={col.title} className="flex flex-col gap-space-sm">
            <h2 className="text-label-md text-on-surface uppercase tracking-wider">{col.title}</h2>
            <ul className="flex flex-col gap-space-xs">
              {col.links.map((l) => (
                <li key={l.label} className="list-none">
                  <SiteLink to={l.href} className="inline-block py-1.5 text-body-sm text-on-surface-variant hover:text-on-surface transition-colors">{l.label}</SiteLink>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="pt-space-lg flex flex-col md:flex-row items-center justify-between gap-space-md">
        <p className="text-body-sm text-on-surface-variant text-center md:text-left">Aprende a construir y lanzar productos con IA.</p>
        <p className="text-body-sm text-on-surface-variant text-center md:text-right">© {new Date().getFullYear()} Academia Labora (labora.ar). Todos los derechos reservados.</p>
      </div>
    </div>
  </footer>
);

export default SiteFooter;
