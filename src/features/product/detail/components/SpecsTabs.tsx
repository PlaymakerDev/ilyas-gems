'use client'

import React, { useMemo } from 'react'
import { Tabs } from 'antd'
import type { Product } from '@/types/product-list'

interface Props {
  product?: Product
}

const SpecsTabs: React.FC<Props> = (props) => {
  const { product } = props

  const items = useMemo(() => {
    if (!product) return []

    const tabs = []

    if (product.description || product.short_description) {
      tabs.push({
        key: 'description',
        label: 'Description',
        children: (
          <div className="max-w-3xl">
            <p className="text-gray-600">{product.description || product.short_description}</p>
            {!!product.tags?.length && (
              <div className="mt-4 flex flex-wrap gap-2">
                {product.tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-gray-100 px-3 py-1 fs-11 text-gray-600">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        ),
      })
    }

    if (product.specifications?.length) {
      tabs.push({
        key: 'specifications',
        label: 'Specifications',
        children: (
          <div className="max-w-2xl divide-y divide-gray-200 border-y border-gray-200">
            {product.specifications.map((spec) => (
              <div key={spec.label} className="flex justify-between gap-4 py-3">
                <span className="fs-12 text-gray-500">{spec.label}</span>
                <span className="fs-12 font-medium text-gray-900">{spec.value}</span>
              </div>
            ))}
          </div>
        ),
      })
    }

    return tabs
  }, [product])

  if (!items.length) return null

  return <Tabs items={items} />
}

export default React.memo<Props>(SpecsTabs)
