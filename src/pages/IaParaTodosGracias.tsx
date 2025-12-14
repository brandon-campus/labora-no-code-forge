import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle2, Calendar, Clock, MapPin, Download, Ticket, Info, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const STORAGE_PREFIX = 'ia-para-todos:ticket:';

const IaParaTodosGracias: React.FC = () => {
  const navigate = useNavigate();

  const handleDownloadTicket = () => {
    const id = typeof crypto !== 'undefined' && 'randomUUID' in crypto
      ? crypto.randomUUID()
      : `${Date.now()}-${Math.random().toString(16).slice(2)}`;

    const ticket = {
      id,
      createdAt: new Date().toISOString(),
      eventName: 'IA para Todos by Labora',
      dateText: 'Domingo 14 de diciembre',
      timeText: '18:15 a 20:00 hs (acreditación desde las 18:00 hs)',
      locationText: 'Auditorio Servant · Av. Corrientes 3621, CABA',
    };

    localStorage.setItem(`${STORAGE_PREFIX}${id}`, JSON.stringify(ticket));
    navigate(`/ia-para-todos/entrada/${id}`);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      {/* Header simple con logo */}
      <header className="sticky top-0 z-30 border-b border-slate-800 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <img
              src="/lovable-uploads/logolabora.webp"
              alt="Logo Labora"
              className="h-7 w-auto sm:h-8"
            />
            <span className="hidden text-xs font-semibold tracking-[0.18em] text-slate-400 sm:inline">
              IA PARA TODOS
            </span>
          </div>
        </div>
      </header>

      <main className="px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="mx-auto flex max-w-5xl flex-col gap-10 lg:flex-row lg:items-start">
          {/* Columna izquierda: mensaje principal */}
          <div className="flex-1 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/15 px-4 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-emerald-300">
              <CheckCircle2 className="h-4 w-4" />
              Confirmamos tu lugar
            </div>

            <h1 className="font-montserrat text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl md:text-5xl">
              ¡Estás adentro de <span className="text-[#CBFF00]">IA para Todos</span>!
            </h1>

            <p className="max-w-2xl text-base text-slate-200 sm:text-lg">
              Gracias por reservar tu lugar. Acabamos de enviarte un correo con la confirmación y todos los detalles del evento.
              Te recomendamos guardar tu entrada y agendar la fecha en tu calendario.
            </p>

            <Card className="border border-slate-800 bg-slate-900/80 shadow-[0_0_30px_rgba(15,23,42,0.9)]">
              <CardContent className="space-y-5 p-5 sm:p-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#CBFF00]/10 text-[#CBFF00]">
                    <Ticket className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">Tu entrada</p>
                    <p className="text-sm text-slate-100">IA para Todos by Labora</p>
                  </div>
                </div>

                <div className="grid gap-3 text-sm text-slate-200 sm:grid-cols-2">
                  <div className="flex items-start gap-2">
                    <Calendar className="mt-0.5 h-4 w-4 text-[#CBFF00]" />
                    <div>
                      <p className="text-xs uppercase tracking-wide text-slate-400">Fecha</p>
                      <p>Domingo 14 de diciembre</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Clock className="mt-0.5 h-4 w-4 text-sky-400" />
                    <div>
                      <p className="text-xs uppercase tracking-wide text-slate-400">Horario</p>
                      <p>18:15 a 20:00 hs (acreditación desde las 18:00 hs)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <MapPin className="mt-0.5 h-4 w-4 text-emerald-400" />
                    <div>
                      <p className="text-xs uppercase tracking-wide text-slate-400">Lugar</p>
                      <p>Auditorio Servant · Av. Corrientes 3621, CABA</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Info className="mt-0.5 h-4 w-4 text-slate-300" />
                    <div>
                      <p className="text-xs uppercase tracking-wide text-slate-400">Recordatorio</p>
                      <p>Llevá tu DNI y el alimento no perecedero (harina o azúcar).</p>
                    </div>
                  </div>
                </div>

                <Button
                  onClick={handleDownloadTicket}
                  className="group mt-2 flex w-full items-center justify-center gap-2 rounded-full bg-[#CBFF00] px-8 py-4 text-sm font-extrabold uppercase tracking-wide text-slate-950 shadow-[0_0_24px_rgba(203,255,0,0.5)] transition hover:bg-[#b4e600]"
                >
                  <Download className="h-4 w-4" />
                  Descargar mi entrada
                </Button>

                <p className="text-xs text-slate-400">
                  También te enviamos este enlace por correo. Si no lo ves en tu bandeja de entrada, revisá la carpeta de
                  spam o promociones.
                </p>
              </CardContent>
            </Card>

            <div className="space-y-3 rounded-2xl border border-slate-800 bg-slate-900/70 p-4 text-sm text-slate-200">
              <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                <Sparkles className="h-4 w-4 text-[#CBFF00]" />
                Para aprovechar al máximo la experiencia
              </p>
              <ul className="space-y-1 text-sm">
                <li>• Llegá unos minutos antes para encontrar buen lugar.</li>
                <li>• Traé algo para tomar notas (cuaderno o tu dispositivo).</li>
                <li>• Pensá en tu rubro o proyecto: habrá espacio de consultoría en vivo.</li>
              </ul>
            </div>
          </div>

          {/* Columna derecha: resumen compacto */}
          <aside className="w-full max-w-md space-y-4 rounded-2xl border border-slate-800 bg-slate-950/80 p-5 sm:p-6 lg:sticky lg:top-24">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
              Resumen del evento
            </p>
            <h2 className="font-montserrat text-lg font-bold text-slate-50 sm:text-xl">
              IA para Todos · Edición Presencial
            </h2>
            <p className="text-sm text-slate-300">
              Una experiencia inmersiva de Edutainment para ver en vivo cómo se crean productos digitales con IA y No-Code.
            </p>

            <div className="space-y-2 text-sm text-slate-200">
              <p>✔ Demostraciones en vivo de IA y No-Code.</p>
              <p>✔ Estrategias accionables para tu negocio o proyecto.</p>
              <p>✔ Espacio de networking y preguntas abiertas.</p>
            </div>

            <div className="mt-3 space-y-1 text-xs text-slate-400">
              <p>
                Si necesitás modificar algún dato o informar que no podrás asistir, respondé al correo de confirmación y
                nuestro equipo te ayudará.
              </p>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
};

export default IaParaTodosGracias;
