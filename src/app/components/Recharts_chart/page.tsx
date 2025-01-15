import React from 'react'
import { Bar, BarChart, ResponsiveContainer } from "recharts"
export default function Recharts_Chart() {
    const data = [
        {
          goal: 400,
        },
        {
          goal: 300,
        },
        {
          goal: 200,
        },
        {
          goal: 300,
        },
        {
          goal: 200,
        },
        {
          goal: 278,
        },
        {
          goal: 189,
        },
        {
          goal: 239,
        },
        {
          goal: 300,
        },
        {
          goal: 200,
        },
        {
          goal: 278,
        },
        {
          goal: 189,
        },
        {
          goal: 349,
        },
      ]
  return (
    <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <Bar
                  dataKey="goal"
                  style={
                    {
                      fill: "hsl(var(--foreground))",
                      opacity: 0.9,
                    } as React.CSSProperties
                  }
                />
              </BarChart>
            </ResponsiveContainer>
  )
}
