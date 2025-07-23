"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { ExternalLink } from "lucide-react" // Ícone para link externo

export function ExpeditedClearanceOption() {
  const [isOpen, setIsOpen] = useState(false)

  const handleRedirectToPayment = () => {
    // Abre o link em uma nova aba
    window.open("https://serasalimpanome.com.br/consulta/express/", "_blank")
    setIsOpen(false) // Fecha o modal após o redirecionamento
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-md text-lg shadow-md transition-colors duration-200">
          Quero Limpeza Expressa!
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] p-6">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center text-red-800">
            Confirmação de Limpeza Expressa
          </DialogTitle>
          <DialogDescription className="text-md text-gray-600 text-center mt-2">
            Ao confirmar, você será redirecionado para uma página externa para efetuar o pagamento da taxa e acelerar a
            limpeza do seu nome.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="text-center text-lg">
            <p className="font-semibold text-gray-800">
              Taxa de Processamento: <span className="text-red-700 font-bold">R$ 47,90</span>
            </p>
            <p className="font-semibold text-gray-800 mt-2">
              Valor da Negociação: <span className="text-green-700 font-bold">R$ 1.423,96</span>
            </p>
            <p className="font-semibold text-gray-800 mt-2">
              Prazo de Limpeza: <span className="text-red-600 font-bold">Até 24 horas</span>
            </p>
          </div>
          <p className="text-sm text-gray-500 text-center mt-4 flex items-center justify-center">
            <ExternalLink className="mr-1 h-4 w-4 text-gray-500" />
            Você será redirecionado para uma página externa.
          </p>
        </div>
        <DialogFooter className="flex flex-col sm:flex-row sm:justify-center gap-3 pt-4">
          <Button
            onClick={handleRedirectToPayment}
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md"
          >
            Confirmar e Pagar
          </Button>
          <Button
            variant="outline"
            onClick={() => setIsOpen(false)}
            className="border-gray-300 text-gray-700 hover:bg-gray-100"
          >
            Cancelar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
