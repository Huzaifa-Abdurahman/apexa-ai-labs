export type BlogSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  category: string;
  /** Search phrases this article is written to answer. Used for on-page copy and internal review, not meta keywords. */
  targetQueries: string[];
  intro: string;
  sections: BlogSection[];
  closing: string;
  disclaimer?: string;
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "uk-gdpr-ai-chatbot-checklist",
    title: "UK GDPR and AI Chatbots: A Pre-Launch Checklist",
    description:
      "What UK businesses should check before launching an AI chatbot on their website or WhatsApp: personal data, notices, DPIAs, hosting location and vendor contracts.",
    publishedAt: "2026-10-26",
    category: "Compliance",
    targetQueries: [
      "UK GDPR compliant AI chatbot",
      "AI chatbot GDPR UK",
      "chatbot data protection UK business",
    ],
    intro:
      "An AI chatbot feels like a simple website feature. The moment a visitor types a name, an email address or a booking request, though, the chatbot is processing personal data, and UK GDPR applies. This checklist covers the steps we check before a chatbot goes live. It is general information, not legal advice.",
    sections: [
      {
        heading: "Why a chatbot counts as personal data processing",
        paragraphs: [
          "UK GDPR covers any information that identifies a living person. A chat transcript that includes a name, phone number, address or appointment request is personal data, even if the chatbot itself is not designed to store anything long term. The conversation is still collected, processed and usually stored somewhere by a system you chose.",
          "That means the normal duties apply: you need a lawful basis, you need to be transparent, you need to keep data secure, and people have rights over their data.",
        ],
      },
      {
        heading: "Step 1: map what the chatbot collects and where it goes",
        paragraphs: [
          "Before you write any policy, draw the data flow. Start with the visitor's first message and follow it through every system it touches: the chatbot platform, the AI model provider, your CRM, email tools, analytics and logs.",
          "For each stop, write down what is stored, for how long, who can access it and where the servers are. Most compliance problems we see come from a system nobody remembered, such as debug logs that keep full transcripts.",
        ],
      },
      {
        heading: "Step 2: tell people what happens to their messages",
        paragraphs: [
          "Visitors should see a short notice before they type anything personal. It needs to say that they are talking to an AI, what the chat is used for, how long the conversation is kept, and how to ask for deletion or a human.",
          "A line buried in a privacy policy that nobody opens does not meet this standard. Put the notice in the chat window, in plain words, and link to the full policy for detail.",
        ],
      },
      {
        heading: "Step 3: decide whether you need a DPIA",
        paragraphs: [
          "A Data Protection Impact Assessment (DPIA) is a written risk assessment. Practitioners who summarise the ICO's AI guidance note that a DPIA is needed in most cases where AI processes personal data. The DPIA should record why the processing is necessary and whether a less risky design could achieve the same goal.",
          "Check the ICO's own AI guidance for the current wording before you rely on this, because the ICO's main AI guidance was last substantively updated in 2023.",
        ],
      },
      {
        heading: "Step 4: check hosting and transfers",
        paragraphs: [
          "Ask every vendor where data is stored and processed. Some providers offer a UK or EU hosting region. If a provider is based in the US, check whether it is certified under the UK Extension to the EU-US Data Privacy Framework, often called the UK-US data bridge. That certification is one of the routes that allows personal data to move from the UK to the US.",
          "Keep a record of the answers. You will need them for your privacy policy and for any client who asks.",
        ],
      },
      {
        heading: "Step 5: put contracts in place",
        paragraphs: [
          "Each vendor that handles personal data on your behalf should sign a data processing agreement. Ask for the list of sub-processors, meaning the other companies the vendor uses. A chatbot often depends on several of them: a model provider, a hosting company, a messaging platform.",
        ],
      },
      {
        heading: "Step 6: keep the bot accurate and give people a way out",
        paragraphs: [
          "The ICO expects organisations to take reasonable steps to correct incorrect inferences and to minimise errors. For a chatbot, that means testing real questions, reviewing wrong answers, and giving visitors a clear route to a person.",
          "Set rules for what the bot must never do, such as giving medical, legal or financial advice, or taking payment details in the chat. Then build those rules into the design, not just the prompt.",
        ],
      },
    ],
    closing:
      "Our chatbots and WhatsApp agents are designed with these checks from the first meeting, including data flow maps, notices and vendor terms. If you want a review of a chatbot you already run, contact us and we will tell you what we would change.",
    disclaimer:
      "This article is general information for UK businesses and is not legal advice. Check the current ICO guidance and speak to a qualified data protection adviser before launch.",
  },
  {
    slug: "whatsapp-ai-agent-uk-rules-2026",
    title: "WhatsApp AI Agents for UK Businesses: What Meta's Rules Allow",
    description:
      "Meta's WhatsApp Business rules now bar general-purpose AI chatbots. Here is what UK businesses can still run, how templates work, and how to stay within UK GDPR.",
    publishedAt: "2026-10-26",
    category: "WhatsApp and Messaging",
    targetQueries: [
      "WhatsApp AI agent UK",
      "WhatsApp AI agent for business UK",
      "WhatsApp chatbot rules 2026",
    ],
    intro:
      "WhatsApp is the main customer channel for many UK businesses, from clinics and hotels to tradespeople and retailers. Meta changed the rules for AI on its Business platform in 2026, so before you build a WhatsApp agent you need to know what is still allowed.",
    sections: [
      {
        heading: "What changed in January 2026",
        paragraphs: [
          "From 15 January 2026, Meta's WhatsApp Business API terms bar AI providers whose chatbot is the core product. Coverage of the change named ChatGPT and Perplexity as examples of services affected.",
          "Business automation is still allowed. Meta's rules are about general-purpose AI assistants sold through the platform. A bot that answers questions for your own business, books your appointments and tracks your orders sits on the permitted side. Meta decides what counts as a primary use, so check the current WhatsApp Business terms before you commit to a design.",
        ],
      },
      {
        heading: "What a permitted business agent does",
        paragraphs: [
          "The clearest uses are the routine ones: answering frequently asked questions, taking and changing bookings, sharing order or delivery status, collecting details for a quote, and passing a conversation to a member of staff.",
          "Keep the scope tight. An agent for a hotel should answer questions about the hotel. It should not become a general chatbot that answers anything a visitor types.",
        ],
      },
      {
        heading: "Templates, sessions and the 24-hour window",
        paragraphs: [
          "WhatsApp separates two kinds of message. Inside a customer service window that opens when the customer messages you, you can reply with free-form messages. Outside it, you must send a pre-approved template message to start the conversation again.",
          "Plan for this before you build. Reminders, follow-ups and order updates usually need approved templates, and templates go through Meta's review. Build the approval time into your launch date.",
        ],
      },
      {
        heading: "API access and business verification",
        paragraphs: [
          "Running an agent through the WhatsApp Business API normally requires a verified Meta Business account and an approved business profile. Verification takes time and depends on your company documents, so start it early rather than at the end of the project.",
        ],
      },
      {
        heading: "UK GDPR for WhatsApp conversations",
        paragraphs: [
          "A WhatsApp conversation is personal data. Before you message anyone proactively, make sure you have a lawful basis, such as consent or a clear existing relationship, and say what you will use their number for.",
          "Give people an easy way to opt out. Store conversations for only as long as you need them, and make sure your model and hosting vendors are covered by data processing agreements. The checks are the same as for a website chatbot, with the added complexity of a messaging platform run by a third party.",
        ],
      },
      {
        heading: "A short launch checklist",
        paragraphs: [
          "Before going live, confirm each of these:",
        ],
        bullets: [
          "Your use case is business automation for your own customers, not a general AI assistant.",
          "Business verification is complete and your display name is approved.",
          "Every proactive message type has an approved template.",
          "Visitors are told they are talking to an AI and how to reach a person.",
          "Opt-out works and is tested.",
          "Conversation retention is set and written into your privacy policy.",
          "Data processing agreements are signed with your model and hosting vendors.",
        ],
      },
    ],
    closing:
      "We build WhatsApp agents for business use cases, with the template plan, verification steps and UK GDPR checks scoped in from the start. Contact us with the workflow you want to automate and we will tell you whether it fits the current rules.",
    disclaimer:
      "Meta's policies change. Confirm the current WhatsApp Business terms and your own legal position before launch.",
  },
  {
    slug: "custom-software-development-miami-buyers-guide",
    title: "Choosing a Custom Software Developer in Miami: A Buyer's Checklist",
    description:
      "A practical checklist for Miami businesses comparing custom software and AI development partners: proof of work, code ownership, security practice and contract terms.",
    publishedAt: "2026-10-26",
    category: "Buyer's Guides",
    targetQueries: [
      "custom software development Miami",
      "AI software development Miami",
      "software development company Miami",
    ],
    intro:
      "Miami has a large market of software firms, from small studios to large outsourcing companies. Many of them list AI on their homepage now. This checklist helps Miami businesses compare them on the things that matter after the sales call: whether the work is real, who owns it, and how it is secured.",
    sections: [
      {
        heading: "Start with the problem, not the technology",
        paragraphs: [
          "A good partner will ask about your bottleneck before proposing a stack. Describe the process that hurts: missed calls, slow quotes, bookings kept in spreadsheets, a CRM that nobody updates. If a vendor leads with a product or a model before asking about your process, treat that as a warning sign.",
        ],
      },
      {
        heading: "Ask for proof you can check",
        paragraphs: [
          "Case studies should name the industry, the problem and a measurable result. Be cautious of vague claims such as 'increased efficiency' with no figure behind them. Ask for two references you can speak to and ask them what the vendor did when something went wrong.",
          "Portfolio screenshots tell you about design. They do not tell you about reliability, documentation or how the system behaves in year two.",
        ],
      },
      {
        heading: "Confirm who owns the code and the data",
        paragraphs: [
          "Get the intellectual property terms in writing before you sign. You should own the source code, the configuration and the data your business produces. Ask how you would export your data, and what happens to it if you end the contract.",
        ],
      },
      {
        heading: "Look at security practice, not just security claims",
        paragraphs: [
          "Ask where the system is hosted, how access is controlled, whether data is encrypted in transit and at rest, how backups are handled, and how the vendor responds to a security incident. Ask whether the company holds a recognised certification such as Cyber Essentials or ISO 27001, and ask for evidence rather than a logo.",
          "Ask who at the vendor can see your production data and how that access is logged.",
        ],
      },
      {
        heading: "Check the US-specific obligations",
        paragraphs: [
          "Some US state privacy laws, including the California Consumer Privacy Act, can apply to businesses that meet certain thresholds. Whether they apply to you depends on your size and the data you hold. Ask the vendor how it handles residents' data and what its contracts say.",
          "If your business is a clinic or other healthcare provider, the rules are stricter. See our article on AI voice agents for clinics before you start any project that touches patient information.",
        ],
      },
      {
        heading: "Compare pricing structures, not just numbers",
        paragraphs: [
          "Fixed-price milestones suit well-defined projects. Time-and-materials suits work that will change as you learn. Either can be fair. Ask for a paid discovery phase that produces a written scope, a timeline and the risks. A vendor who refuses to scope before quoting is asking you to buy a guess.",
        ],
      },
      {
        heading: "Questions to take to every shortlist meeting",
        paragraphs: [
          "Use these in every meeting so the answers are comparable:",
        ],
        bullets: [
          "Which three projects in our industry have you delivered, and can we speak to one client?",
          "Who owns the code, the data and the documentation at the end of the project?",
          "Where is our data hosted, and which sub-processors touch it?",
          "How do you handle access, backups and security incidents?",
          "What happens in the first 30 days after launch, and who fixes bugs?",
          "What would make you tell us not to build this?",
        ],
      },
    ],
    closing:
      "Apexa AI Labs is headquartered in London and works with clients in the USA. We are happy to answer these questions in writing before any engagement, including the ones about code ownership and data location. Contact us to start the conversation.",
  },
  {
    slug: "ai-voice-agents-clinics-hipaa-questions",
    title: "AI Voice Agents for Clinics: HIPAA Questions to Ask First",
    description:
      "What clinics and medical practices should check before deploying an AI phone agent for calls, bookings and reminders, including HIPAA business associate rules and recording consent.",
    publishedAt: "2026-10-26",
    category: "Healthcare",
    targetQueries: [
      "AI voice agent clinic Miami",
      "AI phone agent medical practice HIPAA",
      "AI answering service clinic Florida",
    ],
    intro:
      "Clinics lose bookings when calls go unanswered, and a voice agent can take routine calls around the clock. Before a voice agent takes a single patient call, a clinic has to answer some specific privacy and safety questions. These are the ones we would ask first.",
    sections: [
      {
        heading: "When HIPAA applies",
        paragraphs: [
          "The HIPAA Privacy and Security Rules apply to covered entities, such as most healthcare providers that bill electronically, and to their business associates. A business associate is a vendor that creates, receives, maintains or transmits protected health information (PHI) on the covered entity's behalf.",
          "A voice agent that books appointments, takes patient details or hears clinical information will usually be a business associate. That means a Business Associate Agreement (BAA) should be signed before any PHI flows through it.",
        ],
      },
      {
        heading: "Questions to ask every vendor",
        paragraphs: [
          "Ask these before the contract is signed, and get the answers in writing:",
        ],
        bullets: [
          "Will you sign a BAA, and will it cover every system that touches call data?",
          "Are call recordings, transcripts and call logs stored, and for how long?",
          "Where is that data hosted, and who has access to it internally?",
          "Which AI model providers see the audio or text, and under what contract terms?",
          "Can we delete recordings and transcripts on request, and do you keep audit logs of access?",
          "How do you handle a suspected breach, and how quickly do you notify us?",
        ],
      },
      {
        heading: "Limit what the agent collects",
        paragraphs: [
          "The safest voice agent is the one that collects the least. A booking flow usually needs a name, a contact number and a preferred time. It does not need the full clinical history. Design the script so the agent asks only for what the booking needs, and do not let it record more than it has to.",
        ],
      },
      {
        heading: "Route clinical and urgent calls to people",
        paragraphs: [
          "A voice agent should not give clinical advice. Build a hard handoff for symptoms, medication questions and anything that sounds urgent. For urgent cases the agent should tell the caller to contact emergency services, and it should be tested with the scenarios your staff actually see.",
        ],
      },
      {
        heading: "Tell callers they are speaking to an AI, and get consent to record",
        paragraphs: [
          "Callers should hear at the start of the call that they are speaking to an automated assistant, and how to reach a member of staff. Florida is generally an all-party consent state for recording phone calls, so the agent should also tell callers that the call may be recorded and get their agreement before continuing.",
        ],
      },
      {
        heading: "Test with realistic calls before go-live",
        paragraphs: [
          "Test the agent with accents, background noise, interruptions and people who change their mind mid-call. Measure how often it books correctly, how often it hands off, and how often it gets a detail wrong. Review a sample of real calls every week for the first month, and keep a log of every error and the fix.",
        ],
      },
    ],
    closing:
      "We design voice agents for practices with the privacy questions, handoff rules and test plan agreed before the build. If you run a clinic and want to see what a scoped voice agent would involve, contact us for a consultation.",
    disclaimer:
      "This article is general information, not legal advice. HIPAA and state recording laws are complex. Confirm your obligations with qualified healthcare counsel before deployment.",
  },
  {
    slug: "private-ai-for-business-what-your-data-stays-yours-means",
    title: "Private AI for Business: What 'Your Data Stays Yours' Should Mean",
    description:
      "A plain-English guide to private and secure AI for businesses: where data goes, who can access it, and the questions that separate real privacy from marketing.",
    publishedAt: "2026-10-26",
    category: "Security and Privacy",
    targetQueries: [
      "private AI for business",
      "secure AI software company",
      "AI with data privacy UK",
    ],
    intro:
      "Almost every AI vendor now says it protects your data. The phrase has little meaning on its own. This guide explains what to ask so you can tell real privacy from marketing, and what a practical private setup looks like for a small or mid-sized business.",
    sections: [
      {
        heading: "Replace the slogan with four questions",
        paragraphs: [
          "Ask a vendor these four questions before you accept any privacy claim:",
        ],
        bullets: [
          "Where is our data processed and stored?",
          "Is our data used to train any model, including third-party models?",
          "Who inside the vendor can see it, and how is that access logged?",
          "Can we export and delete it, and how long does deletion take?",
        ],
      },
      {
        heading: "Choose a hosting model that fits the data",
        paragraphs: [
          "There are three common patterns. A client-owned cloud account keeps the data in a database and storage you control, with the vendor working inside it under a contract. A vendor-hosted setup in a UK or EU region is simpler to run but depends more on the vendor's controls. An on-premise deployment keeps everything on your own hardware and suits the most sensitive data, at a higher cost to run.",
          "Most businesses do not need the most expensive option. They need the one whose controls they can explain to a customer, an auditor or their own staff.",
        ],
      },
      {
        heading: "Check the model providers, not just the platform",
        paragraphs: [
          "An AI feature usually sends text or audio to a model provider. That provider's terms matter as much as your vendor's. Consumer chat apps and business API products often have different data-use terms, so check the terms that apply to the product you actually use, and keep a record of them.",
        ],
      },
      {
        heading: "The basic controls every private setup needs",
        paragraphs: [
          "Privacy depends on ordinary security practice done consistently. At minimum, look for:",
        ],
        bullets: [
          "Encryption in transit and at rest.",
          "Role-based access, so staff see only what their job needs.",
          "Logging of access to customer data, and regular review of those logs.",
          "Secrets, API keys and passwords kept in a managed store, not in code or chat history.",
          "Tested backups and a documented restore process.",
          "A named incident response contact and a plan for notifying customers.",
        ],
      },
      {
        heading: "Be wary of absolute promises",
        paragraphs: [
          "Claims such as 'nobody can access your data' cannot be proven, and a careful vendor will not make them. A better standard is a set of commitments you can check: a data processing agreement, a description of the architecture, the sub-processor list, and evidence of security testing or certification where the vendor holds it.",
          "We follow the same principle with our own clients. We describe what we do, put it in the contract, and show the evidence, rather than promising that nothing can go wrong.",
        ],
      },
      {
        heading: "Start with the data that matters most",
        paragraphs: [
          "You do not need to make everything private on day one. List the data that would hurt most if it leaked: customer identities, payment details, health information, contracts, staff records. Put that data behind the strongest controls first, then extend the same standard to the rest.",
        ],
      },
    ],
    closing:
      "Apexa AI Labs builds AI automations and custom software with data location, access control and contract terms agreed before the build. If you want to know what a private setup would look like for your data, contact us and we will walk through it with you.",
    disclaimer:
      "This article is general information, not legal or security certification advice. Confirm the requirements for your sector with qualified advisers.",
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((post) => post.slug === slug);
}
