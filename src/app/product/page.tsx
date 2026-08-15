import React from 'react'
import ProductScreen from '@/features/product/overall/screen'

interface Props {

}

const ProductPage: React.FC<Props> = (props) => {
  const { } = props

  return <ProductScreen />
}

export default React.memo<Props>(ProductPage)
