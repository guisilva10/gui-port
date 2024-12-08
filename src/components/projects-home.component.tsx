import { Project } from "@/app/types";
import { ProjectCarousel } from "./project-carousel-home.component";
import { cn } from "@/lib/utils";
import GridPattern from "./ui/grid-pattern";

const projects: Project[] = [
  {
    id: "1",
    title: "E-commerce Platform",
    description:
      "Uma loja online completa com autenticação de usuário e integração de pagamentos.",
    imageUrl: "/admin.png",
    languages: ["Next", "Prisma", "Clerk", "Shadcn", "Tailwind", "Typescript"],
    projectUrl: "https://sorelluxe-admin.vercel.app/",
  },
  {
    id: "2",
    title: "Taskly AI",
    description:
      "Uma ferramenta colaborativa de gerenciamento de tarefas com atualizações em tempo real.",
    imageUrl: "/better-ofc.png",
    languages: [
      "Next",
      "Next-Auth",
      "Prisma",
      "Shadcn",
      "Typescript",
      "Tailwind",
    ],
    projectUrl: "https://taskly-ai.vercel.app/",
  },
  {
    id: "3",
    title: "Finance Go",
    description: "Gerencie suas finanças pessoais em um painel intuitivo.",
    imageUrl: "/finance-go.png",
    languages: ["Next", "Hono", "Prisma", "Shadcn", "Typescript", "Tailwind"],
    projectUrl: "https://finance-go.vercel.app/",
  },
  {
    id: "4",
    title: "Manager Tech",
    description:
      "Gerencie suas tarefas como equipe, com análise de tarefas e projetos.",
    imageUrl: "/manager-tech.png",
    languages: [
      "Next",
      "Hono",
      "Prisma",
      "Shadcn",
      "Typescript",
      "Tailwind",
      "AppWrite",
    ],
    projectUrl: "https://manager-tech.vercel.app/",
  },
  {
    id: "5",
    title: "Tech Call",
    description:
      "Agende reuniões e tenha um controle de agendamentos com o Tech Call.",
    imageUrl: "/tech-call.png",
    languages: ["Next", "Prisma", "Clerk", "Shadcn", "Tailwind", "Typescript"],
    projectUrl: "https://tech-call.vercel.app",
  },
  {
    id: "6",
    title: "Mentoria Vanguardista",
    description:
      "Entre para a mentoria vanguardista e aprenda sobre: Marketing Digital, Criação de sites, Criação de conteúdo e muito mais.",
    imageUrl: "/mentoria.png",
    languages: ["Next", "Sass", "Typescript", "Lottie Web"],
    projectUrl: "https://mentoriavanguardista.vercel.app",
  },
];

const ProjectsHome = () => {
  return (
    <div className="relative flex items-center justify-center flex-col py-24">
      <h1 className="mt-2 text-3xl text-center lg:text-start font-bold tracking-tight sm:text-4xl">
        O que nós já fizemos ?
      </h1>
      <p className="font-semibold leading-7 text-primary">
        Confira alguns projetos reais.
      </p>
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
      <ProjectCarousel projects={projects} />
    </div>
  );
};

export default ProjectsHome;
