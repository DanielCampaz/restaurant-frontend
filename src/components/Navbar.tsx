import React from 'react'
import { NavLink } from 'react-router-dom'

const routes: {path:string,namePage: string}[] = [
  {
    path: '/',
    namePage: 'Home'
  },
  {
    path: '/product',
    namePage: 'Product'
  },
  {
    path: '/products',
    namePage: 'Products'
  }
]

export default function Navbar () {
  return(
    <>
      <nav>
        <ul>
          {
            routes.map((e, index) => {
              return <li key={index}><NavLink to={e.path}>{e.namePage}</NavLink></li>
            })
          }
        </ul>
      </nav>
    </>
  )
}