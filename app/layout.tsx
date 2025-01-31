// app/layout.tsx
import React from 'react';
import './globals.css'; // Tailwind + global styles

export default function CoreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <header className="bg-gray-800 text-white p-4 text-center">
          Core Header
        </header>
        <main className="flex-1 p-6">{children}</main>
        <footer className="bg-gray-900 text-white p-4 text-center">
          Core Footer
        </footer>
      </body>
    </html>
  );
}