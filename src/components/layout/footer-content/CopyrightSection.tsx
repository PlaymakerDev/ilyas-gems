import React from 'react'

interface Props {

}

const CopyrightSection: React.FC<Props> = (props) => {
  const { } = props

  return (
    <div className='bg-gray-100 py-3 px-10'>
      <p>Copyright © 2026 Gems N Gems. All Right Reserved</p>
    </div>
  )
}

export default React.memo<Props>(CopyrightSection)
