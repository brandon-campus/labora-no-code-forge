import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useUtm = () => {
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    
    // Lista de parámetros UTM comunes que queremos rastrear
    const utmParams = [
      'utm_source',
      'utm_medium',
      'utm_campaign',
      'utm_term',
      'utm_content'
    ];

    let hasUtms = false;
    
    utmParams.forEach(param => {
      const value = searchParams.get(param);
      if (value) {
        localStorage.setItem(param, value);
        hasUtms = true;
      }
    });

    // Opcionalmente podrías guardar la fecha en la que se capturó el UTM
    if (hasUtms) {
      localStorage.setItem('utm_captured_at', new Date().toISOString());
    }
  }, [location]);
};

// Función de utilidad para extraer los UTMs guardados
export const getStoredUtms = () => {
  return {
    utm_source: localStorage.getItem('utm_source') || '',
    utm_medium: localStorage.getItem('utm_medium') || '',
    utm_campaign: localStorage.getItem('utm_campaign') || '',
    utm_term: localStorage.getItem('utm_term') || '',
    utm_content: localStorage.getItem('utm_content') || ''
  };
};

export const getStoredUtmsQueryString = () => {
  const utms = getStoredUtms();
  const params = new URLSearchParams();
  
  Object.entries(utms).forEach(([key, value]) => {
    if (value) {
      params.append(key, value);
    }
  });
  
  return params.toString();
};
