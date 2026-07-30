export type ChatLocale = "en" | "ar";

type Reply = { en: string; ar: string };

const knowledge: { match: RegExp; reply: Reply }[] = [
  {
    match: /hello|hi|hey|السلام|مرحبا|أهلا|اهلا/i,
    reply: {
      en: "Hello! I'm Apexa's AI assistant. I can help with our AI automations, custom software, WhatsApp/voice agents, and KSA city solutions. What do you need?",
      ar: "مرحباً! أنا مساعد أبيكسا الذكي. أساعدك حول الأتمتة والبرمجيات المخصصة ووكلاء واتساب/الصوت وحلول مدن المملكة. كيف أقدر أخدمك؟",
    },
  },
  {
    match: /service|what do you|offer|خدمات|ماذا تقدم|حلول/i,
    reply: {
      en: "We deliver: custom software (ERP/CRM), AI automations, AI apps, data pipelines, workflow automation, and voice + WhatsApp agents — Arabic-ready from our Makkah HQ.",
      ar: "نقدّم: برمجيات مخصصة (ERP/CRM)، أتمتة بالذكاء الاصطناعي، تطبيقات ذكية، أنابيب بيانات، سير عمل مؤتمت، ووكلاء صوت وواتساب — بدعم عربي من مقرنا في مكة.",
    },
  },
  {
    match: /makkah|madinah|jeddah|dammam|riyadh|مكة|المدينة|جدة|الدمام|الرياض|ksa|saudi|سعود/i,
    reply: {
      en: "We serve Makkah, Madinah, Jeddah, Dammam, and Riyadh only — with solutions mapped to each city's industries and peak seasons.",
      ar: "نخدم مكة والمدينة وجدة والدمام والرياض فقط — بحلول ملائمة لقطاعات كل مدينة ومواسم الذروة فيها.",
    },
  },
  {
    match: /whatsapp|voice|agent|واتساب|صوت|وكيل/i,
    reply: {
      en: "Our Arabic-ready voice & WhatsApp agents answer FAQs, book appointments, qualify leads, and take real actions in your CRM/ERP — not just chat.",
      ar: "وكلاؤنا الجاهزون للعربية (صوت وواتساب) يجيبون الأسئلة ويحجزون المواعيد ويؤهّلون العملاء وينفّذون إجراءات حقيقية في CRM/ERP — لا مجرد محادثة.",
    },
  },
  {
    match: /price|cost|pricing|سعر|تكلفة|أسعار/i,
    reply: {
      en: "Pricing depends on scope. Most clients start with a focused automation in weeks. Book a free consultation and we'll map a clear plan for your bottleneck.",
      ar: "التسعير يعتمد على النطاق. كثير من العملاء يبدأون بأتمتة مركّزة خلال أسابيع. احجز استشارة مجانية لنرسم خطة واضحة لاختناقك.",
    },
  },
  {
    match: /contact|book|call|consult|تواصل|احجز|استشار/i,
    reply: {
      en: "Happy to connect you. Open Contact to book a call, email info@apexaailabs.com or galaxysoftwarehub@gmail.com, or WhatsApp +92 345 156 9778 / +44 7449 703113 — our team replies quickly.",
      ar: "يسعدنا التواصل. افتح صفحة تواصل لحجز مكالمة، أو راسل info@apexaailabs.com أو galaxysoftwarehub@gmail.com، أو واتساب +92 345 156 9778 / +44 7449 703113 — فريقنا يرد بسرعة.",
    },
  },
  {
    match: /umrah|hotel|clinic|hospital|logistics|industri|عمرة|فندق|عياد|لوجست|صناع/i,
    reply: {
      en: "We specialize in pain-first solutions for Umrah/hotels, clinics, logistics, manufacturing, law, and retail. Visit Industries to explore your sector.",
      ar: "نتخصص في حلول تبدأ بالألم لوكالات العمرة/الفنادق والعيادات واللوجستيات والتصنيع والمحاماة والتجزئة. زر صفحة القطاعات لاستكشاف قطاعك.",
    },
  },
];

const fallback: Reply = {
  en: "Great question. Apexa AI Labs builds custom software and AI systems for Saudi businesses from Makkah. Ask about services, cities, WhatsApp AI, or say “contact” to reach the team.",
  ar: "سؤال ممتاز. أبيكسا تبني برمجيات وذكاء اصطناعي لأعمال المملكة من مكة. اسأل عن الخدمات أو المدن أو واتساب الذكي، أو قل «تواصل» للوصول للفريق.",
};

export function getBotReply(input: string, locale: ChatLocale): string {
  const hit = knowledge.find((k) => k.match.test(input));
  const reply = hit?.reply ?? fallback;
  return locale === "ar" ? reply.ar : reply.en;
}
