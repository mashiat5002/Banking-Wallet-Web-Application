import React from 'react'

import Nevlogo from '../Nevlogo/nevlogo'
import Nev_dropdowns from '../Nevdropdowns/Nevdropdowns'
import Nev_buttons from '../Nev_buttons/Nev_buttons'

export default function Nevbar() {
  return (
    <div className='text-slate-50 h-1/6 flex'>
        <Nevlogo />
        <Nev_dropdowns />
        <Nev_buttons />

    </div>
  )
}
