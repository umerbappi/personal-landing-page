import Link from "next/link";

interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
}

// Add your blog posts here — later we can move to MDX or a CMS
const posts: BlogPost[] = [
  {
    slug: "hello-world",
    title: "Hello World — Why I Started This Blog",
    date: "2026-03-27",
    excerpt:
      "Welcome to my corner of the internet. I'll be sharing daily updates on what I'm learning, building, and exploring in the world of ML, NLP, and software engineering.",
    tags: ["Personal", "Introduction"],
  },
];

export default function BlogPage() {
  return (
    <div className="gradient-bg min-h-screen pt-28 pb-16 px-6">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-2 text-sm font-medium uppercase tracking-widest text-accent-light">
          Blog
        </h2>
        <h1 className="mb-4 text-3xl font-bold sm:text-4xl">
          Thoughts & Updates
        </h1>
        <p className="mb-12 text-muted">
          Daily reflections on ML, NLP, engineering, and everything in between.
        </p>

        <div className="space-y-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block rounded-xl border border-border bg-card p-6 transition-all hover:border-accent/50 hover:shadow-lg hover:shadow-accent/5"
            >
              <div className="mb-2 flex items-center gap-3">
                <time className="text-xs text-muted">{post.date}</time>
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-accent/10 px-2.5 py-0.5 text-xs text-accent-light"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="mb-2 text-lg font-semibold transition-colors group-hover:text-accent-light">
                {post.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted">
                {post.excerpt}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
