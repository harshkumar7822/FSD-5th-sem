import React, { useState } from 'react'
import ImageRotator from './ImageRotator'

const App = () => {
  const [index, setIndex] = useState(0)

  const images = [
    'https://wallpapercave.com/wp/wp7728998.jpg',
    'https://wallpapercave.com/wp/wp12199523.jpg',
    'https://getwallpapers.com/wallpaper/full/5/a/3/66767.jpg',
  ]

  return (
    <div style={{ textAlign: 'center' }}>

      {/* IMAGE SLIDER */}
      <h1 style={{ backgroundColor: 'black', color: 'white' }}>
        Image Slider
      </h1>

      <img
        src={images[index]}
        alt="Img-here"
        style={{ width: '200px', height: '200px' }}
      />

      <br />

      <button
        onClick={() =>
          setIndex((index - 1 + images.length) % images.length)
        }
      >
        Left
      </button>

      <button
        onClick={() =>
          setIndex((index + 1) % images.length)
        }
      >
        Right
      </button>

      {/* IMAGE ROTATOR */}
      <ImageRotator />

    </div>
  )
}

export default App