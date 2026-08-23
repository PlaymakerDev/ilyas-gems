'use client'

import React, { useMemo, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import { TbChevronLeft, TbChevronRight } from 'react-icons/tb'
import 'swiper/css'
import 'swiper/css/navigation'
import { SpotlightProductCard } from '@/components/common'
import productData from '@/mock/product-list.json'
import type { Product } from '@/types/product-list'

interface Props {
  product?: Product
}

const allProducts = productData as Product[]

const RelatedProducts: React.FC<Props> = (props) => {
  const { product } = props
  const [prevEl, setPrevEl] = useState<HTMLButtonElement | null>(null)
  const [nextEl, setNextEl] = useState<HTMLButtonElement | null>(null)

  const related = useMemo(() => {
    if (!product) return []

    const sameCategory = allProducts.filter(
      (item) => item.id !== product.id && item.sort_type.gems_category === product.sort_type.gems_category
    )
    const rest = allProducts.filter((item) => item.id !== product.id)

    return (sameCategory.length ? sameCategory : rest).slice(0, 8)
  }, [product])

  if (!related.length) return null

  return (
    <div>
      <h3 className="mb-5">You May Also Like</h3>
      <div className="relative">
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
          slidesPerView={2}
          breakpoints={{
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
        >
          {related.map((item) => (
            <SwiperSlide key={item.id}>
              <SpotlightProductCard
                productId={item.id}
                productName={item.name}
                price={item.price}
                minPrice={item.min_price}
                maxPrice={item.max_price}
                hasPriceRange={item.has_price_range}
                image_url={item.image_url}
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
      </div>
    </div>
  )
}

export default React.memo<Props>(RelatedProducts)
