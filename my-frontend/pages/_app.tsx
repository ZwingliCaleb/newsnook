// pages/_app.tsx
import { ThemeProvider } from '@/context/ThemeContext';
import type { AppProps } from 'next/app';
import '@/styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
