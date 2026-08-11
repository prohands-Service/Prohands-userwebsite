import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import logoImg from "@/assets/prohands-logo.jpg";
import heroVideo from "@/assets/Hero-section-video.mp4";
import {
  fetchCategories,
  fetchGalleryFeeds,
  getImageUrl,
  fetchSupportSettings,
  type BackendCategory,
  type BackendGalleryItem,
  type SupportSettings,
} from "@/lib/api";
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
  Menu,
  X,
  Target,
  Eye,
  Shield,
  Zap,
  Users,
  HeartHandshake,
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
          "ProHands connects you with verified technicians for plumbing, electrical, AC, cleaning and more. Download the app on Google Play and the App Store.",
      },
    ],
  }),
  component: Home,
});

const defaultCategories = [
  { icon: Plug, name: "Electrical", desc: "Wiring, switches, lighting" },
  { icon: Droplets, name: "Plumbing", desc: "Leaks, fittings, drainage" },
  { icon: Snowflake, name: "AC & Appliance", desc: "Service & repair" },
  { icon: Paintbrush, name: "Painting", desc: "Interior & exterior" },
  { icon: Hammer, name: "Carpentry", desc: "Furniture & fittings" },
  { icon: Sparkles, name: "Cleaning", desc: "Deep home cleaning" },
  { icon: Bug, name: "Pest Control", desc: "Safe, effective treatment" },
  { icon: Wrench, name: "Handyman", desc: "Small jobs, big impact" },
];

const iconMap: Record<string, typeof Plug> = {
  electrical: Plug,
  plumbing: Droplets,
  ac: Snowflake,
  appliance: Snowflake,
  painting: Paintbrush,
  carpentry: Hammer,
  cleaning: Sparkles,
  pest: Bug,
  handyman: Wrench,
};

function getCategoryIcon(name: string) {
  const lower = name.toLowerCase();
  for (const [key, icon] of Object.entries(iconMap)) {
    if (lower.includes(key)) return icon;
  }
  return Wrench;
}

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

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      <Header />
      <main>
        <Hero />
        <Categories />
        <Services />
        <Products />
        <Gallery />
        <AboutUs />
        <Download />
      </main>
      <Footer />
    </div>
  );
}

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "About Us", href: "#about" },
    { label: "Categories", href: "#categories" },
    { label: "Services", href: "#services" },
    { label: "Products", href: "#products" },
    { label: "Download", href: "#download" },
    { label: "Terms & Conditions", href: "/terms-and-conditions", isRoute: true },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 md:py-3.5">
        <a href="#top" className="flex items-center gap-2.5 sm:gap-3 transition-opacity hover:opacity-90">
          <img src={logoImg} alt="ProHands" className="h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 rounded-full object-cover shadow-sm" />
          <span className="font-display text-base sm:text-lg font-semibold tracking-tight text-silver">
            Pro<span className="text-gradient-neon">Hands</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 lg:gap-8 md:flex">
          {navLinks.map((l) => (
            l.isRoute ? (
              <Link
                key={l.label}
                to={l.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                {l.label}
              </Link>
            ) : (
              <a
                key={l.label}
                href={l.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                {l.label}
              </a>
            )
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={PLAY_URL}
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-secondary px-4 py-2 text-xs sm:text-sm font-semibold text-background transition-transform hover:scale-105 active:scale-95 shadow-neon"
          >
            Get the app <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="inline-flex items-center justify-center rounded-xl border border-border/60 bg-surface p-2 text-muted-foreground hover:text-foreground md:hidden"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="border-b border-border/60 bg-surface/95 px-6 py-5 backdrop-blur-xl md:hidden animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col gap-4">
            {navLinks.map((l) => (
              l.isRoute ? (
                <Link
                  key={l.label}
                  to={l.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-medium text-foreground hover:text-primary transition-colors py-1"
                >
                  {l.label}
                </Link>
              ) : (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-medium text-foreground hover:text-primary transition-colors py-1"
                >
                  {l.label}
                </a>
              )
            ))}
            <div className="pt-2">
              <a
                href={PLAY_URL}
                target="_blank"
                rel="noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary to-secondary px-5 py-3 text-sm font-semibold text-background w-full"
              >
                Get the app <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </nav>
        </div>
      )}
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
      
      <div className="relative mx-auto grid max-w-7xl items-center gap-8 px-4 sm:px-6 py-6 sm:py-10 md:py-12 lg:py-14 xl:py-16 lg:grid-cols-2 lg:gap-12">
        <div className="flex flex-col justify-center">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-secondary" />
            Trusted by 10,000+ homes
          </span>
          <h1 className="mt-4 sm:mt-5 font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight">
            {/* Home services,{" "} */}
            <span className="text-gradient-neon">Reimagined</span> for the modern home.
          </h1>
          <p className="mt-4 sm:mt-5 max-w-xl text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
            ProHands connects you with verified technicians for plumbing, electrical, AC, cleaning
            and every job in between. Book in seconds — right from the app.
          </p>
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
            <StoreButton kind="play" href={PLAY_URL} />
            <StoreButton kind="apple" href={APPLE_URL} />
          </div>
          <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4 sm:gap-6 text-xs sm:text-sm text-muted-foreground">
            <Stat icon={ShieldCheck} label="Verified pros" />
            <Stat icon={Clock} label="Same-day service" />
            <Stat icon={Star} label="4.8 avg rating" />
          </div>
        </div>

        <div className="relative mt-2 lg:mt-0">
          <div
            className="absolute -inset-3 sm:-inset-4 rounded-3xl opacity-60 blur-2xl sm:blur-3xl"
            style={{ background: "var(--gradient-neon)" }}
          />
          <div className="glow-ring relative overflow-hidden rounded-2xl sm:rounded-3xl border border-border/60 bg-surface">
            <video
              src={heroVideo}
              autoPlay
              loop
              muted
              playsInline
              className="h-64 sm:h-80 md:h-[380px] lg:h-[420px] xl:h-[460px] w-full object-cover"
            />
            <img
              src={logoImg}
              alt="ProHands Logo"
              className="absolute bottom-1 right-1 sm:bottom-2 sm:right-2 h-14 w-14 sm:h-18 sm:w-18 rounded-full object-cover shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ icon: Icon, label }: { icon: typeof ShieldCheck; label: string }) {
  return (
    <div className="flex items-center gap-1.5 sm:gap-2">
      <Icon className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-secondary shrink-0" /> <span className="whitespace-nowrap">{label}</span>
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
      className="group inline-flex items-center justify-center gap-3 rounded-2xl border border-border/60 bg-surface px-5 py-3 transition-all hover:border-primary/60 hover:shadow-neon active:scale-98"
    >
      <span className="text-xl sm:text-2xl leading-none">{isPlay ? "▶" : ""}</span>
      <div className="text-left leading-tight">
        <div className="text-[9px] sm:text-[10px] uppercase tracking-widest text-muted-foreground">
          {isPlay ? "Get it on" : "Download on the"}
        </div>
        <div className="font-display text-sm sm:text-base font-semibold text-silver">
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
    <div className="mx-auto max-w-2xl text-center px-4">
      <div className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
        {eyebrow}
      </div>
      <h2 className="mt-2.5 sm:mt-3 font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">{title}</h2>
      <p className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-base text-muted-foreground">{subtitle}</p>
    </div>
  );
}

function AboutUs() {
  const values = [
    {
      icon: Shield,
      title: "Durability",
      desc: "We want to create something worth creating, something that will endure the test of time. We do this by relentlessly focusing on our customers' success, building high-quality systems, and planning for long-term scale. We're grounded by humility and driven by ambition.",
    },
    {
      icon: Zap,
      title: "Simplicity",
      desc: "We know that creating simple things is hard. At ProHands, we fight back against complexity, sweat the details, and choose to deliver simple-yet-great experiences for our customers. Start simple. Test, Learn, Iterate.",
    },
    {
      icon: Users,
      title: "Diversity",
      desc: "Diversity goes beyond the sum of our many parts. It’s our superpower—not just the right thing to do, but how we win. Diversity of background, experience, opinions, and views is how we build a sustainable business.",
    },
    {
      icon: HeartHandshake,
      title: "Relationship",
      desc: "Relationships are key to achieving success because we cannot do our jobs without one another. Going above and beyond in this area ensures we have a positive impact on both our business and our partners. Life is short, so we might as well make it a fun ride.",
    }
  ];

  return (
    <section id="about" className="border-t border-border/50 py-8 sm:py-10 md:py-14 relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="About Us"
          title={<>Building the <span className="text-gradient-neon">future</span> of home services</>}
          subtitle="Discover who we are, what we do, and the core values that drive us."
        />
        
        <div className="mt-10 sm:mt-14 grid gap-8 lg:grid-cols-2 lg:gap-12 items-start">
          <div className="flex flex-col gap-6 text-sm sm:text-base text-justify text-muted-foreground leading-relaxed">
            <p>
              <strong className="text-silver">PROHANDS</strong> is a technology-driven platform that connects homeowners, building owners, and businesses with trusted, skilled, and verified service professionals for a wide range of home and building services. Whether you need plumbing, electrical work, cleaning, painting, carpentry, appliance repair, or other professional services, PROHANDS makes finding the right expert simple, fast, and reliable.
            </p>
            <p>
              Our mission is to deliver exceptional home and building service experiences by bringing customers and qualified professionals together through a secure and easy-to-use platform. We are committed to quality, transparency, reliability, and customer satisfaction, ensuring every service request is handled with professionalism and care.
            </p>
            <p>
              Beyond connecting customers with skilled technicians, PROHANDS also empowers service providers by offering a smart work management platform that helps them grow their business, manage bookings efficiently, and reach more customers.
            </p>
            <p>
              PROHANDS is the brand name of our platform, while the company is legally registered as PRE HANDS LLP. Throughout the platform, the names PROHANDS and PRE HANDS refer to the same organization.
            </p>
            <p>
              As we continue to grow, our goal remains the same—to build a trusted community where customers can confidently access quality services, and service professionals can build successful careers.
            </p>
            <p>
              At PROHANDS, we're not just connecting people with services—we're building lasting relationships based on trust, quality, and excellence.
            </p>
          </div>
          
          <div className="grid gap-6 sm:gap-8">
            <div className="relative overflow-hidden rounded-2xl border border-border/60 bg-surface/50 p-6 sm:p-8 backdrop-blur-sm">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Target className="h-6 w-6" />
                </div>
                <h3 className="font-display text-xl font-bold text-silver">Our Mission</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                With more than 100 services available—from plumbers and electricians to psychologists and personal trainers—our platform helps millions of customers find the right local service professionals quickly and easily by comparing profiles, quotes, and reviews.
              </p>
            </div>
            
            <div className="relative overflow-hidden rounded-2xl border border-border/60 bg-surface/50 p-6 sm:p-8 backdrop-blur-sm">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/10 text-secondary">
                  <Eye className="h-6 w-6" />
                </div>
                <h3 className="font-display text-xl font-bold text-silver">Our Vision</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                At ProHands, we're not just creating a new era of homeownership; we're building stronger communities and supporting local economies. We connect local professionals with busy homeowners every day, helping small businesses thrive across the country. By leveling the playing field for all businesses, we aim to ensure that everyone has an equal chance of success.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 sm:mt-24">
          <div className="text-center mb-10 sm:mb-14">
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-silver">Our Core Values</h3>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div key={v.title} className="group relative overflow-hidden rounded-2xl border border-border/60 bg-surface p-6 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-neon">
                  <div className="mb-5 inline-flex rounded-xl bg-background/80 p-3 shadow-sm ring-1 ring-border/50">
                    <Icon className="h-6 w-6 text-primary transition-transform group-hover:scale-110" />
                  </div>
                  <h4 className="mb-3 font-display text-lg font-semibold text-silver">{v.title}</h4>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function Categories() {
  const [categoriesList, setCategoriesList] = useState<BackendCategory[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      setLoading(true);
      const data = await fetchCategories();
      setCategoriesList(data);
      setLoading(false);
    }
    load();
  }, []);

  const displayItems = categoriesList.length > 0 ? categoriesList : defaultCategories;

  return (
    <section id="categories" className="border-t border-border/50 py-8 sm:py-10 md:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Browse categories"
          title={<>Every fix, <span className="text-gradient-neon">one tap away</span></>}
          subtitle="Choose from a curated set of home service categories, each staffed by background-checked pros."
        />

        {loading ? (
          <div className="mt-10 sm:mt-14 h-[380px] overflow-y-auto pr-1 sm:pr-2 custom-scrollbar">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
              {Array.from({ length: 10 }).map((_, i) => (
                <div key={i} className="h-48 rounded-xl border border-border/60 bg-surface/50 animate-pulse p-3" />
              ))}
            </div>
          </div>
        ) : (
          <div className="mt-10 sm:mt-14 h-[380px] overflow-y-auto pr-1 sm:pr-2 custom-scrollbar">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
              {displayItems.map((c: any) => {
                const Icon = c.icon || getCategoryIcon(c.name);
                const imgUrl = c.image ? getImageUrl(c.image) : null;

                return (
                  <a
                    key={c._id || c.name}
                    href={PLAY_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="group relative overflow-hidden rounded-xl border border-border/60 bg-surface p-3 sm:p-4 transition-all hover:bg-surface/80 hover:border-primary/40 flex flex-col items-center justify-start text-center"
                  >
                    <div className="font-display text-sm sm:text-base font-semibold text-silver w-full">{c.name}</div>
                    
                    <div className="mt-2.5 relative w-full aspect-square sm:aspect-[4/3] overflow-hidden rounded-lg border border-border/40 bg-background/50 flex items-center justify-center text-muted-foreground group-hover:text-primary transition-colors">
                      {imgUrl ? (
                        <img src={imgUrl} alt={c.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                      ) : (
                        <Icon className="h-8 w-8 sm:h-10 sm:w-10 transition-transform duration-500 group-hover:scale-110" />
                      )}
                    </div>
                    
                    <div className="mt-2.5 text-[11px] sm:text-xs text-muted-foreground line-clamp-2 w-full">
                      {c.description || (c.servicesCount !== undefined ? `${c.servicesCount} services available` : c.desc || "Verified professionals")}
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="relative border-t border-border/50 py-8 sm:py-10 md:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="What we do"
          title={<>Services built around <span className="text-gradient-neon">your day</span></>}
          subtitle="From urgent breakdowns to weekend makeovers, ProHands makes it effortless to get things fixed."
        />
        <div className="mt-10 sm:mt-14 grid gap-4 sm:gap-6 md:grid-cols-2">
          {services.map((s) => (
            <div
              key={s.title}
              className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-border/60 bg-surface p-6 sm:p-8"
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
              <h3 className="mt-5 sm:mt-6 font-display text-xl sm:text-2xl font-semibold text-silver">{s.title}</h3>
              <p className="mt-2 sm:mt-3 text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">{s.desc}</p>
              <a
                href={PLAY_URL}
                target="_blank"
                rel="noreferrer"
                className="mt-5 sm:mt-6 inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-primary transition-colors hover:text-secondary"
              >
                Open in app <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
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
    <section id="products" className="border-t border-border/50 py-8 sm:py-10 md:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Popular in the app"
          title={<>Ready-to-book <span className="text-gradient-neon">service packs</span></>}
          subtitle="Fixed-scope service packages with transparent pricing — book right inside the ProHands app."
        />
        <div className="mt-10 sm:mt-14 grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p, i) => (
            <div
              key={p.name}
              className={`relative flex flex-col justify-between overflow-hidden rounded-2xl sm:rounded-3xl border p-6 sm:p-8 transition-all hover:-translate-y-1 ${
                i === 1
                  ? "border-primary/60 bg-gradient-to-b from-primary/10 to-transparent shadow-neon"
                  : "border-border/60 bg-surface hover:border-primary/40"
              }`}
            >
              <div>
                {i === 1 && (
                  <span className="mb-3 inline-block rounded-full bg-secondary px-3 py-1 text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-background">
                    Most booked
                  </span>
                )}
                <h3 className="font-display text-xl sm:text-2xl font-semibold text-silver">{p.name}</h3>
                <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-muted-foreground">{p.desc}</p>
                <ul className="mt-4 sm:mt-6 space-y-2">
                  {p.perks.map((perk) => (
                    <li key={perk} className="flex items-center gap-2 text-xs sm:text-sm text-silver/90">
                      <span className="h-1.5 w-1.5 rounded-full bg-secondary shrink-0" />
                      {perk}
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href={PLAY_URL}
                target="_blank"
                rel="noreferrer"
                className="mt-6 sm:mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary to-secondary py-2.5 sm:py-3 text-xs sm:text-sm font-semibold text-background transition-transform hover:scale-[1.02] active:scale-98"
              >
                Book in app <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  const [feeds, setFeeds] = useState<BackendGalleryItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      setLoading(true);
      const data = await fetchGalleryFeeds();
      setFeeds(data);
      setLoading(false);
    }
    load();
  }, []);

  return (
    <section id="gallery" className="border-t border-border/50 py-8 sm:py-10 md:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Inside the app"
          title={<>A peek into <span className="text-gradient-neon">ProHands</span></>}
          subtitle="Explore live feeds, technician updates, and recent work straight from our active service teams."
        />

        {loading ? (
          <div className="mt-10 sm:mt-14 relative w-full overflow-hidden">
            <div className="flex w-max gap-3 sm:gap-4">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="h-44 w-44 sm:h-52 sm:w-52 rounded-xl sm:rounded-2xl border border-border/60 bg-surface/50 animate-pulse shrink-0" />
              ))}
            </div>
          </div>
        ) : feeds.length > 0 ? (
          <div className="mt-10 sm:mt-14 relative w-full overflow-hidden py-4 pause-on-hover">
            <div className="flex w-max">
              {[1, 2].map((blockId) => (
                <div key={blockId} className="flex w-max shrink-0 animate-marquee gap-3 sm:gap-4 pr-3 sm:pr-4">
                  {Array(8).fill(feeds).flat().map((item: any, idx) => {
                    const fullUrl = getImageUrl(item.imageUrl);
                    return (
                      <a
                        key={`${blockId}-${item._id}-${idx}`}
                        href={PLAY_URL}
                        target="_blank"
                        rel="noreferrer"
                        className="group/item relative overflow-hidden rounded-xl sm:rounded-2xl border border-border/60 bg-surface transition-all hover:-translate-y-1 hover:border-primary/60 hover:shadow-neon flex flex-col w-44 sm:w-52 shrink-0"
                      >
                        <div className="relative aspect-square w-full overflow-hidden bg-surface">
                          <img
                            src={fullUrl}
                            alt={item.description || "ProHands feed update"}
                            loading="lazy"
                            className="h-full w-full object-cover transition-transform duration-500 group-hover/item:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-transparent to-transparent opacity-0 transition-opacity group-hover/item:opacity-100 flex items-end p-2.5">
                            <span className="text-[11px] font-medium text-silver line-clamp-2">
                              {item.description || "Live Feed Update"}
                            </span>
                          </div>
                        </div>
                      </a>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="mt-10 sm:mt-14 rounded-2xl border border-border/60 bg-surface/50 p-8 text-center max-w-md mx-auto">
            <Sparkles className="mx-auto h-8 w-8 text-primary opacity-60" />
            <div className="mt-3 font-display text-base font-semibold text-silver">No feed images yet</div>
            <p className="mt-1 text-xs text-muted-foreground">
              Technician work photos and feed updates will appear here live when posted from the admin portal.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

function Download() {
  return (
    <section id="download" className="relative overflow-hidden py-8 sm:py-10 md:py-14">
      <div
        aria-hidden
        className="absolute inset-0 opacity-40"
        style={{ background: "var(--gradient-hero)" }}
      />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-2xl sm:rounded-[2rem] border border-border/60 bg-surface p-6 sm:p-10 md:p-14 lg:p-16">
          <div
            aria-hidden
            className="absolute -right-20 -top-20 h-80 w-80 rounded-full opacity-30 blur-3xl"
            style={{ background: "var(--gradient-neon)" }}
          />
          <div className="relative grid items-center gap-8 lg:grid-cols-[1.3fr_1fr] lg:gap-12">
            <div>
              <div className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
                Get the app
              </div>
              <h2 className="mt-2.5 sm:mt-3 font-display text-2xl sm:text-4xl md:text-5xl font-bold">
                Your home, in <span className="text-gradient-neon">pro hands</span>.
              </h2>
              <p className="mt-3 sm:mt-4 max-w-md text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">
                Download ProHands to book, track and message your technician in real time. Available
                free on Google Play and the App Store.
              </p>
              <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
                <StoreButton kind="play" href={PLAY_URL} />
                <StoreButton kind="apple" href={APPLE_URL} />
              </div>
            </div>
            <div className="relative mx-auto mt-4 lg:mt-0">
              <div
                className="absolute inset-0 rounded-full opacity-70 blur-2xl sm:blur-3xl"
                style={{ background: "var(--gradient-neon)" }}
              />
              <img
                src={logoImg}
                alt="ProHands logo"
                className="relative h-44 w-44 sm:h-56 sm:w-56 md:h-64 md:w-64 rounded-full object-cover drop-shadow-2xl shadow-neon"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const [support, setSupport] = useState<SupportSettings | null>(null);

  useEffect(() => {
    let active = true;
    fetchSupportSettings().then((data) => {
      if (active) setSupport(data);
    });
    return () => {
      active = false;
    };
  }, []);

  const displayPhone = support?.formattedPhone || "+91 96338 23236";
  const rawPhone = support?.supportPhone || "9633823236";
  const displayEmail = support?.supportEmail || "support@prohands.in";

  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="mx-auto grid max-w-7xl gap-8 sm:gap-10 px-4 sm:px-6 py-8 md:py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <img src={logoImg} alt="ProHands" className="h-9 w-9 sm:h-10 sm:w-10 rounded-full object-cover" />
            <span className="font-display text-base sm:text-lg font-semibold">
              Pro<span className="text-gradient-neon">Hands</span>
            </span>
          </div>
          <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-muted-foreground leading-relaxed">
            Smart, verified home services — designed for the way you live today.
          </p>
        </div>

        <div>
          <div className="text-xs sm:text-sm font-semibold text-silver">Explore</div>
          <ul className="mt-3 sm:mt-4 space-y-2 text-xs sm:text-sm text-muted-foreground">
            <li><a href="#about" className="hover:text-primary transition-colors">About Us</a></li>
            <li><a href="#categories" className="hover:text-primary transition-colors">Categories</a></li>
            <li><a href="#services" className="hover:text-primary transition-colors">Services</a></li>
            <li><a href="#products" className="hover:text-primary transition-colors">Service packs</a></li>
            <li><a href="#download" className="hover:text-primary transition-colors">Download</a></li>
            <li><a href="/terms-and-conditions" className="hover:text-primary transition-colors">Terms & Conditions</a></li>
          </ul>
        </div>

        <div>
          <div className="text-xs sm:text-sm font-semibold text-silver">Get in touch</div>
          <ul className="mt-3 sm:mt-4 space-y-2.5 sm:space-y-3 text-xs sm:text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <Phone className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary shrink-0" />
              <a href={`tel:${rawPhone}`} className="hover:text-primary transition-colors">
                {displayPhone}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary shrink-0" />
              <a href={`mailto:${displayEmail}`} className="hover:text-primary transition-colors">
                {displayEmail}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-1 h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary shrink-0" />
              <span>
                <strong className="text-silver font-medium">PRE HANDS LLP</strong><br />
                Door No 42F, Ward No 14, Mukund Building<br />
                Thalassery, Muzhappilangad<br />
                Kannur - 670662, Kerala
              </span>
            </li>
          </ul>
        </div>

        <div>
          <div className="text-xs sm:text-sm font-semibold text-silver">Get the app</div>
          <div className="mt-3 sm:mt-4 flex flex-col gap-2.5 sm:gap-3">
            <StoreButton kind="play" href={PLAY_URL} />
            <StoreButton kind="apple" href={APPLE_URL} />
          </div>
        </div>
      </div>

      <div className="border-t border-border/60">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 sm:px-6 py-5 sm:py-6 text-[11px] sm:text-xs text-muted-foreground md:flex-row text-center md:text-left">
          <div>© {new Date().getFullYear()} ProHands by Luzidcraft. All rights reserved.</div>
          <div>Crafted with care for homes everywhere.</div>
        </div>
      </div>
    </footer>
  );
}
