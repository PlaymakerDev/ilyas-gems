import React from 'react'
import type { Product } from '@/types/product-list'

interface Props {
  product?: Product
}

const TitleSection: React.FC<Props> = (props) => {
  const { product } = props

  return (
    <div className='bg-gray-100 text-center p-5'>
      <h2>{product?.name || '-'}</h2>
    </div>
  )
}

export default React.memo<Props>(TitleSection)
