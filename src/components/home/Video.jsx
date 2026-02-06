import React from 'react'

const Video = () => {
  return (
    <div className="h-full w-full pointer-events-none">
      <video
        className="h-full w-full object-cover"
        src="/video.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        aria-hidden="true"
      />
    </div>
  )
}

export default Video
