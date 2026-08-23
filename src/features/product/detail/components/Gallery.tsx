import React from 'react'
import { Image } from 'antd'
import { HeartOutlined } from '@ant-design/icons'
import type { Product } from '@/types/product-list'

interface Props {
  product?: Product
}

const Gallery: React.FC<Props> = (props) => {
  const { product } = props

  return (
    <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-gray-50">
      <figure className="figure-extra-large">
        <Image
          src={product?.image_url}
          alt={product?.name || 'Product image'}
          width="100%"
          height="100%"
          className="h-full w-full object-cover object-center"
          classNames={{ root: 'block h-full w-full' }}
        />
      </figure>

      <button
        type="button"
        aria-label="Add to wishlist"
        className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-gray-600 shadow-sm backdrop-blur-sm transition-colors hover:text-red-500"
      >
        <HeartOutlined />
      </button>
    </div>
  )
}

export default React.memo<Props>(Gallery)
