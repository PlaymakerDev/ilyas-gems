import React from 'react'
import {
  ShowcaseSlider,
  SpotlightProduct,
  SpotlightCategory,
  OrderSection,
  DiscoverSection,
  BrandInfoSection,
  GuaranteeSection
} from '../components'

interface Props {

}

const HomeScreen: React.FC<Props> = (props) => {
  const { } = props

  return (
    <div>
      <section>
        <ShowcaseSlider />
      </section>
      <section className='mt-10'>
        <SpotlightProduct />
      </section>
      <section className='mt-10'>
        <SpotlightCategory />
      </section>
      <section className='mt-10'>
        <OrderSection />
      </section>
      <section>
        <DiscoverSection />
      </section>
      <section className='mt-10'>
        <BrandInfoSection />
      </section>
      <section className='mt-10'>
        <GuaranteeSection />
      </section>
    </div>
  )
}

export default React.memo<Props>(HomeScreen)
