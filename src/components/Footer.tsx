import { Button } from "./ui/button";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-8 bg-gray-950 border-t border-gray-800">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center gap-4 mb-4">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full hover:bg-purple-500/10 hover:text-purple-400"
          >
            <a href="https://github.com/pazs49" target="_blank">
              <Github className="h-5 w-5" />
            </a>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full hover:bg-purple-500/10 hover:text-purple-400"
          >
            <a
              href="https://www.linkedin.com/in/percival-salvador-938756246/"
              target="_blank"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="rounded-full hover:bg-purple-500/10 hover:text-purple-400"
          >
            <a href="mailto:percivalsalvador@gmailcom?subject=Hello&body=Hi%20Percival">
              <Mail className="h-5 w-5" />
            </a>
          </Button>
        </div>
        <p className="text-gray-400">
          © {new Date().getFullYear()} Percival Salvador's Portfolio. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
