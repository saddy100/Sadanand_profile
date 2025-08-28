import { useEffect } from 'react';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

export const useAnalytics = () => {
  const trackPageView = async (section) => {
    try {
      const userAgent = navigator.userAgent;
      await axios.post(`${API}/analytics`, {
        section: section,
        userAgent: userAgent
      });
    } catch (error) {
      // Silently fail analytics - don't disrupt user experience
      console.log('Analytics tracking failed:', error.message);
    }
  };

  const trackSectionView = (sectionName) => {
    // Debounce section tracking to avoid spam
    const timeoutId = setTimeout(() => {
      trackPageView(sectionName);
    }, 1000);

    return () => clearTimeout(timeoutId);
  };

  return {
    trackPageView,
    trackSectionView
  };
};