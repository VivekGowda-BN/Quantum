import { ArrowUpRight } from "lucide-react";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import { NEWS } from "../data/seed";

const UPD_HERO =
  "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2000&q=80";

function formatDate(iso) {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export default function Updates() {
  return (
    <div data-testid="updates-page">
      <PageHero
        testId="updates-hero"
        variant="compact"
        title="Physics news, worth reading."
        subtitle="Recent stories from Quanta Magazine — quantum computing, cosmology, and the foundations of the field."
        image={UPD_HERO}
        imagePosition="center 40%"
      />

      <section
        data-testid="news-section"
        className="mx-auto max-w-6xl px-6 md:px-10 py-14 md:py-20"
      >
        <div className="flex flex-col gap-5 md:gap-6">
          {NEWS.map((n, i) => (
            <Reveal key={n.id} delay={Math.min(i * 70, 280)} className="flex">
              <article
                data-testid={`update-card-${n.id}`}
                className="grid w-full grid-cols-1 md:grid-cols-12 gap-5 md:gap-7 overflow-hidden rounded-xl border border-border bg-card p-4 md:p-5 transition-colors hover:border-foreground/25"
              >
              <div className="md:col-span-5">
                <a
                  href={n.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block aspect-[16/10] overflow-hidden rounded-lg bg-secondary"
                >
                  <img
                    src={n.image}
                    alt=""
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-500"
                  />
                </a>
              </div>

              <div className="md:col-span-7 flex flex-col p-1 md:py-1 md:pr-2">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-eyebrow text-muted-foreground">
                  <span>{n.source}</span>
                  <span aria-hidden="true">/</span>
                  <span>{formatDate(n.date)}</span>
                  <span aria-hidden="true">/</span>
                  <span>{n.tag}</span>
                </div>

                <h2 className="mt-3 text-xl md:text-2xl leading-snug font-semibold tracking-tight">
                  <a
                    href={n.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline underline-offset-4 decoration-1"
                  >
                    {n.title}
                  </a>
                </h2>

                <p className="mt-3 text-sm md:text-[0.95rem] text-muted-foreground leading-relaxed">
                  {n.summary}
                </p>

                <a
                  href={n.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid={`update-link-${n.id}`}
                  className="mt-5 inline-flex items-center gap-2 self-start text-sm font-medium border-b border-foreground/40 pb-0.5 hover:border-foreground transition-colors"
                >
                  Read at {n.source}
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
