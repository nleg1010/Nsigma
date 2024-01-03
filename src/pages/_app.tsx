import Footer from '@/components/footer'
import Header from '@/components/header'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'

export default function App({ Component, pageProps }: AppProps) {
  const {pathname} =  useRouter()
  return <>
    {
      !pathname.includes("/studio") && <Header />
    }
    <Component {...pageProps} />
    {
      !pathname.includes("/studio") && <Footer />
    }
  </>
}
