'use client'

import React, { useMemo } from 'react'
import menu from '@/configs/menu'
import { TbBaselineDensityMedium } from "react-icons/tb";
import { useRouter } from 'next/navigation'
import { Image } from 'antd';

interface Props {

}

// const productCategories = productCategoryData as ProductCategoryEntry[]

const Navbar: React.FC<Props> = (props) => {
  const { } = props
  const router = useRouter()

  const renderNavMenu = useMemo(() => (
    <ul className='nav-side-menu'>
      {menu['OVERALL'].map((item) => (
        <li key={item.key}>
          <p
            className='fs-12 cursor-pointer hover:text-gray-800'
            onClick={() => router.push(item.path)}
          >
            {item.title}
          </p>
        </li>
      ))}
    </ul>
  ), [router])

  return (
    <nav className="relative">
      {/* <AnnouncementBar message="We Offer Unconditional Guarantees On Everything We Sell — Better Than Money-Back Guarantee!" /> */}

      <section>
        <div className="relative flex justify-between items-center p-5">
          <Image
            src="/images/icon/logo.png"
            alt="Ilyas Gems Logo"
            width={100}
            height={50}
            className="cursor-pointer"
            onClick={() => router.push('/')}
            preview={false}
          />
          {/* <h1
            className="cursor-pointer"
            onClick={() => router.push('/')}
          >
            Ilyas Gems
          </h1> */}
          <div className="flex items-center gap-5">
            {renderNavMenu}
            <TbBaselineDensityMedium className='fs-22 mobile-side-menu' />
          </div>
        </div>
      </section>
    </nav>
  )
}

export default React.memo<Props>(Navbar)

