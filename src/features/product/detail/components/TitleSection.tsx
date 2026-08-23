'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import { RightOutlined } from '@ant-design/icons'
import type { Product } from '@/types/product-list'

interface Props {
  product?: Product
}

const TitleSection: React.FC<Props> = (props) => {
  const { product } = props
  const router = useRouter()

  return (
    <div className="border-b border-gray-200 bg-white">
      <nav className="mx-auto flex max-w-6xl items-center gap-2 px-5 py-3 fs-12 text-gray-500">
        <span
          className="cursor-pointer transition-colors hover:text-gray-900"
          onClick={() => router.push('/')}
        >
          Home
        </span>
        <RightOutlined className="text-[9px]" />
        <span
          className="cursor-pointer transition-colors hover:text-gray-900"
          onClick={() => router.push('/product')}
        >
          Products
        </span>
        <RightOutlined className="text-[9px]" />
        <span className="truncate font-medium text-gray-900">{product?.name || 'Product'}</span>
      </nav>
    </div>
  )
}

export default React.memo<Props>(TitleSection)
