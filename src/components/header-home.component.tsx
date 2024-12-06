"use client";
import Link from "next/link";

import { PhoneForwarded } from "lucide-react";

import { Button } from "./ui/button";
import { Logo } from "./logo";

const HeaderHome = () => {
  return (
    <header className="hidden lg:flex w-full items-center justify-around gap-4 my-5 px-8 bg-transparent">
      <Logo />

      <Button
        asChild
        className="ml-auto mr-3 text-sm font-semibold button-secondary"
        size="lg"
      >
        <Link
          target="_blank"
          href="https://api.whatsapp.com/send?phone=5511948798912&text=Olá, gostaria de falar com o Guilherme, é por aqui mesmo ?"
        >
          <PhoneForwarded className="mr-2 size-4" />
          Entrar em contato
        </Link>
      </Button>
    </header>
  );
};

export default HeaderHome;
