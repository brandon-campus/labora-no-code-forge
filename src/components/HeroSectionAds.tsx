import React from 'react';
import { Button } from "@/components/ui/button";
import { Zap, Video } from 'lucide-react';
import { fbqTrack } from "@/lib/fbqTrack";

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

const HeroSectionAds = ({ funnelPath = '/ads', applyUrl }: { funnelPath?: string, applyUrl?: string }) => {
  const handleComenzarClick = () => {
    fbqTrack('AgendarLlamadaClickAds');
    if (window.gtag) {
      window.gtag('event', 'agendar_llamada_click', {
        event_category: 'conversion',
        event_label: 'HeroSectionAds',
        value: 1
      });
    }
    window.location.href = applyUrl || `${funnelPath}/bootcamp/aplicar`;
  };

  const handleWhatsappClick = () => {
    fbqTrack('ContactWhatsAppAds');
    if (window.gtag) {
      window.gtag('event', 'whatsapp_click', {
        event_category: 'contact',
        event_label: 'HeroSectionAds',
        value: 1
      });
    }
    const message = encodeURIComponent("¡Hola Labora! (Vengo desde los anuncios) Quiero obtener más información sobre el bootcamp de IA y No Code");
    window.open(`https://wa.me/5491138142899?text=${message}`, '_blank');
  };

  return (
    <section className="bg-[#0a0a0a] flex items-center pt-8 pb-12 min-h-[100dvh] md:min-h-fit">
      <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
        <div className="flex flex-col items-center text-center">
          
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black leading-[1.1] text-white uppercase tracking-tight max-w-4xl mb-4">
            CREA PROYECTOS CON <span className="text-labora-neon">IA</span> Y EMPEZÁ A VIVIR DE ELLOS.
          </h1>

          <div className="w-full max-w-3xl relative mt-4">
            <div className="relative rounded-[16px] overflow-hidden aspect-video bg-black shadow-2xl">
              <iframe 
                className="absolute inset-0 w-full h-full border-none"
                src="https://www.youtube.com/embed/K90RgsyuM7E" 
                title="Labora - video presentación" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>

            <div className="absolute -bottom-4 left-0 right-0 flex justify-center z-10 px-4">
              <div className="bg-[#141812]/95 border border-labora-neon/30 text-labora-neon font-bold text-[10px] sm:text-xs text-center py-2 px-4 rounded-full flex items-center justify-center gap-1.5 backdrop-blur-sm shadow-xl">
                <Zap className="w-3 h-3 fill-labora-neon text-labora-neon" />
                EL MEJOR BOOTCAMP DE LATAM
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-6 sm:gap-12 mt-8 max-w-xl w-full">
            <div className="flex flex-col items-center text-center w-20">
              <div className="w-10 h-10 rounded-full bg-labora-neon flex items-center justify-center mb-2">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0a0a0a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
              </div>
              <p className="text-white text-[11px] sm:text-xs font-bold leading-[1.2] whitespace-nowrap">Sin código</p>
            </div>
            
            <div className="flex flex-col items-center text-center w-20">
              <div className="w-10 h-10 rounded-full bg-transparent border-[1.5px] border-labora-neon flex items-center justify-center mb-2">
                 <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#aaff00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>
              </div>
              <p className="text-white text-[11px] sm:text-xs font-bold leading-[1.2]">Proyectos reales</p>
            </div>

            <div className="flex flex-col items-center text-center w-20">
              <div className="w-10 h-10 rounded-full bg-transparent border-[1.5px] border-labora-neon flex items-center justify-center mb-2">
                 <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#aaff00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 7l-7 5 7 5V7z"/><rect x="1" y="5" width="15" height="14" rx="2"/></svg>
              </div>
              <p className="text-white text-[11px] sm:text-xs font-bold leading-[1.2] whitespace-nowrap">100% en vivo</p>
            </div>
          </div>
          
          <div className="mt-8 w-full max-w-sm flex flex-col gap-3">
            <Button
              onClick={handleComenzarClick}
              className="bg-labora-neon hover:bg-labora-neon/90 text-black font-extrabold rounded-xl px-4 py-6 text-[15px] transition-transform hover:-translate-y-0.5 shadow-[0_4px_15px_rgba(170,255,0,0.2)] w-full flex items-center justify-center gap-2"
            >
              Agendar una llamada
              <Video className="w-4 h-4 ml-1" />
            </Button>
            
            <Button
              onClick={handleWhatsappClick}
              className="bg-[#25D366] hover:bg-[#1ebd5b] text-white font-bold rounded-xl px-4 py-6 text-[15px] transition-transform hover:-translate-y-0.5 w-full flex items-center justify-center gap-2"
            >
              Hablemos por whatsapp
              <svg className="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.663-2.06-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
              </svg>
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSectionAds;
