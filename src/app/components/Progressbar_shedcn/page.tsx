"use client"

import * as React from "react"

import { Progress } from "@/components/ui/progress"
type props={
    percent:number
}
const ProgressDemo: React.FC<props> =({percent})=> {
  const [progress, setProgress] = React.useState(0)

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500)
    return () => clearTimeout(timer)
  }, [])

  return <Progress value={percent} className="h-2  w-[100%] bg-slate-600" />
}
export default ProgressDemo;