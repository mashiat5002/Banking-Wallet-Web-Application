
import React from 'react'
import Homepage from '../components/Home Page/page'

export default  function page() {
 
  fetch('http://localhost:3000/api/cookie_decrypt',{
    method:"POST"
  })
 
  return (
    <div  className="h-screen w-screen">
      <Homepage />
    </div>
  )
}



