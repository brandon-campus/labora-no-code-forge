import { useState } from 'react';
import { Play } from 'lucide-react';

type Props = {
  /** URL del iframe (YouTube o Tella) */
  embedUrl: string;
  title: string;
  /** Imagen de portada; sin ella se muestra un fondo con el título */
  poster?: string;
  className?: string;
  /** Mostrar el título sobre la portada cuando no hay imagen */
  showTitle?: boolean;
  /** Se llama una vez al tocar play (p. ej. para registrar el evento) */
  onPlay?: () => void;
};

// Muestra una portada liviana y recién al tocar carga el iframe: evita bajar el reproductor en mobile si nadie lo mira
const LiteVideo = ({ embedUrl, title, poster, className = '', showTitle = true, onPlay }: Props) => {
  const [playing, setPlaying] = useState(false);
  const src = embedUrl + (embedUrl.includes('?') ? '&' : '?') + 'autoplay=1';

  return (
    <div className={`relative aspect-video rounded-2xl overflow-hidden bg-surface-container-lowest border border-white/[0.07] ${className}`}>
      {playing ? (
        <iframe
          src={src}
          title={title}
          className="absolute inset-0 w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
          allowFullScreen
        />
      ) : (
        <button type="button" onClick={() => { setPlaying(true); onPlay?.(); }} aria-label={`Reproducir video: ${title}`} className="group absolute inset-0 w-full h-full">
          {poster ? (
            <img src={poster} alt="" loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
          ) : (
            <span className="absolute inset-0 bg-gradient-to-br from-secondary-container/40 via-surface-container to-surface-container-lowest" />
          )}
          <span className="absolute inset-0 bg-gradient-to-t from-surface/70 via-transparent to-transparent" />
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="w-16 h-16 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center shadow-[0_12px_32px_-8px_rgba(225,29,72,0.6)] transition-transform group-hover:scale-105 group-active:scale-95">
              <Play className="w-7 h-7 ml-1 fill-current" />
            </span>
          </span>
          {!poster && showTitle && <span className="absolute bottom-0 left-0 right-0 p-space-md text-left text-label-md text-on-surface">{title}</span>}
        </button>
      )}
    </div>
  );
};

export const YOUTUBE_PRESENTATION = {
  embedUrl: 'https://www.youtube-nocookie.com/embed/K90RgsyuM7E?rel=0',
  poster: 'https://i.ytimg.com/vi/K90RgsyuM7E/hqdefault.jpg',
  title: 'Labora: video de presentación del Bootcamp',
};

export default LiteVideo;
