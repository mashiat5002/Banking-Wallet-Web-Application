"use client"
import { useSearchParams  } from 'next/navigation'

import ForCard from './ForCard/page'
import ForBank from './ForBank/page'
type status_data= {
  status:string,
  stts_color:string 
}
type propsType={
  status_data:status_data
  setSavingsSector:(value: string) => void
  system_id: string;
  system_type:string
}


const  RightSidePaymentForm:React.FC<propsType>=({system_id,system_type,status_data,setSavingsSector})=> {
    const searchParams = useSearchParams ();
  
  return (
    system_type=="bank"?<ForBank system_type={system_type} system_id={system_id} status_data={status_data} setSavingsSector={setSavingsSector}   />:<ForCard system_type={system_type} system_id={system_id} status_data={status_data}/>
  )
}
export default RightSidePaymentForm;