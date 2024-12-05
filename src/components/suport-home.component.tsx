"use client";

import Link from "next/link";
import { SlEarphonesAlt } from "react-icons/sl";
import { motion } from "framer-motion";

const Support = () => {
  return (
    <motion.div
      className="button-primary fixed bottom-4 right-3 z-10 flex items-center justify-center rounded-full"
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ duration: 1 }}
    >
      <Link
        href="https://api.whatsapp.com/send?phone=5511916708354&text=Olá, gostaria de tirar uma dúvida sobre o serviço de vocês, é por aqui mesmo ?"
        target="_blank"
        className="flex items-center justify-center p-4"
      >
        <SlEarphonesAlt className="size-6 text-white" />
      </Link>
    </motion.div>
  );
};

export default Support;
