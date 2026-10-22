import { Container, Eyebrow, H2 } from './primitives';
import SnapRow from './SnapRow';
import { snapItem } from './siteData';

// Proyectos reales de alumnos (videos de Tella). El "Sistema de reservas" de DemoSection
// reutilizaba el video del Marketplace, por eso no se incluye hasta tener su video propio.
export const studentProjects = [
  {
    embedUrl: 'https://www.tella.tv/video/cm9k5bp4m00050bib2xjwddjm/embed?b=1&title=1&a=1&loop=0&t=0&muted=0&wt=1',
    title: 'Plataforma de gestión de Internet para servicios rurales',
    description: 'Plataforma web para gestionar clientes, enviar facturas y habilitar servicios de empresas proveedoras de Internet.',
    tags: ['Lovable', 'Supabase', 'Cursor AI'],
  },
  {
    embedUrl: 'https://www.tella.tv/video/cm9k6jqfh000c0dl52s2a6m6t/embed?b=1&title=1&a=1&loop=0&t=0&muted=0&wt=1',
    title: 'Marketplace de arte',
    description: 'Aplicación web para que artistas en México vendan su arte de forma más accesible.',
    tags: ['Lovable', 'Supabase', 'Cursor AI'],
  },
];

const ProjectsShowcase = ({ id = 'proyectos', className = 'bg-surface' }: { id?: string; className?: string }) => (
  <section id={id} className={`w-full py-space-xl scroll-mt-20 ${className}`}>
    <Container>
      <div className="max-w-2xl mb-space-lg">
        <Eyebrow>PROYECTOS DE ALUMNOS</Eyebrow>
        <H2>Software real, hecho por alumnos</H2>
        <p className="text-body-md text-on-surface-variant mt-1">Mira en video lo que construyeron durante el bootcamp, sin saber programar.</p>
      </div>
      <SnapRow className="md:grid-cols-2">
        {studentProjects.map((p) => (
          <article key={p.title} className={`${snapItem} bg-surface-container-low border border-white/[0.07] rounded-2xl p-space-sm flex flex-col gap-space-sm`}>
            {/* Reproductor de Tella directo (sin portada propia) */}
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-surface-container-lowest border border-white/[0.07]">
              <iframe
                src={p.embedUrl}
                title={p.title}
                loading="lazy"
                className="absolute inset-0 w-full h-full"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="px-space-xs pb-space-xs">
              <h3 className="text-headline-sm text-on-surface normal-case">{p.title}</h3>
              <p className="text-body-sm text-on-surface-variant mt-1">{p.description}</p>
              <div className="flex flex-wrap gap-1.5 mt-space-sm">
                {p.tags.map((t) => (
                  <span key={t} className="text-badge-caps text-primary bg-primary-container/10 border border-primary-container/30 rounded-full px-2 py-0.5">{t}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </SnapRow>
    </Container>
  </section>
);

export default ProjectsShowcase;
