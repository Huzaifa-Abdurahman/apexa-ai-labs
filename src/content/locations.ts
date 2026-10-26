export type LocationFaq = { q: string; a: string };

export type LocationPage = {
  slug: string;
  city: string;
  title: string;
  description: string;
  h1: string;
  intro: string;
  sectors: string[];
  faqs: LocationFaq[];
};

export const LOCATION_PAGES: LocationPage[] = [
  {
    slug: "london",
    city: "London",
    title: "AI Software Development in London | Apexa AI Labs",
    description:
      "AI automation, WhatsApp and voice agents, and custom software for London businesses. UK GDPR checks are scoped in from the first meeting.",
    h1: "AI software development in London",
    intro:
      "Apexa AI Labs is headquartered in London. We build AI automations, WhatsApp and voice agents, and custom software for businesses that run on bookings, enquiries and systems that do not talk to each other. Every project starts with a written scope that covers what data is collected, where it is stored and who signs off the data terms.",
    sectors: [
      "Hospitality and hotels",
      "Clinics and healthcare providers",
      "Logistics and transport",
      "Professional services and law firms",
      "Retail and e-commerce",
    ],
    faqs: [
      {
        q: "Are you based in London?",
        a: "Yes. Apexa AI Labs is headquartered in London. We also work with clients across the UK, including Manchester and Birmingham, and in the USA.",
      },
      {
        q: "How do you handle UK GDPR for AI chatbots and WhatsApp agents?",
        a: "We check the data flow, notices, retention and vendor contracts before anything goes live. Our guide to UK GDPR and AI chatbots sets out the steps we take.",
      },
      {
        q: "Can an AI agent run on WhatsApp for my business?",
        a: "Yes, for business automation such as bookings, enquiries and order updates. Meta's WhatsApp Business rules no longer allow general-purpose AI chatbots, so we scope every agent to a defined business use. Read our guide to WhatsApp AI agent rules for UK businesses.",
      },
    ],
  },
  {
    slug: "miami",
    city: "Miami",
    title: "AI Software and Automation for Miami Businesses | Apexa AI Labs",
    description:
      "AI automation, voice and WhatsApp agents, and custom software for Miami businesses. Apexa AI Labs is headquartered in London and works with US clients remotely.",
    h1: "AI software and automation for Miami businesses",
    intro:
      "Apexa AI Labs is headquartered in London and works with clients in the USA, including Miami. We build AI automations, voice and WhatsApp agents, and custom software for Miami businesses. Projects are delivered remotely, and each one is scoped in writing before any build starts, including where data is stored and who can access it.",
    sectors: [
      "Clinics and healthcare providers, with a HIPAA requirements review first",
      "Hospitality and tourism operators",
      "Logistics, import and export",
      "Professional services and law firms",
      "Retail and e-commerce",
    ],
    faqs: [
      {
        q: "Do you have an office in Miami?",
        a: "No. We are headquartered in London and serve Miami clients remotely. We do not list a Miami address.",
      },
      {
        q: "Do you deliver in Spanish?",
        a: "Our delivery languages are English and Arabic. We can discuss Spanish-language needs during scoping, but Spanish delivery is not a standard service yet.",
      },
      {
        q: "Can you build systems that handle patient information?",
        a: "Healthcare projects start with a HIPAA requirements review. Whether a business associate agreement is needed, and what it covers, is agreed in writing before any patient data is used. Read our guide to AI voice agents for clinics.",
      },
    ],
  },
];

export function getLocationPage(slug: string): LocationPage | undefined {
  return LOCATION_PAGES.find((page) => page.slug === slug);
}
