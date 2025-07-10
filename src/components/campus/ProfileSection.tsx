import React, { useEffect, useState, useRef } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { Button } from '@/components/ui/button';

const ProfileSection: React.FC = () => {
  const [profile, setProfile] = useState<any>(null);
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [name, setName] = useState('');
  const [photoUrl, setPhotoUrl] = useState('');
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [showPasswordForm, setShowPasswordForm] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [passwordSuccess, setPasswordSuccess] = useState('');

  useEffect(() => {
    const fetchProfile = async () => {
      setLoading(true);
      const { data: authData } = await supabase.auth.getUser();
      setUser(authData.user);
      const { data: prof } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', authData.user.id)
        .single();
      setProfile(prof);
      setName(prof?.full_name || '');
      setPhotoUrl(prof?.photo_url || '');
      setLoading(false);
    };
    fetchProfile();
  }, []);

  const handleSave = async () => {
    setSaving(true);
    await supabase
      .from('profiles')
      .update({ full_name: name })
      .eq('id', user.id);
    setProfile((prev: any) => ({ ...prev, full_name: name }));
    setSaving(false);
  };

  const handlePhotoChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setSaving(true);
    const filePath = `profile_photos/${user.id}/${file.name}`;
    const { error: uploadError } = await supabase.storage.from('profile-photos').upload(filePath, file, { upsert: true });
    if (uploadError) {
      alert('Error al subir la foto: ' + uploadError.message);
      setSaving(false);
      return;
    }
    const { data: publicUrlData } = supabase.storage.from('profile-photos').getPublicUrl(filePath);
    const url = publicUrlData?.publicUrl;
    await supabase.from('profiles').update({ photo_url: url }).eq('id', user.id);
    setPhotoUrl(url);
    setProfile((prev: any) => ({ ...prev, photo_url: url }));
    setSaving(false);
  };

  const handlePasswordChange = async (e: React.FormEvent) => {
    e.preventDefault();
    setPasswordError('');
    setPasswordSuccess('');
    if (newPassword.length < 6) {
      setPasswordError('La contraseña debe tener al menos 6 caracteres.');
      return;
    }
    if (newPassword !== confirmPassword) {
      setPasswordError('Las contraseñas no coinciden.');
      return;
    }
    setSaving(true);
    const { error } = await supabase.auth.updateUser({ password: newPassword });
    setSaving(false);
    if (error) {
      setPasswordError(error.message);
    } else {
      setPasswordSuccess('¡Contraseña actualizada con éxito!');
      setShowPasswordForm(false);
      setNewPassword('');
      setConfirmPassword('');
    }
  };

  if (loading) {
    return <div className="p-8 text-white">Cargando perfil...</div>;
  }

  return (
    <div className="p-8 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold text-white mb-6">Mi Perfil</h1>
      <div className="flex flex-col items-center gap-6 mb-8">
        <div className="relative">
          <img
            src={photoUrl || '/lovable-uploads/avatar-placeholder.png'}
            alt="Foto de perfil"
            className="w-28 h-28 rounded-full object-cover border-4 border-labora-neon bg-gray-800"
          />
        <Button
            size="sm"
          variant="outline"
            className="absolute bottom-0 right-0 bg-labora-neon text-gray-900 border-none px-3 py-1"
            onClick={() => fileInputRef.current?.click()}
            disabled={saving}
          >
            Cambiar foto
        </Button>
          <input
            type="file"
            ref={fileInputRef}
            className="hidden"
            onChange={handlePhotoChange}
            accept="image/*"
          />
        </div>
      </div>
      <div className="space-y-6">
                  <div>
          <label className="block text-gray-300 mb-1">Nombre completo</label>
          <input
            type="text"
            className="w-full rounded-lg bg-gray-800 text-white px-4 py-2 border border-gray-700 focus:outline-none focus:border-labora-neon"
            value={name}
            onChange={e => setName(e.target.value)}
            disabled={saving}
                    />
                  </div>
                  <div>
          <label className="block text-gray-300 mb-1">Email</label>
          <input
            type="text"
            className="w-full rounded-lg bg-gray-800 text-gray-400 px-4 py-2 border border-gray-700"
            value={user.email}
            disabled
                    />
                  </div>
                  <div>
          <label className="block text-gray-300 mb-1">Cohorte</label>
          <input
            type="text"
            className="w-full rounded-lg bg-gray-800 text-gray-400 px-4 py-2 border border-gray-700"
            value={profile?.cohorte || ''}
            disabled
                />
              </div>
        <Button onClick={handleSave} className="bg-labora-neon text-gray-900 font-bold" disabled={saving}>
          {saving ? 'Guardando...' : 'Guardar cambios'}
        </Button>
        <div className="mt-8">
          <Button
            variant="outline"
            className="border-labora-neon text-labora-neon hover:bg-labora-neon/10"
            onClick={() => setShowPasswordForm(!showPasswordForm)}
          >
            Cambiar contraseña
          </Button>
          {showPasswordForm && (
            <form onSubmit={handlePasswordChange} className="mt-4 space-y-4 bg-gray-800 p-4 rounded-lg">
              <div>
                <label className="block text-gray-300 mb-1">Nueva contraseña</label>
                <input
                  type="password"
                  className="w-full rounded-lg bg-gray-900 text-white px-4 py-2 border border-gray-700 focus:outline-none focus:border-labora-neon"
                  value={newPassword}
                  onChange={e => setNewPassword(e.target.value)}
                  disabled={saving}
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-1">Confirmar contraseña</label>
                <input
                  type="password"
                  className="w-full rounded-lg bg-gray-900 text-white px-4 py-2 border border-gray-700 focus:outline-none focus:border-labora-neon"
                  value={confirmPassword}
                  onChange={e => setConfirmPassword(e.target.value)}
                  disabled={saving}
                />
              </div>
              {passwordError && <div className="text-red-400 text-sm">{passwordError}</div>}
              {passwordSuccess && <div className="text-green-400 text-sm">{passwordSuccess}</div>}
              <Button type="submit" className="bg-labora-neon text-gray-900 font-bold" disabled={saving}>
                {saving ? 'Guardando...' : 'Actualizar contraseña'}
              </Button>
            </form>
          )}
                </div>
              </div>
    </div>
  );
};

export { ProfileSection };