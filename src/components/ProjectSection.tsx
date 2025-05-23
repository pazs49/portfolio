import { useState } from "react";
import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {
  const [activeTab, setActiveTab] = useState("web");

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4 text-center">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500">
            My Projects
          </span>
        </h2>
        <p className="text-gray-300 text-center max-w-2xl mx-auto mb-12">
          A selection of my recent work in game development and web
          applications.
        </p>

        <div className="w-full mb-12">
          <div className="grid w-full max-w-md mx-auto grid-cols-2 bg-gray-800 rounded-lg p-1 mb-8">
            <button
              onClick={() => setActiveTab("games")}
              className={`py-2 px-4 rounded-md transition-colors ${
                activeTab === "games"
                  ? "bg-purple-600 text-white"
                  : "hover:bg-gray-700 text-gray-300"
              }`}
            >
              Games
            </button>
            <button
              onClick={() => setActiveTab("web")}
              className={`py-2 px-4 rounded-md transition-colors ${
                activeTab === "web"
                  ? "bg-purple-600 text-white"
                  : "hover:bg-gray-700 text-gray-300"
              }`}
            >
              Web
            </button>
          </div>

          {activeTab === "games" && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ProjectCard
                title="Tiny Tactics 2D"
                description="Defend your castle in this fast-paced 2D defense game! Strategically summon units to fend off waves of enemies and protect your kingdom."
                image="/portfolio/assets/tinyTactics2DThumbnail.PNG"
                tags={["Unity", "C#", "2D"]}
                type="game"
                demoLink="https://percival49.itch.io/tiny-tactics-2d"
                githubLink="https://github.com/pazs49/Castle-Defense-Tiny-Tactics"
              />

              <ProjectCard
                title="The Lumberjack's Lumber"
                description="A fast-paced 2D game where you press the spacebar to chop down a tree!"
                image="/portfolio/assets/lumberjackThumbnail.PNG"
                tags={["Unity", "C#", "2D"]}
                type="game"
                demoLink="https://jetblazer.itch.io/the-lumberjacks-lumber"
                githubLink="https://github.com/pazs49/the-lumberjacks-lumber"
              />
            </div>
          )}

          {activeTab === "web" && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ProjectCard
                title="Echo Chat App"
                description="A chat application that interacts with an external API for messaging."
                image="/portfolio/assets/echoAppThumbnail.PNG"
                tags={[
                  "React",
                  "React Router",
                  "ShadCN",
                  "TailwindCSS",
                  "Axios",
                  "Vite",
                  "Vercel",
                  "Zustand",
                  "JSON",
                ]}
                type="web"
                demoLink="https://echo-chat-app.vercel.app/"
                githubLink="https://github.com/pazs49/echo-chat-app"
              />

              <ProjectCard
                title="Stock App API"
                description="A Rails API that provides stock data by utilizing the Alpha Vantage API."
                image="/portfolio/assets/railsStockAppThumbnail.PNG"
                tags={[
                  "Ruby on Rails",
                  "Alpha Vantage",
                  "REST API",
                  "PostgreSQL",
                  "Render",
                  "JSON",
                  "RSpec",
                  "Devise",
                ]}
                type="web"
                demoLink="https://stock-app-client-i4di.onrender.com/"
                githubLink="https://github.com/pazs49/stock-app-api"
              />

              <ProjectCard
                title="Stock App Client"
                description="A frontend application that consumes the Stock App API to display stock data."
                image="/portfolio/assets/railsStockAppThumbnail.PNG"
                tags={[
                  "React",
                  "Fetch",
                  "TailwindCSS",
                  "React Router",
                  "Vite",
                  "Render",
                  "React Query",
                  "ShadCN",
                  "JSON",
                ]}
                type="web"
                demoLink="https://stock-app-client-i4di.onrender.com/"
                githubLink="https://github.com/pazs49/stock-app-client"
              />

              <ProjectCard
                title="Stanley's Kitchen"
                description="A static React client that generates recipes based on the ingredients you provide, powered by Mixtral AI."
                image="/portfolio/assets/stanleysKitchenThumbnail.PNG"
                tags={["React", "TailwindCSS", "Vite", "Render", "Mixtral AI"]}
                type="web"
                demoLink="https://stanleys-kitchen.onrender.com/"
                githubLink="https://github.com/pazs49/stanleys-kitchen"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
