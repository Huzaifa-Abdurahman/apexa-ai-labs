"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { Globe, WHITE_GLOBE_CONFIG } from "@/components/ui/globe";
import { FAQSection } from "@/components/ui/faq";
import { useLocale } from "@/i18n/locale-provider";
import { cn } from "@/lib/utils";
import {
  CONTACT_EMAIL,
  CONTACT_EMAIL_SECONDARY,
  CONTACT_PHONES,
} from "@/lib/seo";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const { t, isRtl } = useLocale();

  const cities = [
    t("common.london"),
    t("common.manchester"),
    t("common.birmingham"),
    t("common.newYork"),
    t("common.houston"),
  ];

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <section className="relative overflow-hidden pt-28 pb-16 md:pt-32 md:pb-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(6,182,212,0.14),_transparent_50%)]" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="flex flex-col"
            >
              <div className="mb-5 flex size-12 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary">
                <Mail className="size-5" />
              </div>

              <p className={cn("mb-2 text-sm font-semibold text-primary", isRtl && "font-arabic-ui")}>
                {t("contact.eyebrow")}
              </p>
              <h1
                className={cn(
                  "font-heading text-4xl font-bold tracking-tight text-foreground md:text-6xl",
                  isRtl && "font-arabic-ui"
                )}
              >
                {t("contact.title")}
              </h1>
              <p
                className={cn(
                  "mt-4 max-w-md text-base font-medium leading-relaxed text-muted-foreground md:text-lg",
                  isRtl && "font-arabic-ui"
                )}
              >
                {t("contact.subtitle")}
              </p>

              <div className="mt-8 space-y-3">
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="flex items-center gap-3 text-sm font-medium text-foreground/80 transition hover:text-primary"
                >
                  <Mail className="size-4 text-primary" />
                  {CONTACT_EMAIL}
                </a>
                <a
                  href={`mailto:${CONTACT_EMAIL_SECONDARY}`}
                  className="flex items-center gap-3 text-sm font-medium text-foreground/80 transition hover:text-primary"
                >
                  <Mail className="size-4 text-primary" />
                  {CONTACT_EMAIL_SECONDARY}
                </a>
                {CONTACT_PHONES.map((phone) => (
                  <a
                    key={phone.e164}
                    href={phone.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "flex items-center gap-3 text-sm font-medium text-foreground/80 transition hover:text-primary",
                      isRtl && "font-arabic-ui"
                    )}
                  >
                    <Phone className="size-4 text-primary" />
                    {phone.display}
                    <span className="text-xs text-muted-foreground">
                      ({isRtl ? phone.labelAr : phone.label})
                    </span>
                  </a>
                ))}
                <div
                  className={cn(
                    "flex items-center gap-3 text-sm font-medium text-foreground/80",
                    isRtl && "font-arabic-ui"
                  )}
                >
                  <MapPin className="size-4 text-primary" />
                  {t("contact.location")}
                </div>
              </div>

              <div className="relative mt-6 flex h-[300px] w-full max-w-md items-center justify-center sm:h-[360px]">
                <Globe
                  config={WHITE_GLOBE_CONFIG}
                  label={t("contact.globeLabel")}
                  className="max-w-[340px] sm:max-w-[400px]"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="relative overflow-hidden rounded-[28px] border border-black/5 bg-white p-7 shadow-xl md:p-10"
            >
              <div
                className="pointer-events-none absolute inset-0 opacity-[0.35]"
                style={{
                  backgroundImage:
                    "linear-gradient(rgb(15 23 42 / 0.04) 1px, transparent 1px), linear-gradient(90deg, rgb(15 23 42 / 0.04) 1px, transparent 1px)",
                  backgroundSize: "36px 36px",
                }}
              />

              <div className="relative z-10">
                <h2
                  className={cn(
                    "font-heading text-xl font-bold text-foreground md:text-2xl",
                    isRtl && "font-arabic-ui"
                  )}
                >
                  {t("contact.formTitle")}
                </h2>
                <p className={cn("mt-1 text-sm font-semibold text-primary", isRtl && "font-arabic-ui")}>
                  {t("contact.formSubtitle")}
                </p>

                {submitted ? (
                  <div className="mt-10 rounded-2xl border border-primary/20 bg-primary/5 p-6 text-center">
                    <p
                      className={cn(
                        "font-heading text-lg font-bold text-foreground",
                        isRtl && "font-arabic-ui"
                      )}
                    >
                      {t("contact.successTitle")}
                    </p>
                    <p
                      className={cn(
                        "mt-2 text-sm text-muted-foreground",
                        isRtl && "font-arabic-ui"
                      )}
                    >
                      {t("contact.successBody")}
                    </p>
                  </div>
                ) : (
                  <form
                    className="mt-8 space-y-5"
                    onSubmit={(e) => {
                      e.preventDefault();
                      setSubmitted(true);
                    }}
                  >
                    <div className="space-y-2">
                      <label
                        htmlFor="fullName"
                        className={cn(
                          "text-sm font-semibold text-foreground/80",
                          isRtl && "font-arabic-ui"
                        )}
                      >
                        {t("contact.fullName")}
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        required
                        className="w-full rounded-xl border border-black/10 bg-muted/40 px-4 py-3.5 text-sm text-foreground outline-none transition focus:border-primary/40 focus:bg-white focus:ring-2 focus:ring-primary/15"
                        placeholder={t("contact.fullNamePh")}
                      />
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className={cn(
                          "text-sm font-semibold text-foreground/80",
                          isRtl && "font-arabic-ui"
                        )}
                      >
                        {t("contact.email")}
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        className="w-full rounded-xl border border-black/10 bg-muted/40 px-4 py-3.5 text-sm text-foreground outline-none transition focus:border-primary/40 focus:bg-white focus:ring-2 focus:ring-primary/15"
                        placeholder={t("contact.emailPh")}
                      />
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                      <div className="space-y-2">
                        <label
                          htmlFor="company"
                          className={cn(
                            "text-sm font-semibold text-foreground/80",
                            isRtl && "font-arabic-ui"
                          )}
                        >
                          {t("contact.company")}
                        </label>
                        <input
                          type="text"
                          id="company"
                          className="w-full rounded-xl border border-black/10 bg-muted/40 px-4 py-3.5 text-sm text-foreground outline-none transition focus:border-primary/40 focus:bg-white focus:ring-2 focus:ring-primary/15"
                          placeholder={t("contact.companyPh")}
                        />
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="city"
                          className={cn(
                            "text-sm font-semibold text-foreground/80",
                            isRtl && "font-arabic-ui"
                          )}
                        >
                          {t("contact.city")}
                        </label>
                        <select
                          id="city"
                          className="w-full rounded-xl border border-black/10 bg-muted/40 px-4 py-3.5 text-sm text-foreground outline-none transition focus:border-primary/40 focus:bg-white focus:ring-2 focus:ring-primary/15"
                          defaultValue={cities[0]}
                        >
                          {cities.map((city) => (
                            <option key={city} value={city}>
                              {city}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="message"
                        className={cn(
                          "text-sm font-semibold text-foreground/80",
                          isRtl && "font-arabic-ui"
                        )}
                      >
                        {t("contact.message")}
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        required
                        className="w-full resize-none rounded-xl border border-black/10 bg-muted/40 px-4 py-3.5 text-sm text-foreground outline-none transition focus:border-primary/40 focus:bg-white focus:ring-2 focus:ring-primary/15"
                        placeholder={t("contact.messagePh")}
                      />
                    </div>

                    <button
                      type="submit"
                      className={cn(
                        "mt-1 inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition hover:opacity-90",
                        isRtl && "font-arabic-ui"
                      )}
                    >
                      <Send className="size-4" />
                      {t("contact.submit")}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <FAQSection />
    </div>
  );
}
