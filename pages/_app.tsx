import { cn } from '@/lib/utils';
import '@/styles/globals.css';
import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import { Inter as FontSans } from 'next/font/google';
import { Toaster } from '@/components/ui/sonner';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

function App({ Component, pageProps }: AppProps<{}>) {
  return (
    <ThemeProvider
      attribute="class"
      enableSystem
      forcedTheme="dark"
      disableTransitionOnChange
    >
      <main
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable,
        )}
      >
        <Component {...pageProps} />
      </main>
      <Toaster />
    </ThemeProvider>
  );
}

export default App;
