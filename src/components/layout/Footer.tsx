import React from 'react'
import InfoSection from './footer-content/InfoSection'
import CopyrightSection from './footer-content/CopyrightSection'

interface Props {

}

const Footer: React.FC<Props> = (props) => {
  const { } = props

  return (
    <footer>
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
