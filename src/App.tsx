import { Suspense } from 'react'
import { Outlet, useRoutes } from 'react-router-dom'

import Paper from './components/Paper'
import routes from '~react-pages'

function App() {
  return (
    <Paper>
      <div>
        <Suspense fallback={<p className="text-gray-400">Loading...</p>}>
          {useRoutes(routes)}
          <Outlet />
        </Suspense>
      </div>
    </Paper>
  )
}

export default App
