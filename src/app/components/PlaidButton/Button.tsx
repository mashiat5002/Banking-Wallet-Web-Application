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
      console.log(info.access_token);


      const response2 = await fetch('/api/dwolla/balance', {

        method: 'GET',
       
    
      });
      const info2= await response2.json();
      console.log(info2)
    },
  });

  return (
    
      <button className='bg-cyan-950 text-slate-50 rounded-xl h-fit w-fit p-5 m-10 ring-2 ring-slate-500'  onClick={() => open()} disabled={!ready}>
        Connect a bank account
      </button>
   
  );
}

