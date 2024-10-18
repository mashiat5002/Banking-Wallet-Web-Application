import React from 'react'

import Navlogo from '../Navlogo/nav_logo'
import Nav_dropdowns from '../Nav_dropdowns/Nav_dropdowns'
import Nav_buttons from '../Nav_buttons/Nav_buttons'

export default function Navbar() {
  return (
    <div className='h-96  text-slate-50 md:h-1/6 md:flex '>
        <Navlogo />
        <Nav_dropdowns />
        <Nav_buttons />

    </div>
  )
}
