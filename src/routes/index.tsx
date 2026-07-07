import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type FormEvent, type ReactNode } from "react";
import { toast } from "sonner";
import { motion, useScroll, useTransform } from "motion/react";
import {
  Phone,
  Calendar,
  Sparkles,
  Shield,
  HeartHandshake,
  Languages,
  Stethoscope,
  Droplets,
  Activity,
  Crown,
  Sun,
  Siren,
  MapPin,
  Clock,
  Mail,
  Menu,
  X,
  Quote,
} from "lucide-react";
import { translations, type Lang, type TranslationKey } from "@/lib/i18n";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "წმინდა ლუკა მახარებლის სახელობის სტომატოლოგიური კლინიკა | St. Luke's Dental, Tbilisi" },
      {
        name: "description",
        content:
          "მზრუნველი, უმტკივნეულო სტომატოლოგია თბილისის გულში — დოქტ. სალომეს გუნდი. Painless, refined dentistry in the heart of Tbilisi.",
      },
    ],
  }),
  component: Home,
});

/* ------------------------------------------------------------------ */
/* Small primitives                                                    */
/* ------------------------------------------------------------------ */

function useT(lang: Lang) {
  return (k: TranslationKey) => translations[k][lang];
}

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function ImagePlaceholder({
  ratio = "4 / 5",
  label = "სურათი / Image",
  className = "",
}: {
  ratio?: string;
  label?: string;
  className?: string;
}) {
  return (
    <div
      className={`img-placeholder group ${className}`}
      style={{ aspectRatio: ratio }}
    >
      <div className="img-placeholder-inner transition-transform duration-[900ms] group-hover:scale-[1.03]">
        <span>{label}</span>
      </div>
    </div>
  );
}

function Monogram({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={`inline-flex h-9 w-9 items-center justify-center rounded-full border border-gold/60 text-gold ${className}`}
      style={{ fontFamily: "var(--font-serif)" }}
    >
      <span className="text-[15px] leading-none tracking-tight">SL</span>
    </span>
  );
}

/* ------------------------------------------------------------------ */
/* Header                                                              */
/* ------------------------------------------------------------------ */

function Header({
  lang,
  setLang,
}: {
  lang: Lang;
  setLang: (l: Lang) => void;
}) {
  const t = useT(lang);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 20);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  const links: { key: TranslationKey; href: string }[] = [
    { key: "nav_services", href: "#services" },
    { key: "nav_about", href: "#about" },
    { key: "nav_team", href: "#team" },
    { key: "nav_reviews", href: "#reviews" },
    { key: "nav_contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border/60 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto grid max-w-[1400px] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-6 lg:grid-cols-3 lg:px-10">
        {/* Logo */}
        <a href="#top" className="flex min-w-0 items-center gap-3">
          <Monogram />
          <span className="min-w-0 truncate">
            <span
              className="block truncate text-[13px] leading-tight text-foreground sm:text-sm"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              {t("clinic_name_short")}
            </span>
            <span className="hidden text-[10px] uppercase tracking-[0.24em] text-muted-foreground sm:block">
              Tbilisi · Est.
            </span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden justify-center gap-8 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[13px] tracking-wide text-foreground/75 transition-colors hover:text-primary"
            >
              {t(l.key)}
            </a>
          ))}
        </nav>

        {/* Right cluster */}
        <div className="flex items-center justify-end gap-3">
          <div className="hidden items-center gap-1 border border-border/70 px-1 py-0.5 text-[11px] tracking-[0.2em] md:flex">
            <button
              onClick={() => setLang("ka")}
              className={`px-2 py-1 transition-colors ${
                lang === "ka" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
              aria-pressed={lang === "ka"}
            >
              ქარ
            </button>
            <button
              onClick={() => setLang("en")}
              className={`px-2 py-1 transition-colors ${
                lang === "en" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
              aria-pressed={lang === "en"}
            >
              ENG
            </button>
          </div>

          <a
            href="tel:+995599808202"
            className="hidden items-center gap-2 text-[13px] text-foreground/80 transition-colors hover:text-primary md:inline-flex"
          >
            <Phone className="h-3.5 w-3.5 text-gold" strokeWidth={1.5} />
            599 80 82 02
          </a>

          <a
            href="#contact"
            className="hidden items-center gap-2 border border-primary bg-primary px-4 py-2.5 text-[12px] tracking-[0.18em] text-primary-foreground transition-all hover:bg-transparent hover:text-primary sm:inline-flex"
          >
            {t("book").toUpperCase()}
          </a>

          <button
            onClick={() => setOpen((o) => !o)}
            className="inline-flex h-10 w-10 items-center justify-center border border-border lg:hidden"
            aria-label="menu"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-border/60 bg-background/95 backdrop-blur-md lg:hidden">
          <div className="mx-auto flex max-w-[1400px] flex-col gap-1 px-6 py-6">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-border/40 py-3 text-sm text-foreground/80"
              >
                {t(l.key)}
              </a>
            ))}
            <div className="mt-4 flex items-center justify-between">
              <div className="flex items-center gap-1 border border-border px-1 py-0.5 text-[11px] tracking-[0.2em]">
                <button
                  onClick={() => setLang("ka")}
                  className={`px-2 py-1 ${
                    lang === "ka" ? "bg-primary text-primary-foreground" : "text-muted-foreground"
                  }`}
                >
                  ქარ
                </button>
                <button
                  onClick={() => setLang("en")}
                  className={`px-2 py-1 ${
                    lang === "en" ? "bg-primary text-primary-foreground" : "text-muted-foreground"
                  }`}
                >
                  ENG
                </button>
              </div>
              <a
                href="tel:+995599808202"
                className="inline-flex items-center gap-2 text-sm text-foreground"
              >
                <Phone className="h-3.5 w-3.5 text-gold" strokeWidth={1.5} /> 599 80 82 02
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

/* ------------------------------------------------------------------ */
/* Hero                                                                */
/* ------------------------------------------------------------------ */

function Hero({ lang }: { lang: Lang }) {
  const t = useT(lang);
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 80]);

  return (
    <section id="top" ref={ref} className="relative overflow-hidden pt-32 lg:pt-40">
      {/* Soft backdrop wash */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 50% at 80% 20%, oklch(0.9 0.03 200 / 0.35), transparent 70%), radial-gradient(50% 40% at 10% 60%, oklch(0.9 0.04 82 / 0.35), transparent 70%)",
        }}
      />

      <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-14 px-6 pb-24 lg:grid-cols-12 lg:gap-16 lg:px-10 lg:pb-32">
        <div className="lg:col-span-6">
          <Reveal>
            <div className="flex items-center gap-3">
              <span className="hairline" />
              <span className="eyebrow">{t("hero_eyebrow")}</span>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="mt-6 text-[clamp(2.6rem,6vw,5rem)] leading-[1.02] tracking-[-0.02em] text-primary">
              {t("hero_headline")}
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-foreground/70">
              {t("hero_sub")}
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="group inline-flex items-center gap-3 border border-primary bg-primary px-7 py-3.5 text-[12px] tracking-[0.22em] text-primary-foreground transition-all hover:bg-transparent hover:text-primary"
              >
                <Calendar className="h-3.5 w-3.5" strokeWidth={1.5} />
                {t("book").toUpperCase()}
              </a>
              <a
                href="tel:+995599808202"
                className="group inline-flex items-center gap-3 border border-primary/30 px-7 py-3.5 text-[12px] tracking-[0.22em] text-primary transition-colors hover:border-primary"
              >
                <Phone className="h-3.5 w-3.5 text-gold" strokeWidth={1.5} />
                {t("call").toUpperCase()}
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.5}>
            <div className="mt-12 flex items-center gap-4 text-[12px] tracking-[0.18em] text-muted-foreground">
              <span className="hairline" />
              <span>{t("hero_rating")}</span>
            </div>
          </Reveal>
        </div>

        {/* Hero image placeholder */}
        <div className="lg:col-span-6">
          <motion.div style={{ y }} className="relative">
            <ImagePlaceholder
              ratio="4 / 5"
              label={t("hero_image_label")}
              className="w-full"
            />
            {/* Decorative gold frame offset */}
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-4 -right-4 -z-10 h-full w-full border border-gold/50"
            />
            {/* Small caption block */}
            <div className="absolute bottom-6 left-6 max-w-[220px] border-t border-gold/70 bg-background/85 px-5 py-4 backdrop-blur-sm">
              <p
                className="text-sm leading-snug text-primary"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                {lang === "ka" ? "დახვეწილი გარემო" : "A refined space"}
              </p>
              <p className="mt-1 text-[11px] tracking-[0.2em] text-muted-foreground">
                {lang === "ka" ? "თბილისი · 2015" : "TBILISI · EST. 2015"}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Trust bar                                                           */
/* ------------------------------------------------------------------ */

function TrustBar({ lang }: { lang: Lang }) {
  const t = useT(lang);
  const items = [
    { icon: Shield, label: t("trust_1") },
    { icon: HeartHandshake, label: t("trust_2") },
    { icon: Sparkles, label: t("trust_3") },
    { icon: Languages, label: t("trust_4"), sub: t("trust_4_sub") },
  ];
  return (
    <section className="border-y border-border/70 bg-ivory">
      <div className="mx-auto grid max-w-[1400px] grid-cols-2 gap-y-8 px-6 py-10 md:grid-cols-4 md:gap-x-8 md:py-8 lg:px-10">
        {items.map(({ icon: Icon, label, sub }, i) => (
          <Reveal key={i} delay={i * 0.08}>
            <div className="flex min-w-0 items-start gap-3">
              <Icon className="mt-0.5 h-5 w-5 shrink-0 text-gold" strokeWidth={1.25} />
              <div className="min-w-0">
                <div className="text-[13px] leading-snug text-foreground">{label}</div>
                {sub && (
                  <div className="mt-0.5 text-[11px] tracking-[0.14em] text-muted-foreground">
                    {sub}
                  </div>
                )}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Services                                                            */
/* ------------------------------------------------------------------ */

function Services({ lang }: { lang: Lang }) {
  const t = useT(lang);
  const svcs = [
    { icon: Stethoscope, t: "svc_1_t", d: "svc_1_d" },
    { icon: Droplets, t: "svc_2_t", d: "svc_2_d" },
    { icon: Activity, t: "svc_3_t", d: "svc_3_d" },
    { icon: Crown, t: "svc_4_t", d: "svc_4_d" },
    { icon: Sun, t: "svc_5_t", d: "svc_5_d" },
    { icon: Siren, t: "svc_6_t", d: "svc_6_d" },
  ] as const;

  return (
    <section id="services" className="mx-auto max-w-[1400px] px-6 py-28 lg:px-10 lg:py-36">
      <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <Reveal>
            <div className="flex items-center gap-3">
              <span className="hairline" />
              <span className="eyebrow">{t("services_eyebrow")}</span>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 text-[clamp(2rem,3.5vw,3rem)] leading-[1.1] text-primary">
              {t("services_title")}
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-md text-[15px] leading-relaxed text-foreground/70">
              {t("services_sub")}
            </p>
          </Reveal>
        </div>

        <div className="lg:col-span-8">
          <div className="grid grid-cols-1 gap-px overflow-hidden border border-border/80 bg-border/80 sm:grid-cols-2">
            {svcs.map(({ icon: Icon, t: tk, d: dk }, i) => (
              <Reveal key={tk} delay={i * 0.05}>
                <div className="group flex h-full flex-col justify-between bg-card p-8 transition-colors duration-500 hover:bg-ivory sm:p-10">
                  <div>
                    <Icon
                      className="h-6 w-6 text-gold transition-transform duration-500 group-hover:-translate-y-0.5"
                      strokeWidth={1.25}
                    />
                    <h3
                      className="mt-6 text-[19px] leading-snug text-primary"
                      style={{ fontFamily: "var(--font-serif)" }}
                    >
                      {t(tk)}
                    </h3>
                    <p className="mt-3 text-[13.5px] leading-relaxed text-foreground/65">
                      {t(dk)}
                    </p>
                  </div>
                  <div className="mt-8 h-px w-8 bg-gold/60 transition-all duration-500 group-hover:w-14" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Why us / About                                                      */
/* ------------------------------------------------------------------ */

function WhyUs({ lang }: { lang: Lang }) {
  const t = useT(lang);
  const bullets: TranslationKey[] = ["why_b1", "why_b2", "why_b3", "why_b4"];

  return (
    <section id="about" className="bg-ivory">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-14 px-6 py-28 lg:grid-cols-12 lg:gap-20 lg:px-10 lg:py-36">
        <div className="lg:col-span-6">
          <Reveal>
            <div className="relative">
              <ImagePlaceholder ratio="5 / 6" label={lang === "ka" ? "სურათი / Interior" : "Image / Interior"} />
              <div
                aria-hidden
                className="pointer-events-none absolute -bottom-4 -left-4 -z-10 h-full w-full border border-gold/50"
              />
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-6">
          <Reveal>
            <div className="flex items-center gap-3">
              <span className="hairline" />
              <span className="eyebrow">{t("why_eyebrow")}</span>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 text-[clamp(2rem,3.5vw,3rem)] leading-[1.1] text-primary">
              {t("why_title")}
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 text-[15.5px] leading-relaxed text-foreground/70">
              {t("why_p1")}
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="mt-4 text-[15.5px] leading-relaxed text-foreground/70">
              {t("why_p2")}
            </p>
          </Reveal>

          <ul className="mt-10 space-y-4">
            {bullets.map((k, i) => (
              <Reveal key={k} delay={0.3 + i * 0.08}>
                <li className="flex items-start gap-4 border-t border-border/70 pt-4">
                  <span className="mt-2 h-px w-6 shrink-0 bg-gold" />
                  <span className="text-[14.5px] text-foreground/85">{t(k)}</span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Team                                                                */
/* ------------------------------------------------------------------ */

function Team({ lang }: { lang: Lang }) {
  const t = useT(lang);
  return (
    <section id="team" className="mx-auto max-w-[1400px] px-6 py-28 lg:px-10 lg:py-36">
      <div className="mx-auto max-w-2xl text-center">
        <Reveal>
          <div className="flex items-center justify-center gap-3">
            <span className="hairline" />
            <span className="eyebrow">{t("team_eyebrow")}</span>
            <span className="hairline" />
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-6 text-[clamp(2rem,3.5vw,3rem)] leading-[1.1] text-primary">
            {t("team_title")}
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-5 text-[15px] leading-relaxed text-foreground/70">
            {t("team_sub")}
          </p>
        </Reveal>
      </div>

      {/* Featured: Dr. Salome */}
      <div className="mt-20 grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <Reveal>
            <div className="relative">
              <ImagePlaceholder ratio="4 / 5" label={lang === "ka" ? "პორტრეტი" : "Portrait"} />
              <div
                aria-hidden
                className="pointer-events-none absolute -bottom-4 -right-4 -z-10 h-full w-full border border-gold/50"
              />
            </div>
          </Reveal>
        </div>
        <div className="lg:col-span-7">
          <Reveal delay={0.1}>
            <span className="eyebrow">{lang === "ka" ? "სამედიცინო დირექტორი" : "Medical Director"}</span>
            <h3
              className="mt-4 text-[clamp(1.8rem,3vw,2.6rem)] leading-[1.05] text-primary"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              {t("team_1_name")}
            </h3>
            <p className="mt-2 text-[13px] tracking-[0.18em] uppercase text-gold">
              {t("team_1_role")}
            </p>
            <p className="mt-6 max-w-xl text-[15.5px] leading-relaxed text-foreground/75">
              {t("team_1_bio")}
            </p>
            <div className="mt-8 flex items-center gap-4 text-[12px] tracking-[0.2em] text-muted-foreground">
              <span className="hairline" />
              <span>
                {lang === "ka"
                  ? "პაციენტების არჩევანი"
                  : "A patient favourite"}
              </span>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Supporting team */}
      <div className="mt-24 grid grid-cols-1 gap-10 sm:grid-cols-2">
        {[
          { n: "team_2_name", r: "team_2_role", b: "team_2_bio" },
          { n: "team_3_name", r: "team_3_role", b: "team_3_bio" },
        ].map((m, i) => (
          <Reveal key={m.n} delay={i * 0.1}>
            <div className="group">
              <ImagePlaceholder ratio="5 / 6" label={lang === "ka" ? "პორტრეტი" : "Portrait"} />
              <div className="mt-6 flex items-start justify-between gap-4 border-t border-border pt-5">
                <div>
                  <h4
                    className="text-[19px] leading-snug text-primary"
                    style={{ fontFamily: "var(--font-serif)" }}
                  >
                    {t(m.n as TranslationKey)}
                  </h4>
                  <p className="mt-1 text-[11.5px] tracking-[0.2em] uppercase text-gold">
                    {t(m.r as TranslationKey)}
                  </p>
                </div>
              </div>
              <p className="mt-4 text-[13.5px] leading-relaxed text-foreground/65">
                {t(m.b as TranslationKey)}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Reviews                                                             */
/* ------------------------------------------------------------------ */

function Reviews({ lang }: { lang: Lang }) {
  const t = useT(lang);
  const reviews = [
    { text: "review_1_text", author: "review_1_author" },
    { text: "review_2_text", author: "review_2_author" },
    { text: "review_3_text", author: "review_3_author" },
  ] as const;

  return (
    <section id="reviews" className="relative overflow-hidden bg-primary text-primary-foreground">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(50% 40% at 20% 0%, oklch(0.5 0.06 210 / 0.6), transparent 70%), radial-gradient(40% 30% at 90% 100%, oklch(0.72 0.09 82 / 0.15), transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-[1400px] px-6 py-28 lg:px-10 lg:py-36">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <div className="flex items-center justify-center gap-3">
              <span className="hairline" />
              <span className="eyebrow" style={{ color: "var(--gold-soft)" }}>
                {t("reviews_eyebrow")}
              </span>
              <span className="hairline" />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 text-[clamp(2rem,3.5vw,3rem)] leading-[1.1]">
              {t("reviews_title")}
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-5 text-[13px] tracking-[0.2em] text-primary-foreground/70">
              {t("reviews_rating")}
            </p>
          </Reveal>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-px bg-primary-foreground/10 lg:grid-cols-3">
          {reviews.map((r, i) => (
            <Reveal key={r.text} delay={i * 0.1}>
              <figure className="flex h-full flex-col justify-between bg-primary p-8 lg:p-10">
                <Quote className="h-6 w-6 text-gold" strokeWidth={1.25} />
                <blockquote
                  className="mt-6 text-[16px] leading-[1.65] text-primary-foreground/95"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  “{t(r.text)}”
                </blockquote>
                <figcaption className="mt-8 flex items-center gap-3 border-t border-primary-foreground/15 pt-5">
                  <span className="h-px w-6 bg-gold" />
                  <span className="text-[12px] tracking-[0.2em] uppercase text-primary-foreground/80">
                    {t(r.author)}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Contact + Form                                                      */
/* ------------------------------------------------------------------ */

function Contact({ lang }: { lang: Lang }) {
  const t = useT(lang);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    (e.currentTarget as HTMLFormElement).reset();
    toast.success(t("form_success"));
  };

  const fieldCls =
    "w-full border-0 border-b border-border bg-transparent px-0 py-3 text-[15px] text-foreground placeholder:text-muted-foreground/70 focus:border-gold focus:outline-none focus:ring-0 transition-colors";
  const labelCls =
    "block text-[11px] uppercase tracking-[0.22em] text-muted-foreground";

  const services: TranslationKey[] = [
    "svc_1_t",
    "svc_2_t",
    "svc_3_t",
    "svc_4_t",
    "svc_5_t",
    "svc_6_t",
  ];

  return (
    <section id="contact" className="bg-ivory">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-16 px-6 py-28 lg:grid-cols-12 lg:gap-20 lg:px-10 lg:py-36">
        {/* Left: form */}
        <div className="lg:col-span-7">
          <Reveal>
            <div className="flex items-center gap-3">
              <span className="hairline" />
              <span className="eyebrow">{t("contact_eyebrow")}</span>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 text-[clamp(2rem,3.5vw,3rem)] leading-[1.1] text-primary">
              {t("contact_title")}
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-foreground/70">
              {t("contact_sub")}
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <form onSubmit={onSubmit} className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <label className={labelCls}>{t("form_name")}</label>
                <input required className={fieldCls} type="text" name="name" />
              </div>
              <div className="sm:col-span-1">
                <label className={labelCls}>{t("form_phone")}</label>
                <input required className={fieldCls} type="tel" name="phone" />
              </div>
              <div className="sm:col-span-1">
                <label className={labelCls}>{t("form_email")}</label>
                <input className={fieldCls} type="email" name="email" />
              </div>
              <div className="sm:col-span-1">
                <label className={labelCls}>{t("form_service")}</label>
                <select className={fieldCls} name="service" defaultValue="">
                  <option value="" disabled>
                    {t("form_service_placeholder")}
                  </option>
                  {services.map((s) => (
                    <option key={s} value={t(s)}>
                      {t(s)}
                    </option>
                  ))}
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className={labelCls}>{t("form_datetime")}</label>
                <input className={fieldCls} type="text" name="datetime" placeholder={lang === "ka" ? "მაგ. 12 მარტი, 15:00" : "e.g. March 12, 3:00 PM"} />
              </div>
              <div className="sm:col-span-2">
                <label className={labelCls}>{t("form_message")}</label>
                <textarea className={fieldCls} name="message" rows={3} />
              </div>
              <div className="sm:col-span-2 pt-2">
                <button
                  type="submit"
                  className="group inline-flex items-center gap-3 border border-primary bg-primary px-8 py-3.5 text-[12px] tracking-[0.22em] text-primary-foreground transition-all hover:bg-transparent hover:text-primary"
                >
                  <Calendar className="h-3.5 w-3.5" strokeWidth={1.5} />
                  {t("form_submit").toUpperCase()}
                </button>
              </div>
            </form>
          </Reveal>
        </div>

        {/* Right: info + map */}
        <div className="lg:col-span-5">
          <Reveal delay={0.2}>
            <div className="border border-border bg-card p-8 lg:p-10">
              <ul className="space-y-8">
                <li className="flex gap-4">
                  <MapPin className="mt-1 h-5 w-5 shrink-0 text-gold" strokeWidth={1.25} />
                  <div>
                    <div className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                      {t("contact_address_label")}
                    </div>
                    <div className="mt-1 text-[15px] leading-snug text-foreground">
                      {t("contact_address")}
                    </div>
                  </div>
                </li>
                <li className="flex gap-4">
                  <Phone className="mt-1 h-5 w-5 shrink-0 text-gold" strokeWidth={1.25} />
                  <div>
                    <div className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                      {t("contact_phone_label")}
                    </div>
                    <a
                      href="tel:+995599808202"
                      className="mt-1 block text-[15px] text-foreground hover:text-primary"
                    >
                      +995 599 80 82 02
                    </a>
                  </div>
                </li>
                <li className="flex gap-4">
                  <Clock className="mt-1 h-5 w-5 shrink-0 text-gold" strokeWidth={1.25} />
                  <div>
                    <div className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                      {t("contact_hours_label")}
                    </div>
                    <div className="mt-1 text-[15px] text-foreground">{t("contact_hours")}</div>
                    <div className="mt-0.5 text-[13px] text-muted-foreground">
                      {t("contact_closed")}
                    </div>
                  </div>
                </li>
              </ul>

              <div className="mt-8 h-px w-full bg-border" />

              {/* Map */}
              <div className="mt-8 overflow-hidden border border-border">
                <iframe
                  title="St. Luke's Dental Clinic — Tbilisi"
                  src="https://www.google.com/maps?q=Paolo+Iashvili+12,+Tbilisi&output=embed"
                  loading="lazy"
                  className="block h-64 w-full grayscale-[35%] contrast-[0.95]"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Footer                                                              */
/* ------------------------------------------------------------------ */

function Footer({ lang }: { lang: Lang }) {
  const t = useT(lang);
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-12 px-6 py-16 md:grid-cols-12 lg:px-10">
        <div className="md:col-span-5">
          <div className="flex items-center gap-3">
            <Monogram />
            <div className="min-w-0">
              <div
                className="text-[15px] leading-tight text-primary"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                {translations.clinic_name_short.ka}
              </div>
              <div className="text-[12px] tracking-[0.14em] text-muted-foreground">
                {translations.clinic_name_short.en}
              </div>
            </div>
          </div>
          <p className="mt-6 max-w-sm text-[14px] leading-relaxed text-foreground/70">
            {t("footer_tag")}
          </p>
        </div>

        <div className="md:col-span-3">
          <div className="text-[11px] uppercase tracking-[0.22em] text-gold">
            {t("footer_nav")}
          </div>
          <ul className="mt-5 space-y-2.5 text-[14px] text-foreground/75">
            {[
              { k: "nav_services", h: "#services" },
              { k: "nav_about", h: "#about" },
              { k: "nav_team", h: "#team" },
              { k: "nav_reviews", h: "#reviews" },
              { k: "nav_contact", h: "#contact" },
            ].map((l) => (
              <li key={l.h}>
                <a className="transition-colors hover:text-primary" href={l.h}>
                  {t(l.k as TranslationKey)}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-4">
          <div className="text-[11px] uppercase tracking-[0.22em] text-gold">
            {t("footer_contact")}
          </div>
          <ul className="mt-5 space-y-3 text-[14px] text-foreground/75">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" strokeWidth={1.25} />
              <span>{t("contact_address")}</span>
            </li>
            <li className="flex items-start gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" strokeWidth={1.25} />
              <a href="tel:+995599808202" className="hover:text-primary">
                +995 599 80 82 02
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-gold" strokeWidth={1.25} />
              <span>{t("contact_hours")}</span>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" strokeWidth={1.25} />
              <span>info@stlukedental.ge</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border/70">
        <div className="mx-auto flex max-w-[1400px] flex-col items-start justify-between gap-3 px-6 py-6 text-[11.5px] tracking-[0.14em] text-muted-foreground md:flex-row md:items-center lg:px-10">
          <span>
            © {year} · {translations.clinic_name_full.ka}
          </span>
          <span className="uppercase">{t("footer_rights")}</span>
        </div>
      </div>
    </footer>
  );
}

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

function Home() {
  const [lang, setLang] = useState<Lang>("ka");

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header lang={lang} setLang={setLang} />
      <main>
        <Hero lang={lang} />
        <TrustBar lang={lang} />
        <Services lang={lang} />
        <WhyUs lang={lang} />
        <Team lang={lang} />
        <Reviews lang={lang} />
        <Contact lang={lang} />
      </main>
      <Footer lang={lang} />

      {/* Mobile floating call button */}
      <a
        href="tel:+995599808202"
        aria-label="Call clinic"
        className="fixed bottom-5 right-5 z-40 inline-flex h-12 w-12 items-center justify-center rounded-full border border-gold/60 bg-primary text-primary-foreground shadow-lg transition-transform hover:scale-105 sm:hidden"
      >
        <Phone className="h-4 w-4 text-gold" strokeWidth={1.75} />
      </a>
    </div>
  );
}
