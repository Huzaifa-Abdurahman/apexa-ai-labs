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
import { AnimatedTestimonialsDemo } from "@/components/ui/animated-testimonials-demo";
import { SuccessStoriesSection } from "@/components/ui/success-stories-section";
import QRCode from "react-qr-code";
import { useLocale } from "@/i18n/locale-provider";
import { cn } from "@/lib/utils";
import { WHATSAPP_UK_URL } from "@/lib/seo";

export default function Home() {
  const { t, isRtl } = useLocale();

  return (
    <div className="overflow-hidden">
      <div className="w-full relative z-0">
        <ShaderShowcase />
      </div>

      <div className="relative w-full overflow-hidden border-y border-slate-200 bg-[#F8FAFC]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(139,92,246,0.1),_transparent_45%),radial-gradient(ellipse_at_bottom,_rgba(6,182,212,0.05),_transparent_40%)]" />
        <Sparkles
          className="absolute inset-0"
          density={40}
          speed={0.55}
          opacity={0.6}
          color="#8B5CF6"
        />
        <div className="relative z-10">
          <LogoTicker />
        </div>
      </div>

      <HomeShowcase />

      <SuccessStoriesSection />
      <ScalingCompanies />
      <CapabilitiesSection />
      <section className="py-24 bg-[#F8FAFC] border-y border-slate-200">
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

          <NeonGradientCard 
            className="mt-8 w-full max-w-7xl mx-auto h-full items-center justify-center text-center"
            neonColors={{ firstColor: "#8b5cf6", secondColor: "#06b6d4" }}
          >
            <div className="grid lg:grid-cols-2 relative z-10 w-full text-start">
              <div className="p-5 sm:p-6 lg:p-8 lg:border-e border-white/5 flex flex-col justify-center">
                <h2
                  className={cn(
                    "text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-800 mb-2 leading-tight tracking-tight",
                    isRtl && "font-arabic-ui"
                  )}
                >
                  {t("home.scaleTitle")}{" "}
                  <span className="font-extrabold text-black">{t("home.scaleHighlight")}</span>
                </h2>
                <div
                  className={cn(
                    "text-base md:text-lg text-gray-600 mb-4 leading-relaxed font-medium",
                    isRtl && "font-arabic-ui"
                  )}
                >
                  {t("home.scaleBody")}
                </div>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mt-1 w-full">
                  <Link href="/contact" className="block w-full sm:inline-block sm:w-auto">
                    <InteractiveHoverButton className="w-full justify-center">{t("home.startProject")}</InteractiveHoverButton>
                  </Link>

                  <div className="p-3 sm:p-4 bg-white border border-slate-200 rounded-3xl flex sm:inline-flex flex-row items-center gap-4 shadow-xl relative overflow-hidden group w-full sm:w-auto text-start">
                    <div className="bg-white p-1.5 rounded-xl shrink-0 relative z-10 shadow-sm border border-slate-100">
                      <QRCode value={WHATSAPP_UK_URL} size={64} level="H" />
                    </div>
                    <div>
                      <h3
                        className={cn(
                          "text-slate-900 font-bold text-[14px] mb-0.5 relative z-10 leading-tight",
                          isRtl && "font-arabic-ui"
                        )}
                      >
                        {t("home.qrTitle")}
                      </h3>
                      <p className={cn("text-purple-600 font-medium text-[11px] relative z-10 leading-tight", isRtl && "font-arabic-ui")}>
                        {t("home.whatsappCta")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-5 sm:p-6 lg:p-8 flex flex-col justify-center bg-slate-50/50">
                <div
                  className={cn(
                    "mb-4 text-gray-600 text-base sm:text-lg leading-relaxed",
                    isRtl && "font-arabic-ui"
                  )}
                >
                  &quot;{t("home.quote")}&quot;
                </div>
                <div>
                  <div className="text-gray-900 font-bold text-base">{t("home.quoteAuthor")}</div>
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
