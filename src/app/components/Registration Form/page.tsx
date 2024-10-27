"use client"
import React, { useState } from 'react'

export default  function Registration_form() {
    
    
    const [error_msg, setErrMsg]=useState("");
    const [error_msg_color, setErrMsg_color]=useState("grey");


    
    const HandleSubmit= async (e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        const formdata= new FormData(e.currentTarget)

        setErrMsg("Processing Request...")
        setErrMsg_color("orange")

     
        //api dwolla calling
        const response= await fetch("/api/create_customer_dwolla",{
            method: "POST",
            body:JSON.stringify({
              "firstName":formdata.get("first_name"),
              "lastName":formdata.get("last_name"),
              "email":formdata.get("email"),
              "address1":formdata.get("address"),
              "city":formdata.get("city"),
              "state":formdata.get("state"),
              "postalCode":formdata.get("postal"),
              "dateOfBirth":formdata.get("dob"),
              "ssn": "1234",
              "type": "personal"
            })
          });
          
          console.log(response.headers.get("Location"));
         
        
          
          if(response.status==201){
            setErrMsg_color("lightgreen");
            setErrMsg("Successful");

              const stripeResponse=  await fetch("/api/create_stripe_customer",{
                    method:"POST",
                    headers: {
                        "Content-Type": "application/json", 
                    },
                    body: JSON.stringify(Object.fromEntries(formdata)),
                })
                

                await fetch("/api/db_insertion",{
                method:"POST",
                headers: {
                    "Content-Type": "application/json", 
                },
                body: JSON.stringify(Object.fromEntries(formdata)),
            })

                

        }
            
         
        try{
            const stat= await response.json();
         

            if(stat.status == "database not connected"){
                setErrMsg_color("red");
                setErrMsg("Database Error");
              }
           
            if(stat.code== "ExpiredAccessToken" || stat.code== "InvalidAccessToken"){
                setErrMsg_color("red");
                setErrMsg("Session Invalid");
            }
            if (!response.ok) {
                setErrMsg_color("red");
              setErrMsg(stat._embedded.errors[0].message);
              stat._embedded.errors[0].message=="DateOfBirth value not allowed." && setErrMsg("You are under Age")
            }

        }
        catch(error){
            console.log(error)

        }
        
          





     

    }
  return (
    <form onSubmit={HandleSubmit}>
    <div className='h-full w-full  flex items-center justify-center '>
        <div className='h-650px w-900px bg-custom-light-green flex items-center justify-center '>
            <div className='h-600px w-850px bg-black flex items-center justify-center rounded-2xl  '>
                <div className='h-full w-1/2 bg-slate-50 rounded-s-2xl flex items-center justify-center'>
                    <div className='h-11/12 w-5/6  text-custom-green '>
                        <div className='h-1/12 w-full '>
                            <h1 className='text-xl text-custom-green font-semibold'>General Information</h1>

                        </div>
                        <div className='h-1/12 w-full '>
                            <input required  name='email' className='h-full w-full border-b-2 outline-none pl-3' placeholder='Email'/>

                        </div>
                        <div className='h-1/12 w-full flex justify-between'>
                            <div  className='h-full w-2/5'> <input required name='first_name' className='h-full w-full border-b-2 outline-none pl-3' placeholder='First Name'/></div>
                            <div className='h-full w-2/5'> <input required name='last_name' className='h-full w-full border-b-2 outline-none pl-3' placeholder='Last Name'/></div>

                        </div>
                        <div className='h-1/12 w-full flex justify-between'>
                            <div className='h-full w-3/5'> <input required name='dob'  className='h-full w-full border-b-2 outline-none pl-3 ' placeholder='Date of Birth YYYY-MM-DD' /></div>
                          

                        </div>

                    </div>

                </div>
                <div className='h-full w-1/2 bg-custom-green rounded-e-2xl flex items-center justify-center text-slate-50'>
                    <div className='h-11/12 w-5/6 '>
                        <div className='h-1/12 w-full '>
                            <h1 className='text-xl text-slate-50 font-semibold'>Contact Details</h1>

                        </div>

                        <div className='h-1/12 w-full '>
                            <input required  name='address' className=' h-full w-full border-b-2 outline-none pl-3 bg-custom-green ' placeholder='Address'/>

                        </div>
                        <div className='h-1/12 w-full '>
                            <input required name='city' className='h-full w-full border-b-2 outline-none pl-3 bg-custom-green' placeholder='City'/>

                        </div>
                        <div className='h-1/12 w-full '>
                            <input required name='state' className='h-full w-full border-b-2 outline-none pl-3 bg-custom-green' placeholder='State'/>

                        </div>
                        <div className='h-1/12 w-full '>
                            <input required  name='postal' className='h-full w-full border-b-2 outline-none pl-3 bg-custom-green' placeholder='Postal Code'/>

                        </div>
                        <div className='h-1/12 w-full '>
                            <input required name='phone' type="tel" pattern="[0-9]*"  className=' h-full w-full border-b-2 outline-none pl-3 bg-custom-green' placeholder='Phone Number'/>

                        </div>
                        <div className='h-1/12 w-full '>
                            <input required   name='password' type='password' className=' h-full w-full border-b-2 outline-none pl-3 bg-custom-green' placeholder='Password'/>

                        </div>
                        <div className='h-3/12 w-full text-gray-500 '>
                            <h1 className='mt-3'> must contain 8 characters</h1>
                            <h1 > must contain one Uppercase character</h1>
                            <h1 > must contain one special character</h1>
                            <h1 className='pt-3 '  style={{color:error_msg_color}}>
                                {error_msg}
                            </h1>

                        </div>
                        <div className='h-3/12 w-full '>
                                
                        
                                <button  className='h-12 w-full bg-slate-50 flex rounded-3xl items-center justify-center cursor-pointer hover:text-slate-50 hover:bg-black text-custom-green-light'>
                                    <h1 className=' font-semibold '>Register</h1>
                                </button>

                        </div>
                        

                    </div>
                

                    

                </div>

            </div>

        </div>
      
    </div>
    </form>
  )
}
