import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div id="magic-background" className="flex flex-col min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/10  z-50">
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
                About Me
              </Link>
              <Link
                href="#expreriences"
                className="hover:text-foreground/80 transition-colors"
              >
                Expreriences
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
      <section className="">
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
              <h5 className="text-3xl lg:text-5xl font-bold leading-tight">
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
        className="pt-20 px-4 sm:px-6 lg:px-8 bg-foreground/[0.02]"
      >
        <div className="max-w-5xl mx-auto">
          <div className="prose prose-lg dark:prose-invert">
            <p className="text-xl lg:text-3xl font-semibold text-center mb-5 lg:mb-10">
              Thanaphorn Wutthikunprapan
            </p>
            {/* <p className="text-gray-400 text-lg text-center">
              I&#39;m was born 1 November 2000 in Pitsanulok now im 24 years old
              i really like everthing with blue color i think imbivert
            </p> */}
            <p className="text-gray-400 text-lg text-center">
              Hello! I&#39;m Khaimook, born on November 1, 2000, in Phitsanulok,
              Thailand. I&#39;m 24 years old. My favorite color is blue — it
              feels calm, deep, and limitless, like the ocean. I consider myself
              an ambivert: I enjoy peaceful solo moments but also love
              connecting with others when the vibe is right. I enjoy learning
              new things, solving problems, and turning ideas into real
              projects.
            </p>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section
        id="education"
        className="pt-10 px-20 sm:px-6 lg:px-8 bg-foreground/[0.02] w-full"
      >
        {/* <p className="text-xl lg:text-3xl font-semibold text-center">
          Education
        </p> */}
        <div className="max-w-5xl mx-auto w-full flex flex-col lg:flex-row gap-4 items-center lg:items-start justify-center mt-10">
          <Image
            src="/flag.png"
            alt="flag"
            width={180}
            height={30}
            className="inline-block mr-2 w-30 lg:w-45 animate-[wave_2s_ease-in-out_infinite]"
          />

          <div className="w-full lg:w-[600px] flex flex-col gap-4">
            {/* <p className="text-xl font-semibold">Education</p> */}
            <div className="">
              <p className="text-[#d3901d] text-xl font-semibold">
                King Mongkut&#39;s Institute of Technology Ladkrabang
              </p>
              <div className="ml-2">
                <p className="">Bachelor of Computer Engineering</p>
                <p className="">GPA: 3.52 (First Class Honors)</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-foreground/5 rounded text-sm">
                Cloud Architecture
              </span>
              <span className="px-2 py-1 bg-foreground/5 rounded text-sm">
                Database System
              </span>
              <span className="px-2 py-1 bg-foreground/5 rounded text-sm">
                Data Structure and Algorithm
              </span>
              <span className="px-2 py-1 bg-foreground/5 rounded text-sm">
                Operating System
              </span>
              <span className="px-2 py-1 bg-foreground/5 rounded text-sm">
                Software Development Life Cycle
              </span>
              <span className="px-2 py-1 bg-foreground/5 rounded text-sm">
                Web Technologies
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Expreriences Section */}
      <section id="expreriences" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <p className="text-xl lg:text-3xl font-semibold mb-5 lg:mb-10">
            Expreriences
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Project cards will go here */}
            <div className="border border-foreground/10 rounded-lg p-6 hover:border-foreground/20 transition-colors">
              <h3 className="text-xl font-bold mb-2">DICAST: QuickPage</h3>
              <p className="text-foreground/80 mb-4">
                QuickPage, is a no-code web builder that combines Figma’s
                intuitive design experience with the seamless web publishing
                capabilities of Wix, Webflow, and Framer.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-foreground/5 rounded text-sm">
                  CouchDB
                </span>
                <span className="px-2 py-1 bg-foreground/5 rounded text-sm">
                  Docker
                </span>
                <span className="px-2 py-1 bg-foreground/5 rounded text-sm">
                  Figma
                </span>
                <span className="px-2 py-1 bg-foreground/5 rounded text-sm">
                  GraphQL
                </span>
                <span className="px-2 py-1 bg-foreground/5 rounded text-sm">
                  Git
                </span>
                <span className="px-2 py-1 bg-foreground/5 rounded text-sm">
                  Jest
                </span>
                <span className="px-2 py-1 bg-foreground/5 rounded text-sm">
                  Kubernetes
                </span>
                <span className="px-2 py-1 bg-foreground/5 rounded text-sm">
                  NodeJS
                </span>
                <span className="px-2 py-1 bg-foreground/5 rounded text-sm">
                  Protobuf
                </span>
                <span className="px-2 py-1 bg-foreground/5 rounded text-sm">
                  Playwright
                </span>
                <span className="px-2 py-1 bg-foreground/5 rounded text-sm">
                  Sveltkit
                </span>
                <span className="px-2 py-1 bg-foreground/5 rounded text-sm">
                  Tailwind
                </span>
                <span className="px-2 py-1 bg-foreground/5 rounded text-sm">
                  TypeScript
                </span>
              </div>
            </div>
            <div className="border border-foreground/10 rounded-lg p-6 hover:border-foreground/20 transition-colors">
              <h3 className="text-xl font-bold mb-2">SCB TECH X: Khai Mock</h3>
              <p className="text-foreground/80 mb-4">
                The web mock API helper has the ability to mock data and manage
                responses systematically.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-foreground/5 rounded text-sm">
                  Docker
                </span>
                <span className="px-2 py-1 bg-foreground/5 rounded text-sm">
                  Git
                </span>
                <span className="px-2 py-1 bg-foreground/5 rounded text-sm">
                  MUI
                </span>
                <span className="px-2 py-1 bg-foreground/5 rounded text-sm">
                  MySQL
                </span>
                <span className="px-2 py-1 bg-foreground/5 rounded text-sm">
                  NestJS
                </span>
                <span className="px-2 py-1 bg-foreground/5 rounded text-sm">
                  NodeJS
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
              <h3 className="text-xl font-bold mb-2">
                KMITL: Life Cycle Application
              </h3>
              <p className="text-foreground/80 mb-4">
                Wellness application that helps users manage food intake and
                track sleep, enabling goal setting for calorie consumption and
                analyzing sleep patterns to identify factors affecting sleep
                quality.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-foreground/5 rounded text-sm">
                  ChartJS
                </span>
                <span className="px-2 py-1 bg-foreground/5 rounded text-sm">
                  Firebase
                </span>
                <span className="px-2 py-1 bg-foreground/5 rounded text-sm">
                  Jest
                </span>
                <span className="px-2 py-1 bg-foreground/5 rounded text-sm">
                  NextJS
                </span>
                <span className="px-2 py-1 bg-foreground/5 rounded text-sm">
                  NodeJS
                </span>
                <span className="px-2 py-1 bg-foreground/5 rounded text-sm">
                  Playwright
                </span>
                <span className="px-2 py-1 bg-foreground/5 rounded text-sm">
                  Strapi
                </span>
                <span className="px-2 py-1 bg-foreground/5 rounded text-sm">
                  Tailwind
                </span>
                <span className="px-2 py-1 bg-foreground/5 rounded text-sm">
                  TypeScript
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
                <span className="font-mono">→</span> +66 81 887 9752
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
