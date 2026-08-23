import React from 'react'
import { Empty } from 'antd'
import type { Product } from '@/types/product-list'
import Gallery from './Gallery'
import BuyBox from './BuyBox'
import SpecsTabs from './SpecsTabs'
import RelatedProducts from './RelatedProducts'

interface Props {
  product?: Product
}

const CATEGORY_LABELS: Record<string, string> = {
  LABS_CREATE: 'Lab Created',
  NATURAL: 'Natural',
}

const ContentSection: React.FC<Props> = (props) => {
  const { product } = props

  if (!product) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center p-5">
        <Empty description="Product not found" />
      </div>
    )
  }

  const categoryLabel = CATEGORY_LABELS[product.sort_type.gems_category] ?? product.sort_type.gems_category

  return (
    <div className="mx-auto max-w-6xl px-5 py-8 sm:py-10">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-start lg:gap-12">
        <Gallery product={product} />
        <BuyBox product={product} categoryLabel={categoryLabel} />
      </div>

      <div className="mt-12 sm:mt-16">
        <SpecsTabs product={product} />
      </div>

      <div className="mt-12 sm:mt-16">
        <RelatedProducts product={product} />
      </div>
    </div>
  )
}

export default React.memo<Props>(ContentSection)
