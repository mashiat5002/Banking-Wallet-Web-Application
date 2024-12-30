import React from 'react'
import Left_side_internal_user from '../LeftSide_internal_user/page'
import Left_side_external_user from '../Left_side_external_user/page'

type propsType={
    selected:string
}

const Internal_External = ({selected}:propsType) => {
  return (
    selected=="1"?<Left_side_internal_user/>:<Left_side_external_user/>
  )
}

export default Internal_External


