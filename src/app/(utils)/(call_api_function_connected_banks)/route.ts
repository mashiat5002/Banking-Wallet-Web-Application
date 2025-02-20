export async function call_api_Connected_banks(){
  const res= await fetch(`${process.env.NEXT_PUBLIC_Base_Url}/api/connected_banks`,{
    method:"POST"
  })
  const account=await res.json();
    
     return account.connected_banks
    
  
}