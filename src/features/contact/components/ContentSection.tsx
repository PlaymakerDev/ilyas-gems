'use client'

import React, { useCallback, useState } from 'react'
import { Button, Input } from 'antd'
import { Controller, useForm } from 'react-hook-form'
import {
  TbBrandFacebook,
  TbBrandInstagram,
  TbBrandPinterest,
  TbBrandX,
  TbMail,
  TbMapPin,
  TbPhone,
} from 'react-icons/tb'

interface Props {

}

interface FormValues {
  name: string
  email: string
  subject: string
  message: string
}

interface Office {
  title: string
  company: string
  address: string
  email: string
  phones: string[]
}

const offices: Office[] = [
  {
    title: 'Thailand Factory & Office',
    company: 'Ilyas Lapidary Co. Ltd',
    address: '1158/8, CharoenKrung Road, Bangrak, Bangkok-10500, Thailand',
    email: 'sales@ilyasgems.com',
    phones: ['+91 7358320959', '+91 7010206905'],
  },
  {
    title: 'China Factory & Office',
    company: 'Yingliang Gems',
    address: 'Xi Huan Road, Unit 4, Room 403, Wuzhou Jewel City Building, Wuzhou – 543002, Guangxi, China',
    email: 'sales@ilyasgems.com',
    phones: ['+91 7358320959', '+91 7010206905'],
  },
]

const socialLinks = [
  { icon: TbBrandFacebook, label: 'Facebook' },
  { icon: TbBrandInstagram, label: 'Instagram' },
  { icon: TbBrandX, label: 'X' },
  { icon: TbBrandPinterest, label: 'Pinterest' },
]

const ContentSection: React.FC<Props> = (props) => {
  const { } = props

  const [submitError, setSubmitError] = useState<string | null>(null)

  const { control, handleSubmit, reset, formState: { isSubmitSuccessful, isSubmitting } } = useForm<FormValues>({
    defaultValues: { name: '', email: '', subject: '', message: '' },
  })

  const onSubmit = useCallback(async (data: FormValues) => {
    setSubmitError(null)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) {
        const body = await res.json().catch(() => null)
        throw new Error(body?.error || 'Failed to send message.')
      }
      reset()
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : 'Failed to send message.')
    }
  }, [reset])

  return (
    <div className='mx-auto max-w-6xl px-5 py-10 sm:py-14'>
      <div className='grid grid-cols-1 gap-12 lg:grid-cols-2'>
        <section>
          <h3 className='mb-2'>Send Us a Message</h3>
          <p className='mb-6 text-gray-600'>Reach out for orders, samples and advice — we usually reply within 24 hours.</p>

          <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
            <Controller
              control={control}
              name='name'
              rules={{ required: true }}
              render={({ field }) => (
                <fieldset>
                  <label className='mb-1 block fs-12 font-medium text-gray-600'>Your name</label>
                  <Input {...field} size='large' placeholder='Your name' />
                </fieldset>
              )}
            />
            <Controller
              control={control}
              name='email'
              rules={{ required: true }}
              render={({ field }) => (
                <fieldset>
                  <label className='mb-1 block fs-12 font-medium text-gray-600'>Your email</label>
                  <Input {...field} type='email' size='large' placeholder='Your email' />
                </fieldset>
              )}
            />
            <Controller
              control={control}
              name='subject'
              rules={{ required: true }}
              render={({ field }) => (
                <fieldset>
                  <label className='mb-1 block fs-12 font-medium text-gray-600'>Subject</label>
                  <Input {...field} size='large' placeholder='Subject' />
                </fieldset>
              )}
            />
            <Controller
              control={control}
              name='message'
              render={({ field }) => (
                <fieldset>
                  <label className='mb-1 block fs-12 font-medium text-gray-600'>Your message (optional)</label>
                  <Input.TextArea {...field} rows={5} placeholder='Your message' />
                </fieldset>
              )}
            />
            <Button type='primary' size='large' htmlType='submit' loading={isSubmitting}>
              Send Message
            </Button>
            {isSubmitSuccessful && !submitError && (
              <p className='fs-12 text-green-600'>Thanks — your message has been sent.</p>
            )}
            {submitError && (
              <p className='fs-12 text-red-600'>{submitError}</p>
            )}
          </form>
        </section>

        <section>
          <h3 className='mb-6'>Our Offices</h3>
          <div className='space-y-5'>
            {offices.map((office) => (
              <div key={office.title} className='rounded-lg border border-gray-200 p-6'>
                <p className='fs-11 font-semibold uppercase tracking-wide text-gray-500'>{office.title}</p>
                <p className='mt-1 font-semibold text-gray-900'>{office.company}</p>

                <div className='mt-4 flex items-start gap-2'>
                  <TbMapPin className='fs-18 mt-0.5 shrink-0 text-gray-500' />
                  <p className='text-gray-600'>{office.address}</p>
                </div>
                <div className='mt-3 flex items-center gap-2'>
                  <TbMail className='fs-18 shrink-0 text-gray-500' />
                  <a href={`mailto:${office.email}`} className='text-gray-600 hover:text-gray-900'>{office.email}</a>
                </div>
                <div className='mt-3 flex items-start gap-2'>
                  <TbPhone className='fs-18 mt-0.5 shrink-0 text-gray-500' />
                  <p className='text-gray-600'>{office.phones.join(', ')}</p>
                </div>
              </div>
            ))}
          </div>

          <div className='mt-6'>
            <p className='mb-3 fs-11 font-semibold uppercase tracking-wide text-gray-500'>Follow Us</p>
            <div className='flex items-center gap-3'>
              {socialLinks.map((social) => (
                <span
                  key={social.label}
                  aria-label={social.label}
                  className='flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-gray-600 transition-colors hover:border-gray-900 hover:text-gray-900'
                >
                  <social.icon className='fs-18' />
                </span>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default React.memo<Props>(ContentSection)
