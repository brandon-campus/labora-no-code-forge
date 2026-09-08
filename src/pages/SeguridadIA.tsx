import React, { useState } from 'react';
import { ArrowRight, CheckCircle, Play, ShieldAlert } from 'lucide-react';
import { Button } from "@/components/ui/button";

const SeguridadIA = () => {
    const [showVideo, setShowVideo] = useState(false);

    const handleBootcampClick = () => {
        window.location.href = '/bootcamp';
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-red-950 via-zinc-900 to-red-950 relative overflow-hidden font-sans text-white">

            {/* Background Elements */}
            <div className="absolute inset-0 bg-[url('/tech-grid.svg')] bg-repeat opacity-10 pointer-events-none"></div>
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-500/20 rounded-full blur-[128px] pointer-events-none"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-500/20 rounded-full blur-[128px] pointer-events-none"></div>

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
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-500/10 border border-red-500/20 rounded-full text-red-400 text-sm font-semibold mb-4 animate-fade-in">
                        <ShieldAlert className="w-4 h-4 text-red-400" />
                        <span>Alerta de Seguridad</span>
                    </div>
                    <h1 className="text-3xl sm:text-5xl font-extrabold mb-4 leading-tight">
                        Te van a hackear si construiste tu app <br className="hidden sm:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">con IA (Lovable, Claude, etc)</span>
                    </h1>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Hay una probabilidad muy alta de que tu app tenga al menos uno de los 3 problemas graves de seguridad de los que hablamos en este video.
                    </p>
                </div>

                {/* Video Section */}
                <div className="relative w-full aspect-video bg-gray-900/50 rounded-xl overflow-hidden border border-red-900 shadow-2xl shadow-red-900/20 mb-16 group">

                    {!showVideo ? (
                        // PREVIEW MODE: Muted Autoplay Video, Click to Activate
                        <div
                            className="absolute inset-0 w-full h-full cursor-pointer"
                            onClick={() => setShowVideo(true)}
                        >
                            {/* 1. Muted Background Video */}
                            <iframe
                                src="https://www.youtube.com/embed/0cuAgUPsGgw?autoplay=1&mute=1&controls=0&loop=1&playlist=0cuAgUPsGgw"
                                title="Preview Video"
                                className="w-full h-full absolute inset-0 z-10 pointer-events-none scale-105"
                                allow="autoplay; fullscreen"
                            ></iframe>

                            {/* 2. Transparent Overlay to Capture Clicks */}
                            <div className="absolute inset-0 z-20 bg-transparent flex items-center justify-center">
                                <div className="bg-black/60 p-4 rounded-full backdrop-blur-sm group-hover:scale-110 transition-transform">
                                    <Play className="w-12 h-12 text-white ml-1" />
                                </div>
                            </div>
                        </div>
                    ) : (
                        // ACTIVE MODE: Full Video with Sound
                        <iframe
                            src="https://www.youtube.com/embed/0cuAgUPsGgw?autoplay=1"
                            title="Te van a hackear..."
                            className="w-full h-full absolute inset-0 z-40"
                            allow="autoplay; fullscreen; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    )}
                </div>

                {/* Value Content - Redesigned as Learning Path */}
                <div className="max-w-3xl mx-auto mb-16">
                    <h3 className="text-2xl font-bold text-center mb-8">Tu Siguiente Paso</h3>

                    <div className="relative border-l-2 border-red-500/30 ml-4 md:ml-0 md:pl-0 md:border-l-0 md:border-t-2 space-y-8 md:space-y-0 md:flex md:justify-between md:pt-8 bg-gradient-to-b from-transparent via-zinc-900/50 to-transparent p-4 rounded-xl">
                        {/* Step 1: Current Class */}
                        <div className="relative pl-8 md:pl-0 md:w-1/2 md:pr-8 group">
                            <div className="absolute left-[-9px] top-0 md:top-[-36px] md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 rounded-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.5)]"></div>
                            <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-xl relative opacity-80 hover:opacity-100 transition-opacity">
                                <div className="text-red-400 text-xs font-bold uppercase tracking-wider mb-2">Paso 1 (Estás aquí)</div>
                                <h4 className="text-xl font-bold text-white mb-2">Identificar las Vulnerabilidades</h4>
                                <ul className="space-y-2 text-sm text-gray-400">
                                    <li className="flex gap-2 items-start">
                                        <CheckCircle className="w-4 h-4 text-red-400 mt-0.5 shrink-0" />
                                        <span>Descubre los errores comunes generados por IA</span>
                                    </li>
                                    <li className="flex gap-2 items-start">
                                        <CheckCircle className="w-4 h-4 text-red-400 mt-0.5 shrink-0" />
                                        <span>Aprende por qué ocurren estos fallos</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Step 2: The Bootcamp */}
                        <div className="relative pl-8 md:pl-0 md:w-1/2 md:pl-8">
                            <div className="absolute left-[-9px] top-0 md:top-[-36px] md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 rounded-full bg-zinc-800 border-2 border-red-500 animate-pulse"></div>
                            <div className="bg-gradient-to-br from-zinc-900 to-red-900/20 border border-red-500/30 p-6 rounded-xl relative shadow-lg shadow-red-500/5 hover:shadow-red-500/10 transition-shadow">
                                <div className="text-red-400 text-xs font-bold uppercase tracking-wider mb-2">Paso 2 (Asegurar tu App)</div>
                                <h4 className="text-xl font-bold text-white mb-3">Bootcamp AI & No-Code</h4>
                                <p className="text-gray-400 text-sm mb-4">
                                    Aprende a construir apps reales y seguras, con buenas prácticas desde el inicio.
                                </p>
                                <Button
                                    onClick={handleBootcampClick}
                                    className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg flex items-center justify-center gap-2 group transition-all"
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
            <footer className="border-t border-white/10 bg-black/40 text-center py-8">
                <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Labora Campus. Todos los derechos reservados.</p>
            </footer>
        </div>
    );
};

export default SeguridadIA;
