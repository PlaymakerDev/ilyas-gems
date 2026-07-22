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
}

const categories = spotlightCategoryList as SpotlightCategoryItem[]

const SpotlightCategory: React.FC<Props> = (props) => {
  const { } = props

  return (
    <div className='px-4 sm:px-8 lg:px-16'>
      <div className='text-center'>
        <h1>Our Spotlight Category</h1>
        <section className='relative mt-5'>
          <div className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {categories.map((category) => (
              <SpotlightCategoryCard
                key={category.id}
                title={category.title}
                description={category.description}
                image_url={category.image_url}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

export default React.memo<Props>(SpotlightCategory)

