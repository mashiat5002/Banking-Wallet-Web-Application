import { NextRequest, NextResponse } from 'next/server';
import { Configuration, PlaidApi, PlaidEnvironments } from 'plaid';

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





export async function POST(request: NextRequest) {
    const body = await request.json();
    const { token } = body;

    const data = await client.itemPublicTokenExchange({
        public_token: token,
      });
      const accessToken= data.data
      
      console.log(typeof(data))

      return NextResponse.json({
        access_token: accessToken
      });
}


