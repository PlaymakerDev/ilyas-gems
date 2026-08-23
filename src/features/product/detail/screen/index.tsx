import React from 'react'
import { TitleSection, ContentSection } from '../components'
import productData from '@/mock/product-list.json'
import type { Product } from '@/types/product-list'

const products = productData as Product[]

interface Props {
  id: string | string[]
}

const ProductDetailScreen: React.FC<Props> = (props) => {
  const { id } = props

  const product = products.find((item) => item.id === Number(id))

  return (
    <div>
      <TitleSection product={product} />
      <ContentSection product={product} />
    </div>
  )
}

export default React.memo<Props>(ProductDetailScreen)
