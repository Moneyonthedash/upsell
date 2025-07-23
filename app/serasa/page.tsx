import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { NegotiationStatus } from "@/components/negotiation-status"
import { ExpeditedClearanceOption } from "@/components/expedited-clearance-option"
import { CheckCircle2, Clock, CreditCard, Info } from "lucide-react"
import Image from "next/image"

export default function SerasaPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-red-50 to-orange-100 p-4 sm:p-6 lg:p-8">
      <Card className="w-full max-w-2xl shadow-xl rounded-lg border border-red-200 bg-white">
        <CardHeader className="pb-6 pt-8 px-6 sm:px-8">
          <div className="flex justify-center mb-6">
            <Image
              src="/images/serasa-logo-final.png"
              alt="Logo oficial do Serasa"
              width={200}
              height={60}
              className="object-contain"
            />
          </div>
          <CardTitle className="text-4xl font-extrabold text-red-700 text-center leading-tight">
            Negociação Aprovada!
          </CardTitle>
          <CardDescription className="text-lg text-gray-700 text-center mt-3">
            Parabéns! Sua negociação foi aprovada com sucesso e seu nome será limpo em breve.
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-8 px-6 pb-8 sm:px-8">
          <p className="text-2xl font-bold text-gray-800 text-center">
            Sua negociação foi aprovada! Seu nome será limpo em até{" "}
            <span className="text-red-600 font-extrabold">5 dias úteis</span> após a confirmação do pagamento.
          </p>

          <section className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-700 border-b pb-2 flex items-center">
              <CreditCard className="mr-2 h-5 w-5 text-gray-600" /> Detalhes da Negociação:
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>
                <span className="font-medium">Valor Original da Dívida:</span> R$ 2.847,92
              </li>
              <li>
                <span className="font-medium">Valor Negociado:</span> R$ 1.423,96 (50% de desconto)
              </li>
              <li>
                <span className="font-medium">Prazo para Limpeza:</span> Até 5 dias úteis após confirmação do pagamento
              </li>
              <li>
                <span className="font-medium">Credor:</span> Banco Bradesco S.A.
              </li>
              <li>
                <span className="font-medium">Notificações:</span> Você receberá SMS e e-mail quando seu nome for limpo
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-700 border-b pb-2 flex items-center">
              <Clock className="mr-2 h-5 w-5 text-gray-600" /> Acompanhamento do Processo:
            </h3>
            <NegotiationStatus />
            <p className="text-sm text-gray-500 mt-2">
              O progresso acima reflete o status diário da limpeza do seu nome. Em um ambiente real, esta barra seria
              atualizada a cada 24 horas com base nos dados do seu processo.
            </p>
          </section>

          <section className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-700 border-b pb-2 flex items-center">
              <CheckCircle2 className="mr-2 h-5 w-5 text-gray-600" /> Etapas da Limpeza:
            </h3>
            <ul className="list-decimal list-inside text-gray-700 space-y-2">
              <li>
                <span className="font-medium">Dia 1:</span> Confirmação do Pagamento e Início do Processamento.
              </li>
              <li>
                <span className="font-medium">Dias 2-3:</span> Comunicação com o Credor e Baixa da Dívida.
              </li>
              <li>
                <span className="font-medium">Dias 4-5:</span> Atualização dos Órgãos de Proteção ao Crédito.
              </li>
              <li>
                <span className="font-medium">Finalização:</span> Nome Limpo e Score Atualizado.
              </li>
            </ul>
            <p className="text-sm text-gray-600 mt-2">
              Este cronograma é uma estimativa e pode variar ligeiramente dependendo da resposta do credor.
            </p>
          </section>

          {/* Seção de Limpeza Expressa */}
          <section className="space-y-4 bg-red-50 border border-red-200 rounded-md p-4">
            <h3 className="text-xl font-semibold text-red-800 flex items-center">
              <Info className="mr-2 h-5 w-5 text-red-700" /> Opção de Limpeza Expressa:
            </h3>
            <p className="text-lg text-red-700">Quer limpar seu nome ainda mais rápido? Opte pela limpeza expressa!</p>
            <p className="text-md text-red-700">
              Ao pagar uma taxa de processamento expresso no valor de{" "}
              <span className="font-bold text-red-900">R$ 47,90</span>, seu nome será limpo em até{" "}
              <span className="font-bold text-red-900">24 horas</span>!
            </p>
            <div className="flex justify-center pt-2">
              <ExpeditedClearanceOption />
            </div>
            <p className="text-sm text-gray-600 mt-2">
              Ao clicar no botão, você será redirecionado para uma página externa para efetuar o pagamento da taxa.
            </p>
          </section>

          <section className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-700 border-b pb-2 flex items-center">
              <Info className="mr-2 h-5 w-5 text-gray-600" /> Informações Importantes:
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Mantenha seus dados atualizados no Serasa para receber as notificações.</li>
              <li>Após a limpeza, aguarde até 48h para que seu score seja atualizado.</li>
              <li>
                Não compartilhe seus dados pessoais com terceiros. O Serasa nunca solicita senhas ou códigos por
                telefone.
              </li>
              <li>Você pode acompanhar seu CPF gratuitamente pelo app Serasa ou site oficial.</li>
            </ul>
          </section>

          <p className="text-center text-lg text-gray-700 font-medium pt-4">
            Parabéns por dar este importante passo para limpar seu nome!
          </p>
        </CardContent>

        <footer className="bg-red-700 text-white text-center p-4 text-sm rounded-b-lg">
          <p className="font-bold">Aviso Legal:</p>
          <p>
            Esta página é uma demonstração e não representa um canal oficial de comunicação do Serasa. Todas as
            informações e funcionalidades apresentadas são simuladas para fins ilustrativos. Para informações oficiais
            sobre sua negociação, consulte os canais de atendimento do Serasa.
          </p>
        </footer>
      </Card>
    </main>
  )
}
