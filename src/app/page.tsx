import Experience from "@/components/Experience";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export const metadata = {
  title: "Portfolio",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col items-center selection:bg-accent selection:text-foreground scroll-smooth">
      {/* Hero Section */}
      <div id="home" className="min-h-screen w-full flex flex-col items-center justify-center p-8 pt-32 md:pt-16">
        <div className="max-w-4xl mx-auto w-full flex flex-col space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          
          {/* Top Badges / Subtitle */}
          <div className="flex flex-wrap gap-3 uppercase tracking-widest text-xs font-semibold text-muted-foreground">
            <span className="px-3 py-1 rounded-full border border-muted bg-muted/20">IT Student</span>
            <span className="px-3 py-1 rounded-full border border-muted bg-muted/20">AI/ML Researcher</span>
            <span className="px-3 py-1 rounded-full border border-muted bg-muted/20">Full-Stack Dev</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground leading-[1.1]">
            Building with <span className="text-gray-cool">intention.</span><br />
            Building with <span className="text-silver">purpose.</span>
          </h1>

          {/* Description / Motto */}
          <p className="max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed">
            I&apos;m <strong className="text-foreground font-semibold">Troy Lauren T. Lazaro</strong>, operating at the intersection of AI research, full-stack development, and community-driven talent growth. Life is too short to be mediocre, let&apos;s build together.
          </p>

          {/* CTA Buttons */}
          <div className="pt-8 flex flex-wrap gap-4 items-center">
            <a href="#projects" className="px-8 py-3 rounded-md bg-foreground text-background font-medium tracking-wide hover:bg-silver transition-colors duration-300">
              View Projects
            </a>
            <a href="#contact" className="px-8 py-3 rounded-md bg-transparent border border-muted text-foreground hover:bg-muted/50 transition-colors duration-300">
              Get in Touch
            </a>
          </div>
          
        </div>
      </div>

      {/* Experience Section */}
      <div id="experience" className="w-full">
        <Experience />
      </div>

      {/* Tech Arsenal Section */}
      <div id="tech" className="w-full">
        <TechStack />
      </div>

      {/* Projects Section */}
      <div id="projects" className="w-full">
        <Projects />
      </div>

      {/* Contact Section */}
      <div className="w-full">
        <Contact />
      </div>
    </main>
  );
}
