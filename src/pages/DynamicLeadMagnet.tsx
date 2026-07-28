import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { supabase } from '@/lib/supabaseClient';
import { ArrowRight, CheckCircle, Play, Star } from 'lucide-react';
import { Button } from "@/components/ui/button";

const DynamicLeadMagnet = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const [showVideo, setShowVideo] = useState(false);
    const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchClassData = async () => {
            setLoading(true);
            const { data: leadData, error } = await supabase
                .from('lead_magnets')
                .select('*')
                .eq('slug', slug)
                .single();

            if (error || !leadData) {
                // If not found, redirect or show error. Assuming /404 exists or just redirect home.
                navigate('/');
            } else {
                setData(leadData);
            }
            setLoading(false);
        };

        if (slug) {
            fetchClassData();
        }
    }, [slug, navigate]);

    const handleBootcampClick = () => {
        window.location.href = '/bootcamp';
    };

    if (loading) return <div className="min-h-screen bg-gray-950 flex items-center justify-center text-white">Cargando...</div>;
    if (!data) return null;

    // Define colors dynamically
    const isNeon = data.theme_color_primary === 'labora-neon';
    const isFuchsia = data.theme_color_primary === 'fuchsia-500';
    const isIndigo = data.theme_color_primary === 'indigo-500';

    const getBgBlob = () => {
        if (isFuchsia) return 'bg-fuchsia-500/20';
        if (isIndigo) return 'bg-indigo-500/20';
        return 'bg-labora-neon/20';
    };
    const getBgBlob2 = () => {
        if (isFuchsia) return 'bg-indigo-500/20';
        if (isIndigo) return 'bg-fuchsia-500/20';
        return 'bg-labora-red/10';
    };
    
    const getTagBg = () => isFuchsia ? 'bg-fuchsia-500/10 border-fuchsia-500/20 text-fuchsia-400' : isIndigo ? 'bg-indigo-500/10 border-indigo-500/20 text-indigo-400' : 'bg-labora-neon/10 border-labora-neon/20 text-labora-neon';
    const getStarFill = () => isFuchsia ? 'fill-fuchsia-400' : isIndigo ? 'fill-indigo-400' : 'fill-labora-neon';
    const getTitleGradient = () => isFuchsia ? 'from-fuchsia-400 to-indigo-400' : isIndigo ? 'from-indigo-400 to-purple-400' : 'from-labora-neon to-green-400';
    const getTimelineBorder = () => isFuchsia ? 'border-fuchsia-500/30' : isIndigo ? 'border-indigo-500/30' : 'border-labora-neon/30';
    const getCircleGlow = () => isFuchsia ? 'bg-fuchsia-500 shadow-[0_0_10px_rgba(217,70,239,0.5)]' : isIndigo ? 'bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.5)]' : 'bg-labora-neon shadow-[0_0_10px_rgba(45,212,191,0.5)]';
    const getTextColor = () => isFuchsia ? 'text-fuchsia-400' : isIndigo ? 'text-indigo-400' : 'text-labora-neon';
    const getCardGradient = () => isFuchsia ? 'to-fuchsia-500/10 border-fuchsia-500/30 shadow-fuchsia-500/5 hover:shadow-fuchsia-500/10' : isIndigo ? 'to-indigo-500/10 border-indigo-500/30 shadow-indigo-500/5 hover:shadow-indigo-500/10' : 'to-labora-neon/10 border-labora-neon/30 shadow-labora-neon/5 hover:shadow-labora-neon/10';
    const getButtonClass = () => isFuchsia ? 'bg-fuchsia-500 hover:bg-fuchsia-600 text-white' : isIndigo ? 'bg-indigo-500 hover:bg-indigo-600 text-white' : 'bg-labora-neon hover:bg-labora-neon/90 text-black';
    const getPulseBorder = () => isFuchsia ? 'border-fuchsia-500' : isIndigo ? 'border-indigo-500' : 'border-labora-neon';
    const getScreenBg = () => isFuchsia || isIndigo ? 'from-indigo-950 via-slate-900 to-indigo-950' : 'from-gray-950 via-gray-900 to-gray-950';

    const isYoutube = data.video_url.includes('youtube.com') || data.video_url.includes('youtu.be');

    // Muted video preview params
    let previewUrl = `${data.video_url}${data.video_url.includes('?') ? '&' : '?'}autoplay=1&mute=1&controls=0&loop=1`;
    if (isYoutube) {
        // YouTube requires a playlist parameter to loop properly with a single video
        const videoIdMatch = data.video_url.match(/embed\/([^?]+)/);
        if (videoIdMatch && videoIdMatch[1]) {
            previewUrl += `&playlist=${videoIdMatch[1]}`;
        }
    }

    return (
        <div className={`min-h-screen bg-gradient-to-br ${getScreenBg()} relative overflow-hidden font-sans text-white`}>
            {/* Background Elements */}
            <div className="absolute inset-0 bg-[url('/tech-grid.svg')] bg-repeat opacity-10 pointer-events-none"></div>
            <div className={`absolute top-0 left-1/4 w-96 h-96 ${getBgBlob()} rounded-full blur-[128px] pointer-events-none`}></div>
            <div className={`absolute bottom-0 right-1/4 w-96 h-96 ${getBgBlob2()} rounded-full blur-[128px] pointer-events-none`}></div>

            <header className="relative z-10 w-full max-w-6xl mx-auto px-4 py-6 flex justify-between items-center">
                <div className="flex items-center">
                    <img src="/lovable-uploads/logolabora.webp" alt="Labora Logo" className="h-8 sm:h-10 w-auto" />
                    <span className="ml-3 font-bold text-lg hidden sm:block">Campus</span>
                </div>
            </header>

            <main className="relative z-10 w-full max-w-4xl mx-auto px-4 pb-20 pt-4 sm:pt-8">
                {/* Header Section */}
                <div className="text-center mb-8 sm:mb-12">
                    <div className={`inline-flex items-center gap-2 px-3 py-1 border rounded-full text-sm font-semibold mb-4 animate-fade-in ${getTagBg()}`}>
                        <Star className={`w-4 h-4 ${getStarFill()}`} />
                        <span>{data.tag_text}</span>
                    </div>
                    <h1 className="text-3xl sm:text-5xl font-extrabold mb-4 leading-tight">
                        {data.title_main} <br className="hidden sm:block" />
                        <span className={`text-transparent bg-clip-text bg-gradient-to-r ${getTitleGradient()}`}>{data.title_highlight}</span>
                    </h1>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        {data.description}
                    </p>
                </div>

                {/* Video Section */}
                <div className="relative w-full aspect-video bg-gray-900/50 rounded-xl overflow-hidden border border-gray-800 shadow-2xl mb-16 group">
                    {!showVideo ? (
                        <div className="absolute inset-0 w-full h-full cursor-pointer" onClick={() => setShowVideo(true)}>
                            <iframe
                                src={previewUrl}
                                title="Preview"
                                className="w-full h-full absolute inset-0 z-10 pointer-events-none scale-105"
                                allow="autoplay; fullscreen"
                            ></iframe>
                            <div className="absolute inset-0 z-20 bg-transparent flex items-center justify-center">
                                {isYoutube && (
                                    <div className="bg-black/50 p-4 rounded-full backdrop-blur-sm group-hover:scale-110 transition-transform">
                                        <Play className="w-12 h-12 text-white ml-1" />
                                    </div>
                                )}
                            </div>
                        </div>
                    ) : (
                        <iframe
                            src={`${data.video_url}${data.video_url.includes('?') ? '&' : '?'}autoplay=1`}
                            title={data.title_main}
                            className="w-full h-full absolute inset-0 z-40"
                            allow="autoplay; fullscreen; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    )}
                </div>

                {/* Value Content */}
                <div className="max-w-3xl mx-auto mb-16">
                    <h3 className="text-2xl font-bold text-center mb-8">Tu Ruta de Aprendizaje</h3>
                    <div className={`relative border-l-2 ${getTimelineBorder()} ml-4 md:ml-0 md:pl-0 md:border-l-0 md:border-t-2 space-y-8 md:space-y-0 md:flex md:justify-between md:pt-8 bg-gradient-to-b from-transparent via-gray-900/50 to-transparent p-4 rounded-xl`}>
                        {/* Step 1 */}
                        <div className="relative pl-8 md:pl-0 md:w-1/2 md:pr-8 group">
                            <div className={`absolute left-[-9px] top-0 md:top-[-36px] md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 rounded-full ${getCircleGlow()}`}></div>
                            <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl relative opacity-80 hover:opacity-100 transition-opacity">
                                <div className={`${getTextColor()} text-xs font-bold uppercase tracking-wider mb-2`}>Paso 1 (Estás aquí)</div>
                                <h4 className="text-xl font-bold text-white mb-2">{data.step1_title}</h4>
                                <ul className="space-y-2 text-sm text-gray-400">
                                    <li className="flex gap-2 items-start">
                                        <CheckCircle className={`w-4 h-4 mt-0.5 shrink-0 ${getTextColor()}`} />
                                        <span>{data.step1_bullet1}</span>
                                    </li>
                                    <li className="flex gap-2 items-start">
                                        <CheckCircle className={`w-4 h-4 mt-0.5 shrink-0 ${getTextColor()}`} />
                                        <span>{data.step1_bullet2}</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className="relative pl-8 md:pl-0 md:w-1/2 md:pl-8">
                            <div className={`absolute left-[-9px] top-0 md:top-[-36px] md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 rounded-full bg-gray-700 border-2 animate-pulse ${getPulseBorder()}`}></div>
                            <div className={`bg-gradient-to-br from-gray-900 border p-6 rounded-xl relative transition-shadow ${getCardGradient()}`}>
                                <div className={`${getTextColor()} text-xs font-bold uppercase tracking-wider mb-2`}>Paso 2 (Siguiente Nivel)</div>
                                <h4 className="text-xl font-bold text-white mb-3">Bootcamp AI & No-Code</h4>
                                <p className="text-gray-400 text-sm mb-4">
                                    Domina el ciclo completo: Desarrollo, Bases de Datos, Automatización y Lanzamiento.
                                </p>
                                <Button onClick={handleBootcampClick} className={`w-full font-bold py-3 px-6 rounded-lg flex items-center justify-center gap-2 group transition-all ${getButtonClass()}`}>
                                    <span>Ver Programa Completo</span>
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Button>
                                <p className="text-center text-[10px] text-gray-500 mt-2">El 80% de los asistentes continúa aquí</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <footer className="border-t border-white/10 bg-black/20 text-center py-8">
                <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Labora Campus. Todos los derechos reservados.</p>
            </footer>
        </div>
    );
};

export default DynamicLeadMagnet;
