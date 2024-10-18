import React from 'react'
import Mobile_hand from '../Mobile-hand/mobile-hand'
import Center_left from '../Center_Left/Center_left'

export default function Center() {
  return (
    <div className=' h-96 w-screen  md:h-4/6 flex flex-row-reverse    text-slate-200 '> 
      <Mobile_hand />
      <Center_left />
    </div>
  )
}
