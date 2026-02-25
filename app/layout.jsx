import { Manrope, Space_Grotesk } from 'next/font/google';
import './globals.css';

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-body'
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display'
});

export const metadata = {
  title: 'H&T Services | Where Home Becomes the Experience',
  description:
    'H&T Services transforms homes into immersive entertainment and event spaces with premium theater, gaming, and smart home integrations.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${manrope.variable} ${spaceGrotesk.variable} bg-canvas text-ink antialiased`}>
        {children}
      </body>
    </html>
  );
}