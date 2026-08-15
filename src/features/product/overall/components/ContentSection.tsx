import React from 'react'
import { FormSearchProduct, ProductList } from '.'

interface Props {

}

const ContentSection: React.FC<Props> = (props) => {
  const { } = props

  return (
    <div className='p-5'>
      <section>
        <FormSearchProduct />
      </section>
      <section className='mt-4'>
        <ProductList />
      </section>
    </div>
  )
}

export default React.memo<Props>(ContentSection)
