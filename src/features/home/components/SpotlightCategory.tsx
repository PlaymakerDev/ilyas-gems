import React from 'react'
import { SpotlightCategoryCard } from '@/components/common'
import spotlightCategoryList from '@/mock/spotlight-category.json'

interface Props {

}

interface SpotlightCategoryItem {
  id: number
  title: string
  description: string
  image_url: string
  category: 'NATURAL' | 'LABS_CREATE' | ''

}

const categories = spotlightCategoryList as SpotlightCategoryItem[]

const SpotlightCategory: React.FC<Props> = (props) => {
  const { } = props

  return (
    <div className='px-4 sm:px-8 lg:px-16'>
      <div className='text-center'>
        <h1>Our Spotlight Category</h1>
        <section className='relative mt-5'>
          <div className='flex flex-wrap justify-center gap-5'>
            {categories.map((category) => (
              <div
                key={category.id}
                className='w-full sm:w-[calc(50%-0.625rem)] lg:w-[calc(33.3333%-0.8333rem)] xl:w-[calc(25%-0.9375rem)]'
              >
                <SpotlightCategoryCard
                  title={category.title}
                  description={category.description}
                  image_url={category.image_url}
                  category={category.category}
                />
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

export default React.memo<Props>(SpotlightCategory)

