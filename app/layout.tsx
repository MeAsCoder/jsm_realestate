// app/layout.tsx
import { ChakraProvider } from '@chakra-ui/react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProgressBar from '../components/ProgressBar';
import './globals.css'; // Optional: Global styles
import Head from 'next/head';
import { ReactNode } from 'react'; // Import ReactNode

// Define the type for props
type RootLayoutProps = {
  children: ReactNode;
};

export const metadata = {
  title: 'Real Estate',
  description: 'Real Estate Website',
};

// Explicitly define the function with the type
export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
          integrity="sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </Head>
      <body>
        <ChakraProvider>
          <ProgressBar />
          <header>
            <Navbar />
          </header>
          <main>
            <div style={{ maxWidth: '1280px', margin: 'auto' }}>
              {children}
            </div>
          </main>
          <footer>
            <Footer />
          </footer>
        </ChakraProvider>
      </body>
    </html>
  );
}
