"use client";

import { useMemo, useState, type ElementType } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  AlertTriangle,
  ArrowRight,
  Building2,
  CheckCircle2,
  Factory,
  Hotel,
  MapPin,
  Scale,
  Stethoscope,
  Store,
  Truck,
  Users,
  MessageSquare,
  Clock,
  FileWarning,
  PhoneOff,
  Layers,
} from "lucide-react";

import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import { Badge } from "@/components/ui/badge";
import { BorderBeam } from "@/components/ui/border-beam";
import { Cover } from "@/components/ui/cover";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { Marquee } from "@/components/ui/marquee";
import { Sparkles } from "@/components/ui/sparkles";
import { TextAnimate } from "@/components/ui/text-animate";
import { useLocale } from "@/i18n/locale-provider";
import { industriesAr } from "@/i18n/industries-ar";
import { cn } from "@/lib/utils";

type Industry = {
  id: string;
  title: string;
  short: string;
  icon: ElementType;
  image?: string;
  cities: string[];
  story: string;
  pains: { title: string; detail: string }[];
  breaksAtScale: string[];
  solutions: string[];
  outcomes: string[];
};

const industries: Industry[] = [
  {
    id: "tour-uk",
    title: "Tour Operators & Travel Agencies (UK)",
    short: "Bookings, itineraries & seasonal demand",
    icon: Users,
    image: "/uk.PNG",
    cities: ["London", "Manchester", "Birmingham"],
    story:
      "UK tour operators juggle bookings, supplier confirmations, and last-minute itinerary changes. Customers expect quick answers across phone, email, and chat — and seasonality creates sharp demand spikes.",
    pains: [
      {
        title: "High season inbox surges",
        detail:
          "Questions about availability, refunds, and itinerary changes flood channels during peak travel weeks. Manual replies slow conversions.",
      },
      {
        title: "Disparate booking systems",
        detail:
          "Reservations, supplier confirmations, and payments are scattered across platforms and spreadsheets, making reconciliation slow and error-prone.",
      },
      {
        title: "Late changes and supplier coordination",
        detail:
          "Last-minute supplier updates or cancellations require rapid coordination and clear customer communication to avoid dissatisfaction.",
      },
      {
        title: "Refunds & compliance",
        detail:
          "Handling refunds, insurance claims, and regulatory requests requires accurate records and fast responses.",
      },
    ],
    breaksAtScale: [
      "Manual processes can't keep up with peak-week demand",
      "Customers churn when confirmations are delayed",
      "Operations lose visibility into supplier status and payments",
    ],
    solutions: [
      "AI chat & voice agents for instant booking checks and FAQs",
      "Centralized booking portals with supplier workflows",
      "Automated notifications for itinerary and payment updates",
      "Refund and exception handling automation linked to finance systems",
    ],
    outcomes: ["Faster confirmations", "Fewer manual reconciliations", "Happier travellers", "Cleaner ops"],
  },
  {
    id: "hotels",
    title: "Hotels & Hospitality",
    short: "Guest experience under pressure",
    icon: Hotel,
    image: "/hotel.jpg",
    cities: ["Makkah", "Madinah", "Jeddah", "Riyadh", "Dammam"],
    story:
      "Guests expect instant answers about rooms, check-in, late arrival, and nearby services. Front desks are busy; phones ring; WhatsApp never stops. Slow replies become bad reviews.",
    pains: [
        {
          title: "Reception cannot answer every channel",
          detail:
          "Calls, walk-ins, Booking.com messages, and WhatsApp all compete for the same small team — especially at night and during peak seasons.",
      },
      {
        title: "Check-in and house status feel disconnected",
        detail:
          "Room readiness, reservations, and guest requests sit in different systems (or notebooks), so staff keep asking each other for updates.",
      },
      {
        title: "Reviews suffer from slow service",
        detail:
          "A delayed answer about parking, breakfast, or room type can become a public 1-star complaint that hurts future occupancy.",
      },
      {
        title: "Repeat guests are forgotten",
        detail:
          "Preferences and past stays are not captured, so every visit feels like starting from zero.",
      },
    ],
    breaksAtScale: [
      "Peak nights require more staff than you can hire fast enough",
      "Managers only discover problems after guests complain",
      "Occupancy grows, but service quality and margins shrink",
    ],
    solutions: [
      "AI receptionist for calls, WhatsApp, and common guest questions",
      "Hotel ops software linking booking → rooms → housekeeping",
      "Guest portals and automated check-in / reminder flows",
      "CRM that remembers guests and triggers follow-ups",
    ],
    outcomes: ["Higher occupancy", "Faster guest replies", "Smoother check-ins", "Better reviews"],
  },
  {
    id: "healthcare",
    title: "Healthcare & Clinics",
    short: "Appointments, no-shows & follow-ups",
    icon: Stethoscope,
    image: "/health.jpg",
    cities: ["Makkah", "Madinah", "Jeddah", "Riyadh", "Dammam"],
    story:
      "Patients call to book, reschedule, ask for results, or confirm insurance. Reception is the bottleneck. No-shows waste doctor time, and follow-ups fall through the cracks.",
    pains: [
      {
        title: "Phone lines are always busy",
        detail:
          "Patients who cannot get through book elsewhere — or show up without an appointment and create lobby chaos.",
      },
      {
        title: "No-shows and late cancellations",
        detail:
          "Without smart reminders and easy rescheduling, empty slots become lost revenue every week.",
      },
      {
        title: "Records and billing feel messy",
        detail:
          "Paper files, WhatsApp confirmations, and separate billing tools make it hard to know who owes what and who needs follow-up care.",
      },
      {
        title: "After-visit care is inconsistent",
        detail:
          "Medication reminders, lab result notices, and review requests depend on someone remembering to send them.",
      },
    ],
    breaksAtScale: [
      "Adding doctors without better scheduling only increases chaos",
      "Staff burnout rises as call volume grows",
      "Patient trust drops when communication feels unreliable",
    ],
    solutions: [
      "AI appointment assistants (voice + WhatsApp) in Arabic & English",
      "Clinic management software with patient portals",
      "Automated reminders, waitlist fills, and follow-up workflows",
      "Dashboards for no-shows, utilization, and billing status",
    ],
    outcomes: ["Fewer no-shows", "Less phone burden", "Organized records", "Better patient care"],
  },
  {
    id: "construction",
    title: "Construction & Real Estate",
    short: "Sites, approvals & client updates",
    icon: Building2,
    image: "/contruction.jpg",
    cities: ["Riyadh", "Jeddah", "Dammam", "Makkah"],
    story:
      "Projects live on WhatsApp photos, verbal updates, and delayed Excel reports. Approvals wait. Clients ask “what’s the status?” and nobody has a single truthful answer.",
    pains: [
      {
        title: "Site reality never reaches the office on time",
        detail:
          "Progress, issues, and material needs are buried in group chats. HQ learns about delays after the deadline has already slipped.",
      },
      {
        title: "Approvals move slowly",
        detail:
          "Quotations, change orders, and document sign-offs bounce between people with no clear owner or SLA.",
      },
      {
        title: "Clients feel left in the dark",
        detail:
          "Investors and homeowners chase updates because there is no shared portal showing milestones and photos.",
      },
      {
        title: "Cost control is reactive",
        detail:
          "By the time overruns appear in a monthly sheet, money has already been spent.",
      },
    ],
    breaksAtScale: [
      "More sites multiply coordination failure",
      "Reputation suffers when handovers keep slipping",
      "Leaders cannot forecast cash or crew needs accurately",
    ],
    solutions: [
      "Construction / project ERP with mobile site reporting",
      "Automated approval workflows and quotation tracking",
      "Client portals with milestones, files, and updates",
      "AI summaries and pipelines for delay and cost risk",
    ],
    outcomes: ["Real-time visibility", "Faster approvals", "Clearer client trust", "Tighter cost control"],
  },
  {
    id: "logistics",
    title: "Logistics & Transportation",
    short: "Fleet, routes & delivery updates",
    icon: Truck,
    image: "/transport.jpg",
    cities: ["Jeddah", "Dammam", "Riyadh", "Makkah", "Madinah"],
    story:
      "Customers only care about one question: where is my delivery? Drivers, dispatchers, and support teams answer that question all day — often with incomplete information.",
    pains: [
      {
        title: "Dispatch is reactive, not planned",
        detail:
          "Routes are built from habit and phone calls. Empty miles, late handoffs, and overlapping trips waste fuel and time.",
      },
      {
        title: "Customers chase status updates",
        detail:
          "Support spends hours telling people “it’s on the way” because there is no simple tracking link or automated update.",
      },
      {
        title: "Driver coordination is messy",
        detail:
          "Assignments, POD photos, and exceptions live in WhatsApp. Disputes and lost deliveries are hard to prove.",
      },
      {
        title: "No single fleet picture",
        detail:
          "Managers cannot see utilization, delays, or recurring route problems until the month is over.",
      },
    ],
    breaksAtScale: [
      "More vehicles without better systems means more chaos",
      "SLA penalties and bad reviews rise with volume",
      "Growth stalls because ops cannot absorb more orders cleanly",
    ],
    solutions: [
      "Fleet & dispatch software with live tracking",
      "Driver apps for assignments and proof of delivery",
      "Customer tracking portals and WhatsApp status automation",
      "Route and performance pipelines for managers",
    ],
    outcomes: ["Fewer status calls", "Better on-time rates", "Clearer fleet control", "Happier customers"],
  },
  {
    id: "manufacturing",
    title: "Manufacturing",
    short: "Inventory, production & quality",
    icon: Factory,
    image: "/manufacturing.jpg",
    cities: ["Dammam", "Riyadh", "Jeddah"],
    story:
      "Production plans change daily, but inventory and machine status still live in paper logs or outdated systems. By the time a shortage is visible, the line is already waiting.",
    pains: [
      {
        title: "Inventory surprises stop production",
        detail:
          "Stock counts are delayed or wrong. Teams discover missing materials only when an order is already late.",
      },
      {
        title: "Planning is guesswork",
        detail:
          "Without clean production data, schedules are based on hope — not capacity, downtime, or demand signals.",
      },
      {
        title: "Quality issues are found too late",
        detail:
          "Defects are logged inconsistently, so the same problem repeats across batches.",
      },
      {
        title: "Reporting takes days",
        detail:
          "Supervisors spend evenings assembling numbers leadership needed that morning.",
      },
    ],
    breaksAtScale: [
      "Larger order books expose every weak handoff",
      "Downtime and waste quietly destroy margins",
      "Customers lose trust when delivery promises keep moving",
    ],
    solutions: [
      "Manufacturing ERP and inventory systems with barcode/QR",
      "Production dashboards and downtime tracking",
      "Quality workflows with clear ownership",
      "AI analytics pipelines for demand and utilization",
    ],
    outcomes: ["Fewer stockouts", "Less downtime", "Clearer planning", "Higher quality consistency"],
  },
  {
    id: "law",
    title: "Law Firms",
    short: "Cases, clients & documents",
    icon: Scale,
    image: "/law.jpg",
    cities: ["Riyadh", "Jeddah", "Dammam", "Makkah"],
    story:
      "Clients want updates. Lawyers need documents. Reception books appointments. Without a system, cases live in email folders and memory — and billable work gets interrupted by admin.",
    pains: [
      {
        title: "Clients keep asking “any update?”",
        detail:
          "Every status request pulls a lawyer out of deep work because there is no shared case timeline clients can see.",
      },
      {
        title: "Documents are hard to find securely",
        detail:
          "Files sit across email, USB drives, and chat. Version confusion and security risk grow with every matter.",
      },
      {
        title: "Appointments and reminders slip",
        detail:
          "Missed consultations and court-related reminders damage trust and create last-minute scrambles.",
      },
      {
        title: "Billing is delayed and disputed",
        detail:
          "Time and expenses are tracked late, so invoices feel surprising and collections slow down.",
      },
    ],
    breaksAtScale: [
      "Growing the practice increases admin faster than revenue",
      "Junior staff inherit chaos instead of a clear process",
      "Reputation risk rises when confidentiality and deadlines are informal",
    ],
    solutions: [
      "Case management systems with client portals",
      "Secure document sharing and matter workspaces",
      "AI assistants for intake FAQs and appointment booking",
      "Automated reminders and clearer billing workflows",
    ],
    outcomes: ["Organized matters", "Less admin drag", "Better client trust", "Cleaner billing"],
  },
  {
    id: "retail",
    title: "Retail & E-Commerce",
    short: "Stock, orders & customer care",
    icon: Store,
    image: "/ecom.jpg",
    cities: ["Riyadh", "Jeddah", "Dammam", "Makkah", "Madinah"],
    story:
      "Customers buy across Instagram, WhatsApp, the website, and the store. Stock goes out of sync. Support answers “is this available?” all day while sales slip away.",
    pains: [
      {
        title: "Stock truth is different in every channel",
        detail:
          "What is sold in-store may still look available online. Overselling and awkward refunds become normal.",
      },
      {
        title: "Support cannot keep up with order questions",
        detail:
          "Where is my order, can I change size, do you deliver to Madinah — the same threads repeat endlessly.",
      },
      {
        title: "Marketing spend does not convert cleanly",
        detail:
          "Leads arrive, but follow-up is slow and product recommendations feel random instead of personal.",
      },
      {
        title: "Multi-branch retail lacks one dashboard",
        detail:
          "Owners cannot quickly see which branch, SKU, or campaign is actually making money today.",
      },
    ],
    breaksAtScale: [
      "More SKUs and branches amplify inventory mistakes",
      "Customer experience becomes inconsistent across cities",
      "Ad spend rises while operations remain manual",
    ],
    solutions: [
      "Unified inventory + POS + e-commerce platforms",
      "AI support for WhatsApp/web order questions",
      "Loyalty and recommendation systems",
      "Pipelines and dashboards for sales, stock, and campaign performance",
    ],
    outcomes: ["Fewer stock errors", "Faster support", "Higher conversion", "Clear multi-branch view"],
  },
];

const familiarPains = [
  { icon: MessageSquare, text: "WhatsApp never stops" },
  { icon: PhoneOff, text: "Missed calls = missed revenue" },
  { icon: FileWarning, text: "Everything lives in Excel" },
  { icon: Clock, text: "Peak season breaks the team" },
  { icon: Layers, text: "Tools don’t talk to each other" },
  { icon: AlertTriangle, text: "Problems show up too late" },
];

export default function IndustriesPage() {
  const { t, messages, isRtl, locale } = useLocale();
  const [activeId, setActiveId] = useState(industries[0].id);

  const localizedIndustries = useMemo(() => {
    if (locale !== "ar") return industries;
    return industries.map((ind) => {
      const ar = industriesAr[ind.id];
      if (!ar) return ind;
      return {
        ...ind,
        title: ar.title,
        short: ar.short,
        story: ar.story,
        pains: ar.pains,
        breaksAtScale: ar.breaksAtScale,
        solutions: ar.solutions,
        outcomes: ar.outcomes,
      };
    });
  }, [locale]);

  const active = useMemo(
    () => localizedIndustries.find((i) => i.id === activeId) ?? localizedIndustries[0],
    [activeId, localizedIndustries]
  );
  const ActiveIcon = active.icon;
  const howSteps = messages.industriesPage.howSteps;

  return (
    <div className="overflow-hidden pb-24">
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-[#05070b] pt-28 pb-16 text-white">
        <Sparkles className="absolute inset-0" density={110} opacity={0.4} color="#06b6d4" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(6,182,212,0.16),_transparent_55%),radial-gradient(ellipse_at_bottom_left,_rgba(249,115,22,0.12),_transparent_45%)]" />

        <div className="relative z-10 mx-auto max-w-5xl px-4 text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur">
            <MapPin className="size-3.5 text-primary" />
            <AnimatedShinyText
              className={cn(
                "mx-0 max-w-none text-sm text-white/70 dark:text-white/70",
                isRtl && "font-arabic-ui"
              )}
            >
              {t("industriesPage.badge")}
            </AnimatedShinyText>
          </div>

          <h1
            className={cn(
              "font-heading text-4xl font-bold tracking-tight sm:text-6xl md:text-7xl",
              isRtl && "font-arabic-ui"
            )}
          >
            {t("industriesPage.title")}
            <br className="hidden sm:block" />{" "}
            <Cover className="text-neutral-900">{t("industriesPage.titleHighlight")}</Cover>
          </h1>

          <TextAnimate
            as="p"
            by="word"
            animation="blurInUp"
            className={cn(
              "mx-auto mt-6 max-w-2xl text-lg font-medium text-white/65 md:text-xl",
              isRtl && "font-arabic-ui"
            )}
          >
            {t("industriesPage.subtitle")}
          </TextAnimate>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href="#explore" className="inline-block">
              <InteractiveHoverButton
                className={cn(
                  "border-white/15 bg-white text-black",
                  isRtl && "font-arabic-ui"
                )}
              >
                {t("industriesPage.findIndustry")}
              </InteractiveHoverButton>
            </a>
            <Link
              href="/services"
              className={cn(
                "inline-flex items-center gap-2 text-sm font-semibold text-white/70 transition hover:text-white",
                isRtl && "font-arabic-ui"
              )}
            >
              {t("industriesPage.seeSolutions")} <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAMILIAR PAINS */}
      <section className="border-y border-black/5 bg-background py-5">
        <Marquee pauseOnHover className="[--duration:32s]">
          {familiarPains.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.text}
                className="mx-2 flex items-center gap-2 rounded-full border border-orange-200/70 bg-orange-50 px-4 py-2 text-sm font-semibold text-orange-800"
              >
                <Icon className="size-4" />
                {item.text}
              </div>
            );
          })}
        </Marquee>
      </section>

      {/* HOW TO USE */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-4 md:grid-cols-3">
          {howSteps.map((card, index) => (
            <div
              key={card.title}
              className="relative overflow-hidden rounded-3xl border border-black/5 bg-white p-6 shadow-sm"
            >
              <div
                className={cn(
                  "mb-3 flex size-9 items-center justify-center rounded-full bg-primary/10 font-heading text-sm font-bold text-primary",
                  isRtl && "font-arabic-ui"
                )}
              >
                {index + 1}
              </div>
              <h3
                className={cn(
                  "font-heading text-lg font-bold text-foreground",
                  isRtl && "font-arabic-ui"
                )}
              >
                {card.title}
              </h3>
              <p
                className={cn(
                  "mt-2 text-sm leading-relaxed text-muted-foreground",
                  isRtl && "font-arabic-ui"
                )}
              >
                {card.desc}
              </p>
              <BorderBeam size={70} duration={9} colorFrom="#06b6d4" colorTo="#f97316" />
            </div>
          ))}
        </div>
      </section>

      {/* INDUSTRY EXPLORER */}
      <section id="explore" className="mx-auto max-w-7xl px-4 pb-8">
        <div className="mb-8 max-w-3xl">
          <h2
            className={cn(
              "font-heading text-3xl font-bold tracking-tight text-foreground md:text-5xl",
              isRtl && "font-arabic-ui"
            )}
          >
            {t("industriesPage.explorerTitle")}
          </h2>
          <p
            className={cn(
              "mt-3 text-muted-foreground",
              isRtl && "font-arabic-ui"
            )}
          >
            {t("industriesPage.explorerSubtitle")}
          </p>
        </div>

        <div className="mb-8 flex flex-wrap gap-2">
          {localizedIndustries.map((ind) => {
            const Icon = ind.icon;
            const selected = activeId === ind.id;
            return (
              <button
                key={ind.id}
                type="button"
                onClick={() => setActiveId(ind.id)}
                className={cn(
                  "inline-flex items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-semibold transition",
                  selected
                    ? "border-primary/40 bg-primary text-white shadow-lg shadow-primary/20"
                    : "border-black/10 bg-white text-foreground/80 hover:border-primary/30 hover:text-foreground"
                )}
              >
                <Icon className="size-4" />
                {ind.title}
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35 }}
            className="relative overflow-hidden rounded-[28px] border border-black/5 bg-white shadow-xl"
          >
            <BorderBeam size={140} duration={11} colorFrom="#06b6d4" colorTo="#f97316" borderWidth={1.5} />

            <div className="grid lg:grid-cols-12">
              {/* Visual */}
              <div className="relative min-h-[240px] overflow-hidden bg-[#0b1220] lg:col-span-5 lg:min-h-full">
                {active.image ? (
                  <Image
                    src={active.image}
                    alt={active.title}
                    fill
                    className="object-cover opacity-90"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-900 to-slate-950" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#05070b] via-[#05070b]/45 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                  <div className="mb-3 flex size-12 items-center justify-center rounded-2xl border border-white/15 bg-white/10 backdrop-blur">
                    <ActiveIcon className="size-6 text-primary" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold md:text-3xl">{active.title}</h3>
                  <p className="mt-1 text-sm text-white/70">{active.short}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {active.cities.map((city) => (
                      <span
                        key={city}
                        className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-medium text-white/85"
                      >
                        {city}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="lg:col-span-7 p-6 md:p-10">
                <p className="text-base leading-relaxed text-foreground/80 md:text-lg">{active.story}</p>

                <div className="mt-8">
                  <h4
                    className={cn(
                      "mb-4 flex items-center gap-2 font-heading text-lg font-bold text-orange-600",
                      isRtl && "font-arabic-ui"
                    )}
                  >
                    <AlertTriangle className="size-5" />
                    {t("industriesPage.hurtsTitle")}
                  </h4>
                  <div className="space-y-3">
                    {active.pains.map((pain) => (
                      <details
                        key={pain.title}
                        className="group rounded-2xl border border-orange-100 bg-orange-50/60 open:bg-orange-50"
                        open={pain === active.pains[0]}
                      >
                        <summary className="cursor-pointer list-none px-4 py-3 font-semibold text-foreground marker:content-none [&::-webkit-details-marker]:hidden">
                          <span className="flex items-center justify-between gap-3">
                            {pain.title}
                            <span className="text-orange-500 transition group-open:rotate-45">+</span>
                          </span>
                        </summary>
                        <p className="px-4 pb-4 text-sm leading-relaxed text-muted-foreground">
                          {pain.detail}
                        </p>
                      </details>
                    ))}
                  </div>
                </div>

                <div className="mt-8 grid gap-4 md:grid-cols-2">
                  <div className="rounded-2xl border border-black/5 bg-muted/50 p-5">
                    <h4
                      className={cn(
                        "mb-3 font-heading text-sm font-bold uppercase tracking-wide text-foreground/70",
                        isRtl && "font-arabic-ui normal-case tracking-normal"
                      )}
                    >
                      {t("industriesPage.breaksTitle")}
                    </h4>
                    <ul className="space-y-2.5">
                      {active.breaksAtScale.map((item) => (
                        <li key={item} className="flex gap-2 text-sm leading-relaxed text-foreground/75">
                          <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-secondary" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-2xl border border-primary/15 bg-primary/5 p-5">
                    <h4
                      className={cn(
                        "mb-3 font-heading text-sm font-bold uppercase tracking-wide text-primary",
                        isRtl && "font-arabic-ui normal-case tracking-normal"
                      )}
                    >
                      {t("industriesPage.removesTitle")}
                    </h4>
                    <ul className="space-y-2.5">
                      {active.solutions.map((item) => (
                        <li key={item} className="flex gap-2 text-sm leading-relaxed text-foreground/80">
                          <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {active.outcomes.map((o) => (
                    <Badge key={o} className="bg-emerald-50 text-emerald-700 hover:bg-emerald-50">
                      {o}
                    </Badge>
                  ))}
                </div>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link href="/contact" className="inline-block">
                    <InteractiveHoverButton className={cn(isRtl && "font-arabic-ui")}>
                      {t("industriesPage.talkIndustry", {
                        industry: active.title.split("&")[0].trim(),
                      })}
                    </InteractiveHoverButton>
                  </Link>
                  <Link
                    href="/services"
                    className={cn(
                      "inline-flex items-center justify-center gap-2 rounded-full border border-black/10 px-5 py-2.5 text-sm font-semibold text-foreground/80 transition hover:bg-muted",
                      isRtl && "font-arabic-ui"
                    )}
                  >
                    {t("industriesPage.ctaSecondary")} <ArrowRight className="size-4" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </section>

      {/* QUICK SCAN ALL INDUSTRIES */}
      <section className="mx-auto max-w-7xl px-4 py-20">
        <div className="mb-10 text-center">
          <h2
            className={cn(
              "font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl",
              isRtl && "font-arabic-ui"
            )}
          >
            {t("industriesPage.familiarTitle")}
          </h2>
          <p
            className={cn(
              "mx-auto mt-3 max-w-2xl text-muted-foreground",
              isRtl && "font-arabic-ui"
            )}
          >
            {t("industriesPage.explorerSubtitle")}
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {localizedIndustries.map((ind) => {
            const Icon = ind.icon;
            return (
              <button
                key={ind.id}
                type="button"
                onClick={() => {
                  setActiveId(ind.id);
                  document.getElementById("explore")?.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
                className={cn(
                  "rounded-3xl border p-5 text-left transition hover:-translate-y-0.5 hover:shadow-lg",
                  activeId === ind.id
                    ? "border-primary/30 bg-primary/5 shadow-md shadow-primary/10"
                    : "border-black/5 bg-white shadow-sm"
                )}
              >
                <Icon className="mb-3 size-5 text-primary" />
                <h3 className="font-heading text-base font-bold text-foreground">{ind.title}</h3>
                <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{ind.pains[0].detail}</p>
                <span
                  className={cn(
                    "mt-4 inline-flex items-center gap-1 text-xs font-semibold text-primary",
                    isRtl && "font-arabic-ui"
                  )}
                >
                  {t("industriesPage.readPains")} <ArrowRight className="size-3.5" />
                </span>
              </button>
            );
          })}
        </div>
      </section>

      {/* WHY THIS MATTERS */}
      <section className="border-y border-black/5 bg-muted/40 py-20">
        <div className="mx-auto max-w-5xl px-4">
          <div className="relative overflow-hidden rounded-[28px] border border-black/5 bg-white p-8 shadow-sm md:p-12">
            <BorderBeam size={120} duration={10} colorFrom="#06b6d4" colorTo="#f97316" />
            <h2
              className={cn(
                "font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl",
                isRtl && "font-arabic-ui"
              )}
            >
              {t("industriesPage.whyTitle")}
            </h2>
            <p
              className={cn(
                "mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg",
                isRtl && "font-arabic-ui"
              )}
            >
              {t("industriesPage.whyBody")}
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                "We map your bottlenecks before we build",
                "We explain solutions in plain language",
                "We connect AI, software, and workflows together",
                "We stay with you as operations scale across cities",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm font-medium text-foreground/85 md:text-base">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-5xl px-4 pt-20">
        <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#05070b] px-6 py-14 text-center text-white md:px-16">
          <Sparkles className="absolute inset-0" density={70} opacity={0.35} color="#f97316" />
          <BorderBeam size={140} duration={9} colorFrom="#06b6d4" colorTo="#f97316" borderWidth={2} />
          <div className="relative z-10">
            <h2
              className={cn(
                "font-heading text-3xl font-bold tracking-tight md:text-5xl",
                isRtl && "font-arabic-ui"
              )}
            >
              {t("industriesPage.ctaTitle")}
            </h2>
            <p
              className={cn(
                "mx-auto mt-4 max-w-2xl text-white/65",
                isRtl && "font-arabic-ui"
              )}
            >
              {t("industriesPage.ctaBody")}
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/contact" className="inline-block">
                <InteractiveHoverButton
                  className={cn(
                    "border-white/20 bg-white text-black",
                    isRtl && "font-arabic-ui"
                  )}
                >
                  {t("industriesPage.ctaPrimary")}
                </InteractiveHoverButton>
              </Link>
              <Link
                href="/services"
                className={cn(
                  "inline-flex items-center gap-2 text-sm font-semibold text-white/70 transition hover:text-white",
                  isRtl && "font-arabic-ui"
                )}
              >
                {t("industriesPage.ctaSecondary")} <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
