import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import { Inter, Poppins } from 'next/font/google'
import { useState } from 'react'
import jwtDecode from "jwt-decode";

export default function App({ Component, pageProps }: AppProps) {
let user:any
  if (typeof localStorage !== 'undefined') {

  if(localStorage.token){ user= jwtDecode(localStorage.token);
console.log(user)}
}

  const [isMenu, setIsMenu] =  useState(false)
  return(
    
    <Component user={user}  isMenu={isMenu} setIsMenu={setIsMenu} {...pageProps} />
    
    )
}
