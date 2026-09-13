import React from 'react'
import AboutUs from './AboutUs'
import QuickLink from './QuickLink'
import FollowUs from './FollowUs'

interface Props {

}

const InfoSection: React.FC<Props> = (props) => {
  const { } = props

  return (
    <div className='bg-gray-50 border-t border-gray-200 p-10'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
        <AboutUs />
        <QuickLink />
        <FollowUs />
      </div>
    </div>
  )
}

export default React.memo<Props>(InfoSection)
