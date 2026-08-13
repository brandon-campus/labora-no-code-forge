
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { analytics } from '@/lib/analytics';
import { useUtm } from '@/hooks/useUtm';

export const AnalyticsTracker = () => {
    const location = useLocation();
    
    // Capturar y guardar UTMs globales
    useUtm();

    useEffect(() => {
        // Track page view on route change
        const url = location.pathname + location.search;
        analytics.trackPageView(url);
    }, [location]);

    return null;
};
