import { Link } from 'react-router-dom';
import type { AnchorHTMLAttributes } from 'react';
import { analytics } from '@/lib/analytics';

type Props = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> & {
  to: string;
  /** Identificador de la ubicación del CTA; si se pasa, se envía el evento site_cta_click */
  track?: string;
};

// Rutas internas sin hash -> react-router; anclas ("/#id", "#id") y URLs externas -> <a>
export const SiteLink = ({ to, track, onClick, children, ...rest }: Props) => {
  const handleClick: AnchorHTMLAttributes<HTMLAnchorElement>['onClick'] = (e) => {
    if (track) analytics.trackEvent('site_cta_click', { location: track, destination: to, page: window.location.pathname });
    onClick?.(e);
  };

  return to.startsWith('/') && !to.includes('#') ? (
    <Link to={to} onClick={handleClick} {...rest}>{children}</Link>
  ) : (
    <a href={to} onClick={handleClick} {...rest}>{children}</a>
  );
};
