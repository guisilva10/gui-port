"use client";
import { motion } from "framer-motion";

import ImageContainer from "./image-container.component";
import { Button } from "./ui/button";

const HeroHome = () => {
  return (
    <motion.section
      className="relative flex items-center justify-center overflow-hidden p-4"
      initial={{ opacity: 0, y: +200 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: +200 }}
      transition={{ duration: 1 }}
    >
      <ImageContainer />
      <div className="relative z-10 w-full items-center py-12 lg:py-20">
        <div className="text-center">
          <h1 className="mt-8 text-3xl font-medium leading-none sm:text-6xl md:text-7xl lg:text-6xl">
            Transformando ideias em:{" "}
            <span className="block text-primary">Realidade Digital</span>
          </h1>

          <p className="mx-auto mt-4 max-w-xl italic text-muted-foreground lg:text-lg">
            Deixe suas ideias ganharem vida no mundo digital. Transforme visões
            em conquistas com soluções sob medida para você!
          </p>
        </div>
        <div className="flex items-center justify-center mt-10 gap-4">
          <Button className="font-normal text-sm">Saiba mais</Button>
          <Button variant="outline" className="font-normal text-sm">
            Entre em contato
          </Button>
        </div>
      </div>
    </motion.section>
  );
};
export default HeroHome;
