"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/button";
import Link from "next/link";

const CtaHome = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: +200 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: +200 }}
      transition={{ duration: 1 }}
      id="cta"
      className="mx-auto mb-20 max-w-7xl sm:px-6 lg:px-8"
    >
      <div className="relative isolate overflow-hidden px-6 py-20 text-center rounded-md sm:px-16 sm:shadow-sm">
        <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
          Transforme Suas Ideias em Sites de Alto Impacto
        </h2>
        <h3 className="mx-auto mt-6 max-w-xl text-lg leading-8 text-muted-foreground italic">
          Precisa de um site profissional ou quer tirar dúvidas sobre marketing
          digital? Entre em contato agora e leve seu projeto ao próximo nível
          com soluções personalizadas.
        </h3>
        <div className="mt-8 flex items-center justify-center gap-x-6">
          <Button asChild className="button-primary font-bold" size="sm">
            <Link
              href="https://api.whatsapp.com/send?phone=5511948798912&text=Olá, vim do site, gostaria de solicitar um orçamento?"
              target="_blank"
            >
              Fazer orçamento!
            </Link>
          </Button>
          <Button variant="outline" className=" font-bold" size="sm">
            <Link
              href="https://www.instagram.com/tngraphic_?igsh=MXg4bW1oYW9sMjV6cw%3D%3D"
              target="_blank"
            >
              WebDesign - Thaiza Nogueira
            </Link>
          </Button>
        </div>
        {/* gradient svg */}
        <svg
          viewBox="0 0 1024 1024"
          className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
          aria-hidden="true"
        >
          <circle
            cx={512}
            cy={512}
            r={512}
            fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)"
            fillOpacity="0.7"
          ></circle>
          <defs>
            <radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
              <stop stopColor="#C2410C" />
              <stop offset={1} stopColor="#9A3412" />
            </radialGradient>
          </defs>
        </svg>
      </div>
    </motion.section>
  );
};

export default CtaHome;
