import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { HomePage } from '../components/layouts'
import React from 'react'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <HomePage>
      <Component {...pageProps} />
    </HomePage>
  )
  
}

export default MyApp
