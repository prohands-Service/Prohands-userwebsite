import { createFileRoute } from "@tanstack/react-router";
import logoAsset from "@/assets/prohands-logo.asset.json";
import heroImg from "@/assets/hero-technician.jpg";
import {
  Wrench,
  Plug,
  Droplets,
  Snowflake,
  Paintbrush,
  Hammer,
  Sparkles,
  Bug,
  ShieldCheck,
  Clock,
  Star,
  MapPin,
  Phone,
  Mail,
  ArrowRight,
} from "lucide-react";

const PLAY_URL = "https://play.google.com/store/apps/details?id=com.prohands.service_app";
const APPLE_URL = "https://apps.apple.com/app/prohands/id6761731392";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ProHands — Book Trusted Home Service Technicians" },
      {
        name: "description",
        content:
          "ProHands connects you with verified technicians for plumbing, electrical, AC, cleaning and more. Download the app on Google Play and the App Store.",
      },
      { property: "og:title", content: "ProHands — Book Trusted Home Service Technicians" },
      {
        property: "og:description",
        content:
          "Fast, reliable home services from verified pros. Download ProHands on iOS and Android.",
      },
    ],
  }),
  component: Home,
});

const categories = [
  { icon: Plug, name: "Electrical", desc: "Wiring, switches, lighting" },
  { icon: Droplets, name: "Plumbing", desc: "Leaks, fittings, drainage" },
  { icon: Snowflake, name: "AC & Appliance", desc: "Service & repair" },
  { icon: Paintbrush, name: "Painting", desc: "Interior & exterior" },
  { icon: Hammer, name: "Carpentry", desc: "Furniture & fittings" },
  { icon: Sparkles, name: "Cleaning", desc: "Deep home cleaning" },
  { icon: Bug, name: "Pest Control", desc: "Safe, effective treatment" },
  { icon: Wrench, name: "Handyman", desc: "Small jobs, big impact" },
];

const services = [
  {
    title: "Emergency Repairs",
    desc: "Same-day dispatch for urgent plumbing, electrical and appliance breakdowns.",
    tag: "24/7",
  },
  {
    title: "Scheduled Maintenance",
    desc: "Book AC servicing, deep cleaning and preventive checks at a time that suits you.",
    tag: "Planned",
  },
  {
    title: "Installations",
    desc: "Certified pros for fans, geysers, smart devices, lighting and fixtures.",
    tag: "Certified",
  },
  {
    title: "Home Makeovers",
    desc: "Painting, carpentry and finishing projects delivered on time.",
    tag: "Turnkey",
  },
];

const products = [
  {
    name: "AC Deep Service",
    desc: "Full coil clean, gas check and performance report.",
    perks: ["Foam-jet cleaning", "60-day warranty", "Verified pro"],
  },
  {
    name: "Home Deep Clean",
    desc: "Kitchen, bathroom and living areas with pro-grade tools.",
    perks: ["3 hr session", "Eco-safe products", "Insured team"],
  },
  {
    name: "Electrical Safety Check",
    desc: "Full home wiring, board and earthing inspection.",
    perks: ["Digital report", "Load testing", "Certified electrician"],
  },
];

const gallery = [
  "https://play-lh.googleusercontent.com/12USW7aflgz466ifDehKTnMoAep_VHxDmKJ6jEBoDZWCSefOC-ThRX14Mqe0r8KF9XCzrpMqJts=w512",
  "https://play-lh.googleusercontent.com/4x58G2kZR4cS5oNom3KX8XBuMRao9Eu3CqItpXRhYDk_DYVMb8Pbxi12q5hBJOAuvukyc60g9SBLkL-7drGNarY=w512",
  "https://play-lh.googleusercontent.com/5MY0wiLVD7fKBPLCGY49xiFUdrhE4kUBRHNR3kpb1AY44TKAdL-ZOWlCN4xmQ1nBWpEVTfWDeQzMkl37PVz4AQ=w512",
  "https://play-lh.googleusercontent.com/BHKAqoVDgAUK8mC99Ka-yf5O4rDLl9GVErWXn3nMPQFyDPqj6hJ9bHrpkhkn2JWY8-8OLALgPuv7l3reuo5ukcI=w512",
  "https://play-lh.googleusercontent.com/MUBq05f_jtOJ3DFIOsgX_4HBYm4mvAOLjufy2irfaqGHpf9-T02_bNNSgcrYvz8d29CpXJ2jQMhAjc4W8N7UXg=w512",
  "https://play-lh.googleusercontent.com/NHp69JMDNmKuUEefx5b99q7B4y9fsNq2yQCPN_xMx58cS-QSFwrdoJvOT-IN-uPLFWdwMRQrUHx6P05daE72rA=w512",
  "https://play-lh.googleusercontent.com/OBVqgRK7eerY0GPfK8AOzitu5oE9ecC6kG4kURTCb1K41gpqVsN0WjmJwJh-wX8vILzpcc1kYHt56aLN2g=w512",
  "https://play-lh.googleusercontent.com/Qgp-Glc5oTghhbEhS5Zlo8fPY7L3adA2yHmZQToP6D9ygbv3nFzqC7y0vqsQ3jXKfTI74wKuI2Z6YrRbRZpJYA=w512",
  "https://play-lh.googleusercontent.com/dpOImtSiRqKpHK6V328Z39jG81ZUCB3NjjHjXC1KA6_E4gnScB7_qTSWdX8aCO47m9u9NZnHB1irZLbV0gSy7j0=w512",
  "https://play-lh.googleusercontent.com/kXrHHJjxZArZN5K8Ldwx2d5LGJ37OK7qJH5_jeYafOnp89cNnOt8K-McIuGBvoCLS3N3uCRdjmfbQeiw3K8U_w=w512",
  "https://play-lh.googleusercontent.com/rGYxNSLq61Qxi4WcdC5rNN0I3QeKnCDKt_OzQm3O5clptB3lB-5OEME-nrsZuQ0CGEWViJramt4Orc2GpmziyTQ=w512",
  "https://play-lh.googleusercontent.com/vTL4zzIdngsVZlJ8tQvJTGWGFqzklZCAfg8eu4BvjC_NfPxj-ZOWqr3QHfFXN671u4OhyIxS2WTCSl6Rpt7Yzg=w512",
];

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Categories />
        <Services />
        <Products />
        <Download />
      </main>
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-3">
          <img src={logoAsset.url} alt="ProHands" className="h-10 w-10 rounded-full" />
          <span className="font-display text-lg font-semibold tracking-tight text-silver">
            Pro<span className="text-gradient-neon">Hands</span>
          </span>
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {["Categories", "Services", "Products", "Download"].map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              {l}
            </a>
          ))}
        </nav>
        <a
          href={PLAY_URL}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-secondary px-5 py-2.5 text-sm font-semibold text-background transition-transform hover:scale-105"
        >
          Get the app <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-hero">
      {/* circuit grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            "linear-gradient(to right, oklch(0.78 0.19 210 / 0.3) 1px, transparent 1px), linear-gradient(to bottom, oklch(0.86 0.22 135 / 0.2) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage: "radial-gradient(ellipse at center, black 40%, transparent 75%)",
        }}
      />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
        <div className="flex flex-col justify-center">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-secondary" />
            Trusted by 10,000+ homes
          </span>
          <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] tracking-tight md:text-6xl">
            Home services,{" "}
            <span className="text-gradient-neon">reimagined</span> for the modern home.
          </h1>
          <p className="mt-6 max-w-lg text-lg text-muted-foreground">
            ProHands connects you with verified technicians for plumbing, electrical, AC, cleaning
            and every job in between. Book in seconds — from the app.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <StoreButton kind="play" href={PLAY_URL} />
            <StoreButton kind="apple" href={APPLE_URL} />
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
            <Stat icon={ShieldCheck} label="Verified pros" />
            <Stat icon={Clock} label="Same-day service" />
            <Stat icon={Star} label="4.8 avg rating" />
          </div>
        </div>

        <div className="relative">
          <div
            className="absolute -inset-4 rounded-3xl opacity-60 blur-3xl"
            style={{ background: "var(--gradient-neon)" }}
          />
          <div className="glow-ring relative overflow-hidden rounded-3xl border border-border/60 bg-surface">
            <img
              src={heroImg}
              alt="Verified ProHands technician at work"
              width={1600}
              height={1200}
              className="h-full w-full object-cover"
            />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-2xl border border-border/60 bg-background/80 p-4 backdrop-blur-xl">
              <div className="flex items-center gap-3">
                <img src={logoAsset.url} alt="" className="h-10 w-10 rounded-full" />
                <div>
                  <div className="text-sm font-semibold">Ravi — Master Electrician</div>
                  <div className="text-xs text-muted-foreground">Arriving in 24 min</div>
                </div>
              </div>
              <span className="rounded-full bg-secondary/20 px-3 py-1 text-xs font-semibold text-secondary">
                On the way
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ icon: Icon, label }: { icon: typeof ShieldCheck; label: string }) {
  return (
    <div className="flex items-center gap-2">
      <Icon className="h-4 w-4 text-secondary" /> {label}
    </div>
  );
}

function StoreButton({ kind, href }: { kind: "play" | "apple"; href: string }) {
  const isPlay = kind === "play";
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group inline-flex items-center gap-3 rounded-2xl border border-border/60 bg-surface px-5 py-3 transition-all hover:border-primary/60 hover:shadow-neon"
    >
      <span className="text-2xl">{isPlay ? "▶" : ""}</span>
      <div className="text-left leading-tight">
        <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
          {isPlay ? "Get it on" : "Download on the"}
        </div>
        <div className="font-display text-base font-semibold text-silver">
          {isPlay ? "Google Play" : "App Store"}
        </div>
      </div>
    </a>
  );
}

function SectionHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: React.ReactNode;
  subtitle: string;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <div className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
        {eyebrow}
      </div>
      <h2 className="mt-3 font-display text-4xl font-bold tracking-tight md:text-5xl">{title}</h2>
      <p className="mt-4 text-muted-foreground">{subtitle}</p>
    </div>
  );
}

function Categories() {
  return (
    <section id="categories" className="border-t border-border/50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Browse categories"
          title={<>Every fix, <span className="text-gradient-neon">one tap away</span></>}
          subtitle="Choose from a curated set of home service categories, each staffed by background-checked pros."
        />
        <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4">
          {categories.map((c) => (
            <a
              key={c.name}
              href={PLAY_URL}
              target="_blank"
              rel="noreferrer"
              className="group relative overflow-hidden rounded-2xl border border-border/60 bg-surface p-6 transition-all hover:-translate-y-1 hover:border-primary/60 hover:shadow-neon"
            >
              <div
                aria-hidden
                className="absolute inset-x-0 -top-24 h-24 opacity-0 blur-2xl transition-opacity group-hover:opacity-70"
                style={{ background: "var(--gradient-neon)" }}
              />
              <div className="relative">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-primary">
                  <c.icon className="h-6 w-6" />
                </div>
                <div className="font-display text-lg font-semibold text-silver">{c.name}</div>
                <div className="mt-1 text-sm text-muted-foreground">{c.desc}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="relative border-t border-border/50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="What we do"
          title={<>Services built around <span className="text-gradient-neon">your day</span></>}
          subtitle="From urgent breakdowns to weekend makeovers, ProHands makes it effortless to get things fixed."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {services.map((s) => (
            <div
              key={s.title}
              className="relative overflow-hidden rounded-3xl border border-border/60 bg-surface p-8"
            >
              <div
                aria-hidden
                className="absolute right-0 top-0 h-32 w-32 rounded-full opacity-20 blur-3xl"
                style={{ background: "var(--gradient-neon)" }}
              />
              <div className="flex items-center justify-between">
                <span className="rounded-full border border-secondary/40 bg-secondary/10 px-3 py-1 text-xs font-semibold text-secondary">
                  {s.tag}
                </span>
                <Wrench className="h-5 w-5 text-primary/70" />
              </div>
              <h3 className="mt-6 font-display text-2xl font-semibold text-silver">{s.title}</h3>
              <p className="mt-3 text-muted-foreground">{s.desc}</p>
              <a
                href={PLAY_URL}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-secondary"
              >
                Open in app <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Products() {
  return (
    <section id="products" className="border-t border-border/50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Popular in the app"
          title={<>Ready-to-book <span className="text-gradient-neon">service packs</span></>}
          subtitle="Fixed-scope service packages with transparent pricing — book right inside the ProHands app."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {products.map((p, i) => (
            <div
              key={p.name}
              className={`relative overflow-hidden rounded-3xl border p-8 transition-all hover:-translate-y-1 ${
                i === 1
                  ? "border-primary/60 bg-gradient-to-b from-primary/10 to-transparent shadow-neon"
                  : "border-border/60 bg-surface hover:border-primary/40"
              }`}
            >
              {i === 1 && (
                <span className="absolute right-6 top-6 rounded-full bg-secondary px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-background">
                  Most booked
                </span>
              )}
              <h3 className="font-display text-2xl font-semibold text-silver">{p.name}</h3>
              <div className="mt-2 font-display text-3xl font-bold text-gradient-neon">
                {p.price}
              </div>
              <p className="mt-3 text-sm text-muted-foreground">{p.desc}</p>
              <ul className="mt-6 space-y-2">
                {p.perks.map((perk) => (
                  <li key={perk} className="flex items-center gap-2 text-sm text-silver/90">
                    <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
                    {perk}
                  </li>
                ))}
              </ul>
              <a
                href={PLAY_URL}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary to-secondary py-3 text-sm font-semibold text-background transition-transform hover:scale-[1.02]"
              >
                Book in app <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Download() {
  return (
    <section id="download" className="relative overflow-hidden py-24">
      <div
        aria-hidden
        className="absolute inset-0 opacity-40"
        style={{ background: "var(--gradient-hero)" }}
      />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="relative overflow-hidden rounded-[2rem] border border-border/60 bg-surface p-10 md:p-16">
          <div
            aria-hidden
            className="absolute -right-20 -top-20 h-80 w-80 rounded-full opacity-30 blur-3xl"
            style={{ background: "var(--gradient-neon)" }}
          />
          <div className="relative grid items-center gap-12 md:grid-cols-[1.3fr_1fr]">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
                Get the app
              </div>
              <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">
                Your home, in <span className="text-gradient-neon">pro hands</span>.
              </h2>
              <p className="mt-4 max-w-md text-muted-foreground">
                Download ProHands to book, track and message your technician in real time. Available
                free on Google Play and the App Store.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <StoreButton kind="play" href={PLAY_URL} />
                <StoreButton kind="apple" href={APPLE_URL} />
              </div>
            </div>
            <div className="relative mx-auto">
              <div
                className="absolute inset-0 rounded-full opacity-70 blur-3xl"
                style={{ background: "var(--gradient-neon)" }}
              />
              <img
                src={logoAsset.url}
                alt="ProHands logo"
                className="relative h-64 w-64 rounded-full object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <img src={logoAsset.url} alt="ProHands" className="h-10 w-10 rounded-full" />
            <span className="font-display text-lg font-semibold">
              Pro<span className="text-gradient-neon">Hands</span>
            </span>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            Smart, verified home services — designed for the way you live today.
          </p>
        </div>

        <div>
          <div className="text-sm font-semibold text-silver">Explore</div>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><a href="#categories" className="hover:text-primary">Categories</a></li>
            <li><a href="#services" className="hover:text-primary">Services</a></li>
            <li><a href="#products" className="hover:text-primary">Service packs</a></li>
            <li><a href="#download" className="hover:text-primary">Download</a></li>
          </ul>
        </div>

        <div>
          <div className="text-sm font-semibold text-silver">Get in touch</div>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-primary" /> +1 907 209 3850</li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-primary" /> luzidcraft@gmail.com</li>
            <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 text-primary" /> Kozhikode, Kerala, India</li>
          </ul>
        </div>

        <div>
          <div className="text-sm font-semibold text-silver">Get the app</div>
          <div className="mt-4 flex flex-col gap-3">
            <StoreButton kind="play" href={PLAY_URL} />
            <StoreButton kind="apple" href={APPLE_URL} />
          </div>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-6 text-xs text-muted-foreground md:flex-row">
          <div>© {new Date().getFullYear()} ProHands by Luzidcraft. All rights reserved.</div>
          <div>Crafted with care for homes everywhere.</div>
        </div>
      </div>
    </footer>
  );
}
