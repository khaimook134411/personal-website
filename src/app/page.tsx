import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div id="magic-background" className="flex flex-col min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-sm border-b border-foreground/10 z-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <Link href="/" className="font-bold text-xl">
              <Image
                src="/km-logo.png"
                alt="logo"
                width={70}
                height={30}
                className="inline-block mr-2"
              />
            </Link>
            <div className="hidden sm:flex space-x-8">
              <Link
                href="#about"
                className="hover:text-foreground/80 transition-colors"
              >
                About
              </Link>
              <Link
                href="#projects"
                className="hover:text-foreground/80 transition-colors"
              >
                Projects
              </Link>
              <Link
                href="#contact"
                className="hover:text-foreground/80 transition-colors"
              >
                Contact
              </Link>
              <Link
                href="https://www.canva.com/design/DAGqRl4azcI/J6ztt03Lz45E4DVmtrX2zg/edit?utm_content=DAGqRl4azcI&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
                target="_blank"
                className="hover:text-foreground/80 transition-colors"
              >
                Resume
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pb-16">
        <div className="min-h-screen flex items-center justify-center bg-black text-white relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute left-1/6 lg:left-1/3 top-1/4 w-[500px] h-[400px] bg-cyan-700 blur-[200px] rounded-full animate-spin"></div>
            <div className="absolute left-1/8 lg:left-1/4 top-1/2 w-[500px] h-[400px] bg-cyan-900 blur-[200px]  rounded-full hover:animate-pulse"></div>
            <div className="absolute right-1/4 lg-right-1/2 top-1/2 w-[400px] h-[300px] bg-indigo-500 blur-[200px] rounded-full animate-pulse"></div>
            <div className="absolute right-1/6 lg:right-1/3 top-1/4 w-[350px] h-[250px] bg-purple-500 blur-[200px] rounded-full hover:animate-spin"></div>
          </div>

          <div className="z-10 max-w-4xl flex flex-col gap-2 items-center">
            <Image src="/hat.png" alt="hat" width={150} height={300} />
            <div className="text-center">
              <h6 className="text-sm uppercase tracking-widest text-gray-400 mb-2">
                Hi! Muggles.
              </h6>
              <h5 className="text-5xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
                  With code as my wand,
                </span>
                <br />
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
                  I create the extraordinary.
                </span>
              </h5>
              <p className="mt-6 text-gray-400 text-lg">
                I&#39;m not just a developer — I&#39;m a spellcaster of logic,
                crafting digital enchantments from lines of code and turning
                imagination into interactive reality.
              </p>
              <div className="mt-8 flex justify-center gap-4">
                <Link
                  href="#about"
                  className="px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-amber-100"
                >
                  Magic begins
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-16 px-4 sm:px-6 lg:px-8 bg-foreground/[0.02] mt-4"
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">About Me</h2>
          <div className="prose prose-lg dark:prose-invert">
            <p>
              I&#39;m a developer with a passion for building modern web
              applications. I specialize in creating responsive, user-friendly
              interfaces and implementing efficient solutions to complex
              problems.
            </p>
            <p>
              When I&#39;m not coding, you can find me exploring new
              technologies, contributing to open-source projects, or learning
              new skills.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Life Cycle App</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Project cards will go here */}
            <div className="border border-foreground/10 rounded-lg p-6 hover:border-foreground/20 transition-colors">
              <h3 className="text-xl font-bold mb-2">Project 1</h3>
              <p className="text-foreground/80 mb-4">
                A brief description of the project and the technologies used.
              </p>
              <div className="flex gap-2">
                <span className="px-2 py-1 bg-foreground/5 rounded text-sm">
                  Next.js
                </span>
                <span className="px-2 py-1 bg-foreground/5 rounded text-sm">
                  React
                </span>
                <span className="px-2 py-1 bg-foreground/5 rounded text-sm">
                  TypeScript
                </span>
              </div>
            </div>
            <div className="border border-foreground/10 rounded-lg p-6 hover:border-foreground/20 transition-colors">
              <h3 className="text-xl font-bold mb-2">Project 2</h3>
              <p className="text-foreground/80 mb-4">
                Another project showcasing different skills and technologies.
              </p>
              <div className="flex gap-2">
                <span className="px-2 py-1 bg-foreground/5 rounded text-sm">
                  Node.js
                </span>
                <span className="px-2 py-1 bg-foreground/5 rounded text-sm">
                  Express
                </span>
                <span className="px-2 py-1 bg-foreground/5 rounded text-sm">
                  MongoDB
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-16 px-4 sm:px-6 lg:px-8 bg-foreground/[0.02]"
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-lg mb-6">
                I&#39;m always open to new opportunities and collaborations.
                Feel free to reach out if you&#39;d like to work together or
                just say hello!
              </p>
              <div className="space-y-4">
                <a
                  href="mailto:twutthikunprapan@gmail.com"
                  className="flex items-center gap-2 hover:text-foreground/80 transition-colors"
                >
                  <span className="font-mono">→</span>{" "}
                  twutthikunprapan@gmail.com
                </a>
                <a
                  href="https://github.com/khaimook134411"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-foreground/80 transition-colors"
                >
                  <span className="font-mono">→</span> GitHub
                </a>
                <a
                  href="www.linkedin.com/in/thanaphorn-wutthikunprapan-b7547a223"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-foreground/80 transition-colors"
                >
                  <span className="font-mono">→</span> LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto py-8 px-4 sm:px-6 lg:px-8 border-t border-foreground/10">
        <div className="max-w-5xl mx-auto text-center text-sm text-foreground/60">
          <p>© {new Date().getFullYear()} Khaimook. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
