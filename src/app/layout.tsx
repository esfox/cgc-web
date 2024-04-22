import type { Metadata } from 'next';
import { PrimeReactProvider } from 'primereact/api';
import './globals.css';
import './theme.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

export const metadata: Metadata = {
  title: "Christ's Glory Church",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <PrimeReactProvider>
        <body>{children}</body>
      </PrimeReactProvider>
    </html>
  );
}
