import React, { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle, Play, Star, Lock } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

import { supabase } from '@/lib/supabaseClient';

const ClaseGratuitaIA = () => {
    const [isUnlocked, setIsUnlocked] = useState(false);
    const [showDialog, setShowDialog] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        whatsapp: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        const unlocked = localStorage.getItem('class_unlocked');
        if (unlocked === 'true') {
            setIsUnlocked(true);
        }
    }, []);

    const handleBootcampClick = () => {
        window.location.href = '/bootcamp';
    };

    const handleUnlock = async (e: React.FormEvent) => {
        e.preventDefault();
        if (formData.email && formData.whatsapp) {
            setIsSubmitting(true);

            try {
                // Intentamos guardar en Supabase
                const { error } = await supabase
                    .from('leads')
                    .insert([
                        {
                            email: formData.email,
                            whatsapp: formData.whatsapp,
                            source: 'clase_gratuita'
                        }
                    ]);

                if (error) {
                    console.error('Error saving lead:', error);
                }
            } catch (err) {
                console.error('Unexpected error saving lead:', err);
            } finally {
                // Desbloqueamos de todas formas para no trabar al usuario
                localStorage.setItem('class_unlocked', 'true');
                setIsUnlocked(true);
                setShowDialog(false);
                setIsSubmitting(false);
            }
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 relative overflow-hidden font-sans text-white">
            {/* Lead Capture Dialog */}
            <Dialog open={showDialog} onOpenChange={setShowDialog}>
                <DialogContent className="sm:max-w-[425px] bg-gray-900 border-gray-800 text-white [&>button]:hidden">
                    <DialogHeader>
                        <DialogTitle className="text-2xl font-bold text-center text-white flex flex-col items-center gap-4">
                            <div className="w-12 h-12 bg-labora-neon/20 rounded-full flex items-center justify-center">
                                <Lock className="w-6 h-6 text-labora-neon" />
                            </div>
                            Desbloquear Clase Gratuita
                        </DialogTitle>
                        <DialogDescription className="text-center text-gray-400">
                            Ingresa tus datos para acceder inmediatamente al entrenamiento sobre creación de productos con IA.
                        </DialogDescription>
                    </DialogHeader>
                    <form onSubmit={handleUnlock} className="grid gap-4 py-4">
                        <div className="grid gap-2">
                            <Label htmlFor="email" className="text-gray-200">Correo Electrónico</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="tu@email.com"
                                required
                                className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="whatsapp" className="text-gray-200">WhatsApp</Label>
                            <Input
                                id="whatsapp"
                                type="tel"
                                placeholder="+54 9 11..."
                                required
                                className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500"
                                value={formData.whatsapp}
                                onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                            />
                        </div>
                        <Button
                            type="submit"
                            className="w-full bg-labora-neon hover:bg-labora-neon/90 text-black font-bold mt-2"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'PROCESANDO...' : 'DESBLOQUEAR AHORA'}
                        </Button>
                    </form>
                    <p className="text-xs text-center text-gray-500 mt-2">
                        Tus datos están seguros. No enviamos spam.
                    </p>
                </DialogContent>
            </Dialog>

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

                    {/* Locked Overlay */}
                    {!isUnlocked && (
                        <div
                            className="absolute inset-0 z-30 flex flex-col items-center justify-center bg-black/60 backdrop-blur-sm cursor-pointer hover:bg-black/50 transition-all"
                            onClick={() => setShowDialog(true)}
                        >
                            <div className="w-20 h-20 bg-labora-neon rounded-full flex items-center justify-center shadow-lg shadow-labora-neon/30 transform transition-transform group-hover:scale-110 mb-4">
                                <Play className="w-8 h-8 text-black fill-black ml-1" />
                            </div>
                            <p className="text-white font-bold text-lg drop-shadow-md">Hacer clic para ver la clase</p>
                        </div>
                    )}

                    <iframe
                        src="https://www.tella.tv/video/creacion-de-productos-con-ia-4p5u/embed?autoplay=0&share=0"
                        title="Clase Gratuita: Creación de Productos con IA"
                        className="w-full h-full absolute inset-0 z-10"
                        allow="autoplay; fullscreen; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>

                {/* Value Content */}
                {/* Value Content - Redesigned as Learning Path */}
                <div className="max-w-3xl mx-auto mb-16">
                    <h3 className="text-2xl font-bold text-center mb-8">Tu Ruta de Aprendizaje</h3>

                    <div className="relative border-l-2 border-labora-neon/30 ml-4 md:ml-0 md:pl-0 md:border-l-0 md:border-t-2 space-y-8 md:space-y-0 md:flex md:justify-between md:pt-8 bg-gradient-to-b from-transparent via-gray-900/50 to-transparent p-4 rounded-xl">
                        {/* Step 1: Current Class */}
                        <div className="relative pl-8 md:pl-0 md:w-1/2 md:pr-8 group">
                            <div className="absolute left-[-9px] top-0 md:top-[-36px] md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 rounded-full bg-labora-neon shadow-[0_0_10px_rgba(45,212,191,0.5)]"></div>
                            <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl relative opacity-80 hover:opacity-100 transition-opacity">
                                <div className="text-labora-neon text-xs font-bold uppercase tracking-wider mb-2">Paso 1 (Estás aquí)</div>
                                <h4 className="text-xl font-bold text-white mb-2">Clase Gratuita: Validación y Prototipado</h4>
                                <ul className="space-y-2 text-sm text-gray-400">
                                    <li className="flex gap-2 items-start">
                                        <CheckCircle className="w-4 h-4 text-labora-neon mt-0.5 shrink-0" />
                                        <span>Valida ideas con IA sin costo</span>
                                    </li>
                                    <li className="flex gap-2 items-start">
                                        <CheckCircle className="w-4 h-4 text-labora-neon mt-0.5 shrink-0" />
                                        <span>Prototipa rápido tu solución</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Step 2: The Bootcamp */}
                        <div className="relative pl-8 md:pl-0 md:w-1/2 md:pl-8">
                            <div className="absolute left-[-9px] top-0 md:top-[-36px] md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 rounded-full bg-gray-700 border-2 border-labora-neon animate-pulse"></div>
                            <div className="bg-gradient-to-br from-gray-900 to-labora-neon/10 border border-labora-neon/30 p-6 rounded-xl relative shadow-lg shadow-labora-neon/5 hover:shadow-labora-neon/10 transition-shadow">
                                <div className="text-labora-neon text-xs font-bold uppercase tracking-wider mb-2">Paso 2 (Siguiente Nivel)</div>
                                <h4 className="text-xl font-bold text-white mb-3">Bootcamp AI & No-Code</h4>
                                <p className="text-gray-400 text-sm mb-4">
                                    Domina el ciclo completo: Desarrollo, Bases de Datos, Automatización y Lanzamiento.
                                </p>
                                <button
                                    onClick={handleBootcampClick}
                                    className="w-full bg-labora-neon hover:bg-labora-neon/90 text-black font-bold py-3 px-6 rounded-lg flex items-center justify-center gap-2 group transition-all"
                                >
                                    <span>Ver Programa Completo</span>
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </button>
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

export default ClaseGratuitaIA;
