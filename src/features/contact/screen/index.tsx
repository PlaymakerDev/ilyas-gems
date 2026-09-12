import React from 'react'
import { ContentSection, TitleSection } from '../components'

interface Props {

}

const ContactScreen: React.FC<Props> = (props) => {
  const { } = props

  return (
    <div>
      <TitleSection />
      <ContentSection />
    </div>
  )
}

export default React.memo<Props>(ContactScreen)
