'use client'

import React, { useMemo, useState } from 'react'
import { Button, InputNumber } from 'antd'
import { HeartOutlined, ShoppingOutlined } from '@ant-design/icons'
import { TbCertificate, TbShieldCheck, TbTruck } from 'react-icons/tb'
import type { Product } from '@/types/product-list'

interface Props {
  product?: Product
  categoryLabel?: string
}

const trustPoints = [
  { icon: TbCertificate, label: 'Certified quality' },
  { icon: TbShieldCheck, label: 'Satisfaction guarantee' },
  { icon: TbTruck, label: 'Worldwide shipping' },
]

const BuyBox: React.FC<Props> = (props) => {
  const { product, categoryLabel } = props
  const sizeOptions = useMemo(() => product?.size_options ?? [], [product])
  const hasSizes = sizeOptions.length > 0

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const [quantity, setQuantity] = useState(1)

  const selectedSize = selectedIndex !== null ? sizeOptions[selectedIndex] : undefined
  const canAddToCart = !hasSizes || selectedSize !== undefined

  const lotTotal = selectedSize ? selectedSize.price_per_piece * selectedSize.pieces_per_lot : undefined

  const priceLabel = useMemo(() => {
    if (lotTotal !== undefined) return `$${lotTotal.toFixed(2)}`
    if (product?.has_price_range) return `$${product.min_price.toFixed(2)} – $${product.max_price.toFixed(2)}`
    return `$${(product?.price ?? 0).toFixed(2)}`
  }, [lotTotal, product])

  return (
    <div className="flex flex-col lg:sticky lg:top-24 lg:self-start">
      {categoryLabel && (
        <span className="mb-3 inline-block w-fit rounded-full bg-gray-100 px-3 py-1 fs-11 font-semibold uppercase tracking-wide text-gray-600">
          {categoryLabel}{product?.sort_type.gems_type ? ` · ${product.sort_type.gems_type}` : ''}
        </span>
      )}

      <h1 className="text-gray-900">{product?.name}</h1>

      {product?.short_description && (
        <p className="mt-3 text-gray-600">{product.short_description}</p>
      )}

      <div className="mt-5 flex items-baseline gap-2">
        <span className="text-2xl font-bold text-gray-900 sm:text-3xl">{priceLabel}</span>
        {hasSizes && !selectedSize && <span className="fs-12 text-gray-400">Select a size</span>}
      </div>

      <div className="my-6 h-px bg-gray-200" />

      {hasSizes && (
        <div>
          <p className="mb-2 fs-12 font-semibold uppercase tracking-wide text-gray-500">
            Size{selectedSize ? ` — ${selectedSize.size}` : ''}
          </p>
          <div className="flex flex-wrap gap-2">
            {sizeOptions.map((option, index) => {
              const active = index === selectedIndex
              return (
                <button
                  key={option.size}
                  type="button"
                  onClick={() => setSelectedIndex(index)}
                  className={`rounded-lg border px-3 py-2 fs-12 font-medium transition-colors ${active
                    ? 'border-gray-900 bg-gray-900 text-white'
                    : 'border-gray-300 text-gray-700 hover:border-gray-900'
                    }`}
                >
                  {option.size}
                </button>
              )
            })}
          </div>
        </div>
      )}

      {selectedSize && (
        <div className="mt-4 grid grid-cols-3 divide-x divide-gray-200 rounded-lg border border-gray-200 bg-gray-50">
          <div className="px-4 py-3">
            <p className="fs-11 uppercase tracking-wide text-gray-500">Price/Piece</p>
            <p className="mt-0.5 fs-14 font-semibold text-gray-900">${selectedSize.price_per_piece}</p>
          </div>
          <div className="px-4 py-3">
            <p className="fs-11 uppercase tracking-wide text-gray-500">Pieces/Lot</p>
            <p className="mt-0.5 fs-14 font-semibold text-gray-900">{selectedSize.pieces_per_lot}</p>
          </div>
          <div className="px-4 py-3">
            <p className="fs-11 uppercase tracking-wide text-gray-500">Total</p>
            <p className="mt-0.5 fs-14 font-semibold text-gray-900">${lotTotal?.toFixed(2)}</p>
          </div>
        </div>
      )}

      <div className="mt-6 flex items-center gap-3">
        <InputNumber
          min={1}
          max={99}
          value={quantity}
          onChange={(value) => setQuantity(value ?? 1)}
          size="large"
          className="w-20!"
        />
        <Button
          type="primary"
          size="large"
          icon={<ShoppingOutlined />}
          disabled={!canAddToCart}
          className="flex-1"
          onClick={() => console.log({ productId: product?.id, quantity, size: selectedSize?.size })}
        >
          Add to Cart
        </Button>
        <Button size="large" icon={<HeartOutlined />} aria-label="Add to wishlist" />
      </div>

      {product?.availability && (
        <p className="mt-4 flex items-center gap-2 fs-12 text-gray-600">
          <span className="h-2 w-2 shrink-0 rounded-full bg-green-500" />
          {product.availability}
        </p>
      )}

      <div className="mt-8 grid grid-cols-3 gap-3 border-t border-gray-200 pt-6">
        {trustPoints.map((point) => (
          <div key={point.label} className="flex flex-col items-center gap-1.5 text-center">
            <point.icon className="fs-18 text-gray-500" />
            <span className="fs-11 text-gray-500">{point.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default React.memo<Props>(BuyBox)
