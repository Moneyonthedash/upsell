"use client"

import { useEffect, useState } from "react"
import { Progress } from "@/components/ui/progress"

export function NegotiationStatus() {
  const totalDays = 5
  const [currentDay, setCurrentDay] = useState(1) // Inicia no Dia 1
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Simula o progresso diário para fins de demonstração.
    // Em uma aplicação real, esta atualização ocorreria a cada 24 horas
    // ou seria acionada por dados de backend que indicam o dia atual do processo.
    const interval = setInterval(() => {
      setCurrentDay((prev) => {
        const nextDay = prev + 1
        if (nextDay > totalDays) {
          clearInterval(interval)
          return totalDays // Garante que não exceda o total de dias
        }
        return nextDay
      })
    }, 1500) // Atualiza a cada 1.5 segundos para visualização na pré-visualização

    return () => clearInterval(interval) // Limpa o intervalo ao desmontar o componente
  }, [])

  useEffect(() => {
    // Calcula a porcentagem de progresso com base no dia atual
    setProgress((currentDay / totalDays) * 100)
  }, [currentDay, totalDays])

  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm font-medium text-gray-700">
        <span className="sr-only">Progresso da Limpeza do Nome</span>
        <span>{`Dia ${currentDay} de ${totalDays}`}</span>
      </div>

      <Progress
        value={progress}
        className="w-full h-3 bg-gray-200 rounded-full"
        indicatorClassName="bg-red-500 transition-all duration-500 ease-out"
      />
    </div>
  )
}
