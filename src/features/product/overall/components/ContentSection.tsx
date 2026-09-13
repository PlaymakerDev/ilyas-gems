'use client'

import React, { useState } from 'react'
import { FormSearchProduct, ProductList } from '.'
import type { ProductFilters } from './FormSearchProduct'

interface Props {

}

const DEFAULT_FILTERS: ProductFilters = {
  keyword: '',
  type: null,
  category: null,
  sort: 'ASC',
}

const ContentSection: React.FC<Props> = (props) => {
  const { } = props
  const [filters, setFilters] = useState<ProductFilters>(DEFAULT_FILTERS)

  return (
    <div className='p-5'>
      <section>
        <FormSearchProduct onFilterChange={setFilters} />
      </section>
      <section className='mt-4'>
        <ProductList filters={filters} />
      </section>
    </div>
  )
}

export default React.memo<Props>(ContentSection)
