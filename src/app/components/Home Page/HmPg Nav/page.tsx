import React from 'react'
import Navbar_Elements from './Navbar_Elements/Navbar_Elements'
import NavSearchBar from './NavSearchBar/NavSearchBar'
import Notification_Profile from './Notification_Profile/Notification_Profile'
import NavbarLogo from './Navbar_Homepg/Navbar'

export default function HomePageNav() {
  return (
    <div className='text-gray-200 bg-red h-full  w-screen md:flex '>
      <NavbarLogo />
      <Navbar_Elements />
      <NavSearchBar />
      <Notification_Profile />
    </div>
  )
}
