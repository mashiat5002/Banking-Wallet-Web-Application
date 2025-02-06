


export async function call_update_password(email:string ,pass:string,key:string) {
    
    const res= await fetch(`http://localhost:3000/api/update_password`,{
        method:"POST",
        headers:{
            "Content-Type": "application/json"
        },
        body:JSON.stringify({"email":email,"pass":pass,"key":key})
        
        
    })
    const final_res= await res.json()

    return final_res.res;
   
}
