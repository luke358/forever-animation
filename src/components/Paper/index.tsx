import React from 'react'
import type { ReactElement } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Icon } from '@iconify/react'
import { works } from '../../works'
import './index.scss'

export default function Paper({ children }: { children: ReactElement }) {
  const { pathname: no } = useLocation()
  const index = works.findIndex(i => i.no === no.slice(1))

  const work = works[index]
  const prev = works[index - 1]
  const next = works[index + 1]
  return (
    <div className="paper">
      {children}
      {
        no !== '/' && <nav className="fixed top-6 left-8"><Link to="/">
          <Icon icon="ant-design:left-outlined" />
        </Link></nav>
      }
      {work && <nav className="w-[100%] py-2 px-3 font-mono fixed bottom-0 left-0 flex justify-between">
        <div className="flex">
          <div className="nav-links">
            {prev && <Link to={prev.no} className="prev opacity-25">
              <span className="opacity-25">{prev.name}</span>
              <span className="mx-1 opacity-25">{prev.no}</span>
            </Link>}
            <div>
              <span>{work.name}</span>
              <span className="mx-1 opacity-25">{work.no}</span>
            </div>
            {next && <Link to={next.no} className="next opacity-25">
              <span className="opacity-25">{next.name}</span>
              <span className="mx-1 opacity-25">{next.no}</span>
            </Link>}
          </div>
        </div>
        <div className="text-gray-300 relative">
          <span className="absolute bottom-0 right-0">{work.date}</span>
        </div>
      </nav>}
    </div>
  )
}
