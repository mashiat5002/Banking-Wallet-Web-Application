export async function call_api_Connected_banks(){
  const res= await fetch("http://localhost:3000/api/connected_banks",{
    method:"POST"
  })
  const account=await res.json();

     return account.connected_banks
    
  
}