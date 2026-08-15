"use client"
import { notFound, useParams } from 'next/navigation'
import React from 'react'
import ProductDetailScreen from '@/features/product/detail/screen'

interface Props {

}

const ProductDetailPage: React.FC<Props> = (props) => {
  const { } = props
  const params = useParams()

  if (!params.id) notFound()

  return <ProductDetailScreen id={params.id} />
}

export default React.memo<Props>(ProductDetailPage)
