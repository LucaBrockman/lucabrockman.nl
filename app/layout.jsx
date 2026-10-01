import './globals.css';
import { Geist } from 'next/font/google';

const geist = Geist({ subsets: ['latin'], display: 'swap' });

export const metadata = {
  title: 'Luca Brockman',
  description: 'De persoonlijke pagina van Luca Brockman.',
};

export const viewport = { themeColor: '#799f8c' };

export default function RootLayout({ children }) {
  return <html lang="nl"><body className={geist.className}>{children}</body></html>;
}
