'use client'

import React from 'react'
import { Image } from 'antd'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'

interface Props {

}

interface ShowcaseSlide {
  id: number
  src: string
  alt: string
}

const slides: ShowcaseSlide[] = [
  { id: 1, src: '/images/banner/img1.jpg', alt: 'Showcase gem ring and earrings' },
  { id: 2, src: '/images/banner/img2.jpg', alt: 'Showcase gem collection' },
  { id: 3, src: '/images/banner/img3.jpg', alt: 'Showcase gem jewelry' },
]

const ShowcaseSlider: React.FC<Props> = (props) => {
  const { } = props

  return (
    <Swiper
      modules={[Autoplay]}
      autoplay={{ delay: 4000, disableOnInteraction: false }}
      loop
      slidesPerView={1}
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <div className="h-[70vh] max-h-168 min-h-104 w-full">
            <Image
              src={slide.src}
              alt={slide.alt}
              preview={false}
              width={"100%"}
              height={"100%"}
              className="w-full h-full object-cover"
              classNames={{ root: 'block w-full h-full' }}
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default React.memo<Props>(ShowcaseSlider)
