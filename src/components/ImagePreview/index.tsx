import React, {  } from 'react'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

const ImagePreview = (props: {
  src: string 
  alt?: string 
  width?: string | number 
  height?: string | number 
  align?: 'center' | 'left' | 'right'
}) => {

  const { width='480', align='center', src, ...nextProps } = props 

  return (
    <div
      style={{
        textAlign: align
      }}
    >
      <Zoom>
        <img
          src={require(`@site/static${src}`).default}
          {...nextProps}
          width={width}
        />
      </Zoom>
    </div>
  )

}

export default ImagePreview