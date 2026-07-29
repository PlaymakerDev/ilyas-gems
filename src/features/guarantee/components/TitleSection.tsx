import React from 'react'

interface Props {

}

const TitleSection: React.FC<Props> = (props) => {
  const { } = props

  return (
    <div className='bg-gray-100 text-center p-5'>
      <h2>GUARANTEE</h2>
    </div>
  )
}

export default React.memo<Props>(TitleSection)
