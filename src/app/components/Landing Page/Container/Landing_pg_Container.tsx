import React from 'react'
import Nevbar from '../Navbar/nev'
import Center from '../Center/center'
import Bottom from '../Bottom/Bottom'


export default function Landing_pg_Container() {
  return (
    <div className="md:h-screen h-fit bg-[url('/assets/images/landing-bg.jpg')]">
    <Nevbar />
    <Center />
    <Bottom />
 
  </div>
  )
}
