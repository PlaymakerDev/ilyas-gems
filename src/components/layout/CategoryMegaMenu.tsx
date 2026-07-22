'use client'

import React from 'react'
import type { ProductCategoryEntry } from '@/types/product-category'
import { useCategoryMegaMenu } from '@/hooks/useCategoryMegaMenu'
import { ProductCard } from '@/components/common'

interface Props {
  categories: ProductCategoryEntry[]
}

const CategoryMegaMenu: React.FC<Props> = (props) => {
  const { categories } = props

  const {
    activeCategoryId,
    activeCategory,
    activeSubCategory,
    selectCategory,
    selectSubCategory,
    reset,
  } = useCategoryMegaMenu(categories)

  return (
    <section
      className="relative border-t border-b border-gray-200 bg-gray-50"
      onMouseLeave={reset}
    >
      <ul className="flex justify-center gap-2">
        {categories.map(({ category }) => (
          <li
            key={category.id}
            onMouseEnter={() => selectCategory(category.id, category.sub_category[0]?.id)}
          >
            <button
              type="button"
              className={`fs-12 tracking-wide uppercase whitespace-nowrap px-3 py-4 hover:text-gray-600 ${activeCategoryId === category.id ? 'text-gray-900 font-semibold' : 'text-gray-500'
                }`}
            >
              {category.name}
            </button>
          </li>
        ))}
      </ul>

      {activeCategory && (
        <div className="absolute inset-x-0 top-full z-50 border-t border-gray-200 bg-white shadow-lg">
          <div className="grid grid-cols-[220px_1fr] gap-8 p-6">
            <ul className="flex flex-col border-r border-gray-200 pr-4">
              {activeCategory.sub_category.map((sub) => (
                <li key={sub.id}>
                  <button
                    type="button"
                    onMouseEnter={() => selectSubCategory(sub.id)}
                    className={`w-full text-left px-4 py-2 fs-14 hover:bg-gray-100 ${activeSubCategory?.id === sub.id ? 'text-blue-600 font-semibold' : 'text-gray-700'
                      }`}
                  >
                    {sub.name}
                  </button>
                </li>
              ))}
            </ul>

            <div>
              <ul className="grid grid-cols-4 gap-6">
                {activeSubCategory?.product.map((product) => (
                  <li key={product.id}>
                    <ProductCard product={product} />
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex justify-center">
                <button
                  type="button"
                  className="border border-gray-800 px-6 py-2 fs-14 font-semibold hover:bg-gray-800 hover:text-white transition-colors"
                >
                  View All
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default React.memo<Props>(CategoryMegaMenu)
