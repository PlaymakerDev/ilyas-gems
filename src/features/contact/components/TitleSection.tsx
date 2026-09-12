import React from 'react'

interface Props {

}

const TitleSection: React.FC<Props> = (props) => {
  const { } = props

  return (
    <div className='bg-gray-100 text-center p-5'>
      <h2>CONTACT</h2>
      <p className='mt-2 text-gray-600'>Reach out for orders, samples and advice</p>
    </div>
  )
}

export default React.memo<Props>(TitleSection)
