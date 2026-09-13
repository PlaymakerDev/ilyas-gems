import menu from '@/configs/menu'
import { Divider } from 'antd'
import Link from 'next/link'
import React from 'react'

interface Props {

}

const QuickLink: React.FC<Props> = (props) => {
  const { } = props

  return (
    <div>
      <h3>QUICK LINKS</h3>
      <section className='mt-5'>
        <div className='flex flex-col'>
          {menu['OVERALL'].map((link, index) => (
            <React.Fragment key={link.label}>
              <Link href={link.path} className='py-2'>{link.label}</Link>
              {index < menu['OVERALL'].length - 1 && <Divider className='my-0!' />}
            </React.Fragment>
          ))}
        </div>
      </section>
    </div>
  )
}

export default React.memo<Props>(QuickLink)
