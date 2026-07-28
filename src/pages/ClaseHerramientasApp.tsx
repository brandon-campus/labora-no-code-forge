import React, { useState } from 'react';
import { ArrowRight, CheckCircle, Play, Star } from 'lucide-react';
import { Button } from "@/components/ui/button";

const ClaseHerramientasApp = () => {
    const [showVideo, setShowVideo] = useState(false);

    const handleBootcampClick = () => {
        window.location.href = '/bootcamp';
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 relative overflow-hidden font-sans text-white">

            {/* Background Elements - Blue/Purple theme for the new tech stack */}
            <div className="absolute inset-0 bg-[url('/tech-grid.svg')] bg-repeat opacity-10 pointer-events-none"></div>
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[128px] pointer-events-none"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[128px] pointer-events-none"></div>

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
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-semibold mb-4 animate-fade-in">
                        <Star className="w-4 h-4 fill-blue-400" />
                        <span>Clase Exclusiva de Herramientas</span>
                    </div>
                    <h1 className="text-3xl sm:text-5xl font-extrabold mb-4 leading-tight">
                        3 Herramientas Fundamentales <br className="hidden sm:block" />
                        para <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Construir tu App</span>
                    </h1>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Descubre cómo Supabase, n8n y Vercel se combinan con IA (como Claude Code) para crear productos de forma profesional y escalable.
                    </p>
                </div>

                {/* Video Section */}
                <div className="relative w-full aspect-video bg-gray-900/50 rounded-xl overflow-hidden border border-gray-800 shadow-2xl mb-16 group flex items-center justify-center">

                    {!showVideo ? (
                        <div
                            className="absolute inset-0 w-full h-full cursor-pointer group"
                            onClick={() => setShowVideo(true)}
                        >
                            {/* YouTube Thumbnail Background */}
                            <img 
                                src="https://img.youtube.com/vi/3RS-DTHOktw/maxresdefault.jpg" 
                                alt="Video Thumbnail"
                                className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity"
                            />
                            {/* Play Button Overlay */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-20 h-20 bg-blue-600/80 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform">
                                    <Play className="w-8 h-8 text-white fill-white ml-1" />
                                </div>
                            </div>
                        </div>
                    ) : (
                        // ACTIVE MODE: Full Video with Sound
                        <iframe
                            src="https://www.youtube.com/embed/3RS-DTHOktw?autoplay=1"
                            title="Clase Herramientas App"
                            className="w-full h-full absolute inset-0 z-40"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    )}
                </div>

                {/* Value Content - Redesigned as Learning Path */}
                <div className="max-w-3xl mx-auto mb-16">
                    <h3 className="text-2xl font-bold text-center mb-8">Tu Ruta de Aprendizaje</h3>

                    <div className="relative border-l-2 border-blue-500/30 ml-4 md:ml-0 md:pl-0 md:border-l-0 md:border-t-2 space-y-8 md:space-y-0 md:flex md:justify-between md:pt-8 bg-gradient-to-b from-transparent via-gray-900/50 to-transparent p-4 rounded-xl">
                        {/* Step 1: Current Class */}
                        <div className="relative pl-8 md:pl-0 md:w-1/2 md:pr-8 group">
                            <div className="absolute left-[-9px] top-0 md:top-[-36px] md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
                            <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl relative opacity-80 hover:opacity-100 transition-opacity">
                                <div className="text-blue-400 text-xs font-bold uppercase tracking-wider mb-2">Paso 1 (Estás aquí)</div>
                                <h4 className="text-xl font-bold text-white mb-2">Dominando el Stack</h4>
                                <ul className="space-y-2 text-sm text-gray-400">
                                    <li className="flex gap-2 items-start">
                                        <CheckCircle className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                                        <span>Backend escalable con Supabase</span>
                                    </li>
                                    <li className="flex gap-2 items-start">
                                        <CheckCircle className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                                        <span>Automatización total con n8n</span>
                                    </li>
                                    <li className="flex gap-2 items-start">
                                        <CheckCircle className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                                        <span>Despliegue rápido con Vercel</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Step 2: The Bootcamp */}
                        <div className="relative pl-8 md:pl-0 md:w-1/2 md:pl-8">
                            <div className="absolute left-[-9px] top-0 md:top-[-36px] md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 rounded-full bg-gray-700 border-2 border-blue-500 animate-pulse"></div>
                            <div className="bg-gradient-to-br from-gray-900 to-blue-500/10 border border-blue-500/30 p-6 rounded-xl relative shadow-lg shadow-blue-500/5 hover:shadow-blue-500/10 transition-shadow">
                                <div className="text-blue-400 text-xs font-bold uppercase tracking-wider mb-2">Paso 2 (Siguiente Nivel)</div>
                                <h4 className="text-xl font-bold text-white mb-3">Bootcamp AI & No-Code</h4>
                                <p className="text-gray-400 text-sm mb-4">
                                    Lleva todo esto a la práctica construyendo productos reales de inicio a fin.
                                </p>
                                <Button
                                    onClick={handleBootcampClick}
                                    className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-6 rounded-lg flex items-center justify-center gap-2 group transition-all"
                                >
                                    <span>Ver Programa Completo</span>
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Button>
                                <p className="text-center text-[10px] text-gray-500 mt-2">
                                    El 80% de los asistentes continúa aquí
                                </p>
                            </div>
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

export default ClaseHerramientasApp;
