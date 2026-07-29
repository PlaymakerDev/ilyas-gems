import React from 'react'
import {
  TbGift,
  TbDiamond,
  TbRuler2,
  TbScale,
  TbWeight,
  TbSparkles,
  TbCalendarStar,
  TbShieldCheck,
} from 'react-icons/tb'

interface Props {

}

interface BrandInfoItem {
  icon: React.ElementType
  title: string
  description: string
}

const brandInfoList: BrandInfoItem[] = [
  { icon: TbGift, title: 'Sample Kit', description: 'At Gems N Gems, we offer sample kits…' },
  { icon: TbDiamond, title: 'Shape Chart', description: 'The shape of a diamond refers to its physical…' },
  { icon: TbRuler2, title: 'CZ Size Chart', description: 'Use this chart to find the different CZ sizes…' },
  { icon: TbScale, title: 'Natural Weight Chart', description: 'A quick reference guide showing weights…' },
  { icon: TbWeight, title: 'CZ Weight Chart', description: 'Determine the approximate weight…' },
  { icon: TbSparkles, title: 'Fancy shapes', description: 'We can cut all the shapes listed in…' },
  { icon: TbCalendarStar, title: 'Birthstones', description: 'Symbolizing each month’s unique meaning.' },
  { icon: TbShieldCheck, title: 'Guarantee', description: 'Authentic, certified, and quality assured…' },
]

const BrandInfoSection: React.FC<Props> = (props) => {
  const { } = props

  return (
    <div>
      <div className='bg-gray-50 px-4 py-10 text-center sm:px-8 sm:py-14 lg:px-16'>
        <h3 className='mx-auto max-w-3xl uppercase tracking-wide'>ALL KINDS OF LOOSE GEMSTONES AVAILABLE AT FACTORY PRICES</h3>
        <p className='mx-auto mt-4 max-w-3xl text-gray-600'>Loose Cubic Zirconia stones, Synthetic gemstones (Lab Created gemstones) and Natural gemstones (Semi-precious gemstones and Precious gemstones) available here</p>
      </div>

      <div className='px-4 py-10 sm:px-8 sm:py-14 lg:px-16'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'>
          {brandInfoList.map((item) => (
            <div
              key={item.title}
              className='brand-info-item flex flex-col items-center px-4 py-6 text-center sm:px-6 sm:py-8'
            >
              <item.icon className='fs-24 mb-3' />
              <h4 className='mb-2'>{item.title}</h4>
              <p className='mb-3 text-gray-600'>{item.description}</p>
              <p
                className="relative mt-auto inline-block cursor-pointer pb-2 font-semibold tracking-wide after:absolute after:bottom-0 after:left-1/2 after:h-px after:w-8 after:-translate-x-1/2 after:bg-gray-400 after:transition-all after:duration-300 after:content-[''] hover:after:w-full hover:after:bg-gray-800"
              >
                Learn More
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default React.memo<Props>(BrandInfoSection)
