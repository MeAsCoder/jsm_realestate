// components/ProgressBar.js
"use client";

import { useEffect } from 'react';
import { usePathname } from 'next/navigation'; // usePathname for Next.js 13+
import NProgress from 'nprogress';
import 'nprogress/nprogress.css'; // Import NProgress styles

NProgress.configure({ showSpinner: false });

const ProgressBar = () => {
  const pathname = usePathname(); // Get the current route path

  useEffect(() => {
    // Start the progress bar when the route changes
    NProgress.start();

    // End the progress bar when the route change is complete
    const handleRouteChangeComplete = () => NProgress.done();
    const handleRouteChangeError = () => NProgress.done();

    // Attach event listeners for route change
    window.addEventListener('routeChangeComplete', handleRouteChangeComplete);
    window.addEventListener('routeChangeError', handleRouteChangeError);

    // Clean up event listeners on component unmount
    return () => {
      window.removeEventListener('routeChangeComplete', handleRouteChangeComplete);
      window.removeEventListener('routeChangeError', handleRouteChangeError);
    };
  }, [pathname]);

  return null;
};

export default ProgressBar;
