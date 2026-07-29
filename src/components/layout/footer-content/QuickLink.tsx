import { Divider } from 'antd'
import Link from 'next/link'
import React from 'react'

interface Props {

}

const quickLinks = [
  { label: 'Fancy Shapes', href: '/' },
  { label: 'Cubic Zirconia Weight Chart', href: '/' },
  { label: 'FAQ', href: '/' },
  { label: 'BIRTHSTONES', href: '/' },
  { label: 'Manufacturing Process', href: '/' },
  { label: 'Testimonial', href: '/' },
  { label: 'Guarantee', href: '/' },
  { label: 'Blog', href: '/' },
  { label: 'Contact Us', href: '/' },
  { label: 'Shape Chart', href: '/' },
]

const QuickLink: React.FC<Props> = (props) => {
  const { } = props

  return (
    <div>
      <h3>QUICK LINKS</h3>
      <section className='mt-5'>
        <div className='flex flex-col'>
          {quickLinks.map((link, index) => (
            <React.Fragment key={link.label}>
              <Link href={link.href} className='py-2'>{link.label}</Link>
              {index < quickLinks.length - 1 && <Divider className='my-0!' />}
            </React.Fragment>
          ))}
        </div>
      </section>
    </div>
  )
}

export default React.memo<Props>(QuickLink)
