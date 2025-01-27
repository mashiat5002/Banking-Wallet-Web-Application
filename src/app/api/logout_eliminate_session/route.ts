import { NextRequest, NextResponse } from "next/server";
import { cookies } from 'next/headers';

export async function POST(request: NextRequest) {
  // Clear the session cookie to log out the user
  cookies().set('session', '', {
    expires: new Date(0), // Expiry date in the past, to delete the cookie
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    path: '/', // Ensure it works for the entire site
  });

  // Optionally, you can redirect the user after logout
  return NextResponse.redirect(new URL('/', request.url)); // Redirect to login page
}
