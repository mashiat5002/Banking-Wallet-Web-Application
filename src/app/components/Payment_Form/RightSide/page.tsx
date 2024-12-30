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
}
const  RightSidePaymentForm:React.FC<propsType>=(props)=> {
    const searchParams = useSearchParams ();
  
  return (
    searchParams.get("bank_id")?<ForBank status_data={props.status_data}/>:<ForCard status_data={props.status_data}/>
  )
}
export default RightSidePaymentForm;