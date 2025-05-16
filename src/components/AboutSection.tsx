export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500">
            About Me
          </span>
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="/public/assets/code.jpg"
              alt="Working on code"
              className="rounded-lg shadow-xl h-48 object-cover w-full"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">My Journey</h3>
            <p className="text-gray-300 mb-6">
              Hi, I'm Percival Salvador, passionate about both game and web
              development. I thrive on creative problem-solving and technical
              execution, crafting immersive experiences that engage users.
            </p>
            <p className="text-gray-300 mb-6">
              I continuously explore new technologies and techniques, always
              pushing boundaries to create innovative and user-friendly
              experiences. My goal is to blend creativity with functionality,
              bringing ideas to life through code.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
