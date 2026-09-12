"use client"
import React from 'react'
import { Image } from 'antd'
import { useRouter } from 'next/navigation'

interface Props {
  productId?: string | number
  productName?: string
  price?: number
  minPrice?: number
  maxPrice?: number
  hasPriceRange?: boolean
  image_url?: string
}

const SpotlightProductCard: React.FC<Props> = (props) => {
  const {
    productId = "1",
    productName = "Product Name",
    price = 0,
    minPrice = 0,
    maxPrice = 0,
    hasPriceRange = false,
    image_url = "/images/product/img6.jpg"
  } = props
  const router = useRouter()

  return (
    <div className='flex h-full w-full flex-col border border-gray-300 hover:shadow-lg transition-shadow duration-300 ease-in-out hover:cursor-pointer'>
      <figure className='figure-normal shrink-0 overflow-hidden'>
        <Image
          src={image_url}
          alt="Spotlight Product"
          preview={false}
          width={"100%"}
          height={"100%"}
          className="w-full h-full object-cover object-center"
          classNames={{ root: 'block w-full h-full' }}
        />
      </figure>
      <div className='flex flex-1 flex-col p-5'>
        <section>
          <h3 className='line-clamp-2 min-h-[2lh]'>{productName}</h3>
          <p>
            {hasPriceRange ? `$${minPrice} - $${maxPrice}` : `$${price}`}
          </p>
        </section>
        <section className='mt-auto flex justify-center pt-5'>
          <p
            className="relative inline-block cursor-pointer pb-2 font-semibold tracking-wide after:absolute after:bottom-0 after:left-1/2 after:h-px after:w-8 after:-translate-x-1/2 after:bg-gray-400 after:transition-all after:duration-300 after:content-[''] hover:after:w-full hover:after:bg-gray-800"
            onClick={() => router.push(`/product/detail/${productId}`)}
          >
            SEE DETAILS
          </p>
        </section>
      </div>
    </div>
  )
}

export default React.memo<Props>(SpotlightProductCard)
