export default function Hero() {
  return (
    <section className="gradient-bg relative flex min-h-screen items-center justify-center px-6 pt-20">
      <div className="mx-auto max-w-3xl text-center">
        <p className="mb-4 text-sm font-medium uppercase tracking-widest text-accent-light">
          CS Graduate &middot; Researcher &middot; Musician
        </p>
        <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight sm:text-7xl">
          Muhammad Umer
          <br />
          <span className="gradient-text">Bappi</span>
        </h1>
        <p className="mx-auto mb-10 max-w-xl text-lg leading-relaxed text-muted">
          Computer Science graduate specializing in Machine Learning and NLP.
          I build end-to-end AI systems that deliver measurable results — from
          research to production.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            className="rounded-full bg-accent px-8 py-3 text-sm font-medium text-white transition-all hover:bg-accent-light hover:shadow-lg hover:shadow-accent/25"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="rounded-full border border-border px-8 py-3 text-sm font-medium text-muted transition-all hover:border-accent hover:text-foreground"
          >
            Get in Touch
          </a>
          <a
            href="/Muhammad Umer Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-border px-8 py-3 text-sm font-medium text-muted transition-all hover:border-accent hover:text-foreground"
          >
            Download CV
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2 text-muted">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="h-8 w-[1px] bg-gradient-to-b from-muted to-transparent" />
        </div>
      </div>
    </section>
  );
}
