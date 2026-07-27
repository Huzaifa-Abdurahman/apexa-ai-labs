"use client";

import { Marquee } from "@/components/ui/marquee";
import { cn } from "@/lib/utils";
import { useLocale } from "@/i18n/locale-provider";

function PartnerChip({
  label,
  className,
}: {
  label: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "mx-2 flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-3 backdrop-blur-sm",
        className
      )}
    >
      <span className="font-heading text-sm font-semibold tracking-wide text-white/85 font-arabic-ui">
        {label}
      </span>
    </div>
  );
}

export function LogoTicker() {
  const { t, isRtl } = useLocale();

  const partners = [
    t("common.makkah"),
    t("common.madinah"),
    t("common.jeddah"),
    t("common.dammam"),
    t("common.riyadh"),
    t("ticker.hospitality"),
    t("ticker.healthcare"),
    t("ticker.logistics"),
    t("ticker.umrahOps"),
    t("ticker.enterprise"),
  ];

  return (
    <div className="relative w-full overflow-hidden py-8">
      <div className="mb-5 flex flex-col items-center justify-center gap-1 px-4 text-center">
        <p
          className={cn(
            "text-xs font-medium uppercase tracking-[0.2em] text-white/45",
            isRtl && "font-arabic-ui text-sm font-semibold normal-case tracking-normal text-primary"
          )}
        >
          {t("ticker.label")}
        </p>
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 start-0 z-10 w-16 bg-gradient-to-r from-black to-transparent sm:w-28 rtl:bg-gradient-to-l" />
        <div className="pointer-events-none absolute inset-y-0 end-0 z-10 w-16 bg-gradient-to-l from-black to-transparent sm:w-28 rtl:bg-gradient-to-r" />

        <Marquee pauseOnHover className="[--duration:36s] [--gap:0.75rem]">
          {partners.map((item) => (
            <PartnerChip key={item} label={item} />
          ))}
        </Marquee>

        <Marquee reverse pauseOnHover className="mt-3 [--duration:40s] [--gap:0.75rem]">
          {[...partners].reverse().map((item) => (
            <PartnerChip
              key={`rev-${item}`}
              label={item}
              className="border-cyan-500/20 bg-cyan-500/[0.06]"
            />
          ))}
        </Marquee>
      </div>
    </div>
  );
}
