import React from 'react'
import { Navbar, Footer } from '../layout'

interface Props {
  children?: React.ReactNode
}

const MainLayout: React.FC<Props> = (props) => {
  const { children } = props

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        {children}
      </main>
      <Footer />
    </>
  )
}

export default React.memo<Props>(MainLayout)
