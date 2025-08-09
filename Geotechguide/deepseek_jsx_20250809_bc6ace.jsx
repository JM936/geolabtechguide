// src/app/layout.js
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CookieModal from '@/components/CookieModal';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'LabtechGuide | Procedimentos Técnicos para Laboratório de Construção',
  description: 'Guia completo de procedimentos técnicos para ensaios de solo, concreto, asfalto, agregados e cimento',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} bg-dark-900 text-gray-200 min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">
          {children}
        </main>
        <Footer />
        <CookieModal />
      </body>
    </html>
  );
}