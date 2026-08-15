import React from 'react'
import { TitleSection, ContentSection } from '../components'

interface Props {

}

const ProductScreen: React.FC<Props> = (props) => {
  const { } = props

  return (
    <div>
      <TitleSection />
      <ContentSection />
    </div>
  )
}

export default React.memo<Props>(ProductScreen)
