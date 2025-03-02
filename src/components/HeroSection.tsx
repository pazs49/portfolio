import { Button } from "./ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="container mx-auto px-4 py-20 flex flex-col items-center text-center">
      <div className="w-32 h-32 rounded-full overflow-hidden mb-8 border-4 border-purple-500 shadow-lg shadow-purple-500/20">
        <img
          src="/assets/profile_photo.jfif"
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </div>
      <h1 className="text-5xl md:text-6xl font-bold mb-4">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500">
          Game & Web Developer
        </span>
      </h1>
      <p className="text-xl text-gray-300 max-w-2xl mb-8">
        Crafting immersive gaming experiences and building modern web
        applications. Turning ideas into interactive realities.
      </p>
      <div className="flex gap-4">
        <a href="https://github.com/pazs49" target="_blank">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full hover:bg-purple-500/10 hover:text-purple-400"
          >
            <Github className="h-5 w-5" />
          </Button>
        </a>

        <a
          href="https://www.linkedin.com/in/percival-salvador-938756246/"
          target="_blank"
        >
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full hover:bg-purple-500/10 hover:text-purple-400"
          >
            <Linkedin className="h-5 w-5" />
          </Button>
        </a>

        <a href="mailto:percivalsalvador@gmailcom?subject=Hello&body=Hi%20Percival">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full hover:bg-purple-500/10 hover:text-purple-400"
          >
            <Mail className="h-5 w-5" />
          </Button>
        </a>
      </div>
    </section>
  );
}
