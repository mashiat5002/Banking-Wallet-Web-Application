

"use server";
import { login } from "@/app/api/Login_Auth/login_auth";

export async function handleSubmit(formData:FormData) {

    await login(formData);
    
   
}
