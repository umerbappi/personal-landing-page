const projects = [
  {
    title: "LLMs & Factuality in Urdu NLP",
    tag: "Final Year Project",
    description:
      "Built a novel multi-agent LLM framework achieving a 35% reduction in hallucinations in Urdu NLP, using PEFT fine-tuning, RAG, and Agentic architectures. Research paper submitted to international conferences.",
    tech: ["PyTorch", "Hugging Face", "LoRA", "RAG", "LangChain"],
    github: "#",
  },
  {
    title: "Dental Voice Agent",
    tag: "Voice AI",
    description:
      "AI-powered voice receptionist for dental clinics that handles phone calls, books/cancels/reschedules appointments via Google Calendar, answers clinic queries, and provides service & pricing info — all through natural conversation.",
    tech: ["FastAPI", "Vapi", "GPT-4o", "ElevenLabs", "Google Calendar API"],
    github: "https://github.com/umerbappi/dental-voice-agent",
  },
  {
    title: "LyricGen",
    tag: "AI / Music",
    description:
      "End-to-end audio-to-lyrics generation system by fine-tuning Llama 3.2-3B via LoRA on a curated Million Song Dataset subset, extracting audio features using Librosa and deploying an interactive Gradio web app.",
    tech: ["Llama 3.2", "LoRA", "Librosa", "Gradio", "Python"],
    github: "#",
  },
  {
    title: "Real-Time Face Detection & Age Estimation",
    tag: "Computer Vision",
    description:
      "Real-time face detection and age estimation system using OpenCV and DeepFace, with a Random Forest model for age prediction and live video stream integration.",
    tech: ["OpenCV", "DeepFace", "Scikit-learn", "Python"],
    github: "#",
  },
  {
    title: "FocusScaffold",
    tag: "Full-Stack / AI",
    description:
      "Full-stack executive-function support tool with AI-driven task decomposition, cognitive dump workflows, focus session tracking, and a weekly pattern dashboard for ADHD productivity.",
    tech: ["React", "Node.js", "AI", "PostgreSQL"],
    github: "#",
  },
  {
    title: "Custom Tower Defence Game",
    tag: "Game Dev",
    description:
      "Original tower defence game in Godot featuring a custom story plot, original scenes, and full gameplay mechanics built from scratch.",
    tech: ["Godot", "GDScript", "Game Design"],
    github: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-2 text-sm font-medium uppercase tracking-widest text-accent-light">
          Projects
        </h2>
        <h3 className="mb-12 text-3xl font-bold sm:text-4xl">
          Things I&apos;ve Built
        </h3>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-accent/50 hover:shadow-lg hover:shadow-accent/5"
            >
              <div className="mb-3 flex items-center justify-between">
                <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent-light">
                  {project.tag}
                </span>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted transition-colors hover:text-foreground"
                  aria-label={`View ${project.title} on GitHub`}
                >
                  <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                </a>
              </div>
              <h4 className="mb-2 text-lg font-semibold group-hover:text-accent-light transition-colors">
                {project.title}
              </h4>
              <p className="mb-4 text-sm leading-relaxed text-muted">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-md bg-background px-2.5 py-1 text-xs text-muted border border-border"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
