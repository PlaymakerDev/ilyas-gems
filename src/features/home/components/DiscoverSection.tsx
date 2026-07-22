import { Image } from 'antd'
import React from 'react'

interface Props {

}

const DiscoverSection: React.FC<Props> = (props) => {
  const { } = props

  return (
    <div className='flex h-screen flex-col lg:flex-row'>
      <section className='h-1/2 lg:h-full lg:w-1/2'>
        <figure className='h-full w-full overflow-hidden'>
          <Image
            src={'/images/banner/img1.jpg'}
            alt={'img'}
            preview={false}
            width="100%"
            height="100%"
            className="w-full h-full object-cover object-center"
            classNames={{ root: 'block w-full h-full' }}
          />
        </figure>
      </section>
      <section className='flex h-1/2 flex-col items-center justify-center text-center lg:h-full lg:w-1/2'>
        <div className='px-6 sm:px-10 lg:px-20'>
          <h1 className='mb-5'>Rooted in Passion, Refined by Experience</h1>
          <p className='mb-5'>
            {`Since 2012, every piece we've created has carried the same values: passion, precision, and a love for beautiful things. With a decade of experience and a global clientele, we continue to shape each gemstone with care—because what we do it&apos;s who we are.`}
          </p>
          <p
            className="relative inline-block cursor-pointer pb-2 font-semibold tracking-wide after:absolute after:bottom-0 after:left-1/2 after:h-px after:w-8 after:-translate-x-1/2 after:bg-gray-400 after:transition-all after:duration-300 after:content-[''] hover:after:w-full hover:after:bg-gray-800"
          >
            Discover the selection
          </p>
        </div>
      </section>
    </div>
  )
}

export default React.memo<Props>(DiscoverSection)
