import { Button } from "./ui/button";

export default function Header() {
  return (
    <header className="container mx-auto py-6 px-4 flex justify-between items-center">
      <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500">
        Percival Salvador
      </div>
      <nav className="hidden md:flex gap-6">
        <a href="#about" className="hover:text-purple-400 transition-colors">
          About
        </a>
        <a href="#projects" className="hover:text-purple-400 transition-colors">
          Projects
        </a>
        <a href="#skills" className="hover:text-purple-400 transition-colors">
          Skills
        </a>
        <a href="#contact" className="hover:text-purple-400 transition-colors">
          Contact
        </a>
      </nav>
      <Button
        variant="outline"
        className="border-purple-500 text-purple-400 hover:bg-purple-500/10"
      >
        Resume
      </Button>
    </header>
  );
}
