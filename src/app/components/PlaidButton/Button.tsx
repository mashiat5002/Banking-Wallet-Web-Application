"use client";
import { useState, useEffect } from 'react';
import { usePlaidLink } from 'react-plaid-link';
export default function PlaidButton() {
  const [linkToken, setLinkToken] = useState(null);

  useEffect(() => {

    
    const createLinkToken = async () => {
      const resp = await fetch("http://localhost:3000/api/create-link-token", {
        method: "POST",
      });
      const data = await resp.json();
      setLinkToken(data.link_token); 
    };
    createLinkToken(); 
  }, []); 


 
  const { open, ready } = usePlaidLink({
    token: linkToken,
    onSuccess: async (public_token, metadata) => {
      const response = await fetch('/api/exchange-public-token', {

        method: 'POST',
       
        body: JSON.stringify({
          token: public_token
        }),
      });
      const info= await response.json();
      console.log(info.access_token.access_token);


// plaid account from the token
      
const res=await fetch(`/api/find_plaid`,{
  method:"POST",
  body:JSON.stringify({
    "client_id":``,
    "secret":``,
    "access_token":`${info.access_token.access_token}`
})
  

  
})
const data= await res.json();
console.log(data)


//dwolla processor from plaid
const res2=await fetch(`/api/plaid_processor_token_creation`,{
  method:"POST",
  body:JSON.stringify({
    "client_id":``,
    "secret":``,
  "access_token": `${info.access_token.access_token}`, 
  "account_id": `${data.accounts[0].account_id}`,    
  "processor": "dwolla"                       
})
  
})

const data2= await res2.json();
console.log(data2)

// creating dwolla account with plaid token
const res3= await fetch("/api/dwolla_acc",{
  method:"POST",
  body:JSON.stringify({
    "plaidToken": `${data2.processor_token}`,
    "name": "Demo name"
  })
})

const data3= await res3.json();
console.log(data3.code);
    },
  });



  return (
    
      <button className='bg-cyan-950 text-slate-50 rounded-xl h-fit w-fit p-5 m-10 ring-2 ring-slate-500'  onClick={() => open()} disabled={!ready}>
        Connect a bank account
      </button>
   
  );
}

