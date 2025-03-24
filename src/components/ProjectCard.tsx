import { Badge } from "./ui/badge";
import { Card, CardContent, CardFooter } from "./ui/card";
import { Gamepad2, Code, ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  type: "game" | "web";
  demoLink: string;
  githubLink: string;
}

export default function ProjectCard({
  title,
  description,
  image,
  tags,
  type,
  demoLink,
  githubLink,
}: ProjectCardProps) {
  return (
    <Card className="overflow-hidden bg-gray-800/50 border-gray-700 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10 hover:border-purple-500/50">
      <div className="relative">
        <div className="absolute top-2 right-2 z-10">
          <Badge
            variant="secondary"
            className={
              type === "game"
                ? "bg-purple-500/20 text-purple-300"
                : "bg-cyan-500/20 text-cyan-300"
            }
          >
            {type === "game" ? (
              <>
                <Gamepad2 className="h-3 w-3 mr-1" /> Game
              </>
            ) : (
              <>
                <Code className="h-3 w-3 mr-1" /> Web
              </>
            )}
          </Badge>
        </div>
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
        <p className="text-gray-300 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <Badge
              key={index}
              variant="outline"
              className="bg-gray-700/50 border-gray-600"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0 flex justify-between">
        <a href={githubLink} target="_blank">
          <Button
            variant="ghost"
            size="sm"
            className="text-gray-300 hover:text-white"
          >
            <Github className="h-4 w-4 mr-2" />
            Code
          </Button>
        </a>

        <a href={demoLink} target="_blank">
          <Button
            variant="ghost"
            size="sm"
            className="text-gray-300 hover:text-white"
          >
            <ExternalLink className="h-4 w-4 mr-2" />
            Demo
          </Button>
        </a>
      </CardFooter>
    </Card>
  );
}
