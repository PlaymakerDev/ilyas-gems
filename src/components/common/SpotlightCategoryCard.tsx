'use client'

import { Image } from 'antd'
import { useRouter } from 'next/navigation'
import React, { useCallback } from 'react'

interface Props {
  title?: string
  description?: string
  image_url?: string
  ctaLabel?: string
  category: 'NATURAL' | 'LABS_CREATE' | ''
}

const SpotlightCategoryCard: React.FC<Props> = (props) => {
  const {
    title = 'Category Name',
    description = '',
    image_url = '/images/category/img1.jpg',
    ctaLabel = 'Discover the selection',
    category = ''
  } = props
  const router = useRouter()

  const handleClick = useCallback(() => {
    router.push(category ? `/product?category=${encodeURIComponent(category)}` : '/product')
  }, [router, category])

  return (
    <section className="flex h-full flex-col">
      <figure className="figure-large shrink-0 overflow-hidden">
        <Image
          src={image_url}
          alt={title}
          preview={false}
          width="100%"
          height="100%"
          className="w-full h-full object-cover object-center"
          classNames={{ root: 'block w-full h-full' }}
        />
      </figure>
      <div className="flex flex-1 flex-col p-5">
        <section>
          <h3>{title}</h3>
          <p>{description}</p>
        </section>
        <section className="mt-auto pt-5">
          <p
            className="relative inline-block cursor-pointer pb-2 font-semibold tracking-wide after:absolute after:bottom-0 after:left-1/2 after:h-px after:w-8 after:-translate-x-1/2 after:bg-gray-400 after:transition-all after:duration-300 after:content-[''] hover:after:w-full hover:after:bg-gray-800"
            onClick={handleClick}
          >
            {ctaLabel}
          </p>
        </section>
      </div>
    </section>
  )
}

export default React.memo<Props>(SpotlightCategoryCard)
