'use client'

import React, { useCallback, useMemo, useState } from 'react'
import { Button, Input, InputNumber, Modal } from 'antd'
import { MailOutlined } from '@ant-design/icons'
import { TbCertificate, TbShieldCheck, TbTruck } from 'react-icons/tb'
import { Controller, useForm } from 'react-hook-form'
import type { Product } from '@/types/product-list'

interface Props {
  product?: Product
  categoryLabel?: string
}

interface QuoteFormValues {
  name: string
  email: string
  message: string
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

  const selectedSize = selectedIndex !== null ? sizeOptions[selectedIndex] : undefined

  const lotTotal = selectedSize ? selectedSize.price_per_piece * selectedSize.pieces_per_lot : undefined

  const isParcel = product?.price_per_carat !== undefined && product?.total_carat_weight !== undefined
  const [caratQty, setCaratQty] = useState(() => Math.min(10, product?.total_carat_weight ?? 10))
  const parcelSubtotal = isParcel ? product!.price_per_carat! * caratQty : undefined

  const canRequestQuote = !hasSizes || selectedSize !== undefined

  const priceLabel = useMemo(() => {
    if (lotTotal !== undefined) return `$${lotTotal.toFixed(2)}`
    if (isParcel) return `$${product?.price_per_carat}/ct`
    if (product?.has_price_range) return `$${product.min_price.toFixed(2)} – $${product.max_price.toFixed(2)}`
    return `$${(product?.price ?? 0).toFixed(2)}`
  }, [lotTotal, isParcel, product])

  const quoteSelectionLabel = useMemo(() => {
    const parts: string[] = []
    if (selectedSize) parts.push(`Size ${selectedSize.size}`)
    if (isParcel) parts.push(`${caratQty} ct`)
    return parts.join(' · ')
  }, [selectedSize, isParcel, caratQty])

  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false)
  const [quoteSubmitError, setQuoteSubmitError] = useState<string | null>(null)
  const [isQuoteSent, setIsQuoteSent] = useState(false)

  const { control, handleSubmit, reset, formState: { isSubmitting } } = useForm<QuoteFormValues>({
    defaultValues: { name: '', email: '', message: '' },
  })

  const openQuoteModal = useCallback(() => {
    setQuoteSubmitError(null)
    setIsQuoteSent(false)
    setIsQuoteModalOpen(true)
  }, [])

  const onSubmitQuote = useCallback(async (data: QuoteFormValues) => {
    setQuoteSubmitError(null)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          subject: `Quotation request: ${product?.name ?? 'Product'}`,
          message: `Product: ${product?.name ?? '-'}${quoteSelectionLabel ? `\nSelection: ${quoteSelectionLabel}` : ''}\n\n${data.message || '(no message provided)'}`,
        }),
      })
      if (!res.ok) {
        const body = await res.json().catch(() => null)
        throw new Error(body?.error || 'Failed to send request.')
      }
      setIsQuoteSent(true)
      reset()
    } catch (err) {
      setQuoteSubmitError(err instanceof Error ? err.message : 'Failed to send request.')
    }
  }, [product, quoteSelectionLabel, reset])

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

      {isParcel && (
        <div className="mt-4 grid grid-cols-3 divide-x divide-gray-200 rounded-lg border border-gray-200 bg-gray-50">
          <div className="px-4 py-3">
            <p className="fs-11 uppercase tracking-wide text-gray-500">Price/Carat</p>
            <p className="mt-0.5 fs-14 font-semibold text-gray-900">${product?.price_per_carat}</p>
          </div>
          <div className="px-4 py-3">
            <p className="fs-11 uppercase tracking-wide text-gray-500">Available</p>
            <p className="mt-0.5 fs-14 font-semibold text-gray-900">{product?.total_carat_weight} ct</p>
          </div>
          <div className="px-4 py-3">
            <p className="fs-11 uppercase tracking-wide text-gray-500">Your Total</p>
            <p className="mt-0.5 fs-14 font-semibold text-gray-900">${parcelSubtotal?.toFixed(2)}</p>
          </div>
        </div>
      )}

      {isParcel && (
        <div>
          <div className="mt-4 flex items-center justify-between">
            <p className="fs-12 font-semibold uppercase tracking-wide text-gray-500">Carats wanted</p>
            <button
              type="button"
              className="fs-12 font-medium text-gray-500 underline decoration-gray-300 underline-offset-2 hover:text-gray-900"
              onClick={() => setCaratQty(product!.total_carat_weight!)}
            >
              Buy full parcel ({product?.total_carat_weight} ct)
            </button>
          </div>
          <InputNumber
            min={1}
            max={product?.total_carat_weight}
            value={caratQty}
            onChange={(value) => setCaratQty(value ?? 1)}
            size="large"
            suffix="ct"
            className="mt-2 w-full"
          />
        </div>
      )}

      <div className="mt-6 flex items-center gap-3">
        <Button
          type="primary"
          size="large"
          icon={<MailOutlined />}
          disabled={!canRequestQuote}
          className="flex-1"
          onClick={openQuoteModal}
        >
          Request Quotation
        </Button>
      </div>

      <Modal
        title="Request a Quotation"
        open={isQuoteModalOpen}
        onCancel={() => setIsQuoteModalOpen(false)}
        footer={null}
        destroyOnHidden
      >
        <p className="mb-4 text-gray-600">{product?.name}{quoteSelectionLabel ? ` — ${quoteSelectionLabel}` : ''}</p>

        {isQuoteSent ? (
          <p className="text-green-600">Thanks — your quotation request has been sent. We usually reply within 24 hours.</p>
        ) : (
          <form onSubmit={handleSubmit(onSubmitQuote)} className="space-y-4">
            <Controller
              control={control}
              name="name"
              rules={{ required: true }}
              render={({ field }) => (
                <fieldset>
                  <label className="mb-1 block fs-12 font-medium text-gray-600">Your name</label>
                  <Input {...field} size="large" placeholder="Your name" />
                </fieldset>
              )}
            />
            <Controller
              control={control}
              name="email"
              rules={{ required: true }}
              render={({ field }) => (
                <fieldset>
                  <label className="mb-1 block fs-12 font-medium text-gray-600">Your email</label>
                  <Input {...field} type="email" size="large" placeholder="Your email" />
                </fieldset>
              )}
            />
            <Controller
              control={control}
              name="message"
              render={({ field }) => (
                <fieldset>
                  <label className="mb-1 block fs-12 font-medium text-gray-600">Message (optional)</label>
                  <Input.TextArea {...field} rows={4} placeholder="Any specific requirements?" />
                </fieldset>
              )}
            />
            <Button type="primary" size="large" htmlType="submit" loading={isSubmitting} block>
              Send Request
            </Button>
            {quoteSubmitError && (
              <p className="fs-12 text-red-600">{quoteSubmitError}</p>
            )}
          </form>
        )}
      </Modal>

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
