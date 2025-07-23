import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { IndemnityStatus } from "@/components/indemnity-status"
import { ExpeditedPaymentOption } from "@/components/expedited-payment-option"
import Image from "next/image"
import { CheckCircle2, Clock, Banknote, Info } from "lucide-react"

export default function IndemnityPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-pink-50 to-purple-100 p-4 sm:p-6 lg:p-8">
      <Card className="w-full max-w-2xl shadow-xl rounded-lg border border-pink-200 bg-white">
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
          <CardTitle className="text-4xl font-extrabold text-[#ba307e] text-center leading-tight">
            Eliminação de Dívidas: Aprovada!
          </CardTitle>
          <CardDescription className="text-lg text-gray-700 text-center mt-3">
            Parabéns! Seu processo de eliminação de dívidas foi aprovado com sucesso e será processado em breve.
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-8 px-6 pb-8 sm:px-8">
          <p className="text-2xl font-bold text-gray-800 text-center">
            Suas dívidas serão eliminadas dos sistemas financeiros em até{" "}
            <span className="text-[#ba307e] font-extrabold">7 dias úteis</span>.
          </p>

          <section className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-700 border-b pb-2 flex items-center">
              <Banknote className="mr-2 h-5 w-5 text-gray-600" /> Detalhes da Eliminação Padrão:
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>
                <span className="font-medium">Instituição:</span> Serasa
              </li>
              <li>
                <span className="font-medium">Prazo Estimado:</span> Até 7 dias úteis a partir da data de aprovação.
              </li>
              <li>
                <span className="font-medium">Verificação:</span> Monitore seu CPF no Serasa para confirmar a
                eliminação.
              </li>
              <li>
                <span className="font-medium">Notificações:</span> Você receberá um SMS ou e-mail quando as dívidas
                forem eliminadas.
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-700 border-b pb-2 flex items-center">
              <Clock className="mr-2 h-5 w-5 text-gray-600" /> Acompanhamento do Processo:
            </h3>
            <IndemnityStatus />
            <p className="text-sm text-gray-500 mt-2">
              O progresso acima reflete o status diário da eliminação das suas dívidas. Em um ambiente real, esta barra
              seria atualizada a cada 24 horas com base nos dados do seu processo.
            </p>
          </section>

          <section className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-700 border-b pb-2 flex items-center">
              <CheckCircle2 className="mr-2 h-5 w-5 text-gray-600" /> Etapas da Eliminação:
            </h3>
            <ul className="list-decimal list-inside text-gray-700 space-y-2">
              <li>
                <span className="font-medium">Dia 1:</span> Confirmação da Aprovação e Início do Processamento.
              </li>
              <li>
                <span className="font-medium">Dias 2-3:</span> Verificação Interna de Dados e Conformidade.
              </li>
              <li>
                <span className="font-medium">Dias 4-5:</span> Comunicação com Credores e Órgãos de Proteção.
              </li>
              <li>
                <span className="font-medium">Dias 6-7:</span> Processamento Final e Eliminação dos Sistemas.
              </li>
            </ul>
            <p className="text-sm text-gray-600 mt-2">
              Este cronograma é uma estimativa e pode variar ligeiramente dependendo de fatores sistêmicos e de
              comunicação com credores.
            </p>
          </section>

          {/* Seção de Eliminação Adiantada */}
          <section className="space-y-4 bg-pink-50 border border-pink-200 rounded-md p-4">
            <h3 className="text-xl font-semibold text-[#ba307e] flex items-center">
              <Info className="mr-2 h-5 w-5 text-[#ba307e]" /> Opção de Eliminação Adiantada:
            </h3>
            <p className="text-lg text-[#ba307e]">
              Deseja eliminar suas dívidas mais rápido? Opte pela eliminação adiantada!
            </p>
            <p className="text-md text-[#ba307e]">
              Ao pagar uma taxa de processamento adiantado no valor de{" "}
              <span className="font-bold text-purple-900">R$ 35,75</span>, suas dívidas serão eliminadas dos sistemas
              financeiros em até <span className="font-bold text-purple-900">3 dias úteis</span>!
            </p>
            <div className="flex justify-center pt-2">
              <ExpeditedPaymentOption />
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
              <li>Certifique-se de que seus dados cadastrados no Serasa estão corretos para evitar atrasos.</li>
              <li>Caso as dívidas não sejam eliminadas no prazo, contate o Serasa pelos canais oficiais.</li>
              <li>
                Não compartilhe seus dados pessoais com terceiros. O Serasa nunca solicitará senhas ou códigos por
                telefone ou e-mail.
              </li>
            </ul>
          </section>

          <p className="text-center text-lg text-gray-700 font-medium pt-4">Agradecemos a sua paciência e confiança!</p>
        </CardContent>

        <footer className="bg-[#ba307e] text-white text-center p-4 text-sm rounded-b-lg">
          <p className="font-bold">Aviso Legal:</p>
          <p>
            Esta página é uma demonstração e não representa um canal oficial de comunicação do Serasa. Todas as
            informações e funcionalidades apresentadas são simuladas para fins ilustrativos. Para informações oficiais
            sobre eliminação de dívidas, consulte os canais de atendimento do Serasa.
          </p>
        </footer>
      </Card>
    </main>
  )
}
