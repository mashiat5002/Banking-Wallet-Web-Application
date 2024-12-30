export async function call_Sender_bank(amount:string,sender:string,receiver:string,selected:string) {
    const res= await fetch("http://localhost:3000/api/send_money_from_bank",{
        method:"POST",
        body:JSON.stringify({
            "amount":amount,
            "sender":sender,
            "receiver":receiver,
            "selected":selected
        })
    })
   
    const data= await res.json()
  
    return data;
    
}