export type ServiceDetailItem = {
  eyebrow: string;
  headline: string;
  tagline: string;
  plain: string;
  forWho: string[];
  timeline: { title: string; desc: string }[];
  tech: string[];
  roi: { label: string; value: string; note: string }[];
  why: string[];
};

export type ServiceDetailsDictionary = {
  back: string;
  plainTitle: string;
  forWhoTitle: string;
  timelineTitle: string;
  techTitle: string;
  roiTitle: string;
  whyTitle: string;
  ctaTitle: string;
  ctaBody: string;
  ctaPrimary: string;
  ctaSecondary: string;
  weekLabel: string;
  items: {
    software: ServiceDetailItem;
    automations: ServiceDetailItem;
    apps: ServiceDetailItem;
    pipelines: ServiceDetailItem;
    web: ServiceDetailItem;
    voice: ServiceDetailItem;
  };
};

export const serviceDetailsEn: ServiceDetailsDictionary = {
  back: "All services",
  plainTitle: "In plain words",
  forWhoTitle: "Who this is for",
  timelineTitle: "Example delivery timeline",
  techTitle: "Technologies we use",
  roiTitle: "ROI you actually feel",
  whyTitle: "Why Apexa over other companies",
  ctaTitle: "Ready to start this service?",
  ctaBody: "Tell us your city and bottleneck — we’ll map a clear plan from Makkah.",
  ctaPrimary: "Book a free consultation",
  ctaSecondary: "WhatsApp us",
  weekLabel: "Week",
  items: {
    software: {
      eyebrow: "Custom systems",
      headline: "Custom Software Development",
      tagline: "One system that matches how your Saudi office really works.",
      plain:
        "Instead of forcing your team into a generic tool, we build software around your bookings, clients, inventory, and billing — so staff stop jumping between WhatsApp, Excel, and half-broken apps.",
      forWho: [
        "Small and mid-size offices that outgrew spreadsheets",
        "Law firms, clinics, and hotels needing cleaner operations",
        "Companies that want Arabic + English in the same system",
      ],
      timeline: [
        {
          title: "Discovery & blueprint",
          desc: "We map your current process, pains, and must-have features in plain language.",
        },
        {
          title: "Core build",
          desc: "We ship the first working modules your team can click and test.",
        },
        {
          title: "Integrations & polish",
          desc: "Connect WhatsApp, payments, or CRM — then refine based on real use.",
        },
        {
          title: "Launch & handoff",
          desc: "Training, go-live support, and a clear ownership plan for your team.",
        },
      ],
      tech: ["Next.js / React", "Node.js APIs", "PostgreSQL", "Role-based access", "Arabic RTL UI", "Cloud hosting (KSA-friendly)"],
      roi: [
        { label: "Less busywork", value: "30–60%", note: "fewer hours wasted on copy-paste and chasing files" },
        { label: "Faster ops", value: "2–5×", note: "quicker booking, billing, and handoffs" },
        { label: "Fewer errors", value: "High", note: "one source of truth instead of scattered sheets" },
        { label: "Payback window", value: "3–6 mo", note: "typical for focused office systems" },
      ],
      why: [
        "We design for Saudi seasons, Arabic customers, and multi-city ops — not US SaaS assumptions.",
        "You own the system. No black-box lock-in that dies when the vendor disappears.",
        "We start with the bottleneck that costs you money, then expand — not a 12-month fantasy roadmap.",
        "Local delivery from Makkah with clear English + Arabic communication.",
      ],
    },
    automations: {
      eyebrow: "AI agents",
      headline: "AI Agents & Automations",
      tagline: "An AI teammate that replies, books, and follows up — while your staff serve customers.",
      plain:
        "Think of an employee who never sleeps: it answers WhatsApp and calls in Arabic or English, books appointments, and follows up automatically. Your team handles the important conversations — the AI handles the repetitive ones.",
      forWho: [
        "Clinics flooded with appointment messages",
        "Law firms and offices drowning in WhatsApp follow-ups",
        "Hotels and Umrah operators during peak seasons",
      ],
      timeline: [
        {
          title: "Use-case mapping",
          desc: "We pick the highest-volume chats/calls that waste staff time today.",
        },
        {
          title: "Agent build & scripts",
          desc: "Arabic/English flows for FAQs, booking, and handoff to humans.",
        },
        {
          title: "Connect your tools",
          desc: "Link calendar, CRM, or booking sheets so the agent can take real actions.",
        },
        {
          title: "Live pilot → scale",
          desc: "Soft launch with monitoring, then expand to more channels and cities.",
        },
      ],
      tech: ["WhatsApp Business API", "Voice AI / telephony", "LLM agents", "n8n / Make.com", "CRM hooks", "Human handoff rules"],
      roi: [
        { label: "Response time", value: "<1 min", note: "customers get instant replies 24/7" },
        { label: "Staff load cut", value: "40–70%", note: "fewer repetitive chats on your team" },
        { label: "Missed leads", value: "↓ sharp", note: "nights and weekends no longer go silent" },
        { label: "Payback window", value: "4–8 wk", note: "often after the first automation goes live" },
      ],
      why: [
        "We build agents that act inside your real tools — not chatbots that only give FAQ answers.",
        "Arabic-first quality, not English bots with weak translation.",
        "Designed for KSA peak seasons (Umrah, holidays) when inbox volume explodes.",
        "Clear escalation to humans so customers never feel abandoned.",
      ],
    },
    apps: {
      eyebrow: "Smart apps",
      headline: "Smart Business Apps",
      tagline: "AI apps your staff actually open every day — not another unused dashboard.",
      plain:
        "We build practical apps: a reception copilot, a RAG knowledge assistant that answers from your documents, or an industry app for clinics and law firms. Staff type a question — the app answers from your real data.",
      forWho: [
        "Teams that repeat the same answers all day",
        "Offices with SOPs and documents nobody can find fast",
        "Managers who want staff tools without training manuals",
      ],
      timeline: [
        {
          title: "Job-to-be-done workshop",
          desc: "We define one daily task the app must make 10× easier.",
        },
        {
          title: "Knowledge + UI build",
          desc: "Upload docs / connect data, then ship a clean Arabic-ready app.",
        },
        {
          title: "Pilot with real staff",
          desc: "A small group uses it daily; we fix friction immediately.",
        },
        {
          title: "Rollout & roles",
          desc: "Permissions, training, and expansion to more departments.",
        },
      ],
      tech: ["RAG / vector search", "LLM copilots", "Next.js apps", "Document ingestion", "Role-based access", "Arabic UX"],
      roi: [
        { label: "Answer speed", value: "Seconds", note: "vs minutes searching folders and chats" },
        { label: "Onboarding", value: "Faster", note: "new staff learn by asking the app" },
        { label: "Consistency", value: "↑", note: "same correct answers across the team" },
        { label: "Payback window", value: "2–4 mo", note: "when knowledge work is a daily bottleneck" },
      ],
      why: [
        "RAG grounded in your files — fewer hallucinations than generic ChatGPT for business.",
        "Built for non-tech staff: simple screens, Arabic support, role permissions.",
        "Industry-aware for clinics, law, and hospitality — not one generic chatbot skin.",
        "We measure usage. If people don’t open it, we fix it.",
      ],
    },
    pipelines: {
      eyebrow: "Insights",
      headline: "Live Reports & Insights",
      tagline: "Stop chasing Excel. See CRM, bookings, and tickets in one live view.",
      plain:
        "We connect your CRM, bookings, documents, and support tickets so leaders see what is happening today — sales, operations, and risks — without asking five people for updates.",
      forWho: [
        "Owners tired of late weekly spreadsheet reports",
        "Sales teams using CRM + WhatsApp with no single truth",
        "Ops managers who need live dashboards across branches",
      ],
      timeline: [
        {
          title: "Data map",
          desc: "We list sources (CRM, sheets, bookings) and the 5–7 metrics that matter.",
        },
        {
          title: "Connect & clean",
          desc: "Sync systems, fix duplicates, and define one trusted dataset.",
        },
        {
          title: "Dashboard live",
          desc: "Leaders get a simple Arabic/English dashboard on phone or desktop.",
        },
        {
          title: "Alerts & forecasts",
          desc: "Optional alerts and light forecasting when volume or risk spikes.",
        },
      ],
      tech: ["CRM sync (HubSpot & custom)", "ETL / data jobs", "Live dashboards", "PostgreSQL", "Automated reports", "Secure access"],
      roi: [
        { label: "Report time", value: "↓ 80%", note: "no more weekend spreadsheet hunting" },
        { label: "Decision speed", value: "Same day", note: "act on live numbers, not last month’s" },
        { label: "CRM hygiene", value: "↑", note: "cleaner pipeline and follow-up visibility" },
        { label: "Payback window", value: "2–3 mo", note: "when reporting currently eats manager hours" },
      ],
      why: [
        "We start from decisions you make weekly — not a 40-chart vanity BI project.",
        "CRM + ops together, because Saudi teams live in WhatsApp and CRM at once.",
        "Arabic-ready leadership views for owners who prefer clear numbers over jargon.",
        "Secure, practical architecture you can grow — without enterprise pricing theater.",
      ],
    },
    web: {
      eyebrow: "Websites",
      headline: "Web Development",
      tagline: "A premium Arabic-ready website that wins trust and turns visitors into calls.",
      plain:
        "Your website is often the first handshake with a customer. We build fast, modern sites that look professional, load quickly on mobile, and make it easy to book, call, or WhatsApp — in Arabic and English.",
      forWho: [
        "Law firms, clinics, and offices that need a trustworthy online presence",
        "Hotels and service companies that need bookings and inquiries",
        "Brands upgrading from outdated or template-looking sites",
      ],
      timeline: [
        {
          title: "Message & structure",
          desc: "We clarify what you sell, who you serve, and the one action visitors should take.",
        },
        {
          title: "Design & build",
          desc: "Premium UI, Arabic RTL, and mobile-first pages that feel local and modern.",
        },
        {
          title: "SEO & conversion",
          desc: "Speed, basic SEO, WhatsApp/call CTAs, and forms that actually get answered.",
        },
        {
          title: "Launch & train",
          desc: "Go live, analytics, and a simple way for your team to update content.",
        },
      ],
      tech: ["Next.js", "Tailwind CSS", "Arabic RTL", "Core Web Vitals", "SEO basics", "WhatsApp / form CTAs"],
      roi: [
        { label: "Trust signal", value: "Stronger", note: "visitors take you seriously in seconds" },
        { label: "Mobile speed", value: "Fast", note: "less bounce on Saudi mobile traffic" },
        { label: "Inquiries", value: "↑", note: "clear CTAs to call, book, or WhatsApp" },
        { label: "Payback window", value: "1–3 mo", note: "when the old site was losing leads" },
      ],
      why: [
        "Designed for KSA buyers: Arabic first, trust, and WhatsApp-ready conversion.",
        "Performance matters — pretty but slow sites lose customers.",
        "We write pages for non-tech visitors: clear offer, clear next step.",
        "Same team can later connect AI chat or booking — the site is not a dead end.",
      ],
    },
    voice: {
      eyebrow: "Voice & connect",
      headline: "Voice & Integration Layer",
      tagline: "Make phones, WhatsApp, CRM, and payments talk to each other.",
      plain:
        "AI is useless if it only chats. We connect your phone line, WhatsApp, CRM, and payment tools so an agent can book, update records, and trigger the next step automatically.",
      forWho: [
        "Businesses with too many tools that don’t sync",
        "Teams that re-enter the same customer data in 3 places",
        "Companies ready to let AI take real actions safely",
      ],
      timeline: [
        {
          title: "Integration audit",
          desc: "We list systems, gaps, and the highest-value connection first.",
        },
        {
          title: "Core connectors",
          desc: "Phone / WhatsApp ↔ CRM ↔ calendar or payments — stable and logged.",
        },
        {
          title: "Action rules",
          desc: "Define what AI may do alone vs what needs human approval.",
        },
        {
          title: "Monitor & expand",
          desc: "Watch failures, tighten security, then add more tools.",
        },
      ],
      tech: ["Telephony AI", "WhatsApp API", "CRM webhooks", "Payment hooks", "Event queues", "Audit logs"],
      roi: [
        { label: "Double entry", value: "↓", note: "customer data entered once, used everywhere" },
        { label: "Action rate", value: "↑", note: "AI closes loops instead of only chatting" },
        { label: "Support cost", value: "↓", note: "fewer “what is the status?” calls" },
        { label: "Payback window", value: "6–10 wk", note: "when tools are already paid for but disconnected" },
      ],
      why: [
        "We integrate for outcomes (booked, paid, updated) — not “API connected” theater.",
        "Safety rules and audit trails so AI actions stay trustworthy.",
        "KSA-ready stack choices that fit how local teams already work.",
        "One partner for agents + software + integrations — fewer vendor finger-pointing.",
      ],
    },
  },
};
