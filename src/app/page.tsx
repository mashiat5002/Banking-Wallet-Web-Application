

import Homepage from "./components/Home Page/page";
import Landing_pg_Container from "./components/Landing Page/Container/Landing_pg_Container";
import Login from "./components/Login Form/page";


export default async function Home() {
  
  return <div className="h-screen w-screen">
   <Landing_pg_Container />
  </div>;
}

