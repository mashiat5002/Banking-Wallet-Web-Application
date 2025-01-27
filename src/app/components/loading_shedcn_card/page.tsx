import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'

export default function Loading_shed_cn_card() {
  return (
    <div className="ml-5 flex flex-col space-y-3 h-10/12 w-11/12 ">
      <Skeleton className="h-10/12 w-5/6 rounded-xl bg-custom-black" />
      <div className="h-2/12 space-y-2">
        <Skeleton className="h-1/3 w-2/3 bg-custom-black" />
        <Skeleton className="h-1/3 w-2/3 bg-custom-black" />
      </div>
    </div>
  )
}
