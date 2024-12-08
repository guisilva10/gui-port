/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";

import { CardContent } from "./ui/card";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa6";
import { Avatar, AvatarFallback } from "./ui/avatar";

const feedbacks = [
  {
    id: 1,
    username: "João Silva",
    comment:
      "A criação do meu site superou todas as expectativas. Design moderno e performance impecável. Meu negócio nunca esteve tão visível online!",
    rating: 5.0,
  },
  {
    id: 2,
    username: "Maria Oliveira",
    comment:
      "A estratégia de tráfego pago gerou resultados incríveis. Aumentamos nossas vendas em pouco tempo. Recomendo muito!!",
    rating: 4.9,
  },
  {
    id: 3,
    username: "Carlos Mendes",
    comment:
      "A gestão das redes sociais elevou a presença digital da minha empresa. Posts criativos e resultados visíveis em engajamento e seguidores.",
    rating: 4.8,
  },
  {
    id: 4,
    username: "Ana Costa",
    comment:
      "Participei da mentoria e aprendi estratégias valiosas. Agora consigo gerenciar meu próprio tráfego pago com confiança e resultados.",
    rating: 5.0,
  },
  {
    id: 5,
    username: "Roberto Lima",
    comment:
      "O serviço de criação de sites é excelente! Meu site ficou rápido, otimizado e com um visual incrível. O suporte foi impecável do início ao fim.",
    rating: 4.9,
  },
];

const FeedbacksHome = () => {
  return (
    <section id="feedbacks" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="mb-12 text-center text-3xl font-bold tracking-tighter sm:text-4xl">
          O Que Nossos Clientes Dizem
        </h2>

        {/* Feedbacks dos Clientes */}
        <motion.div className="flex overflow-hidden">
          <motion.div
            className="flex items-center justify-center space-x-6 mb-4"
            initial={{ x: 100 }}
            animate={{ x: "-100%" }}
            transition={{
              repeat: Infinity,
              duration: 30,
              ease: "linear",
            }}
          >
            {[...feedbacks, ...feedbacks].map((feedback) => (
              <div
                key={feedback.id}
                className="min-w-[300px] rounded-xl border"
              >
                <CardContent className="flex flex-col space-y-4 p-6">
                  <div className="flex items-center justify-between gap-x-3">
                    <div className="flex items-center gap-2">
                      <Avatar>
                        <AvatarFallback>
                          {feedback.username.charAt(0).toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                      <p className="font-semibold text-start">
                        {feedback.username}
                      </p>
                    </div>
                    <img className="size-6" src="/google.svg" />
                  </div>
                  <p className="text-sm italic text-gray-500 dark:text-gray-400">
                    &quot;{feedback.comment}&quot;
                  </p>
                  <p className="flex items-center gap-2 text-sm font-bold">
                    <FaStar className="text-yellow-500" />
                    {feedback.rating.toFixed(1)}
                  </p>
                </CardContent>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeedbacksHome;
