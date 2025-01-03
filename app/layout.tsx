import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
// import { Toaster } from 'react-hot-toast';
import { Toaster } from 'sonner';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Project Inquiry Form',
  description: 'Submit your project details and we\'ll get back to you shortly.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}