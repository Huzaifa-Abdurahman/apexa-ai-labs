export type LegalBlock = {
  title?: string
  paragraphs?: string[]
  bullets?: string[]
}

export type LegalSection = {
  id: string
  title: string
  paragraphs?: string[]
  bullets?: string[]
  paragraphsAfter?: string[]
  blocks?: LegalBlock[]
}

export type LegalDoc = {
  slug: "privacy" | "terms" | "cookies"
  title: string
  effectiveDate: string
  lastUpdated: string
  intro: string
  sections: LegalSection[]
  contactHeading: string
  contactBody: string
}

export const legalEn = {
  privacy: {
    slug: "privacy",
    title: "Privacy Policy",
    effectiveDate: "31 July 2026",
    lastUpdated: "31 July 2026",
    intro:
      "This Privacy Policy explains how Apexa AI Labs (“Apexa”, “we”, “us”, or “our”) collects, uses, stores, shares, and protects personal data when you visit apexa.ai, contact us, or use our software, AI, automation, and related services. We designed this Policy to meet international privacy expectations and the Personal Data Protection Law of the Kingdom of Saudi Arabia (PDPL) issued by Royal Decree No. (M/19) dated 9/2/1443H, as amended, together with implementing regulations and guidance from the Saudi Data & AI Authority (SDAIA) / National Data Management Office.",
    sections: [
      {
        id: "who",
        title: "1. Who we are (data controller)",
        paragraphs: [
          "Apexa AI Labs is a Dubai-based AI and custom software company serving businesses across multiple markets and, where agreed, international clients.",
          "For personal data processed through this website and our client engagements, Apexa AI Labs is the data controller unless a written agreement states that we act only as a processor on behalf of a client.",
        ],
        bullets: [
          "Legal name (trading): Apexa AI Labs",
          "Headquarters: Dubai, UAE · London, UK",
          "Email (privacy & data requests): info@apexaailabs.com",
          "WhatsApp business contact: +44 7449 703113",
          "Website: https://apexa.ai",
        ],
      },
      {
        id: "scope",
        title: "2. Scope of this Policy",
        paragraphs: [
          "This Policy applies to personal data processed in connection with our website, marketing communications, discovery calls, proposals, contracts, support channels, demos, and products we operate. It does not cover third-party websites or services that we do not control, even if linked from our site.",
          "Where we provide software or AI systems to a business customer, that customer typically decides the purposes of processing end-user or employee data inside their environment. In those cases, our processing is governed by the customer agreement and applicable data processing terms.",
        ],
      },
      {
        id: "data",
        title: "3. Personal data we collect",
        paragraphs: [
          "We collect only what is reasonably necessary for the stated purpose (data minimization).",
        ],
        blocks: [
          {
            title: "A. Identity & contact data",
            bullets: [
              "Name, job title, company name, city/country",
              "Email address, phone/WhatsApp number",
              "Preferred language (Arabic / English)",
            ],
          },
          {
            title: "B. Business enquiry & project data",
            bullets: [
              "Industry, operational pain points, and requirements you share",
              "Meeting notes, proposals, statements of work, and correspondence",
              "Billing and contracting details needed to perform the engagement",
            ],
          },
          {
            title: "C. Technical & usage data",
            bullets: [
              "IP address, browser type, device/OS signals, approximate location derived from IP",
              "Pages visited, referring URL, timestamps, and interaction events",
              "Cookie and similar technology identifiers (see Cookie Policy)",
            ],
          },
          {
            title: "D. Communications",
            bullets: [
              "Messages sent via forms, email, WhatsApp, or chat widgets",
              "Support tickets and call summaries when you request assistance",
            ],
          },
        ],
      },
      {
        id: "sensitive",
        title: "4. Sensitive personal data",
        paragraphs: [
          "We do not intentionally collect sensitive personal data (as defined under the PDPL) through our public website. Please do not submit health, biometric, religious, criminal, or similarly sensitive data unless we expressly request it under a written engagement with appropriate safeguards.",
          "If a client engagement requires processing sensitive data inside a custom system, we will document the lawful basis, purpose limitation, access controls, and security measures in the contract.",
        ],
      },
      {
        id: "sources",
        title: "5. How we obtain data",
        bullets: [
          "Directly from you (forms, email, WhatsApp, calls, meetings)",
          "Automatically via cookies and similar technologies when you use our website",
          "From your organization when it designates you as a contact",
          "From publicly available business sources or referrals, where lawful",
        ],
      },
      {
        id: "purposes",
        title: "6. Why we process personal data (purposes)",
        paragraphs: [
          "We process personal data for transparent, specific purposes, including:",
        ],
        bullets: [
          "Responding to enquiries and providing consultations",
          "Preparing proposals, contracts, and delivering services",
          "Operating, securing, and improving our website and products",
          "Sending service-related notices and, where permitted, marketing updates",
          "Analytics to understand demand and improve content (with appropriate consent/controls where required)",
          "Complying with Saudi law, responding to lawful requests, and protecting our legal rights",
          "Preventing fraud, abuse, and security incidents",
        ],
      },
      {
        id: "legal-bases",
        title: "7. Legal bases (PDPL & international alignment)",
        paragraphs: [
          "Depending on the context, we rely on one or more of the following bases recognized under the PDPL and aligned with international practice:",
        ],
        bullets: [
          "Consent — where you opt in (for example, non-essential cookies or certain marketing)",
          "Contractual necessity — to take steps at your request before a contract or to perform a contract",
          "Legitimate interest — improving services, securing systems, and B2B relationship management, balanced against your rights",
          "Legal obligation — where Saudi or other applicable law requires retention or disclosure",
        ],
        paragraphsAfter: [
          "Where consent is the basis, you may withdraw it at any time without affecting the lawfulness of processing before withdrawal.",
        ],
      },
      {
        id: "sharing",
        title: "8. Sharing and disclosure",
        paragraphs: [
          "We do not sell personal data. We may share personal data only with:",
        ],
        bullets: [
          "Service providers (hosting, email, analytics, communications) under confidentiality and processing instructions",
          "Professional advisers (legal, accounting) under duty of confidentiality",
          "Authorities when required by Saudi law or a valid legal process",
          "Business successors in a merger, acquisition, or restructuring, with continued protection",
        ],
        paragraphsAfter: [
          "We require processors to implement appropriate security and to process data only for agreed purposes.",
        ],
      },
      {
        id: "transfers",
        title: "9. Cross-border transfers",
        paragraphs: [
          "As a Saudi-focused provider, we prefer processing and hosting arrangements that support Kingdom data considerations. Some tools (for example global cloud or analytics providers) may involve transfer or remote access outside Saudi Arabia.",
          "Where personal data is transferred outside the Kingdom, we take steps consistent with the PDPL and SDAIA guidance — including assessing the destination, using contractual safeguards, and applying technical and organizational measures appropriate to the risk.",
        ],
      },
      {
        id: "retention",
        title: "10. Retention",
        paragraphs: [
          "We keep personal data only as long as needed for the purposes above, including:",
        ],
        bullets: [
          "Enquiry records: typically up to 24 months after last meaningful contact, unless a longer period is needed for a live opportunity or dispute",
          "Contract and billing records: for the engagement term plus periods required by Saudi commercial/tax rules",
          "Website logs and security records: for shorter operational windows unless investigating an incident",
          "Marketing preferences: until you unsubscribe or we delete inactive contacts",
        ],
        paragraphsAfter: [
          "When retention ends, we delete or irreversibly anonymize data where feasible.",
        ],
      },
      {
        id: "security",
        title: "11. Security measures",
        paragraphs: [
          "We apply technical and organizational measures appropriate to the nature of the data and processing risk, including access controls, encryption in transit where standard, least-privilege practices, vendor diligence, and staff awareness. No method of transmission or storage is 100% secure; we work to reduce risk continuously and to respond promptly to incidents.",
          "If a personal data breach occurs that requires notification under the PDPL or related rules, we will notify the competent authority and affected individuals as required.",
        ],
      },
      {
        id: "rights",
        title: "12. Your rights under Saudi PDPL",
        paragraphs: [
          "Subject to legal exceptions, you may request to:",
        ],
        bullets: [
          "Be informed about processing of your personal data",
          "Access your personal data",
          "Request correction of inaccurate or incomplete data",
          "Request destruction of data no longer needed (subject to lawful retention)",
          "Withdraw consent where processing is consent-based",
          "Object to certain processing in circumstances provided by law",
          "Lodge a complaint with the competent Saudi authority (SDAIA / relevant supervisory channel)",
        ],
        paragraphsAfter: [
          "To exercise rights, email info@apexaailabs.com with the subject “PDPL Data Request”. We may need to verify your identity before responding. We aim to respond within the timeframes required by applicable law.",
        ],
      },
      {
        id: "children",
        title: "13. Children",
        paragraphs: [
          "Our website and services are directed to businesses and professionals. We do not knowingly collect personal data from children. If you believe a child provided data to us, contact us and we will take appropriate steps to delete it.",
        ],
      },
      {
        id: "ai",
        title: "14. AI systems and automated processing",
        paragraphs: [
          "Apexa builds and deploys AI agents, chatbots, voice systems, and analytics for clients. When those systems process personal data:",
        ],
        bullets: [
          "Client-controlled deployments typically treat the client as controller and Apexa as processor under contract",
          "We design for purpose limitation, human oversight options, and secure configuration",
          "We do not use your private project data to train public models unless a written agreement expressly allows it",
        ],
      },
      {
        id: "changes",
        title: "15. Changes to this Policy",
        paragraphs: [
          "We may update this Privacy Policy to reflect legal, technical, or business changes. The “Last updated” date will change when we publish a revision. Material changes may be highlighted on the website or communicated to active clients where appropriate.",
        ],
      },
    ],
    contactHeading: "Contact for privacy matters",
    contactBody:
      "Apexa AI Labs — Makkah, Kingdom of Saudi Arabia. Email: info@apexaailabs.com. WhatsApp: +92 345 156 9778. For data subject requests, please include enough detail for us to locate your records.",
  } satisfies LegalDoc,

  terms: {
    slug: "terms",
    title: "Terms & Conditions",
    effectiveDate: "31 July 2026",
    lastUpdated: "31 July 2026",
    intro:
      "These Terms & Conditions (“Terms”) govern access to and use of the Apexa AI Labs website (https://apexa.ai) and form the baseline commercial and legal framework for our consulting, custom software, AI agents, automations, websites, and related services. By using our website or engaging our services, you agree to these Terms. Separate statements of work (SOWs), proposals, or master service agreements may add or modify project-specific terms.",
    sections: [
      {
        id: "parties",
        title: "1. Parties and acceptance",
        paragraphs: [
          "“Apexa”, “we”, or “us” means Apexa AI Labs, headquartered in Makkah, Kingdom of Saudi Arabia. “You” means the individual browsing the site or the business entity entering into a service engagement.",
          "If you accept on behalf of a company, you represent that you have authority to bind that company.",
        ],
      },
      {
        id: "services",
        title: "2. Services",
        paragraphs: [
          "Apexa provides, among other offerings: custom software development; AI agents and automations (including WhatsApp and voice); smart business applications; data pipelines and reporting; websites and digital products; and related consulting and enablement.",
          "Website content is informational and does not itself create a binding engagement until both parties accept a proposal, SOW, or contract.",
        ],
      },
      {
        id: "accounts",
        title: "3. Website use and acceptable conduct",
        paragraphs: [
          "You agree to use the website lawfully and not to:",
        ],
        bullets: [
          "Attempt unauthorized access, scanning, scraping beyond reasonable indexing, or disruption of the site",
          "Upload malware or abusive content",
          "Misrepresent your identity or affiliation",
          "Use the site in violation of Saudi law, including cybercrime and anti-spam rules",
        ],
      },
      {
        id: "proposals",
        title: "4. Proposals, timelines, and changes",
        paragraphs: [
          "Estimates, demos, and roadmaps are good-faith indications based on information you provide. Final scope, fees, milestones, and acceptance criteria are set in writing.",
          "Changes requested after kickoff may affect timeline and fees. We will document material change requests before performing out-of-scope work.",
        ],
      },
      {
        id: "fees",
        title: "5. Fees, invoices, and taxes",
        paragraphs: [
          "Fees are as stated in the applicable proposal or SOW. Unless otherwise agreed, invoices are payable within the stated period. Late payments may pause work and accrue lawful late charges where permitted.",
          "Prices may be exclusive of VAT or other taxes applicable under Saudi law. You are responsible for taxes that apply to your purchase except taxes based on our income.",
        ],
      },
      {
        id: "client",
        title: "6. Your responsibilities",
        paragraphs: [
          "You agree to provide timely access, content, decisions, credentials, and approvals needed for delivery; ensure you have rights to materials you supply; and use deliverables in compliance with law and third-party licenses.",
        ],
      },
      {
        id: "ip",
        title: "7. Intellectual property",
        paragraphs: [
          "Pre-existing tools, libraries, frameworks, prompts, accelerators, and know-how of Apexa remain our property. Upon full payment, and unless otherwise agreed in writing, you receive ownership or a license to project-specific deliverables as defined in the SOW.",
          "Open-source components remain subject to their licenses. You must not remove proprietary notices from materials we provide for evaluation.",
        ],
      },
      {
        id: "ai",
        title: "8. AI outputs and disclaimers",
        paragraphs: [
          "AI systems can produce incorrect, incomplete, or biased outputs. You are responsible for reviewing AI-assisted results before relying on them for legal, medical, financial, safety-critical, or high-impact decisions.",
          "Unless a SOW expressly includes warranties for a specific accuracy SLA, AI features are provided on a commercially reasonable efforts basis.",
        ],
      },
      {
        id: "confidentiality",
        title: "9. Confidentiality",
        paragraphs: [
          "Each party must protect the other’s non-public business information with reasonable care and use it only for the engagement, except where disclosure is required by law or already public through no fault of the receiving party.",
        ],
      },
      {
        id: "privacy",
        title: "10. Privacy and data protection",
        paragraphs: [
          "Personal data is handled as described in our Privacy Policy and Cookie Policy. For client systems processing personal data, the parties will allocate controller/processor roles and implement PDPL-aligned safeguards in the contract.",
        ],
      },
      {
        id: "warranty",
        title: "11. Warranties",
        paragraphs: [
          "We warrant that services will be performed in a professional and workmanlike manner consistent with industry practice for similar KSA technology engagements. Except as expressly stated in a signed agreement, the website and services are provided “as is” to the fullest extent permitted by law.",
        ],
      },
      {
        id: "liability",
        title: "12. Limitation of liability",
        paragraphs: [
          "To the maximum extent permitted under the laws of the Kingdom of Saudi Arabia, Apexa is not liable for indirect, incidental, special, consequential, or lost-profit damages arising from website use or services, even if advised of the possibility.",
          "Except for liability that cannot be limited by law (such as proven fraud or willful misconduct), our aggregate liability for a claim relating to a paid engagement is limited to the fees paid to Apexa for that engagement in the three (3) months preceding the claim.",
        ],
      },
      {
        id: "indemnity",
        title: "13. Indemnity",
        paragraphs: [
          "You agree to indemnify Apexa against third-party claims arising from materials you provide, unlawful use of deliverables, or your breach of these Terms, except to the extent caused by our proven negligence or willful misconduct.",
        ],
      },
      {
        id: "suspension",
        title: "14. Suspension and termination",
        paragraphs: [
          "We may suspend website access for security or abuse. Either party may terminate an engagement as provided in the SOW. On termination, you pay for work performed and approved expenses; licenses and IP transfer follow the SOW and payment status.",
        ],
      },
      {
        id: "law",
        title: "15. Governing law and disputes",
        paragraphs: [
          "These Terms are governed by the laws of the Kingdom of Saudi Arabia. Courts in Makkah (or another Saudi venue agreed in writing) have exclusive jurisdiction, without prejudice to mandatory consumer protections that may apply to eligible individuals under Saudi law.",
          "Parties should first attempt good-faith negotiation. Nothing prevents either party from seeking urgent injunctive relief to protect IP or confidential information.",
        ],
      },
      {
        id: "general",
        title: "16. General",
        bullets: [
          "If any provision is unenforceable, the remainder stays in effect",
          "Failure to enforce a right is not a waiver",
          "These Terms plus applicable SOWs are the entire agreement on their subject, superseding prior discussions",
          "We may update website Terms by posting a new version; continued use after the effective date constitutes acceptance for website use. Active client contracts change only by written agreement",
        ],
      },
    ],
    contactHeading: "Questions about these Terms",
    contactBody:
      "Contact Apexa AI Labs at info@apexaailabs.com or WhatsApp +92 345 156 9778. Makkah, Kingdom of Saudi Arabia.",
  } satisfies LegalDoc,

  cookies: {
    slug: "cookies",
    title: "Cookie Policy",
    effectiveDate: "31 July 2026",
    lastUpdated: "31 July 2026",
    intro:
      "This Cookie Policy explains how Apexa AI Labs uses cookies and similar technologies on https://apexa.ai. It should be read with our Privacy Policy and is designed to align with Saudi PDPL transparency expectations and widely recognized international cookie practices (including consent for non-essential cookies).",
    sections: [
      {
        id: "what",
        title: "1. What are cookies?",
        paragraphs: [
          "Cookies are small text files stored on your device when you visit a website. Similar technologies include local storage, pixels, and scripts that remember preferences or measure usage.",
        ],
      },
      {
        id: "why",
        title: "2. Why we use cookies",
        bullets: [
          "Operate core site features securely",
          "Remember language and basic preferences",
          "Understand traffic and improve content (analytics)",
          "Support marketing measurement where enabled",
        ],
      },
      {
        id: "types",
        title: "3. Types of cookies we use",
        blocks: [
          {
            title: "Strictly necessary",
            paragraphs: [
              "Required for security, load balancing, consent storage, and core navigation. These generally do not require consent under international practice, but we still disclose them.",
            ],
          },
          {
            title: "Functional / preference",
            paragraphs: [
              "Remember choices such as language (Arabic/English) or UI preferences to improve your experience.",
            ],
          },
          {
            title: "Analytics / performance",
            paragraphs: [
              "Help us understand which pages are useful, diagnose errors, and improve the site. Where required, we enable these only with consent or equivalent lawful configuration.",
            ],
          },
          {
            title: "Marketing (if enabled)",
            paragraphs: [
              "May be used to measure campaign effectiveness. We will not use non-essential marketing cookies without an appropriate consent mechanism where required.",
            ],
          },
        ],
      },
      {
        id: "duration",
        title: "4. Session vs persistent",
        bullets: [
          "Session cookies expire when you close the browser",
          "Persistent cookies remain for a set period or until deleted",
        ],
      },
      {
        id: "third",
        title: "5. Third-party cookies",
        paragraphs: [
          "Some cookies may be set by trusted providers (for example analytics, hosting, or embedded media). Those providers process data under their own policies. We select vendors with security and privacy diligence appropriate to a Saudi-focused business.",
        ],
      },
      {
        id: "consent",
        title: "6. Consent and control",
        paragraphs: [
          "You can control cookies through:",
        ],
        bullets: [
          "Our cookie preference controls (when displayed on the site)",
          "Your browser settings (block, delete, or alert on cookies)",
          "Opt-out tools offered by analytics/advertising providers where applicable",
        ],
        paragraphsAfter: [
          "Blocking strictly necessary cookies may break parts of the site. Withdrawing consent for analytics/marketing cookies will not affect the lawfulness of prior processing.",
        ],
      },
      {
        id: "ksa",
        title: "7. Saudi Arabia considerations",
        paragraphs: [
          "We treat cookie identifiers that can reasonably identify a person as personal data under the PDPL when applicable. We aim for clear notice, purpose limitation, and user choice for non-essential cookies, consistent with SDAIA expectations for transparent processing.",
        ],
      },
      {
        id: "updates",
        title: "8. Updates",
        paragraphs: [
          "We may update this Cookie Policy when our technologies or legal requirements change. Check the “Last updated” date on this page.",
        ],
      },
    ],
    contactHeading: "Cookie & privacy contact",
    contactBody:
      "Questions about cookies or privacy: info@apexaailabs.com · WhatsApp +92 345 156 9778 · Apexa AI Labs, Makkah, KSA.",
  } satisfies LegalDoc,
} as const
