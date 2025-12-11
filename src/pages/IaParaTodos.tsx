import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Calendar,
  MapPin,
  Users,
  Clock,
  CheckCircle2,
  Sparkles,
  HeartHandshake,
  ArrowRight,
  Ticket,
  GraduationCap,
  Mic2,
  Brain,
  Rocket,
} from 'lucide-react';

const LUMA_EVENT_ID = 'evt-LuYXNGvAya5sv6b';
const LUMA_EVENT_URL = `https://lu.ma/event/${LUMA_EVENT_ID}`;

const IaParaTodos: React.FC = () => {
  // Cargar el script de Luma para el botón de checkout
  useEffect(() => {
    if (document.getElementById('luma-checkout')) return;
    const script = document.createElement('script');
    script.id = 'luma-checkout';
    script.src = 'https://embed.lu.ma/checkout-button.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      const existing = document.getElementById('luma-checkout');
      if (existing) existing.remove();
    };
  }, []);

  const handlePrimaryCTA = () => {
    window.open(LUMA_EVENT_URL, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 font-sans">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden border-b border-slate-800 bg-slate-950">
        <div className="absolute inset-0" aria-hidden="true">
          <div className="h-full w-full bg-[url('https://images.unsplash.com/photo-1515165562835-c4c9e0737eaa?auto=format&fit=crop&w=1400&q=80')] bg-cover bg-center opacity-50 sm:opacity-60" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/70 to-slate-950/85" />
        </div>

        <div className="relative px-4 pb-12 pt-10 sm:px-6 lg:px-8 lg:pb-20 lg:pt-14">
          <div className="mx-auto mb-6 flex max-w-6xl justify-center lg:mb-8">
            <img
              src="/lovable-uploads/logolabora.webp"
              alt="Logo Labora"
              className="h-8 w-auto opacity-90 drop-shadow-[0_0_18px_rgba(0,0,0,0.7)] sm:h-9"
            />
          </div>
          <div className="mx-auto flex max-w-6xl flex-col gap-12 lg:flex-row lg:items-center">
            <div className="max-w-2xl space-y-6 lg:space-y-8">
              <div className="inline-flex flex-wrap items-center gap-3">
                <Badge className="bg-slate-900/80 text-xs font-semibold uppercase tracking-[0.15em] text-[#CBFF00] ring-1 ring-[#CBFF00]/30">
                  EVENTO PRESENCIAL GRATUITO
                </Badge>
              </div>

              <h1 className="font-montserrat text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
                Sumergite de lleno en la era de la IA.
              </h1>

              <p className="max-w-2xl text-base text-slate-200 sm:text-lg md:text-xl">
                Un evento en vivo en el que vas a poder aprender desde cero a usar la Inteligencia Artificial para maximizar tus
                oportunidades y construir productos para tu trabajo o empresa.
              </p>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href="https://lu.ma/event/evt-LuYXNGvAya5sv6b"
                  className="luma-checkout--button group flex w-full max-w-md items-center justify-center gap-3 rounded-full bg-[#CBFF00] px-8 py-4 text-base font-extrabold uppercase tracking-wide text-slate-950 shadow-[0_0_25px_rgba(203,255,0,0.4)] transition-transform hover:-translate-y-0.5 hover:bg-[#b4e600] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#CBFF00]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 sm:text-lg"
                  data-luma-action="checkout"
                  data-luma-event-id="evt-LuYXNGvAya5sv6b"
                >
                  <Sparkles className="h-5 w-5" />
                  RESERVAR MI LUGAR (70 CUPOS)
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </a>

                <div className="flex items-center gap-2 text-xs font-medium text-slate-300/80">
                  <Calendar className="h-4 w-4 text-[#CBFF00]" />
                  <span>Domingo 14 de diciembre a las 17:30 · Auditorio Servant (CABA)</span>
                </div>
              </div>
            </div>

            <div className="w-full lg:flex-1">
              <div className="mx-auto max-w-sm sm:max-w-md lg:max-w-lg">
                <Card className="overflow-hidden border border-slate-800/80 bg-slate-900/80 shadow-[0_0_30px_rgba(15,23,42,0.9)] backdrop-blur">
                  {/* Imagen de Brandon */}
                  <div className="relative h-40 sm:h-48 w-full overflow-hidden">
                    <img
                      src="/lovable-uploads/fotobrandoportada.png"
                      alt="Brandon Candia - Fundador de Labora"
                      className="h-full w-full object-cover object-top"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between">
                      <div>
                        <p className="text-sm font-semibold text-white drop-shadow-md">Brandon Candia</p>
                        <p className="text-xs text-slate-200/90 drop-shadow-md">Fundador de Labora</p>
                      </div>
                      <Ticket className="h-7 w-7 text-[#CBFF00] drop-shadow-md" />
                    </div>
                  </div>

                  <CardContent className="space-y-4 p-4 sm:p-6">
                    <div className="flex items-center justify-between">
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#CBFF00]">IA para Todos</p>
                      <p className="text-xs text-slate-400">by Labora</p>
                    </div>

                    <div className="grid grid-cols-2 gap-3 text-sm text-slate-200">
                      <div className="space-y-0.5">
                        <p className="text-[10px] uppercase tracking-wide text-slate-400">Cuándo</p>
                        <div className="flex items-center gap-1.5">
                          <Calendar className="h-3.5 w-3.5 text-[#CBFF00]" />
                          <span className="text-xs">Dom 14 de diciembre</span>
                        </div>
                      </div>
                      <div className="space-y-0.5">
                        <p className="text-[10px] uppercase tracking-wide text-slate-400">Horario</p>
                        <div className="flex items-center gap-1.5">
                          <Clock className="h-3.5 w-3.5 text-sky-400" />
                          <span className="text-xs">17:30 hs</span>
                        </div>
                      </div>
                      <div className="space-y-0.5">
                        <p className="text-[10px] uppercase tracking-wide text-slate-400">Lugar</p>
                        <div className="flex items-start gap-1.5">
                          <MapPin className="mt-0.5 h-3.5 w-3.5 text-emerald-400" />
                          <span className="text-xs">Auditorio Servant, CABA</span>
                        </div>
                      </div>
                      <div className="space-y-0.5">
                        <p className="text-[10px] uppercase tracking-wide text-slate-400">Formato</p>
                        <div className="flex items-center gap-1.5">
                          <Mic2 className="h-3.5 w-3.5 text-rose-400" />
                          <span className="text-xs">Evento en vivo</span>
                        </div>
                      </div>
                    </div>

                    <a
                      href="https://lu.ma/event/evt-LuYXNGvAya5sv6b"
                      className="luma-checkout--button group inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#CBFF00] px-5 py-3 text-sm font-bold uppercase tracking-wide text-slate-950 shadow-[0_0_20px_rgba(203,255,0,0.5)] transition hover:bg-[#b4e600]"
                      data-luma-action="checkout"
                      data-luma-event-id="evt-LuYXNGvAya5sv6b"
                    >
                      Reservar mi lugar
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM SECTION */}
      <section className="bg-slate-50 py-14 text-slate-900 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-6 text-center md:space-y-8">
            <h2 className="font-montserrat text-2xl font-extrabold tracking-tight sm:text-3xl md:text-4xl">
              ¿Sentís que la tecnología va más rápido que vos?
            </h2>
            <p className="mx-auto max-w-3xl text-base text-slate-700 sm:text-lg">
              Ves noticias sobre Inteligencia Artificial todos los días. Sabés que deberías estar usándola para potenciar tu
              trabajo o tu PyME. Pero cuando intentás acercarte, te encontrás con términos técnicos, cursos teóricos y la
              sensación de que es solo para programadores.
            </p>
            <p className="mx-auto max-w-2xl text-base font-semibold text-slate-800 sm:text-lg">
              Te tengo una buena noticia: <span className="text-slate-900">la culpa no es tuya.</span> La IA no tiene que ser
              difícil. De hecho, es la herramienta más poderosa de democratización que existe.
            </p>
          </div>
        </div>
      </section>

      {/* SOLUTION SECTION */}
      <section className="border-y border-slate-800 bg-slate-950 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] md:items-center">
            <div className="space-y-4 md:space-y-6">
              <h2 className="font-montserrat text-2xl font-extrabold tracking-tight sm:text-3xl md:text-4xl">
                Bienvenido a la era del <span className="text-[#CBFF00]">Edutainment</span>
              </h2>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-400">
                (Educación + Entretenimiento)
              </p>
              <p className="max-w-xl text-base text-slate-200 sm:text-lg">
                Soy <span className="font-semibold text-white">Brandon Candia</span>, fundador de Labora. Este domingo rompo
                el molde. No es una conferencia, es un{' '}
                <span className="font-semibold text-[#CBFF00]">show de aprendizaje acelerado</span>.
              </p>

              <div className="grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
                  <div className="mb-2 inline-flex h-9 w-9 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-300">
                    <Brain className="h-5 w-5" />
                  </div>
                  <p className="text-sm font-semibold text-slate-100">Desmitificar</p>
                  <p className="mt-1 text-xs text-slate-300">Entenderás la IA sin palabras raras.</p>
                </div>

                <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
                  <div className="mb-2 inline-flex h-9 w-9 items-center justify-center rounded-full bg-sky-500/15 text-sky-300">
                    <Rocket className="h-5 w-5" />
                  </div>
                  <p className="text-sm font-semibold text-slate-100">Visualizar</p>
                  <p className="mt-1 text-xs text-slate-300">
                    Vas a ver en vivo cómo se crea un producto digital en minutos.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
                  <div className="mb-2 inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#CBFF00]/15 text-[#CBFF00]">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <p className="text-sm font-semibold text-slate-100">Accionar</p>
                  <p className="mt-1 text-xs text-slate-300">
                    Te vas a llevar ideas aplicables para el lunes a las 9:00 AM.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="rounded-3xl border border-sky-500/40 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-6 shadow-[0_0_40px_rgba(56,189,248,0.4)]">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">Edutainment Labora</p>
                <p className="mt-3 text-base text-slate-100 sm:text-lg">
                  No vas a tomar apuntes aburridos. Vas a{' '}
                  <span className="font-semibold text-[#CBFF00]">vivir</span> lo que significa crear con IA y No-Code.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-slate-200">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-400" />
                    <span>Dinámica de show, ejemplos reales y demostraciones en vivo.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-400" />
                    <span>Lenguaje simple, cero jerga técnica innecesaria.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-400" />
                    <span>Enfoque 100% accionable: lo que veas, lo podés aplicar.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AGENDA SECTION */}
      <section className="bg-slate-950 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#CBFF00]">Agenda</p>
            <h2 className="mt-2 font-montserrat text-2xl font-extrabold tracking-tight sm:text-3xl md:text-4xl">
              📅 La Hoja de Ruta del Domingo
            </h2>
            <p className="mt-4 text-sm text-slate-300 sm:text-base">
              Tres fases diseñadas para que pases de la curiosidad a la acción concreta en menos de dos horas.
            </p>
          </div>

          <div className="mt-10 space-y-6">
            <div className="relative grid gap-6 md:grid-cols-[auto_minmax(0,1fr)] md:items-stretch">
              <div className="hidden w-px bg-gradient-to-b from-[#CBFF00] via-slate-600 to-sky-400 md:block" />
              <div className="space-y-6">
                <Card className="border border-slate-800 bg-slate-900/80">
                  <CardContent className="flex flex-col gap-4 p-5 sm:flex-row sm:items-start sm:gap-6 sm:p-6">
                    <div className="flex items-center gap-3 text-sm text-[#CBFF00]">
                      <Clock className="h-4 w-4" />
                      <span className="font-semibold uppercase tracking-wide">18:15 hs</span>
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-montserrat text-lg font-bold text-slate-50 sm:text-xl">
                        FASE 1: EL DESPERTAR 🧠
                      </h3>
                      <p className="text-sm text-slate-200">
                        Dominar la base: Automatización, Aumentación y Agentes. Vas a entender el mapa completo de cómo la IA
                        puede potenciar tu trabajo.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border border-slate-800 bg-slate-900/80">
                  <CardContent className="flex flex-col gap-4 p-5 sm:flex-row sm:items-start sm:gap-6 sm:p-6">
                    <div className="flex items-center gap-3 text-sm text-sky-300">
                      <Clock className="h-4 w-4" />
                      <span className="font-semibold uppercase tracking-wide">18:50 hs</span>
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-montserrat text-lg font-bold text-slate-50 sm:text-xl">
                        FASE 2: CONSTRUIR EL FUTURO 🛠️
                      </h3>
                      <p className="text-sm text-slate-200">
                        Demo en vivo: de la idea al Producto Digital con No-Code. Vas a ver en pantalla, paso a paso, cómo nace
                        un producto usando IA.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border border-slate-800 bg-slate-900/80">
                  <CardContent className="flex flex-col gap-4 p-5 sm:flex-row sm:items-start sm:gap-6 sm:p-6">
                    <div className="flex items-center gap-3 text-sm text-emerald-300">
                      <Clock className="h-4 w-4" />
                      <span className="font-semibold uppercase tracking-wide">19:30 hs</span>
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-montserrat text-lg font-bold text-slate-50 sm:text-xl">
                        FASE 3: EL ORÁCULO & NETWORKING 🔮
                      </h3>
                      <p className="text-sm text-slate-200">
                        Consultoría en vivo: &quot;Decime tu rubro y te diré tu estrategia&quot;. Espacio para preguntas,
                        networking y bajada a tierra según cada caso.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CHARITY / PRICING SECTION */}
      <section className="bg-slate-950 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-pink-500/30 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-6 sm:p-8 shadow-[0_0_40px_rgba(236,72,153,0.25)]">
            <div
              className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-pink-500/20 blur-3xl"
              aria-hidden="true"
            />

            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="space-y-4 md:max-w-xl">
                <div className="inline-flex items-center gap-2 rounded-full bg-pink-500/15 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-pink-300">
                  <HeartHandshake className="h-4 w-4" />
                  Navidad Solidaria
                </div>
                <h2 className="font-montserrat text-2xl font-extrabold tracking-tight sm:text-3xl">
                  ❤️ Navidad Solidaria con T-Ayudo Argentina
                </h2>
                <p className="text-sm text-slate-100 sm:text-base">
                  En Labora creemos que la tecnología debe servir para mejorar vidas. Por eso nos aliamos con{' '}
                  <span className="font-semibold">T-Ayudo Argentina</span>.
                </p>

                <div className="mt-2 rounded-2xl border border-pink-400/40 bg-pink-500/10 p-4 text-sm text-slate-50 sm:text-base">
                  <p className="font-semibold">
                    VALOR DE LA ENTRADA:{' '}
                    <span className="text-[#CBFF00]">1 alimento no perecedero</span> (harina, azúcar, arroz, etc.)
                  </p>
                  <p className="mt-1 text-slate-100/90">
                    Todo lo recaudado será destinado a apoyar la causa{' '}
                    <span className="font-semibold">Navidad Solidaria</span>.
                  </p>
                </div>
              </div>

              <div className="mt-2 flex justify-center md:mt-0">
                <a
                  href="https://lu.ma/event/evt-LuYXNGvAya5sv6b"
                  className="luma-checkout--button group flex w-full max-w-xs items-center justify-center gap-2 rounded-full bg-[#CBFF00] px-6 py-4 text-sm font-bold uppercase tracking-wide text-slate-950 shadow-[0_0_24px_rgba(203,255,0,0.5)] transition hover:bg-[#b4e600]"
                  data-luma-action="checkout"
                  data-luma-event-id="evt-LuYXNGvAya5sv6b"
                >
                  Reservar mi lugar solidario
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BIO SECTION */}
      <section className="border-y border-slate-800 bg-slate-950 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] md:items-center">
            <div className="space-y-4 sm:space-y-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#CBFF00]">¿Quién te guía?</p>
              <h2 className="font-montserrat text-2xl font-extrabold tracking-tight sm:text-3xl md:text-4xl">
                ¿Quién es Brandon Candia?
              </h2>
              <p className="text-sm text-slate-200 sm:text-base">
                Fundador de <span className="font-semibold text-white">Labora</span>, academia líder en IA y No-Code. Mi
                misión es traducir lo complejo a lo simple. Creo firmemente que educación y entretenimiento van de la mano.
              </p>
              <ul className="space-y-2 text-sm text-slate-200">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-400" />
                  <span>Más de 1.000 alumnos formados en experiencias de IA y No-Code.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-400" />
                  <span>Especializado en acompañar a no-programadores a crear sus primeros productos digitales.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-400" />
                  <span>Facilitador de espacios de aprendizaje prácticos, entretenidos y accionables.</span>
                </li>
              </ul>
            </div>

            <div className="flex justify-center md:justify-end">
              <div className="relative h-80 w-72 max-w-full overflow-hidden rounded-3xl border border-slate-700 bg-slate-900/80 shadow-[0_0_40px_rgba(15,23,42,0.9)]">
                <img
                  src="/lovable-uploads/brandoncandia.png"
                  alt="Retrato de Brandon Candia, fundador de Labora"
                  className="h-full w-full object-cover object-center"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-slate-100">
                  <div className="space-y-0.5">
                    <p className="font-semibold">Brandon Candia</p>
                    <p className="text-[11px] text-slate-300">Fundador de Labora | IA & No-Code</p>
                  </div>
                  <div className="inline-flex items-center gap-1 rounded-full bg-slate-900/80 px-3 py-1 text-[11px] text-slate-200">
                    <GraduationCap className="h-3.5 w-3.5 text-[#CBFF00]" />
                    Edutainment
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER / FINAL CTA */}
      <section className="bg-slate-950 pb-12 pt-14 sm:pb-16 sm:pt-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#CBFF00]">Cierre</p>
          <h2 className="mt-3 font-montserrat text-2xl font-extrabold tracking-tight sm:text-3xl md:text-4xl">
            No te quedes afuera. Solo 70 lugares.
          </h2>
          <p className="mt-4 text-sm text-slate-300 sm:text-base">
            Auditorio Servant (Av. Corrientes 3621, CABA).
          </p>

          <div className="mt-8 flex flex-col items-center gap-4">
            <a
              href="https://lu.ma/event/evt-LuYXNGvAya5sv6b"
              className="luma-checkout--button group flex w-full max-w-xl items-center justify-center gap-3 rounded-full bg-[#CBFF00] px-10 py-5 text-base font-extrabold uppercase tracking-wide text-slate-950 shadow-[0_0_32px_rgba(203,255,0,0.55)] transition hover:bg-[#b4e600] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#CBFF00]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 sm:text-lg"
              data-luma-action="checkout"
              data-luma-event-id="evt-LuYXNGvAya5sv6b"
            >
              <span className="flex w-full items-center justify-center gap-3">
                RESERVAR MI LUGAR AHORA
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </span>
            </a>
            <p className="text-xs text-slate-400">
              Entradas limitadas. Prioridad por orden de inscripción.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IaParaTodos;