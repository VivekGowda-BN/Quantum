import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import { FACULTY } from "../data/seed";

const HERO_IMG =
  "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=2000&q=80";
const CHALK =
  "https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?auto=format&fit=crop&w=1600&q=80";

export default function About() {
  return (
    <div data-testid="about-page">
      <PageHero
        testId="about-hero"
        variant="compact"
        title="The Physics & Quantum Computing Club at RV University."
        subtitle="A student circle in Bengaluru. We read the original texts, work through the mathematics, and build small projects together."
        image={HERO_IMG}
        imagePosition="center 40%"
      />

      <section className="mx-auto max-w-7xl px-6 md:px-10 py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <Reveal className="md:col-span-6" variant="left">
            <div className="aspect-[4/3] w-full overflow-hidden rounded-xl border border-border">
              <img
                src={CHALK}
                alt="Chalkboard with equations"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </Reveal>
          <Reveal className="md:col-span-6" variant="right" delay={100}>
            <div className="text-eyebrow text-primary mb-4">What we do</div>
            <h2 className="text-4xl md:text-5xl leading-[1.08]">
              Read the source. Do the algebra. Explain it to someone else.
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              The club meets through the semester for reading circles, problem
              sessions and hands-on labs. We work from textbooks and papers
              rather than summaries, and every session ends with someone
              presenting what they understood.
            </p>
            <div className="mt-10 grid grid-cols-2 gap-6">
              {[
                { k: "Weekly", v: "reading circle" },
                { k: "Monthly", v: "problem session" },
                { k: "Termly", v: "student seminar" },
                { k: "Always", v: "open to all years" },
              ].map((r) => (
                <div key={r.v} className="border-l-2 border-primary pl-4">
                  <div className="text-lg font-semibold">{r.k}</div>
                  <div className="text-eyebrow text-muted-foreground mt-1">{r.v}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-border bg-secondary/40 dark:bg-secondary">
        <div className="mx-auto max-w-7xl px-6 md:px-10 py-20 md:py-28">
          <Reveal className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-14">
            <div className="md:col-span-5">
              <div className="text-eyebrow text-primary mb-4">Faculty</div>
              <h2 className="text-4xl md:text-5xl leading-[1.08]">
                The teachers behind the club.
              </h2>
            </div>
            <div className="md:col-span-7 md:pt-4">
              <p className="text-muted-foreground leading-relaxed max-w-xl">
                They set the reading list, guide project work and join the
                discussions.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {FACULTY.map((f, i) => (
              <Reveal key={f.name} delay={i * 80} className="flex">
                <div
                  data-testid={`faculty-card-${i + 1}`}
                  className="w-full rounded-xl border border-border bg-card p-8 transition-colors hover:border-foreground/25"
                >
                  <div className="h-20 w-20 rounded-full overflow-hidden bg-secondary">
                    <img
                      src={f.photo}
                      alt={f.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold">{f.name}</h3>
                  <div className="mt-2 text-sm text-muted-foreground">{f.role}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
