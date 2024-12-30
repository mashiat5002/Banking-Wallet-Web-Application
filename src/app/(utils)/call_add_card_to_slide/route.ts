export async function call_add_card_to_slide(number:string,name:string,exp:string,cvc:string) {
    const res= await fetch(`http://localhost:3000/api/add_to_card_slide`,{
        method:"POST",
        body:JSON.stringify({"number":number,"name":name,"exp":exp,"cvc":cvc})
        
    })
    const final_res= await res.json()
    console.log(final_res)
   return final_res.status
}