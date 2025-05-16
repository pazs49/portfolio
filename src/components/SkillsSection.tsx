import { Gamepad2, Code } from "lucide-react";
import SkillBadge from "./SkillBadge";

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4 text-center">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500">
            Skills & Technologies
          </span>
        </h2>
        <p className="text-gray-300 text-center max-w-2xl mx-auto mb-12">
          The tools and technologies I use to bring ideas to life.
        </p>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Gamepad2 className="h-6 w-6 text-purple-500" />
              <h3 className="text-xl font-bold">Game Development</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              <SkillBadge name="Unity" level={90} />
              <SkillBadge name="C#" level={85} />
              <SkillBadge name="C++" level={70} />
              <SkillBadge name="3D Modeling" level={65} />
              <SkillBadge name="Game Design" level={80} />
              <SkillBadge name="Animation" level={60} />
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-6">
              <Code className="h-6 w-6 text-cyan-500" />
              <h3 className="text-xl font-bold">Web Development</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              <SkillBadge name="JavaScript" level={95} color="cyan" />
              <SkillBadge name="Ruby" level={85} color="cyan" />
              <SkillBadge name="Ruby On Rails" level={85} color="cyan" />
              <SkillBadge name="TypeScript" level={90} color="cyan" />
              <SkillBadge name="React" level={90} color="cyan" />
              <SkillBadge name="Zustand" level={85} color="cyan" />
              <SkillBadge name="Node.js" level={80} color="cyan" />
              <SkillBadge name="Tailwind CSS" level={90} color="cyan" />
              <SkillBadge name="MongoDB" level={70} color="cyan" />
              <SkillBadge name="PostgreSQL" level={75} color="cyan" />
              <SkillBadge name="Rspec" level={80} color="cyan" />
              <SkillBadge name="Render" level={80} color="cyan" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
