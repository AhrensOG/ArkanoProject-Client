import '../styles/globals.css';
import { Roboto } from '@next/font/google';
import { TheContextProvider } from '../context/store';


const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-roboto',
});

export default function App({ Component, pageProps }) {
  return (
    <TheContextProvider>
      <main className={`${roboto.variable} font-roboto h-full`}>
        <Component {...pageProps} />
      </main>
    </TheContextProvider>
  );
};
