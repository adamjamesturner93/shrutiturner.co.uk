import { AppProps } from 'next/app';
import { useEffect } from 'react';
import '../styles/index.css';

function MyApp({ Component, pageProps, router }: AppProps) {
  useEffect(() => {
    const handleRouteChange = (url) => {
      (window as any).gtag(
        'config',
        process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID,
        {
          page_path: url,
        },
      );
    };

    // Subscribe to the change event
    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return <Component {...pageProps} />;
}

export default MyApp;
