'use client'

import { SortAscendingOutlined, SortDescendingOutlined } from '@ant-design/icons'
import { Button, Col, Row, Select } from 'antd'
import React, { useCallback, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'

interface Props {

}

interface FormValues {
  type: string | null
  category: string | null
}

const FormSearchProduct: React.FC<Props> = (props) => {
  const { } = props
  const [sort, setSort] = useState<'ASC' | 'DESC'>('ASC')

  const form = useForm<FormValues>({
    defaultValues: {
      type: null,
      category: null,
    }
  })

  const {
    control,
    handleSubmit
  } = form

  const onSubmit = useCallback((data: FormValues) => {
    console.log(data)
  }, [])

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Row gutter={[16, 16]} align={'bottom'}>
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
                    options={[
                      {
                        label: 'Lab Create',
                        value: 'LAB_CREATE'
                      },
                      {
                        label: 'Natural',
                        value: 'NATURAL'
                      },
                    ]}
                    showSearch
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
                    options={[
                      {
                        label: 'Emerald',
                        value: 'EMERALD'
                      },
                      {
                        label: 'Ruby',
                        value: 'RUBY'
                      },
                    ]}
                    showSearch
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
    </form>
  )
}

export default React.memo<Props>(FormSearchProduct)
