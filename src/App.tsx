import { Suspense } from 'react'
import { Outlet, useRoutes } from 'react-router-dom'

import routes from '~react-pages'

function App() {
  return (
    <Suspense fallback={<p className="text-gray-400">Loading...</p>}>
      {useRoutes(routes)}
      <Outlet />
    </Suspense>
  )
}

export default App
