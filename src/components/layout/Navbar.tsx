'use client'

import React, { useMemo } from 'react'
import productCategoryData from '@/mock/product-category.json'
import type { ProductCategoryEntry } from '@/types/product-category'
import menu from '@/configs/menu'
import { TbBaselineDensityMedium, TbSearch } from "react-icons/tb";
import { AnnouncementBar } from '@/components/common'
import CategoryMegaMenu from './CategoryMegaMenu'

interface Props {

}

const productCategories = productCategoryData as ProductCategoryEntry[]

const Navbar: React.FC<Props> = (props) => {
  const { } = props

  const renderNavMenu = useMemo(() => (
    <ul className='nav-side-menu'>
      {menu['OVERALL'].map((item) => (
        <li key={item.key}>
          <p className='fs-12 cursor-pointer hover:text-gray-800'>{item.title}</p>
        </li>
      ))}
    </ul>
  ), [])

  return (
    <nav className="relative">
      <AnnouncementBar message="We Offer Unconditional Guarantees On Everything We Sell — Better Than Money-Back Guarantee!" />

      <section>
        <div className="relative flex items-center p-5">
          <div className="flex items-center gap-4">
            {renderNavMenu}
            <TbBaselineDensityMedium className='fs-22 mobile-side-menu' />
          </div>
          <h1 className="absolute left-1/2 -translate-x-1/2">Ilyas Gems</h1>
          <TbSearch className='fs-22 ml-auto' />
        </div>
      </section>

      <CategoryMegaMenu categories={productCategories} />
    </nav>
  )
}

export default React.memo<Props>(Navbar)

