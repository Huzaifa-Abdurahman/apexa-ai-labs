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

export const SERVICE_IMAGES: Record<ServiceSlug, string> = {
  software: "/svc-software.webp",
  automations: "/svc-automations.webp",
  apps: "/svc-apps.webp",
  pipelines: "/svc-pipelines.webp",
  web: "/svc-web.webp",
  voice: "/svc-voice.webp",
};
