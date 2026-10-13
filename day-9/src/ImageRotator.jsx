import React, { useState } from 'react'

const ImageRotator = () => {

  const [rotation, setRotation] = useState(0)

  return (
    <div style={{ textAlign: 'center' }}>

      <h1 style={{ backgroundColor: 'black', color: 'white' }}>
        Image Rotator
      </h1>

      <img
        src="https://wallpapercave.com/wp/wp7728998.jpg"
        alt="Img-here"
        style={{
          width: '200px',
          height: '200px',
          transform: `rotate(${rotation}deg)`
        }}
      />

      <br />
      <br />

      <button onClick={() => setRotation(rotation - 90)}>
        Left
      </button>

      <button onClick={() => setRotation(rotation + 90)}>
        Right
      </button>

    </div>
  )
}

export default ImageRotator