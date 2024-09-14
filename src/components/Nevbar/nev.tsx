import React from 'react'
import Nevlogo from '../Nevlogo/nevlogo'
import Nev_dropdowns from '../Nevdropdowns/Nevdropdowns'
import Nev_buttons from '../Nev_buttons/Nev_buttons'

export default function Nevbar() {
  return (
    <div className='text-gray-300 h-28 flex'>
        <Nevlogo />
        <Nev_dropdowns />
        <Nev_buttons />

    </div>
  )
}
