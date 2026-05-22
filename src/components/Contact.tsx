export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="mb-2 text-sm font-medium uppercase tracking-widest text-accent-light">
          Contact
        </h2>
        <h3 className="mb-4 text-3xl font-bold sm:text-4xl">
          Let&apos;s Connect
        </h3>
        <p className="mb-8 text-muted">
          Open to collaborations on AI/ML, automation, and CRM projects.
          Whether you have a question, a workflow to automate, or just want
          to say hi — my inbox is always open.
        </p>

        <a
          href="mailto:umerbappi07@gmail.com"
          className="mb-10 inline-flex items-center gap-3 rounded-xl border border-border bg-card px-6 py-4 text-base font-medium text-foreground transition-all hover:border-accent hover:shadow-lg hover:shadow-accent/10"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent-light">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
            <polyline points="22,6 12,13 2,6" />
          </svg>
          umerbappi07@gmail.com
        </a>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://www.linkedin.com/in/muhammad-umer-bappi-725058293/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-border px-8 py-3 text-sm font-medium text-muted transition-all hover:border-accent hover:text-foreground"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/umerbappi"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-border px-8 py-3 text-sm font-medium text-muted transition-all hover:border-accent hover:text-foreground"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
