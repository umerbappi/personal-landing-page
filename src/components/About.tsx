export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-2 text-sm font-medium uppercase tracking-widest text-accent-light">
          About Me
        </h2>
        <h3 className="mb-8 text-3xl font-bold sm:text-4xl">
          Engineer. Researcher. Creator.
        </h3>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-4 text-muted leading-relaxed">
            <p>
              I&apos;m a Computer Science graduate from Forman Christian College
              (University), Pakistan, with hands-on experience across the full
              software development lifecycle — from system design to production
              deployment.
            </p>
            <p>
              My core expertise lies in <span className="text-foreground font-medium">Machine Learning</span> and{" "}
              <span className="text-foreground font-medium">Natural Language Processing</span>, where
              I&apos;ve built novel AI systems tackling real-world challenges like
              LLM hallucination reduction in low-resource languages.
            </p>
            <p>
              Beyond code, I&apos;m a session lead guitarist and music producer —
              creativity drives everything I do, whether it&apos;s crafting an
              AI pipeline or composing original music.
            </p>
          </div>

          <div className="space-y-6">
            <div className="rounded-xl border border-border bg-card p-6">
              <h4 className="mb-1 font-semibold">Education</h4>
              <p className="text-sm text-muted">
                BS Computer Science
              </p>
              <p className="text-sm text-muted">
                Forman Christian College (University)
              </p>
              <p className="text-xs text-accent-light mt-1">Graduated December 2025</p>
            </div>

            <div className="rounded-xl border border-border bg-card p-6">
              <h4 className="mb-1 font-semibold">Awards</h4>
              <ul className="space-y-2 text-sm text-muted">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-light" />
                  Best Poster Award — COMSPEX FCC, 2025
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-light" />
                  1st Place, Battle of Bands — CMH Lahore, 2024
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
