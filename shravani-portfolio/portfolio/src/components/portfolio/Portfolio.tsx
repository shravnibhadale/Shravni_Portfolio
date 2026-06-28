import { useEffect, useRef, useState, type ReactNode } from "react";
import { motion, useScroll, useSpring, useInView, type Variants } from "framer-motion";
import {
  Mail, Phone, Linkedin, Github, Download, ArrowUpRight, MapPin,
  Cloud, Server, Code2, Database, Terminal, GitBranch, Workflow, Globe,
  Container, Box, Wrench, Award, GraduationCap, Briefcase, Send, Sparkles,
} from "lucide-react";
import profileAsset from "@/assets/profile.jpeg.asset.json";

// ============== Data (strictly from resume) ==============
const PROFILE = {
  name: "Shravani Bhadale",
  title: "Cloud & DevOps Engineer",
  location: "Pune, Maharashtra",
  email: "shravanibhadale139@email.com",
  phone: "+91-9767475438",
  linkedin: "https://linkedin.com/in/shravanibhadale",
  github: "https://github.com/shravnibhadale",
  resume: "/Shravani_Bhadale_Resume.pdf",
  summary:
    "Computer Science student specializing in Cloud Computing with hands-on experience in AWS, Linux, Python, PHP, MySQL, and Web Development. Skilled in developing web applications, working with cloud technologies, and solving technical problems through projects and practical training. Driven by curiosity, creativity, and a passion for continuous learning in cloud and web development.",
};

const SKILLS = [
  { name: "AWS EC2", icon: Cloud },
  { name: "AWS S3", icon: Box },
  { name: "AWS IAM", icon: Server },
  { name: "Linux", icon: Terminal },
  { name: "Python", icon: Code2 },
  { name: "PHP", icon: Code2 },
  { name: "Java", icon: Code2 },
  { name: "C", icon: Code2 },
  { name: "HTML & CSS", icon: Globe },
  { name: "MySQL", icon: Database },
  { name: "GitHub", icon: GitBranch },
  { name: "VS Code", icon: Wrench },
  { name: "OOP", icon: Workflow },
  { name: "DBMS", icon: Database },
  { name: "Operating Systems", icon: Container },
  { name: "Cloud Computing", icon: Cloud },
];

const PROJECTS = [
  {
    title: "SafeSakhi — Women's Safety Web Application",
    description:
      "A web-based women's safety platform for reporting and managing incidents, with secure authentication and an admin dashboard. Designed and managed relational data with MySQL.",
    tech: ["PHP", "MySQL", "HTML", "CSS", "Authentication"],
    github: "https://github.com/shravnibhadale",
    demo: null as string | null,
  },
];

const CERTIFICATIONS = [
  { title: "TCS iON Cognitive Assessment", detail: "74.79%" },
  { title: "AI Tools Workshop", detail: "Workshop" },
  { title: "LED Making Workshop", detail: "Workshop" },
];

const EDUCATION = [
  { school: "C.T. Bora College, Shirur", degree: "B.Sc. in Computer Science", period: "2023 – 2026", detail: "CGPA: 8.45 / 10" },
  { school: "Higher Secondary Certificate (HSC)", degree: "HSC", period: "2022", detail: "Percentage: 63%" },
  { school: "Secondary School Certificate (SSC)", degree: "SSC", period: "2020", detail: "Percentage: 88.20%" },
];

const EXPERIENCE = [
  {
    role: "Cloud Application Developer Trainee",
    org: "MIDC Skill Development Center",
    points: [
      "Undergoing training in programming and software fundamentals.",
      "Practicing problem-solving and applying concepts through hands-on exercises.",
      "Building foundational knowledge in software development and cloud technologies.",
    ],
  },
];

const STRENGTHS = ["Problem-solving", "Continuous learning", "Curiosity", "Creativity", "Collaboration", "Adaptability"];
const INTERESTS = ["Cloud Computing", "Web Development", "Open-Source", "DevOps Tooling", "Reading", "Design"];

// ============== Motion helpers ==============
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, ease: [0.2, 0.8, 0.2, 1], delay: i * 0.06 },
  }),
};

function Reveal({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      custom={delay}
      variants={fadeUp}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs uppercase tracking-[0.22em] text-tobago/70">
      <span className="h-1 w-1 rounded-full bg-rose" /> {children}
    </div>
  );
}

function SectionTitle({ kicker, title, intro }: { kicker: string; title: string; intro?: string }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <Reveal>
        <SectionLabel>{kicker}</SectionLabel>
      </Reveal>
      <Reveal delay={1}>
        <h2 className="serif mt-5 text-4xl leading-[1.05] text-tobago md:text-5xl lg:text-6xl">
          {title}
        </h2>
      </Reveal>
      {intro && (
        <Reveal delay={2}>
          <p className="mx-auto mt-5 max-w-2xl text-base text-muted-foreground md:text-lg">{intro}</p>
        </Reveal>
      )}
    </div>
  );
}

// ============== Nav ==============
const NAV = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "py-3" : "py-5"}`}>
      <div className="mx-auto max-w-6xl px-4">
        <nav className={`flex items-center justify-between rounded-full border border-border px-5 py-3 transition-all duration-500 ${scrolled ? "glass shadow-[0_8px_30px_-12px_rgba(66,43,35,0.18)]" : "bg-transparent"}`}>
          <a href="#top" className="serif text-lg font-medium tracking-tight text-tobago">
            Shravani<span className="text-rose">.</span>
          </a>
          <ul className="hidden items-center gap-7 md:flex">
            {NAV.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="underline-link text-sm text-tobago/80 hover:text-tobago">{n.label}</a>
              </li>
            ))}
          </ul>
          <a href="#contact" className="hidden md:inline-flex magnetic-btn bg-tobago text-fantasy text-xs hover:bg-rose hover:text-tobago">
            Let's talk <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
          <button onClick={() => setOpen((v) => !v)} aria-label="Menu" className="md:hidden rounded-full border border-border p-2 text-tobago">
            <div className="flex h-4 w-5 flex-col justify-between">
              <span className={`h-px w-full bg-tobago transition ${open ? "translate-y-[7px] rotate-45" : ""}`} />
              <span className={`h-px w-full bg-tobago transition ${open ? "opacity-0" : ""}`} />
              <span className={`h-px w-full bg-tobago transition ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
            </div>
          </button>
        </nav>
        {open && (
          <div className="mt-2 rounded-3xl border border-border glass p-5 md:hidden">
            <ul className="flex flex-col gap-3">
              {NAV.map((n) => (
                <li key={n.href}>
                  <a onClick={() => setOpen(false)} href={n.href} className="block text-tobago">{n.label}</a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}

// ============== Cursor glow ==============
function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (!ref.current) return;
      ref.current.style.transform = `translate3d(${e.clientX - 200}px, ${e.clientY - 200}px, 0)`;
    };
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, []);
  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-0 hidden h-[400px] w-[400px] rounded-full opacity-60 blur-3xl md:block"
      style={{ background: "radial-gradient(closest-side, rgba(219,161,162,0.35), transparent 70%)" }}
    />
  );
}

// ============== Sections ==============
function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32">
      {/* blobs */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-vanilla/70 blur-3xl animate-blob" />
        <div className="absolute right-[-120px] top-1/3 h-[28rem] w-[28rem] rounded-full bg-rose/30 blur-3xl animate-blob" style={{ animationDelay: "-6s" }} />
        <div className="absolute bottom-[-80px] left-1/3 h-80 w-80 rounded-full bg-silver/50 blur-3xl animate-blob" style={{ animationDelay: "-12s" }} />
      </div>

      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-4 md:grid-cols-[1.05fr_0.95fr]">
        <div>
          <Reveal>
            <SectionLabel>Portfolio · 2026</SectionLabel>
          </Reveal>
          <Reveal delay={1}>
            <h1 className="serif mt-6 text-[3.2rem] leading-[0.98] text-tobago sm:text-6xl md:text-7xl lg:text-[5.5rem]">
              {PROFILE.name.split(" ")[0]}
              <br />
              <span className="italic text-rose">{PROFILE.name.split(" ")[1]}.</span>
            </h1>
          </Reveal>
          <Reveal delay={2}>
            <p className="mt-6 inline-flex items-center gap-2 text-sm uppercase tracking-[0.28em] text-tobago/70">
              <Sparkles className="h-3.5 w-3.5 text-rose" /> {PROFILE.title}
            </p>
          </Reveal>
          <Reveal delay={3}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              {PROFILE.summary}
            </p>
          </Reveal>
          <Reveal delay={4}>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#projects" className="magnetic-btn bg-tobago text-fantasy hover:bg-rose hover:text-tobago">
                View projects <ArrowUpRight className="h-4 w-4" />
              </a>
              <a href={PROFILE.resume} download className="magnetic-btn border border-tobago/20 bg-card text-tobago hover:bg-vanilla">
                <Download className="h-4 w-4" /> Download résumé
              </a>
            </div>
          </Reveal>
          <Reveal delay={5}>
            <div className="mt-8 flex items-center gap-5 text-tobago/70">
              <a href={`mailto:${PROFILE.email}`} aria-label="Email" className="hover:text-rose transition"><Mail className="h-5 w-5" /></a>
              <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-rose transition"><Linkedin className="h-5 w-5" /></a>
              <a href={PROFILE.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-rose transition"><Github className="h-5 w-5" /></a>
              <span className="ml-2 inline-flex items-center gap-2 text-xs text-tobago/60">
                <MapPin className="h-3.5 w-3.5" /> {PROFILE.location}
              </span>
            </div>
          </Reveal>
        </div>

        {/* Portrait */}
        <Reveal delay={2}>
          <div className="relative mx-auto w-full max-w-sm md:max-w-md">
            {/* botanical decorations */}
            <svg aria-hidden viewBox="0 0 200 200" className="absolute -left-10 -top-10 h-32 w-32 text-rose/60">
              <path fill="currentColor" d="M100 10c20 30 50 40 80 50-30 10-60 20-80 50-20-30-50-40-80-50 30-10 60-20 80-50z" opacity=".4"/>
            </svg>
            <svg aria-hidden viewBox="0 0 200 200" className="absolute -bottom-8 -right-6 h-28 w-28 text-silver">
              <circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" strokeWidth="1"/>
              <circle cx="100" cy="100" r="50" fill="none" stroke="currentColor" strokeWidth="1"/>
            </svg>

            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              <div className="absolute inset-0 -z-10 translate-x-4 translate-y-4 rounded-[2rem] bg-vanilla" />
              <div className="overflow-hidden rounded-[2rem] border border-border bg-card">
                <img
                  src={profileAsset.url}
                  alt={`Portrait of ${PROFILE.name}`}
                  className="aspect-[4/5] w-full object-cover"
                  loading="eager"
                />
              </div>
              <div className="absolute -bottom-5 -left-5 rounded-2xl border border-border glass px-4 py-3 text-xs">
                <p className="text-tobago/60">Currently</p>
                <p className="text-sm font-medium text-tobago">Open to opportunities</p>
              </div>
            </motion.div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="relative bg-vanilla/60 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <SectionTitle kicker="About" title="A quiet curiosity for clouds & code." intro="Computer Science undergrad shaping a craft at the intersection of cloud infrastructure and thoughtful web development." />

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          <Reveal>
            <div className="lift-card h-full rounded-3xl border border-border bg-card p-7">
              <GraduationCap className="h-6 w-6 text-rose" />
              <h3 className="serif mt-4 text-2xl text-tobago">Education</h3>
              <p className="mt-3 text-sm text-muted-foreground">B.Sc. Computer Science at C.T. Bora College, Shirur · 2023–2026 · CGPA 8.45/10.</p>
            </div>
          </Reveal>
          <Reveal delay={1}>
            <div className="lift-card h-full rounded-3xl border border-border bg-card p-7">
              <Sparkles className="h-6 w-6 text-rose" />
              <h3 className="serif mt-4 text-2xl text-tobago">Objective</h3>
              <p className="mt-3 text-sm text-muted-foreground">To grow as a cloud-focused engineer — building reliable, accessible systems while learning from real problems and teams.</p>
            </div>
          </Reveal>
          <Reveal delay={2}>
            <div className="lift-card h-full rounded-3xl border border-border bg-card p-7">
              <Cloud className="h-6 w-6 text-rose" />
              <h3 className="serif mt-4 text-2xl text-tobago">Focus</h3>
              <p className="mt-3 text-sm text-muted-foreground">AWS · Linux · Python · Web. Practicing through projects, training and continuous study.</p>
            </div>
          </Reveal>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          <Reveal>
            <div className="rounded-3xl border border-border bg-card p-7">
              <p className="text-xs uppercase tracking-[0.22em] text-tobago/60">Strengths</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {STRENGTHS.map((s) => (
                  <span key={s} className="rounded-full border border-border bg-fantasy px-3 py-1.5 text-xs text-tobago">{s}</span>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal delay={1}>
            <div className="rounded-3xl border border-border bg-card p-7">
              <p className="text-xs uppercase tracking-[0.22em] text-tobago/60">Interests</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {INTERESTS.map((s) => (
                  <span key={s} className="rounded-full border border-border bg-fantasy px-3 py-1.5 text-xs text-tobago">{s}</span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <SectionTitle kicker="Skills" title="Tools of the trade." intro="A working toolkit across cloud, programming and the web." />
        <div className="mt-16 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
          {SKILLS.map((s, i) => (
            <Reveal key={s.name} delay={i % 6}>
              <div className="group lift-card flex h-full items-center gap-3 rounded-2xl border border-border bg-card p-5">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-vanilla text-tobago transition-colors group-hover:bg-rose group-hover:text-fantasy">
                  <s.icon className="h-5 w-5" />
                </div>
                <span className="text-sm font-medium text-tobago">{s.name}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="relative bg-vanilla/60 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <SectionTitle kicker="Selected Work" title="Projects, shaped with intent." intro="A small but considered set of work — more shipping soon." />
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.title} delay={i}>
              <article className="group lift-card overflow-hidden rounded-3xl border border-border bg-card">
                <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-vanilla via-fantasy to-silver/60">
                  {/* abstract illustration */}
                  <svg viewBox="0 0 400 250" className="absolute inset-0 h-full w-full">
                    <defs>
                      <linearGradient id="g1" x1="0" x2="1">
                        <stop offset="0" stopColor="#DBA1A2" stopOpacity="0.7"/>
                        <stop offset="1" stopColor="#422B23" stopOpacity="0.25"/>
                      </linearGradient>
                    </defs>
                    <circle cx="80" cy="120" r="70" fill="url(#g1)" />
                    <circle cx="280" cy="90" r="50" fill="#C2C6B9" opacity="0.6"/>
                    <path d="M0 200 Q 100 160 200 200 T 400 200 L 400 250 L 0 250 Z" fill="#EFD8D6" opacity="0.7"/>
                    <text x="200" y="135" textAnchor="middle" fontFamily="Cormorant Garamond" fontSize="42" fill="#422B23">SafeSakhi</text>
                  </svg>
                </div>
                <div className="p-7">
                  <h3 className="serif text-2xl text-tobago">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <span key={t} className="rounded-full border border-border bg-fantasy px-3 py-1 text-[11px] uppercase tracking-wider text-tobago/80">{t}</span>
                    ))}
                  </div>
                  <div className="mt-6 flex flex-wrap items-center gap-3">
                    <a href={p.github} target="_blank" rel="noreferrer" className="magnetic-btn border border-tobago/20 bg-fantasy text-tobago text-xs hover:bg-tobago hover:text-fantasy">
                      <Github className="h-4 w-4" /> GitHub
                    </a>
                    {p.demo && (
                      <a href={p.demo} target="_blank" rel="noreferrer" className="magnetic-btn bg-tobago text-fantasy text-xs hover:bg-rose hover:text-tobago">
                        Live demo <ArrowUpRight className="h-3.5 w-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Certifications() {
  return (
    <section id="certifications" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <SectionTitle kicker="Certifications" title="Stamps along the way." />
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {CERTIFICATIONS.map((c, i) => (
            <Reveal key={c.title} delay={i}>
              <div className="lift-card flex h-full flex-col rounded-3xl border border-border bg-card p-7">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-vanilla text-rose">
                  <Award className="h-6 w-6" />
                </div>
                <h3 className="serif mt-5 text-xl text-tobago">{c.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{c.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="bg-vanilla/60 py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-4">
        <SectionTitle kicker="Experience" title="Practice over theory." />
        <div className="relative mt-16 pl-6 md:pl-10">
          <div className="absolute left-2 top-2 bottom-2 w-px bg-tobago/15 md:left-3" />
          {EXPERIENCE.map((e, i) => (
            <Reveal key={e.role} delay={i}>
              <div className="relative mb-10 last:mb-0">
                <span className="absolute -left-[18px] top-2 h-3 w-3 rounded-full bg-rose ring-4 ring-fantasy md:-left-[26px]" />
                <div className="rounded-3xl border border-border bg-card p-7">
                  <div className="flex items-start gap-3">
                    <Briefcase className="mt-1 h-5 w-5 text-rose" />
                    <div>
                      <h3 className="serif text-2xl text-tobago">{e.role}</h3>
                      <p className="text-sm text-tobago/70">{e.org}</p>
                    </div>
                  </div>
                  <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
                    {e.points.map((p) => (
                      <li key={p} className="flex gap-3">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-rose" /> {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Education() {
  return (
    <section id="education" className="py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-4">
        <SectionTitle kicker="Education" title="A learning path." />
        <div className="relative mt-16 pl-6 md:pl-10">
          <div className="absolute left-2 top-2 bottom-2 w-px bg-tobago/15 md:left-3" />
          {EDUCATION.map((ed, i) => (
            <Reveal key={ed.school} delay={i}>
              <div className="relative mb-10 last:mb-0">
                <span className="absolute -left-[18px] top-2 h-3 w-3 rounded-full bg-rose ring-4 ring-fantasy md:-left-[26px]" />
                <div className="rounded-3xl border border-border bg-card p-7">
                  <p className="text-xs uppercase tracking-[0.22em] text-tobago/60">{ed.period}</p>
                  <h3 className="serif mt-2 text-2xl text-tobago">{ed.school}</h3>
                  <p className="mt-1 text-sm text-tobago/80">{ed.degree}</p>
                  <p className="mt-3 text-sm text-muted-foreground">{ed.detail}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" className="relative overflow-hidden bg-vanilla/60 py-24 md:py-32">
      <div aria-hidden className="pointer-events-none absolute -right-32 top-10 h-96 w-96 rounded-full bg-rose/30 blur-3xl animate-blob" />
      <div className="mx-auto max-w-6xl px-4">
        <SectionTitle kicker="Contact" title="Let's build something thoughtful." intro="Open to internships, projects and collaborations in cloud and web." />
        <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-2">
          <Reveal>
            <div className="space-y-4">
              {[
                { icon: Mail, label: "Email", value: PROFILE.email, href: `mailto:${PROFILE.email}` },
                { icon: Phone, label: "Phone", value: PROFILE.phone, href: `tel:${PROFILE.phone.replace(/[^+\d]/g,'')}` },
                { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/shravanibhadale", href: PROFILE.linkedin },
                { icon: Github, label: "GitHub", value: "github.com/shravnibhadale", href: PROFILE.github },
              ].map((it) => (
                <a key={it.label} href={it.href} target="_blank" rel="noreferrer" className="lift-card flex items-center gap-4 rounded-2xl border border-border bg-card p-5">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-vanilla text-rose">
                    <it.icon className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs uppercase tracking-[0.22em] text-tobago/60">{it.label}</p>
                    <p className="truncate text-sm text-tobago">{it.value}</p>
                  </div>
                  <ArrowUpRight className="ml-auto h-4 w-4 text-tobago/50" />
                </a>
              ))}
            </div>
          </Reveal>

          <Reveal delay={1}>
            <form
              onSubmit={(e) => { e.preventDefault(); setSent(true); setTimeout(() => setSent(false), 4000); }}
              className="rounded-3xl border border-border bg-card p-7"
            >
              <div className="grid grid-cols-1 gap-4">
                <label className="block">
                  <span className="text-xs uppercase tracking-[0.22em] text-tobago/60">Name</span>
                  <input required type="text" className="mt-2 w-full rounded-xl border border-border bg-fantasy px-4 py-3 text-sm text-tobago outline-none focus:border-rose" />
                </label>
                <label className="block">
                  <span className="text-xs uppercase tracking-[0.22em] text-tobago/60">Email</span>
                  <input required type="email" className="mt-2 w-full rounded-xl border border-border bg-fantasy px-4 py-3 text-sm text-tobago outline-none focus:border-rose" />
                </label>
                <label className="block">
                  <span className="text-xs uppercase tracking-[0.22em] text-tobago/60">Message</span>
                  <textarea required rows={5} className="mt-2 w-full resize-none rounded-xl border border-border bg-fantasy px-4 py-3 text-sm text-tobago outline-none focus:border-rose" />
                </label>
                <button type="submit" className="magnetic-btn mt-2 bg-tobago text-fantasy hover:bg-rose hover:text-tobago">
                  {sent ? "Thank you — I'll be in touch" : <>Send message <Send className="h-4 w-4" /></>}
                </button>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-fantasy py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 md:flex-row">
        <p className="serif text-xl text-tobago">Shravani<span className="text-rose">.</span></p>
        <ul className="flex flex-wrap items-center justify-center gap-5 text-sm text-tobago/70">
          {NAV.map((n) => (
            <li key={n.href}><a href={n.href} className="underline-link hover:text-tobago">{n.label}</a></li>
          ))}
        </ul>
        <div className="flex items-center gap-4 text-tobago/70">
          <a href={`mailto:${PROFILE.email}`} aria-label="Email" className="hover:text-rose"><Mail className="h-4 w-4" /></a>
          <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-rose"><Linkedin className="h-4 w-4" /></a>
          <a href={PROFILE.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-rose"><Github className="h-4 w-4" /></a>
        </div>
      </div>
      <p className="mt-8 text-center text-xs text-tobago/50">© {new Date().getFullYear()} {PROFILE.name}. Crafted with care.</p>
    </footer>
  );
}

// ============== Root ==============
export function Portfolio() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.2 });
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <motion.div style={{ scaleX }} className="fixed inset-x-0 top-0 z-[60] h-[2px] origin-left bg-rose" />
      <CursorGlow />
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
