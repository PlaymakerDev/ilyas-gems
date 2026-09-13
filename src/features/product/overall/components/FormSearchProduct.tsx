'use client'

import { SearchOutlined, SortAscendingOutlined, SortDescendingOutlined } from '@ant-design/icons'
import { Button, Col, Input, Row, Select } from 'antd'
import React, { useEffect, useMemo, useState } from 'react'
import { Controller, useForm, useWatch } from 'react-hook-form'
import PRODUCT_LIST from '@/mock/product-list.json'

export interface ProductFilters {
  keyword: string
  type: string | null
  category: string | null
  sort: 'ASC' | 'DESC'
}

interface Props {
  onFilterChange?: (filters: ProductFilters) => void
}

interface FormValues {
  keyword: string
  type: string | null
  category: string | null
}

const FormSearchProduct: React.FC<Props> = (props) => {
  const { onFilterChange } = props
  const [sort, setSort] = useState<'ASC' | 'DESC'>('ASC')

  const typeOptions = useMemo(() => {
    const unique = Array.from(new Set(PRODUCT_LIST.map(item => item.sort_type.gems_type)))
    return unique.map(value => ({ label: value, value }))
  }, [])

  const categoryOptions = useMemo(() => {
    const unique = Array.from(new Set(PRODUCT_LIST.map(item => item.sort_type.gems_category)))
    return unique.map(value => ({ label: value, value }))
  }, [])

  const { control } = useForm<FormValues>({
    defaultValues: {
      keyword: '',
      type: null,
      category: null,
    }
  })

  const watchedValues = useWatch({ control })

  useEffect(() => {
    onFilterChange?.({
      keyword: watchedValues.keyword ?? '',
      type: watchedValues.type ?? null,
      category: watchedValues.category ?? null,
      sort,
    })
  }, [watchedValues.keyword, watchedValues.type, watchedValues.category, sort, onFilterChange])

  return (
    <div>
      <Row gutter={[16, 16]} align={'bottom'}>
        <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={8} xxxl={8}>
          <Controller
            control={control}
            name='keyword'
            render={({ field }) => {
              return (
                <fieldset>
                  <label>Search</label>
                  <Input
                    {...field}
                    className='w-full!'
                    size='large'
                    placeholder='Search by product name'
                    prefix={<SearchOutlined />}
                    allowClear
                  />
                </fieldset>
              )
            }}
          />
        </Col>
        <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={4} xxxl={4}>
          <Controller
            control={control}
            name='type'
            render={({ field }) => {
              return (
                <fieldset>
                  <label>Type</label>
                  <Select
                    {...field}
                    className='w-full!'
                    size='large'
                    options={typeOptions}
                    showSearch
                    allowClear
                    placeholder='Select type'
                  />
                </fieldset>
              )
            }}
          />
        </Col>
        <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={4} xxxl={4}>
          <Controller
            control={control}
            name='category'
            render={({ field }) => {
              return (
                <fieldset>
                  <label>Category</label>
                  <Select
                    {...field}
                    className='w-full!'
                    size='large'
                    options={categoryOptions}
                    showSearch
                    allowClear
                    placeholder='Select category'
                  />
                </fieldset>
              )
            }}
          />
        </Col>
        <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={4} xxxl={4}>
          <Button
            type='primary'
            danger={sort === 'DESC'}
            size='large'
            icon={sort === 'ASC' ? <SortAscendingOutlined /> : <SortDescendingOutlined />}
            onClick={() => setSort(sort === 'ASC' ? 'DESC' : 'ASC')}
          />
        </Col>
      </Row>
    </div>
  )
}

export default React.memo<Props>(FormSearchProduct)
