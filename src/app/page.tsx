import Link from "next/link";
import Image from "next/image";
import { createReader } from "@keystatic/core/reader";
import keystaticConfig from "../../keystatic.config";

const reader = createReader(process.cwd(), keystaticConfig);

export default async function Home() {
  const [profile, hero, education, allExperiences] = await Promise.all([
    reader.singletons.profile.read(),
    reader.singletons.hero.read(),
    reader.singletons.education.read(),
    reader.collections.experiences.all(),
  ]);

  const experiences = allExperiences
    .sort((a, b) => (a.entry.order ?? 0) - (b.entry.order ?? 0));

  return (
    <div id="magic-background" className="flex flex-col min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/10 z-50">
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
              <Link href="#about" className="hover:text-foreground/80 transition-colors">
                About Me
              </Link>
              <Link href="#expreriences" className="hover:text-foreground/80 transition-colors">
                Experiences
              </Link>
              <Link href="#contact" className="hover:text-foreground/80 transition-colors">
                Contact
              </Link>
              {profile?.resumeUrl && (
                <Link
                  href={profile.resumeUrl}
                  target="_blank"
                  className="hover:text-foreground/80 transition-colors"
                >
                  Resume
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section>
        <div className="min-h-screen flex items-center justify-center bg-black text-white relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute left-1/6 lg:left-1/3 top-1/4 w-[500px] h-[400px] bg-cyan-700 blur-[200px] rounded-full animate-spin"></div>
            <div className="absolute left-1/8 lg:left-1/4 top-1/2 w-[500px] h-[400px] bg-cyan-900 blur-[200px] rounded-full hover:animate-pulse"></div>
            <div className="absolute right-1/4 lg-right-1/2 top-1/2 w-[400px] h-[300px] bg-indigo-500 blur-[200px] rounded-full animate-pulse"></div>
            <div className="absolute right-1/6 lg:right-1/3 top-1/4 w-[350px] h-[250px] bg-purple-500 blur-[200px] rounded-full hover:animate-spin"></div>
          </div>

          <div className="z-10 max-w-4xl flex flex-col gap-2 items-center">
            <Image src="/hat.png" alt="hat" width={150} height={300} />
            <div className="text-center">
              <h6 className="text-sm uppercase tracking-widest text-gray-400 mb-2">
                {hero?.greeting}
              </h6>
              <h5 className="text-3xl lg:text-5xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
                  {hero?.headline}
                </span>
                <br />
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
                  {hero?.subheadline}
                </span>
              </h5>
              <p className="mt-6 text-gray-400 text-lg">{hero?.description}</p>
              <div className="mt-8 flex justify-center gap-4">
                <Link
                  href="#about"
                  className="px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-amber-100"
                >
                  {hero?.ctaText}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="p-10 mt-10 lg:pt-20 bg-foreground/[0.02]">
        <div className="max-w-5xl mx-auto">
          <div className="prose prose-lg dark:prose-invert">
            <p className="text-xl lg:text-3xl font-semibold text-center mb-5 lg:mb-10">
              {profile?.name}
            </p>
            <p className="text-gray-400 text-lg text-center">{profile?.bio}</p>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="p-10 bg-foreground/[0.02] w-full">
        <div className="max-w-5xl mx-auto w-full flex flex-col lg:flex-row gap-4 items-center lg:items-start justify-center mt-10">
          <Image
            src="/flag.png"
            alt="flag"
            width={180}
            height={30}
            className="inline-block mr-2 w-30 lg:w-45 animate-[wave_2s_ease-in-out_infinite]"
          />
          <div className="w-full lg:w-[600px] flex flex-col gap-4">
            <div>
              <p className="text-[#d3901d] text-xl font-semibold">
                {education?.school}
              </p>
              <div className="ml-2">
                <p>{education?.degree}</p>
                <p>GPA: {education?.gpa}</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {education?.subjects.map((subject) => (
                <span
                  key={subject}
                  className="px-2 py-1 bg-foreground/5 rounded text-sm"
                >
                  {subject}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experiences Section */}
      <section id="expreriences" className="p-10">
        <div className="max-w-5xl mx-auto">
          <p className="text-xl lg:text-3xl font-semibold mb-5 lg:mb-10">
            Experiences
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {experiences.map(({ slug, entry }) => (
              <div
                key={slug}
                className="border border-foreground/10 rounded-lg p-6 hover:border-foreground/20 transition-colors"
              >
                <h3 className="text-xl font-bold mb-2">{entry.title}</h3>
                <p className="text-foreground/80 mb-4">{entry.description}</p>
                <div className="flex flex-wrap gap-2">
                  {entry.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-foreground/5 rounded text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="p-10 bg-foreground/[0.02]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-lg mb-6">
                I&apos;m always open to new opportunities and collaborations.
                Feel free to reach out if you&apos;d like to work together or
                just say hello!
              </p>
              <div className="space-y-4">
                {profile?.email && (
                  <a
                    href={`mailto:${profile.email}`}
                    className="flex items-center gap-2 hover:text-foreground/80 transition-colors"
                  >
                    <span className="font-mono">→</span> {profile.email}
                  </a>
                )}
                {profile?.github && (
                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-foreground/80 transition-colors"
                  >
                    <span className="font-mono">→</span> GitHub
                  </a>
                )}
                {profile?.linkedin && (
                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-foreground/80 transition-colors"
                  >
                    <span className="font-mono">→</span> LinkedIn
                  </a>
                )}
                {profile?.phone && (
                  <span className="flex items-center gap-2">
                    <span className="font-mono">→</span> {profile.phone}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto py-8 px-4 sm:px-6 lg:px-8 border-t border-foreground/10">
        <div className="max-w-5xl mx-auto text-center text-sm text-foreground/60">
          <p>© {new Date().getFullYear()} {profile?.nickname ?? 'Khaimook'}. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
