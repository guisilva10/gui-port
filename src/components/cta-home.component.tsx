"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/button";
import Link from "next/link";
import RetroGrid from "./ui/retro-grid";

const CtaHome = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: +200 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: +200 }}
      transition={{ duration: 1 }}
      id="cta"
      className=" relative mx-auto mb-20 max-w-7xl sm:px-6 lg:px-8"
    >
      <div className="relative isolate overflow-hidden bg-transparent px-6 py-20 text-center rounded-md sm:px-16 sm:shadow-sm">
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
      </div>
    </motion.section>
  );
};

export default CtaHome;
