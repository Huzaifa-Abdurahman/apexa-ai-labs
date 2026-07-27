"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Minus, Plus, MessageCircle } from "lucide-react";
import { useLocale } from "@/i18n/locale-provider";
import { cn } from "@/lib/utils";

export function FAQSection() {
  const { t, messages, isRtl } = useLocale();
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const faqs = messages.faq.items;

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="border-t border-black/5 bg-muted/30 py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <h2
              className={cn(
                "font-heading text-4xl font-bold tracking-tight text-foreground md:text-5xl md:leading-[1.1]",
                isRtl && "font-arabic-ui"
              )}
            >
              {t("faq.title")}
            </h2>

            <div className="mt-10 rounded-[28px] border border-black/5 bg-white p-7 shadow-sm md:p-8">
              <h3
                className={cn(
                  "font-heading text-xl font-bold tracking-tight text-foreground md:text-2xl",
                  isRtl && "font-arabic-ui"
                )}
              >
                {t("faq.sideTitle")}
              </h3>
              <p
                className={cn(
                  "mt-3 text-sm leading-relaxed text-muted-foreground md:text-base",
                  isRtl && "font-arabic-ui"
                )}
              >
                {t("faq.sideBody")}
              </p>
              <Link
                href="https://wa.me/923100043155"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "mt-6 inline-flex items-center gap-3 rounded-full bg-foreground px-5 py-3 text-sm font-semibold text-background transition hover:opacity-90",
                  isRtl && "font-arabic-ui"
                )}
              >
                <MessageCircle className="size-4" />
                {t("faq.chatWhatsapp")}
              </Link>
            </div>
          </div>

          <div className="flex flex-col">
            {faqs.map((faq, index) => {
              const open = openIndex === index;
              return (
                <div
                  key={faq.q}
                  className="border-b border-black/10 py-5 first:pt-0 last:border-b-0"
                >
                  <button
                    type="button"
                    onClick={() => toggle(index)}
                    className="flex w-full items-start justify-between gap-4 text-start"
                  >
                    <span
                      className={cn(
                        "font-heading text-base font-semibold text-foreground md:text-lg",
                        isRtl && "font-arabic-ui"
                      )}
                    >
                      {faq.q}
                    </span>
                    <span className="mt-1 flex size-7 shrink-0 items-center justify-center rounded-full border border-black/10 bg-white text-foreground">
                      {open ? <Minus className="size-4" /> : <Plus className="size-4" />}
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {open && (
                      <motion.p
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className={cn(
                          "overflow-hidden pt-3 text-sm leading-relaxed text-muted-foreground md:text-base",
                          isRtl && "font-arabic-ui"
                        )}
                      >
                        {faq.a}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
