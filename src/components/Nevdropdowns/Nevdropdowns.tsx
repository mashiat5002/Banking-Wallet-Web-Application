import React from 'react'
import { MdKeyboardArrowDown } from "react-icons/md";
export default function Nev_dropdowns() {
  return (
    <div className=' w-1/3 flex items-center justify-center'>
      <ul className=' flex w-full items-center justify-center'>
        
        <li className='ml-14 flex items-center justify-center'>Company <MdKeyboardArrowDown style={{marginTop:'5px', fontSize: '26px' }}/> </li>
        <li className='ml-14 flex items-center justify-center'>Trade <MdKeyboardArrowDown style={{marginTop:'5px', fontSize: '26px' }}/></li>
        <li className='ml-14 flex items-center justify-center'>Assets <MdKeyboardArrowDown style={{marginTop:'5px', fontSize: '26px' }}/></li>
      </ul>
      
    </div>
  )
}
