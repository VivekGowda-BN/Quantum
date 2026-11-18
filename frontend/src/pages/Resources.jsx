import { useMemo, useState } from "react";
import { ArrowUpRight, BookOpen, Search } from "lucide-react";
import { Input } from "../components/ui/input";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import { BOOKS } from "../data/seed";

const RES_HERO =
  "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=2000&q=80";

function Cover({ book }) {
  const [failed, setFailed] = useState(false);

  if (failed || !book.cover) {
    return (
      <div className="w-full h-full bg-secondary flex flex-col justify-between p-5">
        <BookOpen className="h-5 w-5 text-muted-foreground" />
        <div>
          <div className="text-sm font-semibold leading-snug">{book.title}</div>
          <div className="mt-2 text-xs text-muted-foreground">{book.authors}</div>
        </div>
      </div>
    );
  }

  return (
    <img
      src={book.cover}
      alt={`Cover of ${book.title}`}
      loading="lazy"
      onError={() => setFailed(true)}
      className="w-full h-full object-contain p-4"
    />
  );
}

export default function Resources() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return BOOKS;
    return BOOKS.filter(
      (b) =>
        b.title.toLowerCase().includes(q) ||
        b.authors.toLowerCase().includes(q) ||
        b.tag.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <div data-testid="resources-page">
      <PageHero
        testId="resources-hero"
        variant="compact"
        title="The club reading list."
        subtitle="The texts we work from — undergraduate and graduate introductions, the standard reference on quantum computing, and Dirac."
        image={RES_HERO}
        imagePosition="center 45%"
      />

      <section className="border-b border-border bg-background/95 sticky top-12 md:top-14 z-30 glass">
        <div className="mx-auto max-w-7xl px-6 md:px-10 py-4 flex items-center justify-between gap-5">
          <div className="text-eyebrow text-muted-foreground hidden sm:block">
            Reference shelf
          </div>
          <div className="relative w-full sm:max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search title, author or topic…"
              className="pl-9 h-10 rounded-md bg-background"
              data-testid="resources-search-input"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 md:px-10 py-14 md:py-20">
        {filtered.length === 0 ? (
          <Reveal className="rounded-xl border border-dashed border-border p-16 text-center" data-testid="resources-empty">
            <div className="text-2xl font-semibold">Nothing found.</div>
            <p className="text-muted-foreground mt-2 text-sm">
              Try an author or a topic.
            </p>
          </Reveal>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7">
            {filtered.map((b, i) => (
              <Reveal key={b.id} delay={Math.min(i * 70, 280)} className="flex">
                <article
                  data-testid={`resource-card-${b.id}`}
                  className="group flex w-full flex-col overflow-hidden rounded-xl border border-border bg-card transition-all hover:border-foreground/25 hover:shadow-lg hover:shadow-black/5 dark:hover:shadow-black/40"
                >
                  <div className="aspect-[16/10] bg-secondary overflow-hidden border-b border-border">
                    <Cover book={b} />
                  </div>

                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center justify-between gap-3 text-eyebrow text-muted-foreground">
                      <span>{b.tag}</span>
                      <span>{b.year}</span>
                    </div>
                    <h3 className="mt-4 text-xl leading-snug font-semibold tracking-tight">
                      {b.title}
                    </h3>
                    <div className="mt-2 text-sm text-muted-foreground">
                      {b.authors}
                    </div>
                    <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                      {b.description}
                    </p>

                    <div className="mt-auto pt-6">
                      <a
                        href={b.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-testid={`resource-link-${b.id}`}
                        className="inline-flex items-center gap-2 text-sm font-medium text-foreground border-b border-foreground/40 pb-0.5 hover:border-foreground transition-colors"
                      >
                        {b.publisher}
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </a>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
