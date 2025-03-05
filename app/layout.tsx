// components/Layout.tsx
import { ReactNode } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './globals.css'

interface LayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <title>Ishami Green Rock Ltd - Transforming Agriculture in Rwanda</title>
        <meta name="description" content="We provide sustainable agricultural solutions, training, and market linkages for Rwandan farmers." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}