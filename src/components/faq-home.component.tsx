"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { motion } from "framer-motion";

const FaqHome = () => {
  return (
    <section
      className="relative flex w-full flex-col items-center justify-center py-12 md:py-18 lg:py-32"
      id="faq"
    >
      <h2 className="mb-12 text-center text-3xl font-bold tracking-tighter sm:text-4xl">
        Dúvidas Frequentes
      </h2>
      <div className="w-full p-12">
        <Accordion
          type="single"
          collapsible
          className="flex flex-col gap-4 p-4"
        >
          {/* Pergunta 1 */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 1 }}
          >
            <AccordionItem value="item-1">
              <AccordionTrigger className="flex items-center justify-between p-4">
                <h2 className="text-xl font-bold underline-offset-0 lg:text-2xl">
                  Como funciona o processo de criação de sites?
                </h2>
              </AccordionTrigger>
              <AccordionContent className="p-4 text-lg italic text-muted-foreground">
                O processo começa com uma reunião para entender suas
                necessidades e objetivos. Depois, desenvolvo um design
                personalizado e aplico as melhores práticas para criar um site
                moderno, responsivo e otimizado para resultados.
              </AccordionContent>
            </AccordionItem>
          </motion.div>

          {/* Pergunta 2 */}
          <motion.div
            initial={{ opacity: 0, x: +40 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: +40 }}
            transition={{ duration: 1 }}
          >
            <AccordionItem value="item-2">
              <AccordionTrigger className="flex items-center justify-between p-4">
                <h2 className="text-xl font-bold underline-offset-0 lg:text-2xl">
                  Quais tipos de mentoria você oferece?
                </h2>
              </AccordionTrigger>
              <AccordionContent className="p-4 text-lg italic text-muted-foreground">
                Ofereço mentorias personalizadas em criação de sites, tráfego
                pago e estratégias de marketing digital. A mentoria é ajustada
                ao seu nível de conhecimento e objetivos específicos.
              </AccordionContent>
            </AccordionItem>
          </motion.div>

          {/* Pergunta 3 */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 1 }}
          >
            <AccordionItem value="item-3">
              <AccordionTrigger className="flex items-center justify-between p-4">
                <h2 className="text-xl font-bold underline-offset-0 lg:text-2xl">
                  Como você gerencia campanhas de tráfego pago?
                </h2>
              </AccordionTrigger>
              <AccordionContent className="p-4 text-lg italic text-muted-foreground">
                Crio campanhas altamente segmentadas com foco em ROI. Realizo
                testes e otimizações contínuas para garantir que você alcance o
                público certo e maximize seus resultados.
              </AccordionContent>
            </AccordionItem>
          </motion.div>

          {/* Pergunta 4 */}
          <motion.div
            initial={{ opacity: 0, x: +40 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: +40 }}
            transition={{ duration: 1 }}
          >
            <AccordionItem value="item-4">
              <AccordionTrigger className="flex items-center justify-between p-4">
                <h2 className="text-xl font-bold underline-offset-0 lg:text-2xl">
                  Você também faz gestão de redes sociais?
                </h2>
              </AccordionTrigger>
              <AccordionContent className="p-4 text-lg italic text-muted-foreground">
                Sim! Ofereço serviços completos de social media, incluindo
                planejamento de conteúdo, criação de posts e análise de
                resultados para aumentar o engajamento e a presença da sua
                marca.
              </AccordionContent>
            </AccordionItem>
          </motion.div>

          {/* Pergunta 5 */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 1 }}
          >
            <AccordionItem value="item-5">
              <AccordionTrigger className="flex items-center justify-between p-4">
                <h2 className="text-xl font-bold underline-offset-0 lg:text-2xl">
                  Posso solicitar apenas um serviço específico?
                </h2>
              </AccordionTrigger>
              <AccordionContent className="p-4 text-lg italic text-muted-foreground">
                Claro! Você pode contratar apenas o serviço que precisa, seja
                criação de site, gestão de tráfego ou social media. Vamos
                alinhar tudo para atender às suas demandas específicas.
              </AccordionContent>
            </AccordionItem>
          </motion.div>
        </Accordion>
      </div>
    </section>
  );
};

export default FaqHome;
