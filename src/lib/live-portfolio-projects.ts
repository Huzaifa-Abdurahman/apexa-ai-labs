import type { PortfolioProject } from "@/lib/portfolio-projects"

/** Live client builds with public URLs — shown first on /projects */
export const livePortfolioProjects: PortfolioProject[] = [
  {
    id: 101,
    slug: "leadenrich",
    name: "LeadEnrich",
    link: "https://scraper.huzaifa.pro/",
    category: "software",
    categoryLabel: "Software & tech",
    categoryLabelAr: "برمجيات وتقنية",
    description:
      "Premium AI-powered B2B SaaS for lead enrichment and scraping — product UI, conversion funnel, and a sharp enterprise brand.",
    descriptionAr:
      "منصة B2B سحابية مدعومة بالذكاء الاصطناعي لإثراء العملاء المحتملين والكشط — واجهة منتج ومسار تحويل وهوية مؤسساتية حادة.",
    image: "/leadenrich.PNG",
    featured: true,
    premium: true,
  },
  {
    id: 102,
    slug: "islamic-rag",
    name: "Islamic RAG",
    link: "https://islamicrag.tech/",
    category: "software",
    categoryLabel: "Software & tech",
    categoryLabelAr: "برمجيات وتقنية",
    description:
      "Premium Islamic RAG system with 85,000+ embeddings across Quran, Ahadith, and Fiqh — retrieval-grade AI for trusted Islamic knowledge.",
    descriptionAr:
      "نظام RAG إسلامي متميز بأكثر من 85 ألف تضمين عبر القرآن والأحاديث والفقه — ذكاء اصطناعي للاسترجاع الموثوق للمعرفة الإسلامية.",
    image: "/islamicrag--oIHV65a.png",
    featured: true,
    premium: true,
  },
  {
    id: 103,
    slug: "alibaad-quran-academy",
    name: "Alibaad Quran Academy",
    link: "http://alibaadquranacadmy.com/",
    category: "education",
    categoryLabel: "Education",
    categoryLabelAr: "تعليم",
    description:
      "Education platform for Quran learning — clear programs, enrollment intent, and a calm faith-first brand presence.",
    descriptionAr:
      "منصة تعليمية لتعلّم القرآن — برامج واضحة ونية تسجيل وحضور هادئ يرتكز على الهوية الإيمانية.",
    image: "/alibaad-xH13guzX.png",
    featured: true,
  },
  {
    id: 104,
    slug: "barakah-transport-service",
    name: "Barakah Transport Service",
    link: "https://barakahtransportservice.com/",
    category: "professional",
    categoryLabel: "Professional",
    categoryLabelAr: "خدمات مهنية",
    description:
      "Makkah, Saudi Arabia transportation company site — service clarity, trust signals, and easy booking/contact for pilgrims and travelers.",
    descriptionAr:
      "موقع شركة نقل في مكة المكرمة — وضوح الخدمات وإشارات ثقة وتواصل سهل للحجز للحجاج والمسافرين.",
    image: "/barakah-hC_Lgksy.png",
    featured: true,
  },
  {
    id: 105,
    slug: "techtronix",
    name: "Techtronix",
    link: "https://techtronix.org/",
    category: "professional",
    categoryLabel: "Professional",
    categoryLabelAr: "خدمات مهنية",
    description:
      "Civil engineering company website — authority-led project storytelling, services clarity, and a professional industrial brand.",
    descriptionAr:
      "موقع شركة هندسة مدنية — سرد مشاريع يعكس السلطة ووضوح الخدمات وهوية صناعية احترافية.",
    image: "/techtronix-YeCD7Qmt.png",
    featured: true,
  },
  {
    id: 106,
    slug: "punjab-soap",
    name: "Punjab Soap",
    link: "https://punjab-soap-sales-tracking.vercel.app/",
    category: "software",
    categoryLabel: "Software & tech",
    categoryLabelAr: "برمجيات وتقنية",
    description:
      "Sales tracking web app for a soap company — ops visibility, team workflows, and a clean internal product experience.",
    descriptionAr:
      "تطبيق ويب لتتبع مبيعات شركة صابون — رؤية تشغيلية وسير عمل للفريق وتجربة منتج داخلية نظيفة.",
    image: "/punjab-soap-2x7VeFTb.png",
    featured: true,
  },
]
