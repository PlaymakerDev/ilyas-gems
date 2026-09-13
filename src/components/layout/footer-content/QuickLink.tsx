'use client'

import menu from '@/configs/menu'
import { isMenuItemActive } from '@/configs/menu/utils'
import { Divider } from 'antd'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

interface Props {

}

const QuickLink: React.FC<Props> = (props) => {
  const { } = props
  const pathname = usePathname()

  return (
    <div>
      <h3>QUICK LINKS</h3>
      <section className='mt-5'>
        <div className='flex flex-col'>
          {menu['OVERALL'].map((link, index) => {
            const active = isMenuItemActive(pathname, link)
            return (
              <React.Fragment key={link.label}>
                <Link
                  href={link.path}
                  className={`w-fit py-2 transition-colors duration-200 ${active ? 'font-medium text-gray-900' : 'text-gray-600 hover:text-gray-900'}`}
                >
                  {link.label}
                </Link>
                {index < menu['OVERALL'].length - 1 && <Divider className='my-0!' />}
              </React.Fragment>
            )
          })}
        </div>
      </section>
    </div>
  )
}

export default React.memo<Props>(QuickLink)
