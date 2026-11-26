import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import {
  Phone,
  Calendar,
  Sparkles,
  Shield,
  HeartHandshake,
  Languages,
  Droplets,
  Activity,
  Crown,
  MapPin,
  Clock,
  Menu,
  X,
  Quote,
  Award,
  Facebook,
  Plane,
  Hotel,
  Video,
  FileText,
  Globe,
  Mail,
} from "lucide-react";
import { translations, type Lang, type TranslationKey } from "@/lib/i18n";

const PHONE_HREF = "tel:+995544144448";
const PHONE_DISPLAY = "+995 544 144 448";
const PHONE_SHORT = "544 144 448";
const FACEBOOK_CHAT_URL = "https://m.me/St.LukaDentalClinic";
const FACEBOOK_PAGE_URL = "https://www.facebook.com/St.LukaDentalClinic/";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "წმინდა ლუკა მახარებლის სახელობის სტომატოლოგიური კლინიკა | St. Luke's Dental, Tbilisi",
      },
      {
        name: "description",
        content:
          "სტომატოლოგია და იმპლანტაცია თბილისში — 25 წელზე მეტი გამოცდილება. Dentistry and dental implants in Tbilisi, with over 25 years of experience.",
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
    <div className={`img-placeholder group ${className}`} style={{ aspectRatio: ratio }}>
      <div className="img-placeholder-inner transition-transform duration-[900ms] group-hover:scale-[1.03]">
        <span>{label}</span>
      </div>
    </div>
  );
}

function BeforeAfterSlider({
  before,
  after,
  beforeLabel,
  afterLabel,
}: {
  before: string;
  after: string;
  beforeLabel: string;
  afterLabel: string;
}) {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const updateFromClientX = (clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(100, Math.max(0, pct)));
  };

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      if (!dragging.current) return;
      updateFromClientX(e.clientX);
    };
    const onUp = () => {
      dragging.current = false;
    };
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="relative aspect-[4/5] w-full touch-none select-none overflow-hidden border border-border/80"
      onPointerDown={(e) => {
        dragging.current = true;
        updateFromClientX(e.clientX);
      }}
    >
      <img
        src={after}
        alt={afterLabel}
        draggable={false}
        className="pointer-events-none absolute inset-0 h-full w-full object-cover"
      />
      <img
        src={before}
        alt={beforeLabel}
        draggable={false}
        className="pointer-events-none absolute inset-0 h-full w-full object-cover"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      />

      <div
        aria-hidden
        className="absolute top-2 left-2 border-t border-primary-foreground/70 bg-primary/85 px-2 py-1 text-[8px] tracking-[0.16em] text-primary-foreground uppercase sm:top-3 sm:left-3 sm:px-2.5 sm:text-[9px]"
        style={{ opacity: pos > 12 ? 1 : 0, transition: "opacity 200ms" }}
      >
        {beforeLabel}
      </div>
      <div
        aria-hidden
        className="absolute top-2 right-2 border-t border-primary-foreground/70 bg-primary/85 px-2 py-1 text-[8px] tracking-[0.16em] text-primary-foreground uppercase sm:top-3 sm:right-3 sm:px-2.5 sm:text-[9px]"
        style={{ opacity: pos < 88 ? 1 : 0, transition: "opacity 200ms" }}
      >
        {afterLabel}
      </div>

      <div
        className="pointer-events-none absolute top-0 bottom-0 w-px bg-gold"
        style={{ left: `${pos}%` }}
      >
        <div className="pointer-events-none absolute top-1/2 left-1/2 flex h-6 w-6 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-gold bg-background/95 shadow-md sm:h-8 sm:w-8">
          <span className="text-[9px] text-primary sm:text-[11px]">↔</span>
        </div>
      </div>
    </div>
  );
}

/** Thematic photo frame: gold hairline, ivory mat, soft navy shadow. */
function Frame({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`border border-gold/60 bg-card p-1.5 shadow-[0_24px_50px_-28px_rgba(10,40,90,0.45)] sm:p-2.5 ${className}`}
    >
      <div className="relative overflow-hidden border border-primary/15">{children}</div>
    </div>
  );
}

function Monogram({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={`inline-flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-full ${className}`}
    >
      <img
        src="/img/logo-icon.jpg"
        alt=""
        className="h-full w-full scale-[1.55] object-cover object-[51%_53%]"
      />
    </span>
  );
}

/* ------------------------------------------------------------------ */
/* Header                                                              */
/* ------------------------------------------------------------------ */

function Header({ lang, setLang }: { lang: Lang; setLang: (l: Lang) => void }) {
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
    { key: "nav_tourism", href: "#tourism" },
    { key: "nav_reviews", href: "#reviews" },
    { key: "nav_contact", href: "#contact" },
  ];

  const langOptions: { code: Lang; label: string }[] = [
    { code: "ka", label: "ქარ" },
    { code: "en", label: "ENG" },
    { code: "ru", label: "РУС" },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border/60 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto grid max-w-[1400px] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-6 lg:grid-cols-[auto_1fr_auto] lg:gap-8 lg:px-10">
        {/* Logo */}
        <a
          href="#top"
          className="flex min-w-0 items-center gap-3 lg:max-w-[220px] xl:max-w-[280px]"
        >
          <Monogram />
          <span className="min-w-0 truncate">
            <span
              className={`block truncate text-[13px] leading-tight sm:text-sm ${scrolled ? "text-foreground" : "text-primary-foreground"}`}
              style={{ fontFamily: "var(--font-serif)" }}
            >
              {t("clinic_name_short")}
            </span>
            <span
              className={`hidden text-[10px] uppercase tracking-[0.24em] sm:block ${scrolled ? "text-muted-foreground" : "text-primary-foreground/60"}`}
            >
              Tbilisi · Sololaki
            </span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden justify-center gap-5 lg:flex xl:gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`whitespace-nowrap text-[13px] tracking-wide transition-colors ${
                scrolled
                  ? "text-foreground/75 hover:text-primary"
                  : "text-primary-foreground/80 hover:text-primary-foreground"
              }`}
            >
              {t(l.key)}
            </a>
          ))}
        </nav>

        {/* Right cluster */}
        <div className="flex items-center justify-end gap-3">
          <div
            className={`hidden items-center gap-1 border px-1 py-0.5 text-[11px] tracking-[0.2em] md:flex ${scrolled ? "border-border/70" : "border-primary-foreground/30"}`}
          >
            {langOptions.map((l) => (
              <button
                key={l.code}
                onClick={() => setLang(l.code)}
                className={`px-2 py-1 transition-colors ${
                  lang === l.code
                    ? "bg-primary text-primary-foreground"
                    : scrolled
                      ? "text-muted-foreground hover:text-foreground"
                      : "text-primary-foreground/60 hover:text-primary-foreground"
                }`}
                aria-pressed={lang === l.code}
              >
                {l.label}
              </button>
            ))}
          </div>

          <a
            href={PHONE_HREF}
            className={`hidden items-center gap-2 whitespace-nowrap text-[13px] transition-colors 2xl:inline-flex ${
              scrolled
                ? "text-foreground/80 hover:text-primary"
                : "text-primary-foreground/85 hover:text-primary-foreground"
            }`}
          >
            <Phone className="h-3.5 w-3.5 text-gold" strokeWidth={1.5} />
            {PHONE_SHORT}
          </a>

          <a
            href="#contact"
            className={`hidden items-center gap-2 border px-4 py-2.5 text-[12px] tracking-[0.18em] transition-all sm:inline-flex ${
              scrolled
                ? "border-primary bg-primary text-primary-foreground hover:bg-transparent hover:text-primary"
                : "border-primary-foreground bg-primary-foreground text-primary hover:bg-transparent hover:text-primary-foreground"
            }`}
          >
            {t("book").toUpperCase()}
          </a>

          <button
            onClick={() => setOpen((o) => !o)}
            className={`inline-flex h-10 w-10 items-center justify-center border lg:hidden ${
              scrolled
                ? "border-border text-foreground"
                : "border-primary-foreground/40 text-primary-foreground"
            }`}
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
                {langOptions.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => setLang(l.code)}
                    className={`px-2 py-1 ${
                      lang === l.code
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground"
                    }`}
                  >
                    {l.label}
                  </button>
                ))}
              </div>
              <a
                href={PHONE_HREF}
                className="inline-flex items-center gap-2 text-sm text-foreground"
              >
                <Phone className="h-3.5 w-3.5 text-gold" strokeWidth={1.5} /> {PHONE_SHORT}
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
    <section id="top" ref={ref} className="relative isolate overflow-hidden pt-32 lg:pt-40">
      {/* Full-bleed dark panel with angled bottom edge */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[calc(100%-190px)] lg:h-[clamp(680px,88vh,980px)]"
        style={{
          background:
            "linear-gradient(155deg, oklch(0.32 0.08 240) 0%, oklch(0.5 0.135 240) 55%, oklch(0.44 0.11 235) 100%)",
          clipPath: "polygon(0 0, 100% 0, 100% 88%, 0 96%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[calc(100%-190px)] opacity-50 lg:h-[clamp(680px,88vh,980px)]"
        style={{
          background:
            "radial-gradient(45% 55% at 88% 12%, oklch(0.72 0.09 85 / 0.35), transparent 70%)",
          clipPath: "polygon(0 0, 100% 0, 100% 88%, 0 96%)",
        }}
      />

      <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-10 px-6 pb-16 lg:grid-cols-12 lg:items-start lg:gap-16 lg:px-10 lg:pb-24">
        <div className="lg:col-span-6">
          <Reveal>
            <p className="text-[12px] leading-snug text-primary-foreground/55 italic">
              {t("clinic_name_alt")}
            </p>
          </Reveal>

          <Reveal delay={0.05}>
            <div className="mt-3 flex items-center gap-3">
              <span className="hairline" style={{ background: "var(--gold)" }} />
              <span className="eyebrow" style={{ color: "var(--gold-soft)" }}>
                {t("hero_eyebrow")}
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="mt-6 text-[clamp(2.6rem,6vw,5rem)] leading-[1.02] tracking-[-0.02em] text-primary-foreground">
              {t("hero_headline")}
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-primary-foreground/75">
              {t("hero_sub")}
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="group inline-flex items-center gap-3 border border-primary-foreground bg-primary-foreground px-7 py-3.5 text-[12px] tracking-[0.22em] text-primary transition-all hover:bg-transparent hover:text-primary-foreground"
              >
                <Calendar className="h-3.5 w-3.5" strokeWidth={1.5} />
                {t("book").toUpperCase()}
              </a>
              <a
                href={PHONE_HREF}
                className="group inline-flex items-center gap-3 border border-primary-foreground/30 px-7 py-3.5 text-[12px] tracking-[0.22em] text-primary-foreground transition-colors hover:border-primary-foreground"
              >
                <Phone className="h-3.5 w-3.5 text-gold" strokeWidth={1.5} />
                {t("call").toUpperCase()}
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.5}>
            <div className="mt-6 flex items-center gap-4 text-[12px] tracking-[0.18em] text-gold lg:mt-12">
              <span className="hairline" style={{ background: "var(--gold)" }} />
              <span>{t("hero_rating")}</span>
            </div>
          </Reveal>
        </div>

        {/* Hero image */}
        <div className="lg:col-span-6">
          <motion.div style={{ y }} className="relative lg:-mt-16">
            <Frame className="shadow-[0_30px_60px_-20px_rgba(10,30,60,0.45)]">
              <img
                src="/img/cabinet.jpg"
                alt={t("hero_image_alt")}
                className="aspect-[4/3] h-full w-full object-cover object-[55%_50%] lg:aspect-[4/5]"
              />
            </Frame>
            {/* Small caption block */}
            <div className="absolute bottom-5 left-5 max-w-[260px] border-t border-gold/70 bg-background/95 px-4 py-3 backdrop-blur-sm sm:bottom-8 sm:left-8 sm:px-5 sm:py-4">
              <p
                className="text-sm leading-snug text-primary"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                {t("hero_caption_title")}
              </p>
              <p className="mt-1 text-[11px] tracking-[0.2em] text-muted-foreground">
                {t("hero_caption_sub")}
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
    { icon: Award, label: t("trust_1") },
    { icon: HeartHandshake, label: t("trust_2") },
    { icon: Shield, label: t("trust_3") },
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
    { icon: Droplets, t: "svc_feat_1_t", d: "svc_feat_1_d", img: "/img/svc-cleaning.jpg" },
    { icon: Activity, t: "svc_feat_2_t", d: "svc_feat_2_d", img: "/img/svc-implant.jpg" },
    { icon: Crown, t: "svc_feat_3_t", d: "svc_feat_3_d", img: "/img/svc-metalceramics.jpg" },
    { icon: Sparkles, t: "svc_feat_4_t", d: "svc_feat_4_d", img: "/img/svc-zircon.jpg" },
  ] as const;

  return (
    <section id="services" className="mx-auto max-w-[1400px] px-6 py-16 sm:py-24 lg:px-10 lg:py-36">
      <div className="mx-auto max-w-2xl text-center">
        <Reveal>
          <div className="flex items-center justify-center gap-3">
            <span className="hairline" />
            <span className="eyebrow">{t("services_eyebrow")}</span>
            <span className="hairline" />
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-6 text-[clamp(2rem,3.5vw,3rem)] leading-[1.1] text-primary">
            {t("services_title")}
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-5 text-[15px] leading-relaxed text-foreground/70">{t("services_sub")}</p>
        </Reveal>
      </div>

      <div className="mt-10 grid grid-cols-2 gap-3 sm:mt-16 sm:gap-8 lg:grid-cols-4">
        {svcs.map(({ icon: Icon, t: tk, d: dk, img }, i) => (
          <Reveal key={tk} delay={i * 0.08} className="h-full">
            <div className="group flex h-full flex-col overflow-hidden border border-border/80 bg-card shadow-[0_1px_2px_rgba(20,40,70,0.04)] transition-shadow duration-500 hover:shadow-[0_18px_40px_-16px_rgba(20,60,110,0.22)]">
              <div className="relative aspect-square w-full overflow-hidden bg-muted">
                <img
                  src={img}
                  alt={t(tk)}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                />
                <span className="absolute top-2 left-2 inline-flex h-8 w-8 items-center justify-center rounded-full border border-gold/70 bg-background shadow-[0_2px_10px_rgba(20,40,70,0.14)] sm:top-4 sm:left-4 sm:h-10 sm:w-10">
                  <Icon className="h-3.5 w-3.5 text-gold sm:h-4.5 sm:w-4.5" strokeWidth={1.25} />
                </span>
              </div>
              <div className="flex flex-1 flex-col p-3 sm:p-6">
                <h3
                  className="text-[14px] leading-snug text-primary sm:text-[18px]"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  {t(tk)}
                </h3>
                <p className="mt-1.5 flex-1 text-[11.5px] leading-relaxed text-foreground/65 sm:mt-2 sm:text-[13px]">
                  {t(dk)}
                </p>
                <div className="mt-3 h-px w-6 bg-gold/60 transition-all duration-500 group-hover:w-14 sm:mt-5 sm:w-8" />
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Why us / About                                                      */
/* ------------------------------------------------------------------ */

function WhyUs({ lang }: { lang: Lang }) {
  const t = useT(lang);

  return (
    <section id="about" className="bg-ivory">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-14 px-6 py-16 sm:py-24 lg:grid-cols-12 lg:gap-20 lg:px-10 lg:py-36">
        <div className="lg:col-span-6">
          <Reveal>
            <div className="relative">
              <Frame>
                <img
                  src="/img/certificates.jpg"
                  alt={t("whyus_image_alt")}
                  className="aspect-[4/3] w-full object-cover"
                />
              </Frame>
              <div className="absolute right-4 -bottom-5 border-t border-gold/70 bg-background/95 px-4 py-3 shadow-[0_12px_30px_-12px_rgba(10,30,60,0.35)] sm:right-6 sm:px-5">
                <p
                  className="text-sm leading-snug text-primary"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  {t("why_cert_caption")}
                </p>
              </div>
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
          <Reveal delay={0.15}>
            <p
              className="mt-6 border-l-2 border-gold pl-5 text-[18px] leading-snug text-primary"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              {t("why_lead")}
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 text-[15.5px] leading-relaxed text-foreground/70">{t("why_p1")}</p>
          </Reveal>
          <Reveal delay={0.25}>
            <p className="mt-4 text-[15.5px] leading-relaxed text-foreground/70">{t("why_p2")}</p>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="mt-4 text-[15.5px] leading-relaxed text-foreground/85">{t("why_p3")}</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Before / After                                                      */
/* ------------------------------------------------------------------ */

function BeforeAfter({ lang }: { lang: Lang }) {
  const t = useT(lang);

  return (
    <section className="bg-ivory">
      <div className="mx-auto max-w-[1400px] px-6 py-24 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-xl text-center">
          <Reveal>
            <div className="flex items-center justify-center gap-3">
              <span className="hairline" />
              <span className="eyebrow">{t("ba_eyebrow")}</span>
              <span className="hairline" />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 text-[clamp(2rem,3.5vw,3rem)] leading-[1.1] text-primary">
              {t("ba_title")}
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-4 text-[14px] leading-relaxed text-foreground/65">{t("ba_sub")}</p>
          </Reveal>
        </div>

        <div className="mx-auto mt-12 grid max-w-[560px] grid-cols-2 gap-4 sm:gap-6">
          <Reveal>
            <BeforeAfterSlider
              before="/img/ba-before-1.jpg"
              after="/img/ba-after-1.jpg"
              beforeLabel={t("ba_before")}
              afterLabel={t("ba_after")}
            />
          </Reveal>
          <Reveal delay={0.1}>
            <BeforeAfterSlider
              before="/img/ba-before-2.jpg"
              after="/img/ba-after-2.jpg"
              beforeLabel={t("ba_before")}
              afterLabel={t("ba_after")}
            />
          </Reveal>
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
    <section id="team" className="mx-auto max-w-[1400px] px-6 py-16 sm:py-24 lg:px-10 lg:py-36">
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
          <p className="mt-5 text-[15px] leading-relaxed text-foreground/70">{t("team_sub")}</p>
        </Reveal>
      </div>

      {/* Featured: Mikheil Bakhtadze */}
      <div className="mt-10 grid grid-cols-1 items-center gap-8 lg:mt-20 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <Reveal>
            <Frame className="mx-auto max-w-[420px] lg:max-w-none">
              <img
                src="/img/mikheilbakhtadze.jpg"
                alt={t("team_1_name")}
                className="aspect-[4/5] w-full object-cover object-top"
              />
            </Frame>
          </Reveal>
        </div>
        <div className="lg:col-span-7">
          <Reveal delay={0.1}>
            <h3
              className="text-[clamp(1.8rem,3vw,2.6rem)] leading-[1.05] text-primary"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              {t("team_1_name")}
            </h3>
            <p className="mt-2 text-[13px] tracking-[0.18em] uppercase text-gold">
              {t("team_1_role")}
            </p>
            <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-foreground/75">
              {t("team_1_bio")}
            </p>
            <div className="mt-8">
              <a
                href="#contact"
                className="group inline-flex items-center gap-3 border border-primary bg-primary px-7 py-3.5 text-[12px] tracking-[0.22em] text-primary-foreground transition-all hover:bg-transparent hover:text-primary"
              >
                <Calendar className="h-3.5 w-3.5" strokeWidth={1.5} />
                {t("book").toUpperCase()}
              </a>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Supporting team */}
      <div className="mt-14 grid grid-cols-2 gap-4 sm:gap-10 lg:mt-24">
        {[
          { n: "team_2_name", r: "team_2_role", img: "/img/salome.png" },
          { n: "team_3_name", r: "team_3_role", img: "/img/ani.png" },
        ].map((m, i) => (
          <Reveal key={m.n} delay={i * 0.1}>
            <div className="group">
              <Frame>
                <img
                  src={m.img}
                  alt={t(m.n as TranslationKey)}
                  className="aspect-[4/5] w-full object-cover object-[50%_20%] transition-transform duration-700 ease-out group-hover:scale-[1.03] lg:aspect-[4/3.4]"
                />
              </Frame>
              <div className="mt-4 flex items-start justify-between gap-4 sm:mt-6">
                <div>
                  <h4
                    className="text-[17px] leading-snug text-primary sm:text-[19px]"
                    style={{ fontFamily: "var(--font-serif)" }}
                  >
                    {t(m.n as TranslationKey)}
                  </h4>
                  <p className="mt-1 text-[10px] tracking-[0.14em] uppercase text-gold sm:text-[11.5px] sm:tracking-[0.2em]">
                    {t(m.r as TranslationKey)}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Dental tourism + hotel                                              */
/* ------------------------------------------------------------------ */

function Tourism({ lang }: { lang: Lang }) {
  const t = useT(lang);
  const features = [
    { icon: Video, k: "tour_f1" },
    { icon: FileText, k: "tour_f2" },
    { icon: Hotel, k: "tour_f3" },
    { icon: Plane, k: "tour_f4" },
  ] as const;
  const steps = [
    { t: "tour_s1_t", d: "tour_s1_d" },
    { t: "tour_s2_t", d: "tour_s2_d" },
    { t: "tour_s3_t", d: "tour_s3_d" },
    { t: "tour_s4_t", d: "tour_s4_d" },
    { t: "tour_s5_t", d: "tour_s5_d" },
  ] as const;
  const rooms = [
    { k: "hotel_room_1", guests: "2", nobf: 50, bf: 65 },
    { k: "hotel_room_2", guests: "2", nobf: 60, bf: 75 },
    { k: "hotel_room_3", guests: "3–4", nobf: 75, bf: 95 },
  ] as const;

  return (
    <section id="tourism" className="bg-ivory">
      <div className="mx-auto max-w-[1400px] px-6 py-16 sm:py-24 lg:px-10 lg:py-36">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <div className="flex items-center justify-center gap-3">
              <span className="hairline" />
              <span className="eyebrow">{t("tour_eyebrow")}</span>
              <span className="hairline" />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 text-[clamp(2rem,3.5vw,3rem)] leading-[1.1] text-primary">
              {t("tour_title")}
            </h2>
          </Reveal>
        </div>

        {/* Feature tiles */}
        <Reveal delay={0.2}>
          <div className="mt-10 grid grid-cols-2 gap-px border border-border/80 bg-border/80 lg:mt-14 lg:grid-cols-4">
            {features.map(({ icon: Icon, k }) => (
              <div
                key={k}
                className="flex flex-col items-center gap-2.5 bg-card px-3 py-5 text-center sm:px-4 sm:py-7"
              >
                <Icon className="h-6 w-6 text-gold" strokeWidth={1.25} />
                <span className="text-[13.5px] leading-snug text-foreground">{t(k)}</span>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Steps */}
        <div className="mt-12 grid grid-cols-1 items-start gap-14 lg:mt-24 lg:grid-cols-12 lg:gap-20">
          <div className="hidden lg:sticky lg:top-28 lg:col-span-5 lg:block">
            <Reveal>
              <Frame>
                <img
                  src="/img/interier.jpg"
                  alt={t("tour_image_alt")}
                  className="aspect-[4/5] w-full object-cover object-[50%_35%]"
                />
              </Frame>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal>
              <h3
                className="text-[clamp(1.6rem,2.6vw,2.2rem)] leading-[1.1] text-primary"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                {t("tour_steps_title")}
              </h3>
            </Reveal>
            <ol className="mt-8">
              {steps.map((s, i) => (
                <Reveal key={s.t} delay={i * 0.06}>
                  <li className="grid grid-cols-[2.5rem_1fr] gap-3 border-t border-border/70 py-4 sm:grid-cols-[4rem_1fr] sm:gap-4 sm:py-6">
                    <span
                      className="text-[26px] leading-none text-gold sm:text-[30px]"
                      style={{ fontFamily: "var(--font-serif)" }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h4 className="text-[17px] leading-snug text-primary">{t(s.t)}</h4>
                      <p className="mt-2 text-[14px] leading-relaxed text-foreground/70">
                        {t(s.d)}
                      </p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ol>
            <Reveal>
              <p className="border-t border-border/70 pt-5 text-[12.5px] leading-relaxed text-muted-foreground italic">
                {t("tour_note")}
              </p>
              <a
                href={FACEBOOK_CHAT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-3 border border-primary bg-primary px-7 py-3.5 text-[12px] tracking-[0.22em] text-primary-foreground transition-all hover:bg-transparent hover:text-primary"
              >
                <Facebook className="h-3.5 w-3.5" strokeWidth={1.5} />
                {t("tour_cta").toUpperCase()}
              </a>
            </Reveal>
          </div>
        </div>

        {/* Hotel */}
        <Reveal>
          <div className="mt-12 grid grid-cols-1 border border-border/80 bg-card lg:mt-24 lg:grid-cols-12">
            <div className="border-b border-border/80 p-6 sm:p-10 lg:col-span-5 lg:border-r lg:border-b-0 lg:p-12">
              <div className="flex items-center gap-3">
                <Hotel className="h-4 w-4 text-gold" strokeWidth={1.5} />
                <span className="eyebrow">{t("hotel_eyebrow")}</span>
              </div>
              <h3
                className="mt-5 text-[clamp(1.8rem,3vw,2.4rem)] leading-[1.05] text-primary"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                Hotel Garnet
              </h3>
              <p className="mt-4 text-[15px] leading-relaxed text-foreground/75">
                {t("hotel_sub")}
              </p>
              <p className="mt-4 text-[13.5px] leading-relaxed text-foreground/65">
                {t("hotel_amenities")}
              </p>
              <p className="mt-6 text-[13px] leading-relaxed text-muted-foreground">
                {t("hotel_separate")}
              </p>
              <ul className="mt-4 space-y-2.5 text-[14px]">
                <li>
                  <a
                    href="https://hotelgarnet.ge"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 text-primary hover:text-gold"
                  >
                    <Globe className="h-4 w-4 text-gold" strokeWidth={1.25} />
                    hotelgarnet.ge
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:reservation@hotelgarnet.ge"
                    className="inline-flex items-center gap-3 break-all text-primary hover:text-gold"
                  >
                    <Mail className="h-4 w-4 shrink-0 text-gold" strokeWidth={1.25} />
                    reservation@hotelgarnet.ge
                  </a>
                </li>
              </ul>
            </div>

            <div className="p-6 sm:p-10 lg:col-span-7 lg:p-12">
              <div className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                {t("hotel_rates_caption")}
              </div>
              <table className="mt-5 w-full border-collapse text-left">
                <thead>
                  <tr className="border-b border-border text-[10.5px] uppercase tracking-[0.16em] text-muted-foreground">
                    <th className="py-3 pr-3 font-normal">{t("hotel_col_room")}</th>
                    <th className="hidden py-3 pr-3 font-normal sm:table-cell">
                      {t("hotel_col_guests")}
                    </th>
                    <th className="py-3 pr-3 text-right font-normal">{t("hotel_col_nobf")}</th>
                    <th className="py-3 text-right font-normal">{t("hotel_col_bf")}</th>
                  </tr>
                </thead>
                <tbody>
                  {rooms.map((r) => (
                    <tr key={r.k} className="border-b border-border/60">
                      <td className="py-4 pr-3">
                        <span
                          className="block text-[15px] leading-snug text-primary sm:text-[17px]"
                          style={{ fontFamily: "var(--font-serif)" }}
                        >
                          {t(r.k)}
                        </span>
                        <span className="mt-0.5 block text-[11.5px] text-muted-foreground sm:hidden">
                          {t("hotel_col_guests")}: {r.guests}
                        </span>
                      </td>
                      <td className="hidden py-4 pr-3 text-[14px] text-foreground/75 sm:table-cell">
                        {r.guests}
                      </td>
                      <td className="py-4 pr-3 text-right text-[16px] text-foreground">
                        ${r.nobf}
                      </td>
                      <td className="py-4 text-right text-[16px] text-foreground">${r.bf}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="mt-6 text-[13px] leading-relaxed text-foreground/65">
                {t("hotel_kids")}
              </p>
            </div>
          </div>
        </Reveal>
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
            "radial-gradient(50% 40% at 20% 0%, oklch(0.55 0.1 240 / 0.6), transparent 70%), radial-gradient(40% 30% at 90% 100%, oklch(0.74 0.08 85 / 0.15), transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-[1400px] px-6 py-16 sm:py-24 lg:px-10 lg:py-36">
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

        <div className="mt-10 grid grid-cols-1 gap-px bg-primary-foreground/10 lg:mt-20 lg:grid-cols-3">
          {reviews.map((r, i) => (
            <Reveal key={r.text} delay={i * 0.1}>
              <figure className="flex h-full flex-col justify-between bg-primary p-6 sm:p-8 lg:p-10">
                <Quote className="h-6 w-6 text-gold" strokeWidth={1.25} />
                <blockquote
                  className="mt-4 text-[15px] leading-[1.6] text-primary-foreground/95 sm:mt-6 sm:text-[16px]"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  “{t(r.text)}”
                </blockquote>
                <figcaption className="mt-5 flex items-center gap-3 border-t border-primary-foreground/15 pt-5">
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
  const actionCls =
    "group flex items-center gap-5 border border-border bg-card p-6 transition-all duration-300 hover:border-primary hover:shadow-[0_18px_40px_-16px_rgba(20,60,110,0.22)]";

  return (
    <section id="contact" className="bg-ivory">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-10 px-6 py-16 sm:py-24 lg:grid-cols-12 lg:gap-20 lg:px-10 lg:py-36">
        {/* Left: contact actions */}
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
            <div className="mt-8 grid grid-cols-1 gap-3 sm:mt-12 sm:grid-cols-2 sm:gap-4">
              <a
                href={FACEBOOK_CHAT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={actionCls}
              >
                <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Facebook className="h-5 w-5" strokeWidth={1.5} />
                </span>
                <span className="min-w-0">
                  <span className="block text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                    Facebook
                  </span>
                  <span
                    className="mt-1 block text-[17px] leading-snug text-primary"
                    style={{ fontFamily: "var(--font-serif)" }}
                  >
                    {t("contact_fb_label")}
                  </span>
                </span>
              </a>
              <a href={PHONE_HREF} className={actionCls}>
                <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gold/70 text-gold">
                  <Phone className="h-5 w-5" strokeWidth={1.5} />
                </span>
                <span className="min-w-0">
                  <span className="block text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                    {t("contact_call_label")}
                  </span>
                  <span
                    className="mt-1 block text-[17px] leading-snug whitespace-nowrap text-primary"
                    style={{ fontFamily: "var(--font-serif)" }}
                  >
                    {PHONE_DISPLAY}
                  </span>
                </span>
              </a>
            </div>
          </Reveal>
        </div>

        {/* Right: info + map */}
        <div className="lg:col-span-5">
          <Reveal delay={0.2}>
            <div className="border border-border bg-card p-6 sm:p-8 lg:p-10">
              <ul className="space-y-6">
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
                      href={PHONE_HREF}
                      className="mt-1 block text-[15px] text-foreground hover:text-primary"
                    >
                      {PHONE_DISPLAY}
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

              <div className="mt-6 h-px w-full bg-border" />

              {/* Map */}
              <div className="mt-6 overflow-hidden border border-border">
                <iframe
                  title="St. Luke's Dental Clinic — Tbilisi"
                  src="https://www.google.com/maps?q=Paolo+Iashvili+12,+Tbilisi&output=embed"
                  loading="lazy"
                  className="block h-52 w-full grayscale-[35%] contrast-[0.95]"
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
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-8 px-6 py-12 md:grid-cols-12 md:gap-12 md:py-16 lg:px-10">
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

        <div className="hidden md:col-span-3 md:block">
          <div className="text-[11px] uppercase tracking-[0.22em] text-gold">{t("footer_nav")}</div>
          <ul className="mt-5 space-y-2.5 text-[14px] text-foreground/75">
            {[
              { k: "nav_services", h: "#services" },
              { k: "nav_about", h: "#about" },
              { k: "nav_team", h: "#team" },
              { k: "nav_tourism", h: "#tourism" },
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
              <a href={PHONE_HREF} className="hover:text-primary">
                {PHONE_DISPLAY}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-gold" strokeWidth={1.25} />
              <span>{t("contact_hours")}</span>
            </li>
            <li className="flex items-start gap-3">
              <Facebook className="mt-0.5 h-4 w-4 shrink-0 text-gold" strokeWidth={1.25} />
              <a
                href={FACEBOOK_PAGE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary"
              >
                St. Luka Dental Clinic
              </a>
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
        {/* <BeforeAfter lang={lang} /> — temporarily removed */}
        <Team lang={lang} />
        <Tourism lang={lang} />
        <Reviews lang={lang} />
        <Contact lang={lang} />
      </main>
      <Footer lang={lang} />

      {/* Mobile floating call button */}
      <a
        href={PHONE_HREF}
        aria-label="Call clinic"
        className="fixed bottom-5 right-5 z-40 inline-flex h-12 w-12 items-center justify-center rounded-full border border-gold/60 bg-primary text-primary-foreground shadow-lg transition-transform hover:scale-105 sm:hidden"
      >
        <Phone className="h-4 w-4 text-gold" strokeWidth={1.75} />
      </a>
    </div>
  );
}
