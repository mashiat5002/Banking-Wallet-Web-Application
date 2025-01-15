import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'

export default function Loading_shed_cn_card() {
  return (
    <div className="flex flex-col space-y-3 h-full w-full ">
      <Skeleton className="h-[125px] w-5/6 rounded-xl bg-custom-black" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-2/3 bg-custom-black" />
        <Skeleton className="h-4 w-2/3 bg-custom-black" />
      </div>
    </div>
  )
}
