import React from 'react'
import { ContentSection, TitleSection } from '../components'

interface Props {

}

const GuaranteeScreen: React.FC<Props> = (props) => {
  const { } = props

  return (
    <div>
      <TitleSection />
      <ContentSection />
    </div>
  )
}

export default React.memo<Props>(GuaranteeScreen)
