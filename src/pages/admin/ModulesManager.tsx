import React, { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from '@/components/ui/dialog';
import { Search, Plus, Edit2, Trash2, Video } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

export default function ModulesManager() {
    const [modules, setModules] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCohort, setSelectedCohort] = useState('15');
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [currentModule, setCurrentModule] = useState<any>(null);
    const { toast } = useToast();

    // Form State
    const [formData, setFormData] = useState({
        titulo: '',
        descripcion: '',
        video_url: '',
        orden: 0,
        cohorte: '15'
    });

    const fetchModules = async () => {
        setLoading(true);
        const { data, error } = await supabase
            .from('modulos')
            .select('*')
            .eq('cohorte', selectedCohort)
            .order('orden', { ascending: true });

        if (data) setModules(data);
        setLoading(false);
    };

    useEffect(() => {
        fetchModules();
    }, [selectedCohort]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            if (currentModule) {
                // Update
                const { error } = await supabase
                    .from('modulos')
                    .update(formData)
                    .eq('id', currentModule.id);
                if (error) throw error;
                toast({ title: 'Módulo actualizado correctamente' });
            } else {
                // Create
                const { error } = await supabase
                    .from('modulos')
                    .insert([{ ...formData, cohorte: selectedCohort }]);
                if (error) throw error;
                toast({ title: 'Módulo creado correctamente' });
            }
            setIsDialogOpen(false);
            fetchModules();
        } catch (error) {
            toast({ title: 'Error al guardar', variant: 'destructive' });
            console.error(error);
        }
    };

    const handleDelete = async (id: string) => {
        if (!confirm('¿Estás seguro de eliminar este módulo?')) return;
        const { error } = await supabase.from('modulos').delete().eq('id', id);
        if (!error) {
            toast({ title: 'Módulo eliminado' });
            fetchModules();
        }
    };

    const openEdit = (mod: any) => {
        setCurrentModule(mod);
        setFormData({
            titulo: mod.titulo,
            descripcion: mod.descripcion || '',
            video_url: mod.video_url || '',
            orden: mod.orden,
            cohorte: mod.cohorte
        });
        setIsDialogOpen(true);
    };

    const openCreate = () => {
        setCurrentModule(null);
        setFormData({
            titulo: '',
            descripcion: '',
            video_url: '',
            orden: modules.length + 1,
            cohorte: selectedCohort
        });
        setIsDialogOpen(true);
    };

    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-white">Gestionar Módulos</h1>
                    <p className="text-gray-400">Cohorte actual: {selectedCohort}</p>
                </div>
                <div className="flex gap-2">
                    <Input
                        className="w-24 bg-gray-800 border-gray-700 text-white"
                        value={selectedCohort}
                        onChange={(e) => setSelectedCohort(e.target.value)}
                        placeholder="Cohorte"
                    />
                    <Button onClick={openCreate} className="bg-labora-neon text-gray-900 hover:bg-labora-neon/90">
                        <Plus className="mr-2 h-4 w-4" /> Nuevo Módulo
                    </Button>
                </div>
            </div>

            <div className="bg-gray-900 rounded-xl border border-gray-800 overflow-hidden">
                <Table>
                    <TableHeader>
                        <TableRow className="border-gray-800 hover:bg-gray-800/50">
                            <TableHead className="text-gray-400">Orden</TableHead>
                            <TableHead className="text-gray-400">Título</TableHead>
                            <TableHead className="text-gray-400">Video</TableHead>
                            <TableHead className="text-gray-400 text-right">Acciones</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {modules.map((mod) => (
                            <TableRow key={mod.id} className="border-gray-800 hover:bg-gray-800/50">
                                <TableCell className="font-medium text-white">{mod.orden}</TableCell>
                                <TableCell className="text-white">
                                    <div className="font-bold text-md">{mod.titulo}</div>
                                    <div className="text-xs text-gray-500 truncate max-w-xs">{mod.descripcion}</div>
                                </TableCell>
                                <TableCell>
                                    {mod.video_url ? (
                                        <a href={mod.video_url} target="_blank" rel="noreferrer" className="flex items-center text-blue-400 text-xs hover:underline">
                                            <Video className="mr-1 h-3 w-3" /> Ver Link
                                        </a>
                                    ) : (
                                        <span className="text-gray-600 text-xs">Sin video</span>
                                    )}
                                </TableCell>
                                <TableCell className="text-right">
                                    <div className="flex justify-end gap-2">
                                        <Button variant="ghost" size="icon" onClick={() => openEdit(mod)} className="text-gray-400 hover:text-white">
                                            <Edit2 className="h-4 w-4" />
                                        </Button>
                                        <Button variant="ghost" size="icon" onClick={() => handleDelete(mod.id)} className="text-red-400 hover:text-red-300 hover:bg-red-900/20">
                                            <Trash2 className="h-4 w-4" />
                                        </Button>
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                        {modules.length === 0 && (
                            <TableRow>
                                <TableCell colSpan={4} className="text-center py-8 text-gray-500">
                                    No hay módulos en esta cohorte.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>

            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogContent className="bg-gray-900 border-gray-800 text-white">
                    <DialogHeader>
                        <DialogTitle>{currentModule ? 'Editar Módulo' : 'Nuevo Módulo'}</DialogTitle>
                    </DialogHeader>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="text-sm text-gray-400">Título</label>
                            <Input
                                value={formData.titulo}
                                onChange={(e) => setFormData({ ...formData, titulo: e.target.value })}
                                className="bg-gray-800 border-gray-700 text-white"
                                required
                            />
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-1">
                                <label className="text-sm text-gray-400">Orden</label>
                                <Input
                                    type="number"
                                    value={formData.orden}
                                    onChange={(e) => setFormData({ ...formData, orden: parseInt(e.target.value) })}
                                    className="bg-gray-800 border-gray-700 text-white"
                                />
                            </div>
                            <div className="flex-1">
                                <label className="text-sm text-gray-400">Cohorte</label>
                                <Input
                                    value={formData.cohorte}
                                    onChange={(e) => setFormData({ ...formData, cohorte: e.target.value })}
                                    className="bg-gray-800 border-gray-700 text-white"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="text-sm text-gray-400">URL del Video (Drive o Tella)</label>
                            <Input
                                value={formData.video_url}
                                onChange={(e) => setFormData({ ...formData, video_url: e.target.value })}
                                className="bg-gray-800 border-gray-700 text-white"
                                placeholder="https://..."
                            />
                        </div>
                        <div>
                            <label className="text-sm text-gray-400">Descripción</label>
                            <Input
                                value={formData.descripcion}
                                onChange={(e) => setFormData({ ...formData, descripcion: e.target.value })}
                                className="bg-gray-800 border-gray-700 text-white"
                            />
                        </div>
                        <Button type="submit" className="w-full bg-labora-neon text-gray-900 font-bold hover:bg-labora-neon/90">
                            {currentModule ? 'Guardar Cambios' : 'Crear Módulo'}
                        </Button>
                    </form>
                </DialogContent>
            </Dialog>
        </div>
    );
}
