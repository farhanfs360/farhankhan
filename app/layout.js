import { Analytics } from '@vercel/analytics/next';
import './globals.css';

export const metadata = {
  title: 'Farhan Khan | Senior Level Web Developer',
  description:
    'Portfolio of Farhan Khan — Senior Level Web Developer specializing in WordPress, Shopify, and modern web technologies. 15+ years of experience building fast, scalable, user-friendly websites.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&family=Kalam:wght@700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
