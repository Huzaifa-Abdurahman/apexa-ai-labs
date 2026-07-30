import fs from "fs"

const csv = fs
  .readFileSync("public/portfolio/portfolio.csv", "utf8")
  .trim()
  .split(/\r?\n/)
  .slice(1)

function slugify(s) {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
}

function parseCsvLine(line) {
  const parts = []
  let cur = ""
  let inQ = false
  for (let i = 0; i < line.length; i++) {
    const c = line[i]
    if (c === '"') {
      inQ = !inQ
      continue
    }
    if (c === "," && !inQ) {
      parts.push(cur)
      cur = ""
      continue
    }
    cur += c
  }
  parts.push(cur)
  return parts
}

function categorize(name) {
  const n = name.toLowerCase()
  if (
    /shop|store|bags|outfits|headphone|vseebox|superboxx|arcticfit|fury|quirky|dressing|ninja|kukon|homs|hijab|transfers|thoppia|revon|nulife|rosh/.test(
      n
    )
  )
    return "ecommerce"
  if (
    /journal|scopus|publication|ghostwrit|publisher|book|kindle|novelle|mczell|emerald|scie|esci|ssci|sci journal/.test(
      n
    )
  )
    return "publishing"
  if (/medical|aesthetics|senior care|medinsight|clarivive|results medical/.test(n))
    return "healthcare"
  if (/hotel|inn|travel|pack|getaway|buffet|dock|barblu|pompano|yamm/.test(n))
    return "hospitality"
  if (
    /construction|electric|plumb|fence|drywall|paint|landscape|irrigat|tree|towing|elevator|assembly|carpet|cleaning|handy|lawn|deck|remodel|underground|sloan|blair|miracle|dunn|bluecat|rlb|legacy|land stone|eme|evengreen|city painting|jd handy|precision/.test(
      n
    )
  )
    return "trades"
  if (/academy|learning|elevara|izi|driving/.test(n)) return "education"
  if (
    /news|khaleej|visa|consultant|consumer help|partners work|bishop|krista|muhammad hasan|amy b|skins|hafizabad|ag1/.test(
      n
    )
  )
    return "professional"
  if (/chef/.test(n)) return "food"
  if (
    /tech|code|digital|solution|consol|nexovia|zevi|krnl|link|ebone|alpha|seo|buzzline|madiha|quantum|techariba|techlab|vantrex|fusion|wreck|page one|innovations|logistics|clarivive/.test(
      n
    )
  )
    return "software"
  return "websites"
}

const blurbs = {
  ecommerce:
    "Storefront built to sell — clean product pages, fast checkout paths, and a brand look that earns trust.",
  publishing:
    "Content platform designed for credibility — clear offers, author trust signals, and conversion-ready service pages.",
  healthcare:
    "Patient-facing site with calm UX — services clarity, inquiry paths, and a premium clinical brand presence.",
  hospitality:
    "Guest-ready web experience — booking intent, destination storytelling, and mobile-first conversion.",
  trades:
    "Local-service website that wins calls — strong CTAs, service proof, and a look that feels established.",
  education:
    "Learning brand online — course clarity, enrollment intent, and a modern academy presence.",
  professional:
    "Professional brand site — authority-first layout, clear services, and easy contact for high-intent leads.",
  food: "Food brand experience — appetite-led visuals, menu clarity, and reservation or order intent.",
  software:
    "Product-grade digital presence — sharp messaging, modern UI, and a funnel that turns visitors into demos.",
  websites:
    "Custom website crafted to convert — premium design, clear story, and performance that feels instant.",
}

const arBlurbs = {
  ecommerce:
    "متجر إلكتروني جاهز للبيع — صفحات منتجات واضحة ومسار شراء سريع وهوية تبني الثقة.",
  publishing:
    "منصة محتوى تبني المصداقية — عروض واضحة وإشارات ثقة ومسارات تحويل للخدمات.",
  healthcare: "موقع طبي هادئ وواضح — خدمات مفهومة ومسار تواصل ومظهر عيادي راقٍ.",
  hospitality: "تجربة ويب للضيوف — نية حجز وقصة وجهة وتصميم أولاً للجوال.",
  trades: "موقع خدمات محلية يجلب المكالمات — دعوات واضحة وإثبات عمل ومظهر احترافي.",
  education: "حضور أكاديمي حديث — وضوح الدورات ونية التسجيل وهوية تعليمية قوية.",
  professional: "موقع احترافي يعكس السلطة — خدمات واضحة وتواصل سهل لعملاء جادين.",
  food: "تجربة علامة غذائية — صور جذابة ووضوح القائمة ونية طلب أو حجز.",
  software:
    "حضور رقمي بمستوى المنتج — رسالة حادة وواجهة حديثة ومسار نحو العرض التجريبي.",
  websites: "موقع مخصص للتحويل — تصميم راقٍ وقصة واضحة وأداء سريع.",
}

const cats = {
  ecommerce: { en: "E-commerce", ar: "تجارة إلكترونية" },
  publishing: { en: "Publishing", ar: "نشر ومحتوى" },
  healthcare: { en: "Healthcare", ar: "رعاية صحية" },
  hospitality: { en: "Hospitality", ar: "ضيافة وسفر" },
  trades: { en: "Local services", ar: "خدمات محلية" },
  education: { en: "Education", ar: "تعليم" },
  professional: { en: "Professional", ar: "خدمات مهنية" },
  food: { en: "Food & dining", ar: "أغذية ومطاعم" },
  software: { en: "Software & tech", ar: "برمجيات وتقنية" },
  websites: { en: "Websites", ar: "مواقع" },
}

const projects = csv.map((line) => {
  const [number, name, link, , image_filename] = parseCsvLine(line)
  const category = categorize(name)
  const slug = slugify(name) || `project-${number}`
  return {
    id: Number(number),
    slug,
    name: name.trim(),
    link: (link || "").trim(),
    category,
    categoryLabel: cats[category].en,
    categoryLabelAr: cats[category].ar,
    description: blurbs[category],
    descriptionAr: arBlurbs[category],
    image: `/portfolio/portfolio_images/${image_filename.trim()}`,
  }
})

const counts = Object.fromEntries(
  Object.keys(cats).map((k) => [k, projects.filter((p) => p.category === k).length])
)

const out = `export type PortfolioCategory =
  | "ecommerce"
  | "publishing"
  | "healthcare"
  | "hospitality"
  | "trades"
  | "education"
  | "professional"
  | "food"
  | "software"
  | "websites"

export type PortfolioProject = {
  id: number
  slug: string
  name: string
  link: string
  category: PortfolioCategory
  categoryLabel: string
  categoryLabelAr: string
  description: string
  descriptionAr: string
  image: string
}

export const portfolioProjects: PortfolioProject[] = ${JSON.stringify(projects, null, 2)}

export const portfolioCategories = [
  { id: "all" as const, label: "All projects", labelAr: "كل المشاريع" },
  { id: "software" as const, label: "Software & tech", labelAr: "برمجيات وتقنية" },
  { id: "ecommerce" as const, label: "E-commerce", labelAr: "تجارة إلكترونية" },
  { id: "trades" as const, label: "Local services", labelAr: "خدمات محلية" },
  { id: "publishing" as const, label: "Publishing", labelAr: "نشر ومحتوى" },
  { id: "hospitality" as const, label: "Hospitality", labelAr: "ضيافة وسفر" },
  { id: "healthcare" as const, label: "Healthcare", labelAr: "رعاية صحية" },
  { id: "professional" as const, label: "Professional", labelAr: "خدمات مهنية" },
  { id: "education" as const, label: "Education", labelAr: "تعليم" },
  { id: "food" as const, label: "Food & dining", labelAr: "أغذية ومطاعم" },
  { id: "websites" as const, label: "Websites", labelAr: "مواقع" },
] as const

export function getPortfolioProject(slug: string) {
  return portfolioProjects.find((p) => p.slug === slug)
}
`

fs.writeFileSync("src/lib/portfolio-projects.ts", out)
console.log("wrote", projects.length, "projects", counts)
