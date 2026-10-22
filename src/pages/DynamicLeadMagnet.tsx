import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { supabase } from '@/lib/supabaseClient';
import LeadMagnetPage from '@/components/lead-magnet/LeadMagnetPage';
import { fromLeadMagnetRow, type LeadMagnetConfig } from '@/components/lead-magnet/config';
import { SitePage } from '@/components/site/primitives';

// /clase/:slug — contenido administrado desde /admin/clases (tabla lead_magnets), con el diseño v2
const DynamicLeadMagnet = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [config, setConfig] = useState<LeadMagnetConfig | null>(null);

  useEffect(() => {
    if (!slug) return;
    supabase
      .from('lead_magnets')
      .select('*')
      .eq('slug', slug)
      .single()
      .then(({ data, error }) => {
        if (error || !data) navigate('/');
        else setConfig(fromLeadMagnetRow(data));
      });
  }, [slug, navigate]);

  if (!config) {
    return (
      <SitePage>
        <div className="min-h-screen flex items-center justify-center text-body-md text-on-surface-variant">Cargando…</div>
      </SitePage>
    );
  }
  return <LeadMagnetPage config={config} />;
};

export default DynamicLeadMagnet;
