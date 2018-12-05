import React, { Suspense, lazy, useState } from 'react'

const LazyHello = lazy(() =>
  import(/* webpackChunkName: "greeting" */ './Hello'),
)
const LazyWorld = lazy(() =>
  import(/* webpackChunkName: "greeting" */ './World'),
)

const waitFor = time =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve(`Finished wait (${time}ms)`)
    }, time)
  })

// eslint-disable-next-line no-unused-vars
const wait = async () => {
  const result = await waitFor(1000)
  alert(result)
}

const App = () => {
  const [shouldLoad, load] = useState(false)
  return (
    <div className="app">
      <h1>It is working!</h1>
      {shouldLoad && (
        <Suspense fallback="Loading...">
          <LazyHello />
          <LazyWorld />
        </Suspense>
      )}
      {!shouldLoad && <button onClick={() => load(true)}>Show</button>}
    </div>
  )
}

export default App
