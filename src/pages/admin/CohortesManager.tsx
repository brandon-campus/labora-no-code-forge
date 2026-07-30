import React, { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { Loader2, Save, Clock } from 'lucide-react';
import { useAdminAuth } from '@/hooks/useAdminAuth';

export default function CohortesManager() {
  const { user } = useAdminAuth();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  
  const [cohorte, setCohorte] = useState<any>(null);
  const [preciosJson, setPreciosJson] = useState('');
  const [temarioJson, setTemarioJson] = useState('');

  const fetchCohorte = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('cohortes')
        .select('*')
        .eq('estado', 'activa')
        .single();
        
      if (error && error.code !== 'PGRST116') {
        throw error;
      }
      
      if (data) {
        setCohorte(data);
        setPreciosJson(JSON.stringify(data.precios_regionales, null, 2));
        setTemarioJson(JSON.stringify(data.temario, null, 2));
      } else {
        // Initialize empty state if no active cohort found
        setCohorte({
          numero: 1,
          estado: 'activa',
          fecha_inicio: '',
          semanas_duracion: '',
          horario: '',
          plazas_totales: 0,
          fecha_bienvenida: '',
          promocion_texto_banner: '',
          promocion_texto_badge: '',
        });
        setPreciosJson('{}');
        setTemarioJson('[]');
      }
    } catch (err: any) {
      toast.error('Error al cargar la cohorte activa: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCohorte();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;
    setCohorte({
      ...cohorte,
      [name]: type === 'number' ? Number(value) : value
    });
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    try {
      // Validate JSONs
      const parsedPrecios = JSON.parse(preciosJson);
      const parsedTemario = JSON.parse(temarioJson);

      const payload = {
        ...cohorte,
        precios_regionales: parsedPrecios,
        temario: parsedTemario,
        updated_at: new Date().toISOString(),
        updated_by: user?.email
      };

      if (cohorte.id) {
        // Update
        const { error } = await supabase
          .from('cohortes')
          .update(payload)
          .eq('id', cohorte.id);
        if (error) throw error;
      } else {
        // Insert
        const { error } = await supabase
          .from('cohortes')
          .insert([payload]);
        if (error) throw error;
      }

      toast.success('Cohorte guardada correctamente.');
      await fetchCohorte(); // refresh to get updated_at
    } catch (err: any) {
      toast.error('Error al guardar: ' + (err.message || 'JSON inválido'));
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <Loader2 className="h-8 w-8 animate-spin text-labora-neon" />
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto pb-20">
      <div className="mb-8 flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Módulo Cohortes</h1>
          <p className="text-gray-400">Administra la cohorte activa actual (mostrada en la landing).</p>
        </div>
        {cohorte?.updated_at && (
          <div className="text-xs text-gray-500 flex items-center gap-1">
            <Clock className="w-3 h-3" />
            Última mod: {new Date(cohorte.updated_at).toLocaleString()} por {cohorte.updated_by}
          </div>
        )}
      </div>

      <form onSubmit={handleSave} className="space-y-8 bg-gray-900/50 p-6 sm:p-8 rounded-2xl border border-gray-800">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label className="text-gray-300">Número de Cohorte</Label>
            <Input name="numero" type="number" value={cohorte.numero} onChange={handleChange} required className="bg-black/50 border-gray-700 text-white" />
          </div>
          <div className="space-y-2">
            <Label className="text-gray-300">Plazas Totales</Label>
            <Input name="plazas_totales" type="number" value={cohorte.plazas_totales} onChange={handleChange} required className="bg-black/50 border-gray-700 text-white" />
          </div>
          
          <div className="space-y-2">
            <Label className="text-gray-300">Fecha de Inicio (Ej: Sábado 01 de Julio)</Label>
            <Input name="fecha_inicio" value={cohorte.fecha_inicio} onChange={handleChange} required className="bg-black/50 border-gray-700 text-white" />
          </div>
          <div className="space-y-2">
            <Label className="text-gray-300">Duración (Ej: 7 semanas)</Label>
            <Input name="semanas_duracion" value={cohorte.semanas_duracion} onChange={handleChange} required className="bg-black/50 border-gray-700 text-white" />
          </div>

          <div className="space-y-2">
            <Label className="text-gray-300">Horario (Ej: Sábados 10-14hs)</Label>
            <Input name="horario" value={cohorte.horario} onChange={handleChange} required className="bg-black/50 border-gray-700 text-white" />
          </div>
          <div className="space-y-2">
            <Label className="text-gray-300">Fecha Bienvenida (Ej: Sábado, 06 de junio)</Label>
            <Input name="fecha_bienvenida" value={cohorte.fecha_bienvenida} onChange={handleChange} required className="bg-black/50 border-gray-700 text-white" />
          </div>
        </div>

        <div className="pt-4 border-t border-gray-800 space-y-6">
          <h3 className="text-xl font-semibold text-white">Promociones</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label className="text-gray-300">Banner Superior</Label>
              <Input name="promocion_texto_banner" value={cohorte.promocion_texto_banner || ''} onChange={handleChange} placeholder="Ej: 🚀 ¡30% de descuento..." className="bg-black/50 border-gray-700 text-white" />
            </div>
            <div className="space-y-2">
              <Label className="text-gray-300">Badge en Precios</Label>
              <Input name="promocion_texto_badge" value={cohorte.promocion_texto_badge || ''} onChange={handleChange} placeholder="Ej: ⭐ 30% DE DESCUENTO..." className="bg-black/50 border-gray-700 text-white" />
            </div>
          </div>
        </div>

        <div className="pt-4 border-t border-gray-800 space-y-6">
          <h3 className="text-xl font-semibold text-white">Configuración Avanzada (JSON)</h3>
          
          <div className="space-y-2">
            <Label className="text-gray-300">Precios Regionales (JSON)</Label>
            <Textarea 
              value={preciosJson} 
              onChange={(e) => setPreciosJson(e.target.value)} 
              className="font-mono text-sm h-48 bg-black/50 border-gray-700 text-gray-300"
            />
          </div>

          <div className="space-y-2">
            <Label className="text-gray-300">Temario / Módulos (JSON Array)</Label>
            <Textarea 
              value={temarioJson} 
              onChange={(e) => setTemarioJson(e.target.value)} 
              className="font-mono text-sm h-64 bg-black/50 border-gray-700 text-gray-300"
            />
          </div>
        </div>

        <Button type="submit" disabled={saving} className="w-full bg-labora-neon hover:bg-labora-neon/90 text-black font-bold py-6 text-lg">
          {saving ? <Loader2 className="w-5 h-5 animate-spin mr-2" /> : <Save className="w-5 h-5 mr-2" />}
          Guardar Cambios
        </Button>
      </form>
    </div>
  );
}
