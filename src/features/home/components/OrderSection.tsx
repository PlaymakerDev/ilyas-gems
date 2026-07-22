import { Image } from 'antd'
import React from 'react'

interface Props {

}

const OrderSection: React.FC<Props> = (props) => {
  const { } = props

  return (
    <div className='flex h-screen flex-col lg:flex-row'>
      <section className='order-2 flex h-1/2 flex-col items-center justify-center text-center lg:order-1 lg:h-full lg:w-1/2 lg:items-start lg:justify-center lg:text-left'>
        <div className='px-6 sm:px-10 lg:px-20'>
          <h1 className='mb-5'>Where Your Vision Becomes Brilliance</h1>
          <p className='mb-5 max-w-md'>Every gemstone begins as a dream. At Gems n Gems, we take your inspiration and transform it into a timeless piece of jewellery. With careful attention to detail and a deep understanding of what makes each creation unique.</p>
          <p
            className="relative inline-block cursor-pointer pb-2 font-semibold tracking-wide after:absolute after:bottom-0 after:left-1/2 after:h-px after:w-8 after:-translate-x-1/2 after:bg-gray-400 after:transition-all after:duration-300 after:content-[''] hover:after:w-full hover:after:bg-gray-800"
          >
            Order now
          </p>
        </div>
      </section>
      <section className='order-1 h-1/2 lg:order-2 lg:h-full lg:w-1/2'>
        <figure className='h-full w-full overflow-hidden'>
          <Image
            src={'/images/product/img1.jpg'}
            alt={'img'}
            preview={false}
            width="100%"
            height="100%"
            className="w-full h-full object-cover object-center"
            classNames={{ root: 'block w-full h-full' }}
          />
        </figure>
      </section>
    </div>
  )
}

export default React.memo<Props>(OrderSection)
