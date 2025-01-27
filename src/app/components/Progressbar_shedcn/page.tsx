"use client"

import * as React from "react"

import { Progress } from "@/components/ui/progress"
import MyContext from "../MyContext/route"
type props={
    percent:number
}
const ProgressDemo: React.FC<props> =({percent})=> {
  const [progress, setProgress] = React.useState(0)
  const {card_bank_reload,setcard_bank_reload}= React.useContext(MyContext)

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500)
    return () => clearTimeout(timer)
  }, [card_bank_reload])

  return <Progress value={percent} className="h-2  w-[100%] bg-slate-600" />
}
export default ProgressDemo;