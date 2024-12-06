"use client";
import { motion } from "framer-motion";

import { Globe, Users, TrendingUp, Share2 } from "lucide-react";

const features = [
  {
    name: "Criação de Sites Sob Medida",
    description:
      "Desenvolvemos sites profissionais e personalizados que destacam sua marca e impulsionam resultados. Transforme suas ideias em uma presença digital poderosa.",
    icon: Globe,
  },
  {
    name: "Mentoria Personalizada",
    description:
      "Receba orientação exclusiva para otimizar seu negócio digital. Conte com insights estratégicos e soluções práticas para crescer de forma sustentável.",
    icon: Users,
  },
  {
    name: "Tráfego Pago Estratégico",
    description:
      "Atraia mais clientes com campanhas de tráfego pago otimizadas. Alcançamos seu público ideal com anúncios altamente segmentados e de alto desempenho.",
    icon: TrendingUp,
  },
  {
    name: "Gestão de Social Media",
    description:
      "Fortaleça sua presença nas redes sociais com conteúdos estratégicos e engajamento contínuo. Conecte-se com seu público e aumente sua autoridade online.",
    icon: Share2,
  },
];

const FeaturesHome = () => {
  return (
    <motion.div
      id="features"
      className="py-24 px-6"
      initial={{ opacity: 0, y: +200 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: +200 }}
      transition={{ duration: 1 }}
    >
      <div className="mx-auto max-w-2xl lg:text-center">
        <p className="font-semibold leading-7 text-primary">
          Potencialize seu negócio digital!
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
          Soluções completas para seu sucesso online
        </h1>
        <p className="mt-6 text-base leading-snug text-muted-foreground">
          Oferecemos serviços personalizados para transformar sua presença
          digital. Desde a criação de sites até campanhas de tráfego pago e
          social media, ajudamos você a alcançar resultados expressivos.
        </p>
      </div>

      <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
        <div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
          {features.map((feature) => (
            <div key={feature.name} className="relative pl-16">
              <div className="text-base font-semibold leading-7">
                <div className="button-primary absolute left-0 top-0 flex size-10 items-center justify-center rounded-lg">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                {feature.name}
              </div>
              <p className="mt-2 text-sm leading-snug text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default FeaturesHome;
