import React from 'react'
import SubscribeNewsLetter from './footer-content/SubscribeNewsLetter'
import InfoSection from './footer-content/InfoSection'
import CopyrightSection from './footer-content/CopyrightSection'

interface Props {

}

const Footer: React.FC<Props> = (props) => {
  const { } = props

  return (
    <footer>
      <section>
        <SubscribeNewsLetter />
      </section>
      <section>
        <InfoSection />
      </section>
      <section>
        <CopyrightSection />
      </section>
    </footer>
  )
}

export default React.memo<Props>(Footer)
