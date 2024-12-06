import Image from "next/image";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Project } from "@/app/types";
import { Globe } from "lucide-react";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="w-[365px] h-[430px] flex flex-col">
      <CardHeader>
        <CardTitle className="text-xl">{project.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="relative w-full h-40 mb-4">
          <Image
            src={project.imageUrl}
            alt={project.title}
            layout="fill"
            objectFit="cover"
            className="rounded-md"
          />
        </div>
        <p className="text-sm text-muted-foreground mb-2">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.languages.map((lang) => (
            <Badge key={lang} variant="secondary">
              {lang}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full button-secondary">
          <a
            href={project.projectUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Globe />
            Ver Projeto
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}
