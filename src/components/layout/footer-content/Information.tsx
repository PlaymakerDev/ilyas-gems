import Link from 'next/link'
import React from 'react'
import { Divider } from 'antd'

interface Props {

}

const informations = [
  { label: 'Gemstones By Color', href: '/' },
  { label: 'Natural gemstones', href: '/' },
  { label: 'Cubic Zirconia Loose Stones', href: '/' },
  { label: 'Lab Created Loose gemstones', href: '/' },
  { label: 'Nano Sital gemstones', href: '/' },
  { label: 'Rough gemstones', href: '/' },
  { label: 'Lab Created Blue Sapphires', href: '/' },
  { label: 'Lab Created Emeralds', href: '/' },
  { label: 'Lab Created Rubies', href: '/' },
]

const Information: React.FC<Props> = (props) => {
  const { } = props

  return (
    <div>
      <h3>INFORMATION</h3>
      <section className='mt-5'>
        <div className='flex flex-col'>
          {informations.map((link, index) => (
            <React.Fragment key={link.label}>
              <Link href={link.href} className='py-2'>{link.label}</Link>
              {index < informations.length - 1 && <Divider className='my-0!' />}
            </React.Fragment>
          ))}
        </div>
      </section>
    </div>
  )
}

export default React.memo<Props>(Information)
