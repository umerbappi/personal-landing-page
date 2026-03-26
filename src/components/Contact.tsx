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
        <p className="mb-10 text-muted">
          I&apos;m currently looking for new opportunities. Whether you have a
          question or just want to say hi, my inbox is always open.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="mailto:umerbappi07@gmail.com"
            className="rounded-full bg-accent px-8 py-3 text-sm font-medium text-white transition-all hover:bg-accent-light hover:shadow-lg hover:shadow-accent/25"
          >
            Say Hello
          </a>
          <a
            href="https://linkedin.com/in/muhammad-umer-bappi"
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
