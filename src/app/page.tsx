"use client";

import Link from "next/link";

import ShaderShowcase from "@/components/ui/shader-showcase";
import { Sparkles } from "@/components/ui/sparkles";
import { LogoTicker } from "@/components/ui/logo-ticker";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { NeonGradientCard } from "@/components/ui/neon-gradient-card";
import { HomeShowcase } from "@/components/ui/home-showcase";
import { CapabilitiesSection } from "@/components/ui/capabilities-section";
import { ScalingCompanies } from "@/components/ui/scaling-companies";
import { AIServicesSection } from "@/components/ui/ai-services-section";
import { AnimatedTestimonialsDemo } from "@/components/ui/animated-testimonials-demo";
import QRCode from "react-qr-code";
import { useLocale } from "@/i18n/locale-provider";
import { cn } from "@/lib/utils";

export default function Home() {
  const { t, isRtl } = useLocale();

  return (
    <div className="overflow-hidden">
      <div className="w-full relative z-0">
        <ShaderShowcase />
      </div>

      <div className="relative w-full overflow-hidden border-y border-white/10 bg-black">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(6,182,212,0.14),_transparent_45%),radial-gradient(ellipse_at_bottom,_rgba(249,115,22,0.08),_transparent_40%)]" />
        <Sparkles
          className="absolute inset-0"
          density={40}
          speed={0.55}
          opacity={0.32}
          color="#06b6d4"
        />
        <div className="relative z-10">
          <LogoTicker />
        </div>
      </div>

      <HomeShowcase />

      <CapabilitiesSection />
      <ScalingCompanies />
      <AIServicesSection />

      <section className="py-24 bg-background border-y border-black/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className={cn(
                "text-3xl md:text-5xl font-heading font-bold text-foreground",
                isRtl && "font-arabic-ui"
              )}
            >
              {t("home.testimonialsTitle")}
            </h2>
            <p
              className={cn(
                "text-muted-foreground font-medium max-w-2xl mx-auto text-lg mt-3",
                isRtl && "font-arabic-ui"
              )}
            >
              {t("home.testimonialsSubtitle")}
            </p>
          </div>

          <div className="mb-20">
            <AnimatedTestimonialsDemo />
          </div>

          <NeonGradientCard className="mt-12 w-full h-full items-center justify-center text-center">
            <div className="grid lg:grid-cols-2 relative z-10 w-full text-start">
              <div className="p-10 md:p-14 lg:p-20 lg:border-e border-white/5 flex flex-col justify-center">
                <h2
                  className={cn(
                    "text-3xl md:text-4xl font-semibold text-gray-800 mb-4 leading-tight tracking-tight",
                    isRtl && "font-arabic-ui"
                  )}
                >
                  {t("home.scaleTitle")}{" "}
                  <span className="font-extrabold text-black">{t("home.scaleHighlight")}</span>
                </h2>
                <div
                  className={cn(
                    "text-lg md:text-xl text-gray-600 mb-8 leading-relaxed font-medium",
                    isRtl && "font-arabic-ui"
                  )}
                >
                  {t("home.scaleBody")}
                </div>

                <div className="flex flex-wrap items-start gap-8 mt-4">
                  <Link href="/contact" className="inline-block">
                    <InteractiveHoverButton>{t("home.startProject")}</InteractiveHoverButton>
                  </Link>

                  <div className="p-6 bg-[#18181b] rounded-3xl inline-flex flex-col items-center justify-center border border-black/10 shadow-2xl relative overflow-hidden group">
                    <div className="bg-white p-3 rounded-2xl mb-4 relative z-10 shadow-sm">
                      <QRCode value="https://wa.me/923451569778" size={130} level="H" />
                    </div>
                    <h3
                      className={cn(
                        "text-white font-semibold text-[15px] mb-1.5 relative z-10",
                        isRtl && "font-arabic-ui"
                      )}
                    >
                      {t("home.qrTitle")}
                    </h3>
                    <p className={cn("text-primary text-sm relative z-10", isRtl && "font-arabic-ui")}>
                      {t("home.whatsappCta")}
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-10 md:p-14 lg:p-20 flex flex-col justify-center bg-black/[0.02]">
                <div
                  className={cn(
                    "mb-8 text-gray-600 text-lg md:text-xl leading-relaxed",
                    isRtl && "font-arabic-ui"
                  )}
                >
                  &quot;{t("home.quote")}&quot;
                </div>
                <div>
                  <div className="text-gray-900 font-bold text-lg">{t("home.quoteAuthor")}</div>
                  <div className={cn("text-gray-600 text-sm", isRtl && "font-arabic-ui")}>
                    {t("home.quoteRole")}
                  </div>
                </div>
              </div>
            </div>
          </NeonGradientCard>
        </div>
      </section>
    </div>
  );
}
