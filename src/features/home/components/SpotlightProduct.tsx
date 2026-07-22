'use client'

import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import { TbChevronLeft, TbChevronRight } from 'react-icons/tb'
import 'swiper/css'
import 'swiper/css/navigation'
import { SpotlightProductCard } from '@/components/common'
import productList from '@/mock/product-list.json'

interface Props {

}

interface SpotlightProductItem {
  id: number
  name: string
  price: number
  min_price: number
  max_price: number
  has_price_range: boolean
  image_url: string
}

const products = productList as SpotlightProductItem[]

const SpotlightProduct: React.FC<Props> = (props) => {
  const { } = props

  const [prevEl, setPrevEl] = useState<HTMLButtonElement | null>(null)
  const [nextEl, setNextEl] = useState<HTMLButtonElement | null>(null)

  return (
    <div className='px-4 sm:px-8 lg:px-16'>
      <div className='text-center'>
        <h1>Our Spotlight Product</h1>
        <section className='relative mt-5'>
          <button
            type="button"
            ref={setPrevEl}
            aria-label="Previous"
            className="absolute left-0 top-1/2 z-10 -translate-x-4 -translate-y-1/2 text-gray-500 hover:text-gray-800"
          >
            <TbChevronLeft className="fs-24" />
          </button>

          <Swiper
            modules={[Navigation]}
            navigation={{ prevEl, nextEl }}
            spaceBetween={16}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
              1920: { slidesPerView: 5 },
            }}
          >
            {products.map((product) => (
              <SwiperSlide key={product.id}>
                <SpotlightProductCard
                  productId={product.id}
                  productName={product.name}
                  price={product.price}
                  minPrice={product.min_price}
                  maxPrice={product.max_price}
                  hasPriceRange={product.has_price_range}
                  image_url={product.image_url}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          <button
            type="button"
            ref={setNextEl}
            aria-label="Next"
            className="absolute right-0 top-1/2 z-10 -translate-y-1/2 translate-x-4 text-gray-500 hover:text-gray-800"
          >
            <TbChevronRight className="fs-24" />
          </button>
        </section>
      </div>
    </div>
  )
}

export default React.memo<Props>(SpotlightProduct)

