"use client"
import { Col, Empty, Image, Pagination, Row } from 'antd'
import React, { useMemo, useState } from 'react'
import productData from '@/mock/product-list.json'
import { useRouter } from 'next/navigation'
import type { Product } from '@/types/product-list'
import type { ProductFilters } from './FormSearchProduct'

interface Props {
  filters: ProductFilters
}

const product = productData as Product[]

const DEFAULT_PAGE_SIZE = 12

const getDisplayPrice = (item: Product) => item.has_price_range ? item.min_price : item.price

const ProductList: React.FC<Props> = (props) => {
  const { filters } = props
  const router = useRouter()

  const [page, setPage] = useState(1)
  const [pageSize, setPageSize] = useState(DEFAULT_PAGE_SIZE)
  const [prevFilters, setPrevFilters] = useState(filters)

  if (filters !== prevFilters) {
    setPrevFilters(filters)
    setPage(1)
  }

  const filteredProducts = useMemo(() => {
    const keyword = filters.keyword.trim().toLowerCase()

    const filtered = product.filter((item) => {
      if (keyword && !item.name.toLowerCase().includes(keyword)) return false
      if (filters.type && item.sort_type.gems_type !== filters.type) return false
      if (filters.category && item.sort_type.gems_category !== filters.category) return false
      return true
    })

    return filtered.sort((a, b) => {
      return filters.sort === 'ASC'
        ? getDisplayPrice(a) - getDisplayPrice(b)
        : getDisplayPrice(b) - getDisplayPrice(a)
    })
  }, [filters])

  const pagedProducts = useMemo(() => {
    const start = (page - 1) * pageSize
    return filteredProducts.slice(start, start + pageSize)
  }, [filteredProducts, page, pageSize])

  const renderProductList = useMemo(() => {
    return pagedProducts.map((item) => {
      return (
        <Col key={item.id} xs={24} sm={24} md={24} lg={12} xl={12} xxl={6} xxxl={6}>
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
  }, [pagedProducts, router])

  if (filteredProducts.length === 0) {
    return <Empty description='No products found' className='py-16' />
  }

  return (
    <div>
      <Row gutter={[16, 16]}>
        {renderProductList}
      </Row>
      <div className='mt-8 flex justify-center'>
        <Pagination
          current={page}
          pageSize={pageSize}
          total={filteredProducts.length}
          showSizeChanger
          pageSizeOptions={[8, 12, 16, 24]}
          onChange={(nextPage, nextPageSize) => {
            setPage(nextPage)
            setPageSize(nextPageSize)
          }}
        />
      </div>
    </div>
  )
}

export default React.memo<Props>(ProductList)
