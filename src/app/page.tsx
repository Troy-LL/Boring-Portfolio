import Experience from "@/components/Experience";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import CallingCard from "@/components/CallingCard";

export const metadata = {
  title: "Troy Lazaro",
};

export default function Home() {
  return (
    <>
      <CallingCard />
      <main className="min-h-screen bg-background text-foreground flex flex-col items-center selection:bg-accent selection:text-foreground scroll-smooth">
        <div id="home" className="w-full flex flex-col items-center justify-center px-8 pt-32 pb-16 md:pt-36">
          <div className="max-w-4xl mx-auto w-full flex flex-col gap-4">
            <h1 className="font-display italic font-normal text-4xl md:text-5xl text-foreground leading-none tracking-tight">
              Troy Lazaro
            </h1>
            <p className="max-w-xl text-lg text-muted-foreground leading-relaxed">
              I make things. I care how they look and how they work.
            </p>
          </div>
        </div>

        <div id="experience" className="w-full">
          <Experience />
        </div>

        <div id="tech" className="w-full">
          <TechStack />
        </div>

        <div id="projects" className="w-full">
          <Projects />
        </div>

        <div className="w-full">
          <Contact />
        </div>
      </main>
    </>
  );
}
