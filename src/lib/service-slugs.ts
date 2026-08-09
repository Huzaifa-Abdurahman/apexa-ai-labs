export const SERVICE_SLUGS = [
  "software",
  "automations",
  "apps",
  "pipelines",
  "web",
  "voice",
] as const;

export type ServiceSlug = (typeof SERVICE_SLUGS)[number];

export function isServiceSlug(value: string): value is ServiceSlug {
  return (SERVICE_SLUGS as readonly string[]).includes(value);
}

export const SERVICE_IMAGES: Record<ServiceSlug, string | string[]> = {
  software: [
    "/svc-software.webp",
    "/3d-pro-ai-programming-interface-machine-learning-development-smart-code-automation.png",
    "/3d-dashboard.png",
    "/saas-wWz-Cr0F.png"
  ],
  automations: [
    "/smiling-chatbot-and-user-chatting-customer-support-automation-virtual-assistant-consultation.gif",
    "/svc-automations.webp",
    "/3d-casual-life-chatting-with-chatbot.gif",
    "/robot-assistant-and-phone-with-messages-virtual-support-automation.png"
  ],
  apps: "/svc-apps.webp",
  pipelines: "/svc-pipelines.webp",
  web: [
    "/svc-web.webp",
    "/web/3205857-removebg-preview.png",
    "/web/3479661-removebg-preview.png",
    "/web/5012925-removebg-preview.png"
  ],
  voice: "/svc-voice.webp",
};
