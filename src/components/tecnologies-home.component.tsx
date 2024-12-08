import { cn } from "@/lib/utils";
import { AnimatedListHome } from "./animated-list-home.component";
import GridPattern from "./ui/grid-pattern";

const TecnologiesHome = () => {
  return (
    <div className="relative py-24 max-w-sm md:max-w-2xl lg:max-w-4xl gap-4 xl:max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-center">
      <div className=" flex items-start justify-start flex-col w-full ">
        <h1 className="mt-2 text-3xl text-center lg:text-start font-bold tracking-tight sm:text-4xl">
          Com o que Trabalhamos ?
        </h1>
        <p className="mt-6 text-base  text-muted-foreground ">
          Na nossa agência, combinamos:{" "}
          <span className="text-primary text-base leading-snug line-clamp-1">
            {" "}
            criatividade e tecnologia
          </span>
          de ponta para entregar soluções digitais que realmente fazem a
          diferença. Utilizamos um conjunto moderno e eficiente de ferramentas e
          tecnologias para criar sites e aplicações performáticas, intuitivas e
          visualmente atraentes.
        </p>
        <p className="mt-6 text-base leading-snug text-muted-foreground ">
          Com essa stack tecnológica, garantimos que seu projeto não só tenha um
          design incrível, mas também ofereça alta performance, segurança e uma
          experiência de usuário impecável. Nossa missão é
          <span className="text-primary text-base leading-snug">
            {" "}
            transformar suas ideias em realidade digital!
          </span>
        </p>
      </div>
      <div className="relative z-10 bg-background flex h-[500px] w-full  flex-col items-center justify-center overflow-hidden rounded-lg md:shadow-xl">
        <AnimatedListHome />
      </div>
      <GridPattern
        width={30}
        height={30}
        x={-1}
        y={-1}
        strokeDasharray={"4 2"}
        className={cn(
          "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]"
        )}
      />
    </div>
  );
};

export default TecnologiesHome;
