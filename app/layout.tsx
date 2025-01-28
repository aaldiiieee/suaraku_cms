import './globals.css';

import { Analytics } from '@vercel/analytics/react';
import AppProvider from './providers/AppProvider';

export const metadata = {
  title: 'Next.js App Router + NextAuth + Tailwind CSS',
  description:
    'A user admin dashboard configured with Next.js, Postgres, NextAuth, Tailwind CSS, TypeScript, and Prettier.'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <AppProvider>
      <html lang="en">
        <body className="flex min-h-screen w-full flex-col">{children}</body>
        <Analytics />
      </html>
    </AppProvider>
  );
}
