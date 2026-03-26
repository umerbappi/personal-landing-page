const experiences = [
  {
    role: "ML/AI Intern",
    company: "Revotic AI",
    location: "Remote",
    period: "Sep 2025 — Nov 2025",
    bullets: [
      "Designed and built a machine learning-based weather forecast system, owning the full pipeline from data preprocessing to model evaluation and delivery",
      "Contributed to end-to-end development of production AI solutions, collaborating with engineers on real-world applied ML problems",
      "Translated business requirements into technical ML specifications within a fast-paced startup environment",
    ],
  },
  {
    role: "Research Assistant",
    company: "Forman Christian College (University)",
    location: "Lahore, Pakistan",
    period: "Feb 2024 — Dec 2025",
    bullets: [
      "Identified research gaps in the ML/NLP domain and independently developed novel research directions",
      "Designed and executed experimental frameworks to validate hypotheses using cutting-edge methodologies",
      "Collaborated with faculty supervisors on manuscript preparation, contributing to academic publications",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-2 text-sm font-medium uppercase tracking-widest text-accent-light">
          Experience
        </h2>
        <h3 className="mb-12 text-3xl font-bold sm:text-4xl">
          Where I&apos;ve Worked
        </h3>

        <div className="relative space-y-12 border-l border-border pl-8">
          {experiences.map((exp) => (
            <div key={exp.role + exp.company} className="relative">
              {/* Timeline dot */}
              <div className="absolute -left-[41px] top-1 h-3 w-3 rounded-full border-2 border-accent bg-background" />

              <div className="rounded-xl border border-border bg-card p-6 transition-colors hover:border-accent/50">
                <div className="mb-4 flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <h4 className="text-lg font-semibold">{exp.role}</h4>
                    <p className="text-accent-light">{exp.company}</p>
                  </div>
                  <div className="text-right text-sm text-muted">
                    <p>{exp.period}</p>
                    <p>{exp.location}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {exp.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/60" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
