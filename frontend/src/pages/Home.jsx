import { Link } from "react-router-dom";
import { ArrowUpRight, BookOpen } from "lucide-react";
import { Button } from "../components/ui/button";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import { NEWS, BOOKS } from "../data/seed";

const HERO_IMG =
  "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=2000&q=80";
const SPLIT_IMG =
  "https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?auto=format&fit=crop&w=1600&q=80";

export default function Home() {
  const lead = NEWS[0];
  const books = BOOKS.slice(0, 3);

  return (
    <div data-testid="home-page">
      <PageHero
        testId="home-hero"
        title={
          <>
            Theoretical Physics &<br />
            Quantum Computing Club
          </>
        }
        belowTitle={
          <div className="flex items-center gap-3 text-white/90">
            <span className="h-px w-8 bg-white/60" />
            <span className="text-eyebrow">RV University · Bengaluru</span>
          </div>
        }
        subtitle="A student group for quantum mechanics and quantum computing — weekly reading circles, problem sessions, and a public library of books worth owning."
        image={HERO_IMG}
        imagePosition="center 35%"
      >
        <div className="flex flex-wrap items-center gap-3">
          <Button
            asChild
            size="lg"
            className="h-11 px-5 rounded-sm text-sm"
            data-testid="hero-cta-resources"
          >
            <Link to="/resources" className="inline-flex items-center gap-2">
              Browse the books <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            className="h-11 px-5 rounded-sm text-sm !bg-transparent border border-white/60 !text-white hover:!bg-white hover:!text-[#0b0f1a]"
            data-testid="hero-cta-updates"
          >
            <Link to="/updates">Physics news</Link>
          </Button>
        </div>
      </PageHero>

      {/* Mission */}
      <section className="mx-auto max-w-7xl px-6 md:px-10 py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <Reveal className="md:col-span-6" variant="left">
            <div className="text-eyebrow text-primary mb-4">01 · About the club</div>
            <h2 className="text-4xl md:text-5xl leading-[1.08]">
              We start from the formalism and stay with it until it makes sense.
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed text-[1.05rem] max-w-lg">
              No popular-science shortcuts. We pick a text — Griffiths, Sakurai,
              Nielsen and Chuang — and work through it chapter by chapter
              together, with problems and code where it helps.
            </p>
            <Link
              to="/about"
              data-testid="home-mission-link"
              className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-primary border-b border-primary pb-1 hover:gap-3 transition-all"
            >
              More about us <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Reveal>
          <Reveal className="md:col-span-6" variant="right" delay={100}>
            <div className="aspect-[4/3] w-full overflow-hidden rounded-xl border border-border">
              <img
                src={SPLIT_IMG}
                alt="Chalkboard with equations"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Bloch sphere */}
      <section className="border-y border-border bg-secondary/40 dark:bg-secondary overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 md:px-10 py-20 md:py-28 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <Reveal className="md:col-span-6" variant="left">
            <div className="text-eyebrow text-primary mb-4">02 · Quantum computing</div>
            <h2 className="text-4xl md:text-5xl leading-[1.08]">
              From the Bloch sphere to circuits on real hardware.
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed text-[1.05rem] max-w-lg">
              Members work through qubits, gates and entanglement on paper, then
              rebuild them in Qiskit and run the circuits on simulators.
            </p>
            <div className="mt-10 flex flex-wrap gap-8">
              {[
                { k: "Weekly", v: "reading circle" },
                { k: "Monthly", v: "problem session" },
                { k: "Open", v: "book library" },
              ].map((s) => (
                <div key={s.v} className="border-t border-border pt-3 min-w-[120px]">
                  <div className="text-xl font-semibold">{s.k}</div>
                  <div className="text-eyebrow text-muted-foreground mt-1">{s.v}</div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal className="md:col-span-6 flex justify-center" variant="scale" delay={120}>
            <div className="stage-3d relative h-[320px] w-[320px] md:h-[420px] md:w-[420px]">
              <div className="sphere-3d">
                <div className="ring-3d" />
                <div className="ring-3d eq" />
                <div className="ring-3d mer" />
                <div className="ring-3d tilt-1" />
                <div className="ring-3d tilt-2" />
                <div className="sphere-core" />
                <div className="particle-3d" style={{ "--r": "160px", "--d": "12s", "--yaw": "0deg", "--pitch": "20deg" }} />
                <div className="particle-3d p2" style={{ "--r": "130px", "--d": "9s", "--yaw": "60deg", "--pitch": "-25deg" }} />
                <div className="particle-3d p3" style={{ "--r": "180px", "--d": "16s", "--yaw": "120deg", "--pitch": "10deg" }} />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* News + books */}
      <section className="mx-auto max-w-7xl px-6 md:px-10 py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <Reveal as="article" className="md:col-span-6">
            <div className="text-eyebrow text-primary mb-4">03 · In the field</div>
            <a
              href={lead.url}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="home-lead-news"
              className="group block"
            >
              <div className="aspect-[16/10] overflow-hidden rounded-xl border border-border bg-secondary">
                <img
                  src={lead.image}
                  alt=""
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
              <div className="mt-4 text-eyebrow text-muted-foreground">
                {lead.source} · {lead.tag}
              </div>
              <h3 className="mt-2 text-2xl leading-snug font-semibold group-hover:underline underline-offset-4 decoration-1">
                {lead.title}
              </h3>
            </a>
            <Link
              to="/updates"
              data-testid="home-updates-link"
              className="mt-5 inline-flex items-center gap-2 text-sm font-medium border-b border-foreground/40 pb-1 hover:border-foreground transition-colors"
            >
              All physics news <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Reveal>

          <Reveal className="md:col-span-6" variant="right" delay={100}>
            <div className="text-eyebrow text-primary mb-4">04 · The shelf</div>
            <h3 className="text-3xl md:text-4xl leading-[1.1]">
              Books we actually read.
            </h3>
            <div className="mt-8 flex flex-col">
              {books.map((b) => (
                <a
                  key={b.id}
                  href={b.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid={`home-book-${b.id}`}
                  className="group flex items-start gap-4 py-4 border-b border-border first:border-t"
                >
                  <BookOpen className="h-4 w-4 mt-1 text-muted-foreground shrink-0" />
                  <div className="flex-1 min-w-0">
                    <div className="font-medium leading-snug">{b.title}</div>
                    <div className="mt-1 text-sm text-muted-foreground">
                      {b.authors} · {b.year}
                    </div>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-foreground shrink-0" />
                </a>
              ))}
            </div>
            <Link
              to="/resources"
              data-testid="home-view-all-resources"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium border-b border-foreground/40 pb-1 hover:border-foreground transition-colors"
            >
              The full reading list <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 md:px-10 py-20 md:py-28">
        <Reveal className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-8">
            <div className="text-eyebrow text-primary mb-4">05 · Join</div>
            <h3 className="text-4xl md:text-5xl leading-[1.05]">
              Want to join the reading circle?
            </h3>
            <p className="mt-4 text-muted-foreground max-w-lg">
              Write to us and tell us what you have studied so far. Anyone at
              RVU can join.
            </p>
          </div>
          <div className="md:col-span-4 flex md:justify-end">
            <Button
              asChild
              size="lg"
              className="h-12 px-6 rounded-sm text-sm"
              data-testid="cta-join-us"
            >
              <a
                href="mailto:quantum@rvu.edu.in?subject=Joining%20the%20Quantum%20club"
                className="inline-flex items-center gap-2"
              >
                Write to us <ArrowUpRight className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
