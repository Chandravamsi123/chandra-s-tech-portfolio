import { createFileRoute } from "@tanstack/react-router";
import portrait from "@/assets/portrait.jpg";
import { Mail, Phone, GraduationCap, Code2, Briefcase, User, Home as HomeIcon, MapPin } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Chandra Vamsi — Corporate Technical Trainer" },
      { name: "description", content: "Corporate technical trainer with 3+ years of experience delivering Python, Java, C/C++ and MERN stack training across 20+ engineering colleges in India." },
      { property: "og:title", content: "Chandra Vamsi — Corporate Technical Trainer" },
      { property: "og:description", content: "Python, Java, C/C++ and MERN stack training delivered at KL University, IARE, KIET, Mallareddy, Vasavi and 15+ more colleges." },
    ],
  }),
  component: Index,
});

const navItems = [
  { href: "#home", label: "Home", icon: HomeIcon },
  { href: "#about", label: "About", icon: User },
  { href: "#experience", label: "Experience", icon: Briefcase },
  { href: "#skills", label: "Skills", icon: Code2 },
  { href: "#contact", label: "Contact", icon: Mail },
];

const skills = [
  { name: "Python", level: 95, blurb: "Core, OOP, scripting, data structures, problem solving." },
  { name: "Java", level: 92, blurb: "Core Java, OOP, collections, JDBC, multithreading." },
  { name: "C", level: 90, blurb: "Foundations of programming, pointers, memory, DSA." },
  { name: "C++", level: 90, blurb: "OOP, STL, templates, competitive programming." },
  { name: "MERN Stack", level: 88, blurb: "MongoDB, Express, React, Node.js — full-stack web." },
  { name: "DSA & Problem Solving", level: 90, blurb: "Algorithms, complexity, interview preparation." },
];

const colleges = [
  "KL University",
  "IARE, Hyderabad",
  "KIET Engineering College",
  "Pragathi Engineering College",
  "Mallareddy University",
  "Vasavi Engineering College",
  "+ 14 more institutions",
];

const stats = [
  { value: "3+", label: "Years training" },
  { value: "20+", label: "Colleges delivered" },
  { value: "5K+", label: "Students mentored" },
  { value: "6", label: "Core tech stacks" },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#home" className="flex items-center gap-2 font-semibold tracking-tight">
            <span className="grid h-8 w-8 place-items-center rounded-md bg-primary font-bold text-primary-foreground">CV</span>
            <span className="hidden sm:inline">Chandra Vamsi</span>
          </a>
          <nav className="flex items-center gap-1 text-sm">
            {navItems.map((n) => (
              <a key={n.href} href={n.href} className="rounded-md px-3 py-2 text-muted-foreground transition hover:bg-secondary hover:text-foreground">
                {n.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-60"
          style={{
            background:
              "radial-gradient(60% 50% at 80% 0%, oklch(0.78 0.16 60 / 0.18), transparent 60%), radial-gradient(50% 40% at 0% 100%, oklch(0.5 0.18 260 / 0.25), transparent 60%)",
          }}
        />
        <div className="mx-auto grid max-w-6xl gap-12 px-6 pb-24 pt-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:pt-28">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs uppercase tracking-widest text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Corporate Technical Trainer
            </span>
            <h1 className="mt-6 text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Hi, I'm <span className="text-primary">Chandra Vamsi</span>.
              <br />I teach code that ships.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              For 3+ years I've trained engineering students across India in Python, Java, C/C++ and the MERN stack — turning syntax into intuition and concepts into real, working software.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#contact" className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 font-medium text-primary-foreground transition hover:opacity-90">
                <Mail className="h-4 w-4" /> Book a training
              </a>
              <a href="#experience" className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-3 font-medium text-foreground transition hover:bg-secondary">
                See where I've taught
              </a>
            </div>

            <dl className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label}>
                  <dt className="text-3xl font-bold text-primary">{s.value}</dt>
                  <dd className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{s.label}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-4 rounded-3xl bg-primary/20 blur-2xl" aria-hidden />
            <div className="relative overflow-hidden rounded-3xl border border-border bg-card shadow-2xl">
              <img src={portrait} alt="Portrait of Chandra Vamsi" width={1024} height={1280} className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="border-t border-border/60 bg-card/30">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <SectionHeader eyebrow="About" title="Trainer, mentor, builder." />
          <div className="mt-10 grid gap-10 lg:grid-cols-3">
            <p className="text-lg leading-relaxed text-muted-foreground lg:col-span-2">
              I'm a corporate technical trainer focused on making programming click for students who think it never will. My sessions blend
              first-principles teaching with hands-on labs — students leave able to <em className="text-foreground not-italic">build</em>, not just recite. I work closely with engineering colleges and corporate L&amp;D teams to design curricula that map to real interview and on-the-job skills.
            </p>
            <div className="rounded-2xl border border-border bg-background/60 p-6">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-primary">What I deliver</h3>
              <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                <li className="flex gap-2"><span className="text-primary">›</span> Bootcamps in Python, Java, C/C++ &amp; MERN</li>
                <li className="flex gap-2"><span className="text-primary">›</span> DSA + problem-solving for placements</li>
                <li className="flex gap-2"><span className="text-primary">›</span> Project-driven full-stack workshops</li>
                <li className="flex gap-2"><span className="text-primary">›</span> Interview &amp; coding-round preparation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="border-t border-border/60">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <SectionHeader eyebrow="Experience" title="3+ years. 20+ colleges. One mission." />
          <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_1.2fr]">
            <div className="rounded-2xl border border-border bg-card p-8">
              <div className="flex items-center gap-3 text-primary">
                <Briefcase className="h-5 w-5" />
                <span className="text-sm uppercase tracking-widest">2022 — Present</span>
              </div>
              <h3 className="mt-4 text-2xl font-semibold">Corporate Technical Trainer</h3>
              <p className="mt-3 text-muted-foreground">
                Delivering programming &amp; full-stack training programs across India's top engineering institutions — onsite workshops, multi-week bootcamps, and placement-focused coding intensives.
              </p>
              <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" /> India · Onsite &amp; hybrid
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card p-8">
              <div className="flex items-center gap-3 text-primary">
                <GraduationCap className="h-5 w-5" />
                <span className="text-sm uppercase tracking-widest">Institutions trained</span>
              </div>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {colleges.map((c) => (
                  <li key={c} className="flex items-start gap-3 rounded-lg border border-border/60 bg-background/40 p-3 text-sm">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="border-t border-border/60 bg-card/30">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <SectionHeader eyebrow="Skills" title="What I teach, end-to-end." />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((s) => (
              <div key={s.name} className="group rounded-2xl border border-border bg-background/60 p-6 transition hover:border-primary/60">
                <div className="flex items-baseline justify-between">
                  <h3 className="text-lg font-semibold">{s.name}</h3>
                  <span className="text-xs text-primary">{s.level}%</span>
                </div>
                <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-secondary">
                  <div className="h-full rounded-full bg-primary transition-all duration-700 group-hover:opacity-90" style={{ width: `${s.level}%` }} />
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{s.blurb}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t border-border/60">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <SectionHeader eyebrow="Contact" title="Let's plan your next training." />
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <a href="mailto:chandravamsivanapalli@gmail.com" className="group flex items-center gap-5 rounded-2xl border border-border bg-card p-6 transition hover:border-primary/60">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary/15 text-primary">
                <Mail className="h-5 w-5" />
              </span>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Email</div>
                <div className="mt-1 text-lg font-medium group-hover:text-primary">chandravamsivanapalli@gmail.com</div>
              </div>
            </a>
            <a href="tel:+919392252448" className="group flex items-center gap-5 rounded-2xl border border-border bg-card p-6 transition hover:border-primary/60">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary/15 text-primary">
                <Phone className="h-5 w-5" />
              </span>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Mobile</div>
                <div className="mt-1 text-lg font-medium group-hover:text-primary">+91 93922 52448</div>
              </div>
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-border/60">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-6 py-8 text-sm text-muted-foreground sm:flex-row">
          <span>© {new Date().getFullYear()} Chandra Vamsi · Corporate Technical Trainer</span>
          <span>Made with care · Python · Java · C/C++ · MERN</span>
        </div>
      </footer>
    </div>
  );
}

function SectionHeader({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="max-w-2xl">
      <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">{eyebrow}</div>
      <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">{title}</h2>
    </div>
  );
}
