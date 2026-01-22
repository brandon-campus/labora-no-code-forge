
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { analytics } from '@/lib/analytics';

export const AnalyticsTracker = () => {
    const location = useLocation();

    useEffect(() => {
        // Track page view on route change
        const url = location.pathname + location.search;
        analytics.trackPageView(url);
    }, [location]);

    return null;
};
