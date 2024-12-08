"use client";
import { useTheme } from "next-themes";

import { MagicCard } from "./ui/magic-card";
import NumberTicker from "./ui/number-ticker";

export function RecordsHome() {
  const { theme } = useTheme();
  return (
    <div className="py-24 flex items-center justify-center flex-col p-8">
      <div className="flex h-[500px] w-full flex-col items-center justify-center gap-4 lg:h-[250px] lg:flex-row">
        <MagicCard
          className="cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap text-4xl"
          gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
        >
          <p className="text-xl font-semibold">Clientes</p>
          <NumberTicker value={100} />
        </MagicCard>
        <MagicCard
          className="cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap text-4xl"
          gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
        >
          <p className="text-xl font-semibold">Alunos</p>
          <NumberTicker value={100} />
        </MagicCard>
        <MagicCard
          className="cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap text-4xl"
          gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
        >
          <p className="text-xl font-semibold">Visualizações no Instagram</p>
          <NumberTicker value={100} />
        </MagicCard>
        <MagicCard
          className="cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap text-4xl"
          gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
        >
          <p className="text-xl font-semibold">Novos Seguidores</p>
          <NumberTicker value={150} />
        </MagicCard>
      </div>
    </div>
  );
}
