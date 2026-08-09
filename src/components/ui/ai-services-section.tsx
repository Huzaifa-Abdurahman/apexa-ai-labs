"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useLocale } from "@/i18n/locale-provider";
import { cn } from "@/lib/utils";

const images = [
  "/images/ai_consulting.png",
  "/images/ai_implementation.png",
  "/images/ai_training.png",
];

export function AIServicesSection() {
  const { t, messages, isRtl } = useLocale();
  const services = messages.aiServices.items;

  return (
    <section className="relative overflow-hidden border-b border-slate-200 bg-[#F8FAFC] py-20 md:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(139,92,246,0.08),_transparent_50%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-2xl">
          <p className={cn("mb-2 text-sm font-semibold text-purple-600", isRtl && "font-arabic-ui")}>
            {t("aiServices.eyebrow")}
          </p>
          <h2
            className={cn(
              "font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl",
              isRtl && "font-arabic-ui"
            )}
          >
            {t("aiServices.title")}
          </h2>
          <p className={cn("mt-3 text-muted-foreground", isRtl && "font-arabic-ui")}>
            {t("aiServices.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="group flex flex-col overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-500/10"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={images[index] ?? images[0]}
                  alt={service.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60" />
              </div>
              <div className="flex flex-1 flex-col p-6 md:p-7">
                <h3
                  className={cn(
                    "font-heading text-xl font-bold text-foreground md:text-2xl",
                    isRtl && "font-arabic-ui"
                  )}
                >
                  {service.title}
                </h3>
                <p
                  className={cn(
                    "mt-3 text-sm font-medium leading-relaxed text-muted-foreground",
                    isRtl && "font-arabic-ui"
                  )}
                >
                  {service.description}
                </p>

                <ul className="mt-6 space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <div className="flex size-5 shrink-0 items-center justify-center rounded-full bg-purple-500/10">
                        <CheckCircle2 className="size-3.5 text-purple-600" />
                      </div>
                      <span
                        className={cn(
                          "text-sm font-medium text-foreground/80",
                          isRtl && "font-arabic-ui"
                        )}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={cn(
                    "mt-8 inline-flex items-center gap-2 text-sm font-semibold text-purple-600 transition group-hover:gap-3",
                    isRtl && "font-arabic-ui"
                  )}
                >
                  {t("aiServices.discuss")}{" "}
                  <ArrowRight className={cn("size-4", isRtl && "rotate-180")} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
