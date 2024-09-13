"use client";
import { useState, useEffect } from 'react';
import { usePlaidLink } from 'react-plaid-link';

export default function PlaidButton() {
  const [linkToken, setLinkToken] = useState(null);

  // Fetch the link token on component mount
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
    onSuccess: (public_token, metadata) => {

    },
  });

  return (
    <div>
      <button onClick={() => open()} disabled={!ready}>
        Connect a bank account
      </button>
    </div>
  );
}
