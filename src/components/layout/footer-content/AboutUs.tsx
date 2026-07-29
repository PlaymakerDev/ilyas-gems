import { SOCIAL_LINKS } from '@/constants'
import React, { useMemo } from 'react'
import { TbEmailStamp, TbLocationPin, TbPhoneCall } from 'react-icons/tb'
import * as motion from 'motion/react-client'
import Image from 'next/image'

interface Props {

}

const AboutUs: React.FC<Props> = (props) => {
  const { } = props

  const renderSocialLink = useMemo(() => {
    return SOCIAL_LINKS.map((social) => (
      <motion.a
        key={social.name}
        href={social.url}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full bg-white w-12 h-12 overflow-hidden flex items-center justify-center hover:cursor-pointer hover:bg-gray-50 transition-colors duration-200 shadow-sm hover:shadow-md"
        aria-label={`Visit ${social.name} profile`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <Image
          src={social.icon}
          width={30}
          height={30}
          alt={social.alt}
          className="object-contain"
          draggable={false}
        />
      </motion.a>
    ))
  }, [])

  return (
    <div>
      <h3>ABOUT US</h3>
      <section className='mt-5'>
        <div className='flex items-start gap-2 mb-3'>
          <TbLocationPin className='fs-22' />
          <p>179 Soi Saraphi 2, Issaraphap Road, Bangkok, 10600, Thailand</p>
        </div>
        <div className='flex items-start gap-2 mb-3'>
          <TbEmailStamp className='fs-22' />
          <p>info@gemsngems.com</p>
        </div>
        <div className='flex items-start gap-2 mb-3'>
          <TbPhoneCall className='fs-22' />
          <p>+66 959 578 072</p>
        </div>
      </section>
      <section className='mt-5'>
        <div className="flex items-center justify-center lg:justify-start gap-3 mt-3">
          {renderSocialLink}
        </div>
      </section>
    </div>
  )
}

export default React.memo<Props>(AboutUs)
