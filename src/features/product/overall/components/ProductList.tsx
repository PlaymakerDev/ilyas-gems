"use client"
import { Col, Image, Row } from 'antd'
import React, { useMemo } from 'react'
import productData from '@/mock/product-list.json'
import { useRouter } from 'next/navigation'
import type { Product } from '@/types/product-list'

interface Props {

}

const product = productData as Product[]

const ProductList: React.FC<Props> = (props) => {
  const { } = props
  const router = useRouter()

  const renderProductList = useMemo(() => {
    return product.map((item, index) => {
      return (
        <Col key={index} xs={24} sm={24} md={24} lg={12} xl={12} xxl={6} xxxl={6}>
          <div className='flex h-full w-full flex-col border border-gray-300 hover:shadow-lg transition-shadow duration-300 ease-in-out hover:cursor-pointer'>
            <figure className='figure-large shrink-0 overflow-hidden'>
              <Image
                src={item.image_url}
                alt={item.name}
                preview={false}
                width={"100%"}
                height={"100%"}
                className="w-full h-full object-cover object-center"
                classNames={{ root: 'block w-full h-full' }}
              />
            </figure>
            <div className='flex flex-1 flex-col p-5'>
              <section>
                <h3 className='line-clamp-2 min-h-[2lh]'>{item.name}</h3>
                <p>
                  {item.has_price_range ? `$${item.min_price} - $${item.max_price}` : `$${item.price}`}
                </p>
              </section>
              <section className='mt-auto flex justify-center pt-5'>
                <p
                  className="relative inline-block cursor-pointer pb-2 font-semibold tracking-wide after:absolute after:bottom-0 after:left-1/2 after:h-px after:w-8 after:-translate-x-1/2 after:bg-gray-400 after:transition-all after:duration-300 after:content-[''] hover:after:w-full hover:after:bg-gray-800"
                  onClick={() => router.push(`/product/detail/${item.id}`)}
                >
                  SEE DETAILS
                </p>
              </section>
            </div>
          </div>
        </Col>
      )
    })
  }, [router])

  return (
    <Row gutter={[16, 16]}>
      {renderProductList}
    </Row>
  )
}

export default React.memo<Props>(ProductList)
