import React from 'react'
import { Link } from 'react-router-dom'
import { works } from '../works'

const avaliable_works = works.filter(i => !i.draft)

export default function index() {
  return (
    <div className="">
      <h1 className="font-bold font-mono mb-4 text-lg">{'forever animate'.toUpperCase()}</h1>
      <pre className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-y-1 gap-x-4">
        {avaliable_works.map(({ no, name }) =>
          <Link className="text-gray-400" key={no} to={no!} >
            {no}
            <span className="ml-1.5">{name}</span>
          </Link>,
        )}
      </pre>
    </div>
  )
}
