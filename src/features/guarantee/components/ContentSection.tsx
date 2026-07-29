import React from 'react'

interface Props {

}

const ContentSection: React.FC<Props> = (props) => {
  const { } = props

  return (
    <div className='p-10'>
      <section className='mx-auto max-w-4xl text-center'>
        <h2 className='mb-6'>Ilyas Gems Return Policy &amp; Guarantee Pledge</h2>
        <p className='mb-4 font-semibold'>Complete Risk Free Purchasing</p>
        <p className='mb-4 font-semibold'>The Best Return Policy &amp; Guarantee in the Business!</p>
        <p className='mb-4 font-semibold'>Ilyas Gems is ALL about 100% Satisfied Customers</p>
        <p className='mt-10 mb-4'>If for ANY reason you are unhappy with our products or service, you will receive a 100% refund (with exception of customized made for you gemstones/jewelry which are non refundable</p>
        <p className='mb-4'><strong>NO</strong> hidden restocking fees – <strong>NO</strong> shipping charges – <strong>NO</strong> credit card charges.</p>
        <p>Just a simple 100% refund!</p>
      </section>
    </div>
  )
}

export default React.memo<Props>(ContentSection)
