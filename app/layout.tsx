import type { Metadata } from 'next';
import { ReactNode } from 'react';
import { Work_Sans, Raleway } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/sonner';

const workSans = Work_Sans({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-workSans',
});

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-raleway',
});

export const metadata: Metadata = {
  title: 'Next.js & Better-Auth',
  description: 'A simple Next.js app with Better-Auth authentication',
  icons: {
    icon: '/assets/images/logo-light.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${workSans.variable} ${raleway.variable} dark antialiased`}
      >
        {children}
        <Toaster
          position='top-left'
          richColors
        />
      </body>
    </html>
  );
}
