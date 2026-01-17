import React, { useState, useEffect } from 'react';
import { Clock, Calendar, Video, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const NextClassWidget = () => {
    const [timeLeft, setTimeLeft] = useState<{ days: number, hours: number, minutes: number, seconds: number } | null>(null);
    const [nextDate, setNextDate] = useState<Date | null>(null);

    useEffect(() => {
        const calculateNextClass = () => {
            const now = new Date();
            // Ajustar a hora Argentina (UTC-3) si el usuario no está ahí, 
            // pero por simplicidad asumiremos que la fecha del sistema es local o manejaremos UTC.
            // Mejor estrategia: definir targets en UTC-3.

            const targetDays = [2, 4, 5]; // Martes (2), Jueves (4), Viernes (5)
            const targetHour = 10; // 10 AM

            let next = new Date(now);
            next.setHours(targetHour, 0, 0, 0);

            // Encontrar el próximo slot
            while (true) {
                // Si es hoy pero ya pasó la hora, o si no es día de clase
                if (next <= now || !targetDays.includes(next.getDay())) {
                    next.setDate(next.getDate() + 1);
                    next.setHours(targetHour, 0, 0, 0);
                } else {
                    break;
                }
            }
            return next;
        };

        const targetDate = calculateNextClass();
        setNextDate(targetDate);

        const timer = setInterval(() => {
            const now = new Date();
            const difference = targetDate.getTime() - now.getTime();

            if (difference <= 0) {
                // Recalcular si ya pasó
                const newTarget = calculateNextClass();
                setNextDate(newTarget);
            } else {
                const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
                const minutes = Math.floor((difference / 1000 / 60) % 60);
                const seconds = Math.floor((difference / 1000) % 60);
                setTimeLeft({ days, hours, minutes, seconds });
            }
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    if (!timeLeft || !nextDate) return null;

    const formatDate = (date: Date) => {
        const days = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
        const months = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
        return `${days[date.getDay()]} ${date.getDate()} de ${months[date.getMonth()]}, 10:00 HS`;
    };

    return (
        <div className="w-full bg-gradient-to-r from-labora-dark to-gray-900 border border-labora-neon/30 rounded-2xl p-6 md:p-8 shadow-neon-glow relative overflow-hidden mb-8 group">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-labora-neon/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-labora-neon/10 transition-all duration-500"></div>

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">

                {/* Info Column */}
                <div className="flex-1 text-center md:text-left">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-labora-red/20 border border-labora-red/30 rounded-full text-labora-red text-sm font-bold mb-3 animate-pulse">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-labora-red opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-labora-red"></span>
                        </span>
                        EN VIVO
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                        Próxima Clase de Mentoria
                    </h2>
                    <div className="flex items-center justify-center md:justify-start gap-2 text-gray-300 text-lg">
                        <Calendar className="w-5 h-5 text-labora-neon" />
                        <span>{formatDate(nextDate)}</span>
                    </div>
                </div>

                {/* Countdown Column */}
                <div className="flex gap-4 text-center">
                    <div className="flex flex-col">
                        <div className="bg-gray-800/80 border border-gray-700 w-16 h-16 rounded-lg flex items-center justify-center text-2xl font-bold text-white shadow-lg">
                            {timeLeft.days}
                        </div>
                        <span className="text-xs text-gray-400 mt-2 font-medium">DÍAS</span>
                    </div>
                    <div className="flex flex-col">
                        <div className="bg-gray-800/80 border border-gray-700 w-16 h-16 rounded-lg flex items-center justify-center text-2xl font-bold text-white shadow-lg">
                            {timeLeft.hours}
                        </div>
                        <span className="text-xs text-gray-400 mt-2 font-medium">HS</span>
                    </div>
                    <div className="flex flex-col">
                        <div className="bg-gray-800/80 border border-gray-700 w-16 h-16 rounded-lg flex items-center justify-center text-2xl font-bold text-white shadow-lg">
                            {timeLeft.minutes}
                        </div>
                        <span className="text-xs text-gray-400 mt-2 font-medium">MIN</span>
                    </div>
                    <div className="flex flex-col">
                        <div className="bg-gray-800/80 border border-gray-700 w-16 h-16 rounded-lg flex items-center justify-center text-2xl font-bold text-labora-neon shadow-lg">
                            {timeLeft.seconds}
                        </div>
                        <span className="text-xs text-gray-400 mt-2 font-medium">SEG</span>
                    </div>
                </div>

                {/* Action Column */}
                <div className="flex-shrink-0">
                    <Button
                        className="bg-labora-neon hover:bg-labora-neon/80 text-black font-bold text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-neon-glow transition-all transform hover:scale-105"
                        onClick={() => window.open('https://meet.google.com/szu-ziaf-hfk', '_blank')}
                    >
                        <Video className="mr-2 h-5 w-5" />
                        Unirse a Clase
                    </Button>
                    <p className="text-center text-xs text-gray-500 mt-2">
                        El enlace se activa 10 min antes
                    </p>
                </div>

            </div>
        </div>
    );
};

export default NextClassWidget;
