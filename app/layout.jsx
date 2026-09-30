import './globals.css';

export const metadata = {
  title: 'Luca Brockman',
  description: 'De persoonlijke pagina van Luca Brockman.',
};

export const viewport = { themeColor: '#111412' };

export default function RootLayout({ children }) {
  return <html lang="nl"><body>{children}</body></html>;
}
