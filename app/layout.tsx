import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/molecules/Navbar';
import FixedMenu from '@/components/atoms/FixedMenu';
import FooterLinks from '@/components/molecules/Footer/FooterLinks';
import FooterCompany from '@/components/molecules/Footer/FooterCompany';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Dev Guru',
    template: '%s - Dev Guru',
  },
  description: 'The main page of Java ana Analytics online programming courses',
  twitter: {
    card: 'summary_large_image',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <Navbar />
        <FixedMenu />
        {children}
        <div className="container max-g:px-[20px]">
          <FooterLinks />
          <FooterCompany />
        </div>
      </body>
    </html>
  );
}
