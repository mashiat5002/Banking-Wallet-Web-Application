import { call_api_Connected_banks } from "../(call_api_function_connected_banks)/route";

export async function getSelecteBanksInfo(index:number) {
    const allCards= await call_api_Connected_banks();
    return allCards[index];
    
}