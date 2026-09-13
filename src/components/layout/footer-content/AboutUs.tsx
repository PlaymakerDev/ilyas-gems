import { SOCIAL_LINKS } from '@/constants'
import React, { useMemo } from 'react'
import { TbEmailStamp, TbLocationPin, TbPhoneCall } from 'react-icons/tb'
import * as motion from 'motion/react-client'
import Image from 'next/image'

interface Props {

}

const AboutUs: React.FC<Props> = (props) => {
  const { } = props

  return (
    <div>
      <h3>ABOUT US</h3>
      <section className='mt-5'>
        <div className='flex items-start gap-2 mb-3'>
          <TbLocationPin className='fs-22' />
          <p>1158/8, CharoenKrung Road, Bangrak, Bangkok-10500, Thailand</p>
        </div>
        <div className='flex items-start gap-2 mb-3'>
          <TbEmailStamp className='fs-22' />
          <p>sales@ilyasgems.com</p>
        </div>
        <div className='flex items-start gap-2 mb-3'>
          <TbPhoneCall className='fs-22' />
          <p>+91 7358320959, +91 7010206905</p>
        </div>
      </section>
    </div>
  )
}

export default React.memo<Props>(AboutUs)
