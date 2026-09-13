"use client"
import React, { useEffect, useState } from 'react'
import { Navbar, Footer } from '../layout'

interface Props {
  children?: React.ReactNode
}

const MainLayout: React.FC<Props> = (props) => {
  const { children } = props
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0)
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])


  return (
    <>
      <header className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${isScrolled ? 'shadow-md' : ''}`}>
        <Navbar />
      </header>
      <main className="overflow-x-hidden">
        {children}
      </main>
      <Footer />
    </>
  )
}

export default React.memo<Props>(MainLayout)
