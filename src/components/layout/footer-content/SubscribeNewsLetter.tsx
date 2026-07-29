"use client"
import { Input } from 'antd'
import React from 'react'

interface Props {

}

const SubscribeNewsLetter: React.FC<Props> = (props) => {
  const { } = props

  return (
    <div className='bg-gray-50 border-t border-gray-200 p-10'>
      <section>
        <div className='text-center'>
          <h3>Subscribe To Our Newsletter</h3>
          <p>Get E-mail updates about our latest shop and special offers.</p>
        </div>
      </section>
      <section className='mt-5 mx-auto max-w-xl'>
        <Input.Search
          size="large"
          placeholder="Email Address"
          enterButton="SUBSCRIBE"
          classNames={{
            input: 'h-12! px-4! text-base!',
            button: {
              root: 'h-12! px-8!',
            },
          }}
        />
      </section>
    </div>
  )
}

export default React.memo<Props>(SubscribeNewsLetter)
