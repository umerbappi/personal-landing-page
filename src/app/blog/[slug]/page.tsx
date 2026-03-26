import Link from "next/link";

// For now, blog content is inline. You can later migrate to MDX files.
const blogContent: Record<
  string,
  { title: string; date: string; tags: string[]; content: string }
> = {
  "hello-world": {
    title: "Hello World — Why I Started This Blog",
    date: "2026-03-27",
    tags: ["Personal", "Introduction"],
    content: `
Welcome to my personal blog! I'm Umer — a fresh Computer Science graduate who's deeply passionate about Machine Learning, Natural Language Processing, and building things that matter.

## Why this blog?

I believe in learning in public. Every day, I'm either reading a paper, training a model, debugging a pipeline, or exploring a new framework. This blog is where I'll document that journey — not just the wins, but the messy, confusing, beautiful process of figuring things out.

## What to expect

- **Daily updates** on what I'm learning and building
- **Technical deep-dives** into ML/NLP topics
- **Project breakdowns** showing how I approach problems end-to-end
- **Honest reflections** on the job search, growth, and the grind

## A bit about me

I graduated from Forman Christian College with a BS in Computer Science. My final year project tackled LLM hallucinations in Urdu NLP — a problem close to my heart since low-resource languages deserve better AI too.

Outside of code, you'll find me playing lead guitar, producing music, or on the football pitch. I believe creativity isn't domain-specific — the same instincts that make a good improvisation make a good system design.

Let's build something great together.

— Umer
    `,
  },
};

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogContent[slug];

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <Link href="/blog" className="text-accent-light hover:underline">
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="gradient-bg min-h-screen pt-28 pb-16 px-6">
      <article className="mx-auto max-w-2xl">
        <Link
          href="/blog"
          className="mb-8 inline-flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Back to Blog
        </Link>

        <div className="mb-6 flex items-center gap-3">
          <time className="text-sm text-muted">{post.date}</time>
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-accent/10 px-2.5 py-0.5 text-xs text-accent-light"
            >
              {tag}
            </span>
          ))}
        </div>

        <h1 className="mb-8 text-3xl font-bold sm:text-4xl leading-tight">
          {post.title}
        </h1>

        <div className="prose prose-invert max-w-none text-muted leading-relaxed space-y-4">
          {post.content.split("\n\n").map((paragraph, i) => {
            if (paragraph.startsWith("## ")) {
              return (
                <h2 key={i} className="text-xl font-semibold text-foreground mt-8 mb-4">
                  {paragraph.replace("## ", "")}
                </h2>
              );
            }
            if (paragraph.startsWith("- ")) {
              const items = paragraph.split("\n").filter(Boolean);
              return (
                <ul key={i} className="list-none space-y-2">
                  {items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-light" />
                      <span
                        dangerouslySetInnerHTML={{
                          __html: item
                            .replace("- ", "")
                            .replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground">$1</strong>'),
                        }}
                      />
                    </li>
                  ))}
                </ul>
              );
            }
            if (paragraph.trim()) {
              return (
                <p
                  key={i}
                  dangerouslySetInnerHTML={{
                    __html: paragraph.replace(
                      /\*\*(.*?)\*\*/g,
                      '<strong class="text-foreground">$1</strong>'
                    ),
                  }}
                />
              );
            }
            return null;
          })}
        </div>
      </article>
    </div>
  );
}
