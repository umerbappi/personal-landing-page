const skillGroups = [
  {
    category: "Languages & Frameworks",
    skills: ["Java", "Python", "C++", "React", "Node.js", "TypeScript"],
  },
  {
    category: "ML / DL",
    skills: [
      "PyTorch",
      "TensorFlow",
      "Scikit-learn",
      "Hugging Face",
      "PEFT",
      "Unsloth",
      "MLX",
    ],
  },
  {
    category: "LLM & NLP",
    skills: [
      "Fine-Tuning (LoRA/QLoRA)",
      "Prompt Engineering",
      "RAG",
      "Agentic Architectures",
      "LangChain",
      "FAISS",
    ],
  },
  {
    category: "DevOps & Cloud",
    skills: ["Docker", "AWS", "GCP", "CI/CD", "AWS Lambda"],
  },
  {
    category: "Databases",
    skills: ["PostgreSQL", "MySQL"],
  },
  {
    category: "Tools",
    skills: ["Git", "Jira", "Confluence", "REST APIs", "WebRTC"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-2 text-sm font-medium uppercase tracking-widest text-accent-light">
          Skills
        </h2>
        <h3 className="mb-12 text-3xl font-bold sm:text-4xl">
          Tech Stack
        </h3>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div key={group.category}>
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent-light">
                {group.category}
              </h4>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="skill-tag cursor-default rounded-lg border border-border bg-card px-3 py-1.5 text-sm text-muted"
                  >
                    {skill}
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
