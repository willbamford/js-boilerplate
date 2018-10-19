import React from 'react'

import image from './image.svg'

const waitFor = time =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve(`Finished wait (${time}ms)`)
    }, time)
  })

const wait = async () => {
  const result = await waitFor(1000)
  alert(result)
}

const App = () => (
  <div className="app">
    <h1>It is working!</h1>
    <div className="image">
      <img src={image} alt="LBA" style={{ width: '240px' }} />
    </div>
  </div>
)

export default App
