import { call_Sender_bank } from "../call_sender_with_bank/route";
import { call_spend_card_balance } from "../call_spend_card_balance/route";

export async function call_Sender_card(amount:string,sender:string,receiver:string,selected:string,recipient_name:string) {
     
    console.log("recipient==="+recipient_name)
    if(selected=="1"){
        const res_bank= await call_Sender_bank(amount, sender, receiver,selected);
        if(res_bank.status==201){
            // await call_Sender_card(amount,sender,receiver,selected)
            const res= await fetch("http://localhost:3000/api/send_money_with_card",{
                method:"POST",
                body:JSON.stringify({
                    "amount":amount,
                    "sender":sender,
                    "receiver":receiver,
                    "recipient":recipient_name
                    
                    
                })
            })
          
            const data= await res.json()
           
            if(data.response.status=="succeeded"){
                await call_spend_card_balance(amount);
                return data.response.status
            }
        
            return data.response;
        }
    }
    else{
        const res= await fetch("http://localhost:3000/api/send_money_with_card",{
            method:"POST",
            body:JSON.stringify({
                "amount":amount,
                "sender":sender,
                "receiver":receiver,
                "recipient":recipient_name
            })
        })
      
        const data= await res.json()
  
        if(data.response.status=="succeeded")
        {
            await call_spend_card_balance(amount);
            return data.response
        }
    
        return data.response;


    }
    
    
}