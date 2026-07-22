import React from 'react'
import type { CategoryProduct } from '@/types/product-category'

interface Props {
  product: CategoryProduct
}

const ProductCard: React.FC<Props> = (props) => {
  const { product } = props

  return (
    <div className="flex flex-col items-center gap-2 text-center">
      <div className="w-full aspect-square bg-gray-100 overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={product.image_url} alt={product.name} className="w-full h-full object-cover" />
      </div>
      <p className="fs-12 text-blue-600">{product.name}</p>
    </div>
  )
}

export default React.memo<Props>(ProductCard)
