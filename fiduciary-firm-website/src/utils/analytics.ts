// Analytics utility for tracking user interactions
export const trackEvent = (eventName: string, parameters: Record<string, any> = {}) => {
  // In production, this would integrate with Google Analytics, Mixpanel, etc.
  console.log('Analytics Event:', eventName, parameters);

  // Example implementation with Google Analytics
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', eventName, parameters);
  }
};

export const trackPageView = (page: string) => {
  trackEvent('page_view', { page_path: page });
};

export const trackServiceInquiry = (serviceName: string) => {
  trackEvent('service_inquiry', {
    service_name: serviceName,
    timestamp: new Date().toISOString()
  });
};

export const trackContactForm = (formData: any) => {
  trackEvent('contact_form_submission', {
    subject: formData.subject,
    timestamp: new Date().toISOString()
  });
};

export const trackNavigation = (section: string) => {
  trackEvent('navigation', {
    section: section,
    timestamp: new Date().toISOString()
  });
};

// Performance monitoring
export const measurePerformance = () => {
  if (typeof window !== 'undefined' && 'performance' in window) {
    const perfData = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (perfData) {
      trackEvent('performance_metrics', {
        load_time: perfData.loadEventEnd - perfData.fetchStart,
        dom_content_loaded: perfData.domContentLoadedEventEnd - perfData.fetchStart,
        first_paint: performance.getEntriesByName('first-paint')[0]?.startTime || 0,
        timestamp: new Date().toISOString()
      });
    }
  }
};

// User engagement tracking
export const trackScrollDepth = () => {
  let maxScrollDepth = 0;

  const checkScrollDepth = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;
    const documentHeight = Math.max(
      document.body.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.clientHeight,
      document.documentElement.scrollHeight,
      document.documentElement.offsetHeight
    );

    const scrollDepth = Math.round(((scrollTop + windowHeight) / documentHeight) * 100);

    if (scrollDepth > maxScrollDepth) {
      maxScrollDepth = scrollDepth;
      trackEvent('scroll_depth', { depth: maxScrollDepth });
    }
  };

  window.addEventListener('scroll', checkScrollDepth);
  return () => window.removeEventListener('scroll', checkScrollDepth);
};

// Error tracking
export const trackError = (error: Error, errorInfo?: any) => {
  trackEvent('error', {
    message: error.message,
    stack: error.stack,
    info: errorInfo,
    timestamp: new Date().toISOString()
  });
};