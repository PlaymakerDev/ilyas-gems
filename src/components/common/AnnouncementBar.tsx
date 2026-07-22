import React from 'react'

interface Props {
  message: string
}

const AnnouncementBar: React.FC<Props> = (props) => {
  const { message } = props

  return (
    <div className="flex justify-center items-center text-center flex-col gap-2 p-2 border-t border-b border-gray-200 bg-gray-50">
      <p className="fs-11">{message}</p>
    </div>
  )
}

export default React.memo<Props>(AnnouncementBar)
