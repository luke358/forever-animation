import { Suspense } from 'react'
import { Link, Outlet, useLocation, useRoutes } from 'react-router-dom'
import { Icon } from '@iconify/react'

import Paper from './components/Paper'
import routes from '~react-pages'

function App() {
  const { pathname } = useLocation()
  return (
    <Paper>
      <div>
        {
          pathname !== '/' && <nav className="fixed top-6 left-8"><Link to="/">
            <Icon icon="ant-design:left-outlined" />
          </Link></nav>
        }
        <Suspense fallback={<p className="bg-gray-300">Loading...</p>}>
          {useRoutes(routes)}
          <Outlet />
        </Suspense>
      </div>
    </Paper>
  )
}

export default App
