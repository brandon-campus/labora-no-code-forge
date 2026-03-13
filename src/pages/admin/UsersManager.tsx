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
} from '@/components/ui/dialog';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Search, Edit2, Shield, User } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";
import { Badge } from "@/components/ui/badge";

export default function UsersManager() {
    const [users, setUsers] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [roleFilter, setRoleFilter] = useState<string>('all');
    const [cohortFilter, setCohortFilter] = useState<string>('all');

    // Edit State
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [currentUser, setCurrentUser] = useState<any>(null);
    const [formData, setFormData] = useState({
        cohorte: '',
        role: ''
    });

    const { toast } = useToast();

    const fetchUsers = async () => {
        setLoading(true);
        let query = supabase
            .from('profiles')
            .select('*')
            .order('created_at', { ascending: false });

        if (cohortFilter !== 'all') {
            query = query.eq('cohorte', cohortFilter);
        }

        if (roleFilter !== 'all') {
            query = query.eq('role', roleFilter);
        }

        const { data, error } = await query;

        if (error) {
            console.error(error);
            toast({ title: 'Error al cargar usuarios', variant: 'destructive' });
        } else {
            setUsers(data || []);
        }
        setLoading(false);
    };

    useEffect(() => {
        fetchUsers();
    }, [cohortFilter, roleFilter]);

    // Filtrado en cliente para búsqueda de texto (Supabase search es limitado sin extensiones)
    const filteredUsers = users.filter(user =>
    (user.full_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.id.includes(searchTerm))
    );

    const openEdit = (user: any) => {
        setCurrentUser(user);
        setFormData({
            cohorte: user.cohorte || '13',
            role: user.role || 'student'
        });
        setIsDialogOpen(true);
    };

    const handleUpdate = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!currentUser) return;

        try {
            const { error } = await supabase
                .from('profiles')
                .update({
                    cohorte: formData.cohorte,
                    role: formData.role
                })
                .eq('id', currentUser.id);

            if (error) throw error;

            toast({ title: 'Usuario actualizado correctamente' });
            setIsDialogOpen(false);
            fetchUsers();
        } catch (error) {
            console.error(error);
            toast({ title: 'Error al actualizar', variant: 'destructive' });
        }
    };

    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-white">Gestión de Usuarios</h1>
                    <p className="text-gray-400">Total: {filteredUsers.length} usuarios</p>
                </div>
                <div className="flex flex-col md:flex-row gap-2 w-full md:w-auto">
                    <div className="relative">
                        <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
                        <Input
                            placeholder="Buscar por nombre..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="pl-8 bg-gray-800 border-gray-700 text-white w-full md:w-64"
                        />
                    </div>
                    <Select value={cohortFilter} onValueChange={setCohortFilter}>
                        <SelectTrigger className="w-[140px] bg-gray-800 border-gray-700 text-white">
                            <SelectValue placeholder="Cohorte" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">Todas Cohortes</SelectItem>
                            <SelectItem value="13">Cohorte 13</SelectItem>
                            <SelectItem value="15">Cohorte 15</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>

            <div className="bg-gray-900 rounded-xl border border-gray-800 overflow-hidden">
                <Table>
                    <TableHeader>
                        <TableRow className="border-gray-800 hover:bg-gray-800/50">
                            <TableHead className="text-gray-400">Usuario</TableHead>
                            <TableHead className="text-gray-400">Cohorte</TableHead>
                            <TableHead className="text-gray-400">Rol</TableHead>
                            <TableHead className="text-gray-400 text-right">Acciones</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {loading ? (
                            <TableRow>
                                <TableCell colSpan={4} className="text-center py-8 text-gray-500">
                                    Cargando usuarios...
                                </TableCell>
                            </TableRow>
                        ) : filteredUsers.length === 0 ? (
                            <TableRow>
                                <TableCell colSpan={4} className="text-center py-8 text-gray-500">
                                    No se encontraron usuarios.
                                </TableCell>
                            </TableRow>
                        ) : (
                            filteredUsers.map((user) => (
                                <TableRow key={user.id} className="border-gray-800 hover:bg-gray-800/50">
                                    <TableCell className="text-white">
                                        <div className="flex items-center gap-3">
                                            <div className="h-8 w-8 rounded-full bg-gray-800 flex items-center justify-center overflow-hidden border border-gray-700">
                                                {user.avatar_url ? (
                                                    <img src={user.avatar_url} alt={user.full_name} className="h-full w-full object-cover" />
                                                ) : (
                                                    <User className="h-4 w-4 text-gray-400" />
                                                )}
                                            </div>
                                            <div>
                                                <div className="font-medium">{user.full_name || 'Sin nombre'}</div>
                                                <div className="text-xs text-gray-500">{user.email}</div>
                                                <div className="text-[10px] text-gray-600 font-mono">{user.id}</div>
                                            </div>
                                        </div>
                                    </TableCell>
                                    <TableCell>
                                        <Badge variant="outline" className="bg-gray-800 text-gray-300 border-gray-600">
                                            {user.cohorte || 'N/A'}
                                        </Badge>
                                    </TableCell>
                                    <TableCell>
                                        {user.role === 'admin' ? (
                                            <Badge className="bg-labora-neon text-gray-900 hover:bg-labora-neon/80 border-none">
                                                <Shield className="h-3 w-3 mr-1" /> Admin
                                            </Badge>
                                        ) : (
                                            <Badge variant="secondary" className="bg-gray-800 text-gray-400">
                                                Estudiante
                                            </Badge>
                                        )}
                                    </TableCell>
                                    <TableCell className="text-right">
                                        <Button
                                            variant="ghost"
                                            size="sm"
                                            onClick={() => openEdit(user)}
                                            className="text-labora-neon hover:text-white hover:bg-labora-neon/10"
                                        >
                                            <Edit2 className="h-4 w-4 mr-2" />
                                            Editar
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))
                        )}
                    </TableBody>
                </Table>
            </div>

            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogContent className="bg-gray-900 border-gray-800 text-white">
                    <DialogHeader>
                        <DialogTitle>Editar Usuario</DialogTitle>
                    </DialogHeader>
                    {currentUser && (
                        <form onSubmit={handleUpdate} className="space-y-6 pt-4">
                            <div className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-lg border border-gray-800">
                                <div className="h-10 w-10 rounded-full bg-gray-700 flex items-center justify-center">
                                    <User className="h-5 w-5 text-gray-400" />
                                </div>
                                <div>
                                    <div className="font-bold">{currentUser.full_name}</div>
                                    <div className="text-sm text-gray-400">{currentUser.id}</div>
                                </div>
                            </div>

                            <div className="grid gap-4">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-400">Cohorte</label>
                                    <Select
                                        value={formData.cohorte}
                                        onValueChange={(val) => setFormData({ ...formData, cohorte: val })}
                                    >
                                        <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
                                            <SelectValue placeholder="Seleccionar cohorte" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="13">Cohorte 13 (Legacy)</SelectItem>
                                            <SelectItem value="15">Cohorte 15 (Actual)</SelectItem>
                                            <SelectItem value="16">Cohorte 16 (Futura)</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-400">Rol de Sistema</label>
                                    <Select
                                        value={formData.role}
                                        onValueChange={(val) => setFormData({ ...formData, role: val })}
                                    >
                                        <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
                                            <SelectValue placeholder="Seleccionar rol" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="student">Estudiante</SelectItem>
                                            <SelectItem value="admin">Administrador</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    {formData.role === 'admin' && (
                                        <p className="text-xs text-labora-red mt-1">
                                            ⚠️ Cuidado: Los administradores tienen acceso total al panel.
                                        </p>
                                    )}
                                </div>
                            </div>

                            <div className="flex justify-end gap-3">
                                <Button type="button" variant="ghost" onClick={() => setIsDialogOpen(false)} className="text-gray-400">
                                    Cancelar
                                </Button>
                                <Button type="submit" className="bg-labora-neon text-gray-900 font-bold hover:bg-labora-neon/90">
                                    Guardar Cambios
                                </Button>
                            </div>
                        </form>
                    )}
                </DialogContent>
            </Dialog>
        </div>
    );
}
