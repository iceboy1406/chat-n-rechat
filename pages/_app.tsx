import type { AppProps } from "next/app"
import "styles/tailwind.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      duration: 600
    })
  }, [])
  return <Component {...pageProps} />
}
