
import { get_dwolla_access_token } from "@/app/(utils)/(get_dwolla_access_token)/route";
import { get_dwolla_user_id } from "@/app/(utils)/(get_logged_in_dwolla_customer_id)/route";
import {  NextResponse } from "next/server";

export async function POST() {
  
    const id= await get_dwolla_user_id();
    const access= await get_dwolla_access_token();
    const response= await fetch(`https://api-sandbox.dwolla.com/customers/${id}/transfers`,{
        method:"GET",
        headers:{
            "Authorization":`Bearer ${access}`,
            "Accept":"application/vnd.dwolla.v1.hal+json",
            
        },
       
        
    })
    const final_res= await response.json()
    const arr= final_res._embedded.transfers;
    const weeks_list: any[] = []; 

    for(let i=1;i<8;i++){
        const rr= arr.filter(((x:any) => ((    ((new Date(x.created).getTime())/1000) >(Date.now()- (604800000* i))/1000)    && (((new Date(x.created).getTime())/1000) <(Date.now()- (604800000* (i-1)))/1000))))
        
        let sum=0;
        rr.map((x:any)=>{
      
            sum= sum+Number(x.amount.value)
        })
        console.log(sum)
        weeks_list[i]=sum;
        
    }
    return NextResponse.json(weeks_list)

   
}