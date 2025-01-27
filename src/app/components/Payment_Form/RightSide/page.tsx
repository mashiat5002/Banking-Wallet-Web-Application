"use client"
import { useSearchParams  } from 'next/navigation'

import ForCard from './ForCard/page'
import ForBank from './ForBank/page'
type status_data= {
  status:string,
}
type propsType={
  status_data:status_data
  setSavingsSector:(value: string) => void
  system_id: string;
  system_type:string;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
  setLoading_2: React.Dispatch<React.SetStateAction<boolean>>
}


const  RightSidePaymentForm:React.FC<propsType>=({setLoading,setLoading_2,system_id,system_type,status_data,setSavingsSector})=> {
  
  return (
    system_type=="bank"?<ForBank setLoading={setLoading} system_type={system_type} system_id={system_id} status_data={status_data} setSavingsSector={setSavingsSector}   />:<ForCard setLoading_2={setLoading_2} system_type={system_type} system_id={system_id} status_data={status_data}/>
  )
}
export default RightSidePaymentForm;