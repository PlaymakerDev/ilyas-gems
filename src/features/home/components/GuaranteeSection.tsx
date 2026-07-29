import React from 'react'
import { TbCash, TbCertificate, TbPhoneDone, TbTruckDelivery } from 'react-icons/tb'

interface Props {

}

interface GuaranteeItem {
  icon: React.ElementType
  title: string
  description: string
}

const guaranteeList: GuaranteeItem[] = [
  { icon: TbTruckDelivery, title: 'Worldwide Shipping', description: 'Global Shipping on Every Order' },
  { icon: TbCash, title: 'Money Back Guarantee', description: 'Back guarantee under 30 days' },
  { icon: TbCertificate, title: 'Certified Authentic Gems', description: 'Verified Quality with Certification' },
  { icon: TbPhoneDone, title: '24/7 Support Services', description: 'Contact us Anytime' },
]

const GuaranteeSection: React.FC<Props> = (props) => {
  const { } = props

  return (
    <div className='bg-gray-50 px-4 py-10 sm:px-8 sm:py-14 lg:px-16'>
      <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4'>
        {guaranteeList.map((item) => (
          <div
            key={item.title}
            className='flex flex-col items-center gap-3 text-center sm:flex-row sm:justify-center sm:text-left'
          >
            <item.icon className='fs-24 shrink-0' />
            <div>
              <h4>{item.title}</h4>
              <p className='text-gray-600'>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default React.memo<Props>(GuaranteeSection)
