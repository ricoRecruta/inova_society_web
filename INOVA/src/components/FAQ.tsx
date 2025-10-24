import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { HelpCircle } from 'lucide-react';

export function FAQ() {
  const faqs = [
    {
      question: 'Como posso solicitar um projeto com a Inova Society?',
      answer: 'É muito simples! Basta preencher nosso formulário de contato na seção "Contato" ou enviar um e-mail para nossa equipe. Entraremos em contato em até 24 horas para agendar uma reunião e entender melhor suas necessidades.'
    },
    {
      question: 'Vocês atendem apenas empresas da universidade?',
      answer: 'Não! Apesar de sermos uma empresa júnior universitária, atendemos clientes de todos os segmentos - desde startups e pequenas empresas até projetos pessoais. Nossa experiência acadêmica se traduz em soluções profissionais para qualquer tipo de cliente.'
    },
    {
      question: 'Qual é o prazo médio de entrega de um sistema?',
      answer: 'O prazo varia de acordo com a complexidade do projeto. Projetos simples podem ser entregues em 2-4 semanas, enquanto sistemas mais complexos podem levar de 2 a 4 meses. Durante a reunião inicial, fornecemos um cronograma detalhado baseado nos requisitos específicos.'
    },
    {
      question: 'Os projetos são realizados por alunos?',
      answer: 'Sim! Nossa equipe é composta por estudantes universitários altamente capacitados e supervisionados. Trabalhamos com metodologias profissionais e seguimos as melhores práticas do mercado, garantindo qualidade e profissionalismo em cada entrega.'
    },
    {
      question: 'Quais tecnologias vocês utilizam?',
      answer: 'Trabalhamos com as tecnologias mais modernas do mercado, incluindo React, Node.js, TypeScript, Python, React Native, e diversas outras ferramentas. Escolhemos a stack tecnológica ideal para cada projeto, considerando performance, escalabilidade e manutenibilidade.'
    },
    {
      question: 'Vocês oferecem suporte após a entrega do projeto?',
      answer: 'Sim! Oferecemos garantia e suporte técnico após a entrega. Também disponibilizamos planos de manutenção contínua para garantir que seu sistema permaneça atualizado e funcionando perfeitamente.'
    },
    {
      question: 'Como funciona o processo de desenvolvimento?',
      answer: 'Seguimos metodologias ágeis com entregas incrementais. Você acompanha o desenvolvimento através de reuniões regulares, tem acesso a versões de teste e pode solicitar ajustes durante todo o processo. Isso garante que o resultado final esteja alinhado com suas expectativas.'
    },
    {
      question: 'Qual é a forma de pagamento?',
      answer: 'Oferecemos condições flexíveis de pagamento, geralmente divididas em etapas do projeto. Discutimos as melhores opções durante a proposta comercial, sempre buscando adequar às necessidades do cliente.'
    }
  ];

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
            <HelpCircle className="text-blue-600" size={32} />
          </div>
          <h2 className="text-4xl text-blue-900 mb-4">Dúvidas Frequentes</h2>
          <div className="w-20 h-1 bg-blue-600 rounded mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg">
            Encontre respostas rápidas para as perguntas mais comuns sobre nossos serviços
          </p>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border-2 border-gray-100 rounded-xl px-6 hover:border-blue-200 transition-colors"
            >
              <AccordionTrigger className="text-left hover:text-blue-600 text-lg py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pb-6 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Additional Help */}
        <div className="mt-12 text-center p-8 bg-blue-50 rounded-2xl border border-blue-100">
          <p className="text-gray-700 text-lg">
            Não encontrou a resposta que procurava? <br />
            <a href="#contact" className="text-blue-600 hover:text-blue-700 underline">
              Entre em contato conosco
            </a> e teremos prazer em ajudar!
          </p>
        </div>
      </div>
    </section>
  );
}
