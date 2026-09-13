'use client'

import React, { useCallback, useMemo, useState } from 'react'
import menu from '@/configs/menu'
import { isMenuItemActive } from '@/configs/menu/utils'
import { TbBaselineDensityMedium } from "react-icons/tb";
import { useRouter, usePathname } from 'next/navigation'
import { Drawer, Image } from 'antd';

interface Props {

}

// const productCategories = productCategoryData as ProductCategoryEntry[]

const getMenuItemClassName = (active: boolean) =>
  `relative inline-block cursor-pointer pb-1 fs-12 transition-colors duration-200 after:absolute after:bottom-0 after:left-1/2 after:h-px after:-translate-x-1/2 after:bg-gray-900 after:transition-all after:duration-300 after:content-[''] ${active
    ? 'text-gray-900 after:w-full'
    : 'text-gray-600 hover:text-gray-900 after:w-0 hover:after:w-full'
  }`

const Navbar: React.FC<Props> = (props) => {
  const { } = props
  const router = useRouter()
  const pathname = usePathname()
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  const handleNavigate = useCallback((path: string) => {
    router.push(path)
    setIsDrawerOpen(false)
  }, [router])

  const renderNavMenu = useMemo(() => (
    <ul className='nav-side-menu'>
      {menu['OVERALL'].map((item) => {
        const active = isMenuItemActive(pathname, item)
        return (
          <li key={item.key}>
            <p
              className={getMenuItemClassName(active)}
              onClick={() => handleNavigate(item.path)}
            >
              {item.title}
            </p>
          </li>
        )
      })}
    </ul>
  ), [pathname, handleNavigate])

  const renderDrawerMenu = useMemo(() => (
    <ul className='flex flex-col gap-4'>
      {menu['OVERALL'].map((item) => {
        const active = isMenuItemActive(pathname, item)
        return (
          <li key={item.key}>
            <p
              className={getMenuItemClassName(active)}
              onClick={() => handleNavigate(item.path)}
            >
              {item.title}
            </p>
          </li>
        )
      })}
    </ul>
  ), [pathname, handleNavigate])

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
            <TbBaselineDensityMedium
              className='fs-22 mobile-side-menu cursor-pointer'
              onClick={() => setIsDrawerOpen(true)}
            />
          </div>
        </div>
      </section>

      <Drawer
        title="Menu"
        placement="right"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        {renderDrawerMenu}
      </Drawer>
    </nav>
  )
}

export default React.memo<Props>(Navbar)

