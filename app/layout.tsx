// app/layout.tsx
import './globals.css';
import { ReduxProvider } from '@/src'; // from your local src

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}
