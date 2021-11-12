import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { HomePage } from '../components/layouts'
import Header from '../components/Smart/Header'
import SideComponent from '../components/Smart/SideComponent'
import SideBarContext from "../components/context/sidebarContext"
import React from 'react'
import { useState } from 'react'

function MyApp({ Component, pageProps }: AppProps) {
  const [sidebar, setSidebar] = useState(false)
  return (
    <SideBarContext.Provider value={{ sidebar, setSidebar }}>
    <HomePage className = {sidebar ? 'sidebar' : ''}>
      <SideComponent />
      <Header />
      <Component {...pageProps} base="/index" />
    </HomePage>
    </SideBarContext.Provider>
  )
  
}

export default MyApp
