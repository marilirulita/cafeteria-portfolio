import "@/styles/globals.css";
import ScrollToTop from "@/components/ScrollToTop";

import { Lora } from 'next/font/google'

const lora = Lora({ subsets: ['latin'], weight: ['400', '700'] })

export default function App({ Component, pageProps }) {
  return <main className={lora.className}><Component {...pageProps} /><ScrollToTop /></main>
}
