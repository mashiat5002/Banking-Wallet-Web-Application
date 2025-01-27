import React from 'react'
import Landingpg_nav_shed_cn from '../../Landingpg_nav_shed_cn/page';
export default function Nav_dropdowns() {
  return (
    <div className='h-1/3 min-h-fit md:h-full w-screen md:w-1/3    flex  justify-center items-center'>
      {/* <ul className='  flex flex-col md:flex-row w-full items-center justify-center'>
        
        <li className='ml-5 md:ml-12 flex items-center justify-center'>Company <MdKeyboardArrowDown style={{marginTop:'5px', fontSize: '26px' }}/> </li>
        <li className='ml-5 md:ml-12 flex items-center justify-center'>Trade <MdKeyboardArrowDown style={{marginTop:'5px', fontSize: '26px' }}/></li>
        <li className='ml-5 md:ml-12 flex items-center justify-center'>Assets <MdKeyboardArrowDown style={{marginTop:'5px', fontSize: '26px' }}/></li>
      </ul> */}
      <Landingpg_nav_shed_cn/>
      
    </div>
  )
}
