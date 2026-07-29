import React from 'react'
import AboutUs from './AboutUs'
import QuickLink from './QuickLink'
import Information from './Information'
import GetInTouch from './GetInTouch'

interface Props {

}

const InfoSection: React.FC<Props> = (props) => {
  const { } = props

  return (
    <div className='p-10'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
        <AboutUs />
        <QuickLink />
        <Information />
        <GetInTouch />
      </div>
    </div>
  )
}

export default React.memo<Props>(InfoSection)
