"use client"
import { Button, Input } from 'antd'
import React from 'react'

interface Props {

}

const GetInTouch: React.FC<Props> = (props) => {
  const { } = props

  return (
    <div>
      <h3>GET IN TOUCH</h3>
      <section className='mt-5'>
        <fieldset className='mb-3'>
          <Input
            size="large"
            placeholder="Email Address"
          />
        </fieldset>
        <fieldset className='mb-3'>
          <Input
            size="large"
            placeholder="Email"
          />
        </fieldset>
        <fieldset className='mb-3'>
          <Input.TextArea
            size="large"
            placeholder="Comments"
            rows={4}
          />
        </fieldset>
        <Button
          type="primary"
          size="large"
        >
          SUBMIT
        </Button>
      </section>
    </div>
  )
}

export default React.memo<Props>(GetInTouch)
