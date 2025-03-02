import { useState } from "react";
import { Button } from "./ui/button";
import { Mail, Github, Linkedin } from "lucide-react";

export default function ContactSection() {
  const [nameInput, setNameInput] = useState<string>("");
  const [messageInput, setMessageInput] = useState<string>("");

  const handleSendEmail = () => {
    if (!nameInput || !messageInput) return;
    window.location.href = `mailto:percivalsalvador@gmail.com?subject=${nameInput}&body=${messageInput}`;
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4 text-center">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500">
            Get In Touch
          </span>
        </h2>
        <p className="text-gray-300 text-center max-w-2xl mx-auto mb-12">
          Interested in working together? Feel free to reach out!
        </p>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div className="bg-gray-800/50 p-8 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-6">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-purple-500/10 text-purple-400"
                >
                  <Mail className="h-5 w-5" />
                </Button>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <p>percivalsalvador@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-purple-500/10 text-purple-400"
                >
                  <Github className="h-5 w-5" />
                </Button>
                <div>
                  <p className="text-sm text-gray-400">GitHub</p>
                  <p>github.com/pazs49</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-purple-500/10 text-purple-400"
                >
                  <Linkedin className="h-5 w-5" />
                </Button>
                <div>
                  <p className="text-sm text-gray-400">LinkedIn</p>
                  <p>linkedin.com/in/percival-salvador-938756246/</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-800/50 p-8 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-6">Send a Message</h3>
            <form onClick={(e) => e.preventDefault()} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-400 mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 bg-gray-700/50 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  onChange={(e) => setNameInput(e.target.value)}
                  value={nameInput}
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-400 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 bg-gray-700/50 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  onChange={(e) => setMessageInput(e.target.value)}
                  value={messageInput}
                ></textarea>
              </div>
              <Button
                onClick={handleSendEmail}
                className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
