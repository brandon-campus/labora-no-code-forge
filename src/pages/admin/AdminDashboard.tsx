import React, { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, BookOpen, Layers } from 'lucide-react';

export default function AdminDashboard() {
    const [stats, setStats] = useState({
        users: 0,
        modules: 0,
        cohorts: 0
    });

    useEffect(() => {
        const fetchStats = async () => {
            // Count Users
            const { count: usersCount } = await supabase
                .from('profiles')
                .select('*', { count: 'exact', head: true });

            // Count Modules
            const { count: modulesCount } = await supabase
                .from('modulos')
                .select('*', { count: 'exact', head: true });

            // Count Cohorts (approximate via profiles or modules distinct)
            const { data: cohortData } = await supabase
                .from('profiles')
                .select('cohorte');

            const uniqueCohorts = new Set(cohortData?.map(p => p.cohorte)).size;

            setStats({
                users: usersCount || 0,
                modules: modulesCount || 0,
                cohorts: uniqueCohorts || 0
            });
        };

        fetchStats();
    }, []);

    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold text-white">Dashboard General</h1>

            <div className="grid gap-6 md:grid-cols-3">
                <Card className="bg-gray-900 border-gray-800">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium text-gray-400">
                            Total Alumnos
                        </CardTitle>
                        <Users className="h-4 w-4 text-labora-neon" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-white">{stats.users}</div>
                    </CardContent>
                </Card>

                <Card className="bg-gray-900 border-gray-800">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium text-gray-400">
                            Módulos Activos
                        </CardTitle>
                        <BookOpen className="h-4 w-4 text-labora-red" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-white">{stats.modules}</div>
                    </CardContent>
                </Card>

                <Card className="bg-gray-900 border-gray-800">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium text-gray-400">
                            Cohortes Activas
                        </CardTitle>
                        <Layers className="h-4 w-4 text-purple-500" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-white">{stats.cohorts}</div>
                    </CardContent>
                </Card>
            </div>

            <div className="rounded-xl border border-gray-800 bg-gray-900/50 p-6">
                <h2 className="text-xl font-bold text-white mb-4">Acciones Rápidas</h2>
                <div className="text-gray-400">Sección en construcción...</div>
            </div>
        </div>
    );
}
