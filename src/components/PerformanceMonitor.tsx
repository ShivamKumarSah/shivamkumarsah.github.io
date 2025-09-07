"use client";
import { useEffect } from 'react';

// Performance monitoring component
export const PerformanceMonitor = () => {
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    // Optimize initial loading
    const optimizeLoading = () => {
      // Remove unused CSS
      const unusedStyles = document.querySelectorAll('style:empty');
      unusedStyles.forEach(style => {
        if (style.parentNode) {
          style.parentNode.removeChild(style);
        }
      });
      
      // Defer non-critical scripts
      const scripts = document.querySelectorAll('script[src]');
      scripts.forEach((script) => {
        if (!script.hasAttribute('defer') && !script.hasAttribute('async')) {
          script.setAttribute('defer', 'true');
        }
      });
    };
    
    // Intersection Observer for lazy loading
    const observeElements = () => {
      const lazyElements = document.querySelectorAll('[data-lazy]');
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = entry.target as HTMLElement;
            element.removeAttribute('data-lazy');
            observer.unobserve(element);
          }
        });
      }, {
        rootMargin: '50px'
      });
      
      lazyElements.forEach((el) => observer.observe(el));
    };
    
    // Run optimizations
    optimizeLoading();
    
    // Set up lazy loading
    const timer = setTimeout(observeElements, 100);
    
    return () => {
      clearTimeout(timer);
    };
  }, []);
  
  return null;
};

// Web Vitals reporter
export const reportWebVitals = (metric: { name: string; value: number; id: string }) => {
  if (process.env.NODE_ENV === 'development') {
    console.log(metric.name, metric.value);
  }
  
  // Analytics would be sent here in production
  // if (typeof gtag !== 'undefined') {
  //   gtag('event', metric.name, { value: metric.value });
  // }
};