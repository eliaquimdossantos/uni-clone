import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: 'Uniclube',
  description: 'Plataforma para clube de clientes Unimed',
  icons: {
    icon: '/favicon.svg'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
