import React from 'react'

const Video = () => {
  return (
    <video
      className=''
      autoPlay
      object-cover
      loop
      muted
      playsInline
      className = 'w-full h-full object-cover'
      src='/myvideo.mp4' type="video/mp4"
    />
  )
}

export default Video