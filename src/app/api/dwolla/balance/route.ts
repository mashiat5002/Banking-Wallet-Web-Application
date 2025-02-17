import { NextRequest, NextResponse } from 'next/server';

// Function to get Dwolla access token
const getDwollaAccessToken = async () => {
  const response = await fetch('https://sandbox.dwolla.com/oauth/v2/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      client_id: process.env.DWOLLA_CLIENT_ID!,
      client_secret: process.env.DWOLLA_CLIENT_SECRET!,
      grant_type: 'client_credentials',
    }),
  });

  if (!response.ok) {
    throw new Error('Failed to fetch access token');
  }

  const data = await response.json();
  return data.access_token;
};

// Function to get the balance of a funding source
const getFundingSourceBalance = async (fundingSourceId: string, accessToken: string) => {

  const response = await fetch(`https://api-sandbox.dwolla.com/funding-sources/${fundingSourceId}/balance`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/vnd.dwolla.v1.hal+json',
    },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch funding source balance');
  }
  else
  return response.json();
};

// Next.js API route handler
export async function GET(req: NextRequest) {
  try {
  
   
    const accessToken = await getDwollaAccessToken();
    console.log(accessToken);
    const balance = await getFundingSourceBalance('1a180d82-44d5-41b7-80f3-43407947c4cb', accessToken);

    return NextResponse.json(balance?balance:null);
 
  } catch (error) {
    // console.error('Error fetching funding source balance:', error);
    return NextResponse.json({"res":"Error fetching funding source balance"});
   
  }
}
