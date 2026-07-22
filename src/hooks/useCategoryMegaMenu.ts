'use client'

import { useCallback, useMemo, useState } from 'react'
import type { ProductCategoryEntry } from '@/types/product-category'

export const useCategoryMegaMenu = (categories: ProductCategoryEntry[]) => {
  const [activeCategoryId, setActiveCategoryId] = useState<number | null>(null)
  const [activeSubCategoryId, setActiveSubCategoryId] = useState<number | null>(null)

  const activeCategory = useMemo(
    () => categories.find(({ category }) => category.id === activeCategoryId)?.category,
    [categories, activeCategoryId]
  )

  const activeSubCategory = useMemo(() => {
    if (!activeCategory) return undefined
    return (
      activeCategory.sub_category.find((sub) => sub.id === activeSubCategoryId) ??
      activeCategory.sub_category[0]
    )
  }, [activeCategory, activeSubCategoryId])

  const selectCategory = useCallback((categoryId: number, firstSubCategoryId?: number) => {
    setActiveCategoryId(categoryId)
    setActiveSubCategoryId(firstSubCategoryId ?? null)
  }, [])

  const selectSubCategory = useCallback((subCategoryId: number) => {
    setActiveSubCategoryId(subCategoryId)
  }, [])

  const reset = useCallback(() => {
    setActiveCategoryId(null)
    setActiveSubCategoryId(null)
  }, [])

  return {
    activeCategoryId,
    activeCategory,
    activeSubCategory,
    selectCategory,
    selectSubCategory,
    reset,
  }
}
