export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center p-8 selection:bg-accent selection:text-foreground">
      <div className="max-w-4xl mx-auto w-full flex flex-col space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
        
        {/* Top Badges / Subtitle */}
        <div className="flex flex-wrap gap-3 uppercase tracking-widest text-xs font-semibold text-muted-foreground">
          <span className="px-3 py-1 rounded-full border border-muted bg-muted/20">IT Student</span>
          <span className="px-3 py-1 rounded-full border border-muted bg-muted/20">AI/ML Researcher</span>
          <span className="px-3 py-1 rounded-full border border-muted bg-muted/20">Community Leader</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground leading-[1.1]">
          Building with <span className="text-gray-cool">intention.</span><br />
          Building with <span className="text-silver">purpose.</span>
        </h1>

        {/* Description / Motto */}
        <p className="max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed">
          I'm <strong className="text-foreground font-semibold">Troy Lauren T. Lazaro</strong>, operating at the intersection of AI research, full-stack development, and community-driven talent growth. Life is too short to be mediocre, let's build together.
        </p>

        {/* CTA Buttons */}
        <div className="pt-8 flex flex-wrap gap-4 items-center">
          <button className="px-8 py-3 rounded-md bg-foreground text-background font-medium tracking-wide hover:bg-silver transition-colors duration-300">
            View Projects
          </button>
          <button className="px-8 py-3 rounded-md bg-transparent border border-muted text-foreground hover:bg-muted/50 transition-colors duration-300">
            Get in Touch
          </button>
        </div>
        
      </div>
    </main>
  );
}
