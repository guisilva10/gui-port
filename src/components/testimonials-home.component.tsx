/* eslint-disable @next/next/no-img-element */
import { cn } from "@/lib/utils";
import Marquee from "./ui/marquee";

const reviews = [
  {
    name: "Carlos Ribeiro",
    username: "@carlosr",
    body: "Meu site ficou incrível! Design moderno, responsivo e com uma performance excelente. Recomendo de olhos fechados!",
    img: "https://avatar.vercel.sh/carlosr",
  },
  {
    name: "Mariana Souza",
    username: "@marisouza",
    body: "O gerenciamento das minhas redes sociais nunca foi tão eficiente. O engajamento aumentou e minha marca está crescendo!",
    img: "https://avatar.vercel.sh/marisouza",
  },
  {
    name: "Felipe Martins",
    username: "@felipem",
    body: "Campanhas de marketing digital que realmente funcionam! As vendas dobraram em apenas dois meses. Excelente trabalho!",
    img: "https://avatar.vercel.sh/felipem",
  },
  {
    name: "Ana Paula Lima",
    username: "@anaplim",
    body: "Estou impressionada com o profissionalismo e atenção aos detalhes na criação do meu site. Superou todas as expectativas!",
    img: "https://avatar.vercel.sh/anaplim",
  },
  {
    name: "João Silva",
    username: "@joaosilva",
    body: "O serviço de web design foi impecável. Minha presença digital agora reflete exatamente o que minha empresa representa.",
    img: "https://avatar.vercel.sh/joaosilva",
  },
  {
    name: "Beatriz Almeida",
    username: "@biaalm",
    body: "Graças à estratégia de tráfego pago, meu negócio ganhou visibilidade e conquistou novos clientes rapidamente!",
    img: "https://avatar.vercel.sh/biaalm",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function FeedbackMarquee() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}
