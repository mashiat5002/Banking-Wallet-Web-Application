import React from 'react'
import Left_side_internal_user from '../LeftSide_internal_user/page'
import Left_side_external_user from '../Left_side_external_user/page'

type propsType={
    selected:string
    recipient:string
    from: string
    amount:Number
    
    
}

const Internal_External = ({recipient,from,amount,selected}:propsType) => {
  if(from.includes("Routing") )
    selected="2"
  return (
    selected=="1"?<Left_side_internal_user recipient={recipient} from={from} amount={amount}/>:<Left_side_external_user recipient={recipient} from={from} amount={amount}/>
  )
}

export default Internal_External


