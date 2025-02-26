import { call_Sender_bank } from "../call_sender_with_bank/route";
import { call_spend_card_balance } from "../call_spend_card_balance/route";

export async function call_Sender_card(amount:string,sender:string,receiver:string,selected:string,recipient_name:string) {
     
    console.log("recipient==="+recipient_name)
    if(selected=="1"){
        const res_bank= await call_Sender_bank(amount, sender, receiver,selected);
        console.log(res_bank)
        if(res_bank.status==201){
            const res= await fetch(`${process.env.NEXT_PUBLIC_Base_Url}/api/send_money_with_card`,{
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
        const res= await fetch(`${process.env.NEXT_PUBLIC_Base_Url}/api/send_money_with_card`,{
            method:"POST",
            body:JSON.stringify({
                "amount":amount,
                "sender":sender,
                "receiver":receiver,
                "recipient":recipient_name
            })
        })
      
        console.log(res)
        const data= await res.json()
        console.log(data)
        if(data.response.status=="succeeded")
        {
            await call_spend_card_balance(amount);
            return data.response
        }
    
        return data.response;


    }
    
    
}