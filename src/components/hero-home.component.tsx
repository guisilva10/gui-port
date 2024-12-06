"use client";
import { motion } from "framer-motion";

import ImageContainer from "./image-container.component";
import { Button } from "./ui/button";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const HeroHome = () => {
  return (
    <motion.section
      className="relative flex items-center justify-center  overflow-hidden p-4 h-screen"
      initial={{ opacity: 0, y: +200 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: +200 }}
      transition={{ duration: 1 }}
    >
      <ImageContainer />
      <div className="relative z-10 w-full items-center">
        <div className="text-center">
          <h1 className=" text-3xl font-medium leading-none sm:text-6xl md:text-7xl lg:text-6xl">
            Transformando ideias em:{" "}
            <span className="block text-primary font-bold">
              Realidade Digital
            </span>
          </h1>

          <p className="mx-auto mt-4 max-w-xl italic text-muted-foreground lg:text-lg">
            Dê vida às suas ideias com a nossa equipe. Eu e a StarTech
            transformamos suas visões em conquistas digitais, oferecendo
            soluções sob medida e inovadoras para o sucesso do seu negócio
          </p>
        </div>
        <div className="flex items-center justify-center mt-10 gap-4">
          <Button className="font-normal text-sm button-primary" asChild>
            <Link href="#cta">Saber Mais</Link>
          </Button>
          <Button variant="outline" className="font-normal text-sm" asChild>
            <Link href="https://agencestartech.vercel.app/" target="_blank">
              StarTech
              <ChevronRight />
            </Link>
          </Button>
        </div>
      </div>
    </motion.section>
  );
};
export default HeroHome;
