"use client"

import { useEffect, useState } from "react"
import { Progress } from "@/components/ui/progress"

export function IndemnityStatus() {
  const totalDays = 7
  const [currentDay, setCurrentDay] = useState(1)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Simula avanço diário (1.5 s por dia só para preview).
    const interval = setInterval(() => {
      setCurrentDay((prev) => {
        const next = prev + 1
        if (next > totalDays) {
          clearInterval(interval)
          return totalDays
        }
        return next
      })
    }, 1500)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    setProgress((currentDay / totalDays) * 100)
  }, [currentDay])

  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm font-medium text-gray-700">
        <span className="sr-only">Progresso da Eliminação</span>
        <span>{`Dia ${currentDay} de ${totalDays}`}</span>
      </div>

      <Progress
        value={progress}
        className="w-full h-3 bg-gray-200 rounded-full"
        indicatorClassName="bg-[#ba307e] transition-all duration-500 ease-out"
      />
    </div>
  )
}
