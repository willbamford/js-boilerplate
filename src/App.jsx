import React from 'react'

import image from './image.svg'

const App = () => (
  <div className="app">
    <h1>It is working!</h1>
    <div className="image">
      <img src={image} alt="LBA" style={{ width: '240px' }} />
    </div>
  </div>
)

export default App
