import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { SessionProvider } from "next-auth/react"
import { Inter, Poppins } from 'next/font/google'



export default function App({ Component, pageProps }: AppProps) {
  return(
    
    <Component {...pageProps} />
    
    )
}
