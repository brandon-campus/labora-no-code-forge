import React from 'react';
import { ArrowRight, CheckCircle, Play, Star } from 'lucide-react';

const ClaseGratuitaIA = () => {

    const handleWhatsAppClick = () => {
        window.open('https://wa.me/5491138142899?text=Hola,%20vi%20la%20clase%20gratuita%20y%20quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20el%20bootcamp', '_blank');
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 relative overflow-hidden font-sans text-white">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-[url('/tech-grid.svg')] bg-repeat opacity-10 pointer-events-none"></div>
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-labora-neon/20 rounded-full blur-[128px] pointer-events-none"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-labora-red/10 rounded-full blur-[128px] pointer-events-none"></div>

            <header className="relative z-10 w-full max-w-6xl mx-auto px-4 py-6 flex justify-between items-center">
                <div className="flex items-center">
                    <img
                        src="/lovable-uploads/logolabora.webp"
                        alt="Labora Logo"
                        className="h-8 sm:h-10 w-auto"
                    />
                    <span className="ml-3 font-bold text-lg hidden sm:block">Campus</span>
                </div>
            </header>

            <main className="relative z-10 w-full max-w-4xl mx-auto px-4 pb-20 pt-4 sm:pt-8">

                {/* Header Section */}
                <div className="text-center mb-8 sm:mb-12">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-labora-neon/10 border border-labora-neon/20 rounded-full text-labora-neon text-sm font-semibold mb-4 animate-fade-in">
                        <Star className="w-4 h-4 fill-labora-neon" />
                        <span>Clase Exclusiva de TikTok</span>
                    </div>
                    <h1 className="text-3xl sm:text-5xl font-extrabold mb-4 leading-tight">
                        Cómo Crear Productos con IA <br className="hidden sm:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-labora-neon to-green-400">Ciclo Completo</span>
                    </h1>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Sin registros ni rodeos. Aprende el framework exacto que usamos para lanzar productos digitales en tiempo récord.
                    </p>
                </div>

                {/* Video Section */}
                <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-4 border-labora-neon/20 bg-black mb-12 sm:mb-16 aspect-video group">
                    <div className="absolute inset-0 bg-labora-neon/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20"></div>
                    <iframe
                        src="https://www.tella.tv/video/creacion-de-productos-con-ia-4p5u/embed?autoplay=0&share=0"
                        title="Clase Gratuita: Creación de Productos con IA"
                        className="w-full h-full absolute inset-0 z-10"
                        allow="autoplay; fullscreen; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>

                {/* Value Content */}
                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8">
                        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                            <CheckCircle className="text-labora-neon w-6 h-6" />
                            Lo que aprenderás hoy
                        </h3>
                        <ul className="space-y-4 text-gray-300">
                            <li className="flex gap-3">
                                <span className="bg-labora-neon/20 text-labora-neon w-6 h-6 flex items-center justify-center rounded-full text-xs font-bold mt-0.5">1</span>
                                <span>Cómo validar ideas de negocio usando Inteligencia Artificial antes de escribir código.</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="bg-labora-neon/20 text-labora-neon w-6 h-6 flex items-center justify-center rounded-full text-xs font-bold mt-0.5">2</span>
                                <span>Prototipado rápido con herramientas No-Code modernas.</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="bg-labora-neon/20 text-labora-neon w-6 h-6 flex items-center justify-center rounded-full text-xs font-bold mt-0.5">3</span>
                                <span>Estrategias de lanzamiento para conseguir tus primeros usuarios.</span>
                            </li>
                        </ul>
                    </div>

                    <div className="flex flex-col justify-center">
                        <h3 className="text-2xl font-bold mb-4">¿Te gustaría dominar estas herramientas por completo?</h3>
                        <p className="text-gray-400 mb-6">
                            Esta clase es solo una pequeña muestra de lo que aprendemos en el <strong>Bootcamp de AI & No-Code</strong>. Entrenamos a profesionales para construir el futuro del software.
                        </p>
                        <div className="space-y-4">
                            <button
                                onClick={handleWhatsAppClick}
                                className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center gap-3 group"
                            >
                                <span>Quiero más info por WhatsApp</span>
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                            <p className="text-center text-xs text-gray-500">
                                Habla directamente con un asesor de admisiones.
                            </p>
                        </div>
                    </div>
                </div>

            </main>

            {/* Footer */}
            <footer className="border-t border-white/10 bg-black/20 text-center py-8">
                <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Labora Campus. Todos los derechos reservados.</p>
            </footer>
        </div>
    );
};

export default ClaseGratuitaIA;
