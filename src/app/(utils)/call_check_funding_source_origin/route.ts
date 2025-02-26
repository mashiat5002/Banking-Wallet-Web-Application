import { Call_remover_funding_src } from "../call_remover_funding_source/route";
import { call_Sender_card } from "../call_sender_with_card/route";

export async function check_funding_source_origin(routing_no:string,acc_no:string,name:string,amount:string,payment_method:string,recipient_name:string) {
    const res= await fetch(`${process.env.NEXT_PUBLIC_Base_Url}/api/check_funding_source_origin`,{
        method:"POST",
        headers:{
            "Content-Type": "application/json",
            "Cookie": document.cookie,
        },
        body:JSON.stringify({  
            "routingNumber": routing_no,
            "accountNumber": acc_no,
            "amount": amount,
            "payment_method": payment_method,
            "receiver": `Routing no: ${routing_no}, Account no: ${acc_no}`,
            "name": name})
        
    })
    console.log("final_res",final_res)
    const final_res= await res.json();
    
    if(final_res.response=="DuplicateResource"){
        return "DuplicateResource"
    }
    else if(final_res.response=="201"){
        await call_Sender_card(amount,payment_method,`Routing no: ${routing_no}, Account no: ${acc_no}`,"",recipient_name)
        await  Call_remover_funding_src("");
        return final_res.response;
    }
    else if(final_res.response=="Routing number must be exactly 9 characters."){
       
        return final_res.response;
    }
}