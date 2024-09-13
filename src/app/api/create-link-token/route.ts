import { NextResponse } from 'next/server';
import { Configuration, PlaidApi, PlaidEnvironments, Products, CountryCode } from 'plaid';
require('dotenv').config();

const configuration = new Configuration({
  basePath: PlaidEnvironments.sandbox,
  baseOptions: {
    headers: {
      'PLAID-CLIENT-ID': process.env.PLAID_CLIENT_ID!,
      'PLAID-SECRET': process.env.PLAID_SECRET!,
    },
  },
});

const client = new PlaidApi(configuration);

export async function POST(request: NextResponse) {
 
  const clientUserId = 'user'; //demo

 
  const plaidRequest = {
    user: {
      client_user_id: clientUserId,
    },
    client_name: 'Plaid Test App',
    products: [Products.Auth], 
    language: 'en',
  
    redirect_uri: 'http://localhost:3000/api/create-link-token',
    country_codes: [CountryCode.Us], // Use CountryCode enum instead of a plain string
  };

  try {
    const createTokenResponse = await client.linkTokenCreate(plaidRequest);


    return NextResponse.json(createTokenResponse.data); // Properly return the response
  } catch (error) {
    console.error('Error creating link token:', error);
    return NextResponse.json({ error: 'Failed to create link token' }, { status: 500 });
  }
}

