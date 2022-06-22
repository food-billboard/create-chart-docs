import React, {  } from 'react'

const VideoPreview = (props: {
  src: string 
  [key: string]: any 
}) => {

  const { src, ...nextProps } = props 

  return (
    <video
      controls 
      src={require(`@site/static${src}`).default}
      {...nextProps}
    ></video>
  )

}

export default VideoPreview