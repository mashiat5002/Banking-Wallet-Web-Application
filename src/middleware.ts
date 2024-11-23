import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const session=cookies().get("session")?.value;
  // console.log("middleware")
  const pathnext= request.nextUrl.pathname;
  if(pathnext=="/api/login_cookie_auth" )
    return NextResponse.next();
  
  if(session){ 
    return NextResponse.next();
  }
  else return NextResponse.json({"session":"no stored"})
}

export const config={
 matcher: ['/homepage/:path*', '/api/:path*']
}











