"use client"

import { Mail, Phone } from "lucide-react"
import {
  CONTACT_EMAIL,
  CONTACT_EMAIL_SECONDARY,
  CONTACT_PHONES,
} from "@/lib/seo"
import { useLocale } from "@/i18n/locale-provider"
import { cn } from "@/lib/utils"

export function TopContactBar() {
  const { isRtl } = useLocale()

  return (
    <div className="fixed inset-x-0 top-0 z-[60] border-b border-white/10 bg-slate-950 text-white">
      <div
        className={cn(
          "mx-auto flex h-9 max-w-7xl items-center justify-between gap-3 overflow-x-auto px-3 text-[11px] font-medium sm:px-6 sm:text-xs",
          isRtl && "font-arabic-ui"
        )}
      >
        <div className="flex shrink-0 items-center gap-3 sm:gap-5">
          {CONTACT_PHONES.map((phone) => (
            <a
              key={phone.e164}
              href={phone.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 whitespace-nowrap text-white/75 transition hover:text-cyan-300"
            >
              <Phone className="size-3 opacity-70" />
              <span className="hidden sm:inline">{phone.display}</span>
              <span className="sm:hidden">{phone.display.replace(/\s/g, "")}</span>
            </a>
          ))}
        </div>

        <div className="flex shrink-0 items-center gap-3 sm:gap-5">
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="inline-flex items-center gap-1.5 whitespace-nowrap text-white/75 transition hover:text-cyan-300"
          >
            <Mail className="size-3 opacity-70" />
            <span className="hidden md:inline">{CONTACT_EMAIL}</span>
            <span className="md:hidden">info@…</span>
          </a>
          <a
            href={`mailto:${CONTACT_EMAIL_SECONDARY}`}
            className="inline-flex items-center gap-1.5 whitespace-nowrap text-white/75 transition hover:text-cyan-300"
          >
            <Mail className="size-3 opacity-70" />
            <span className="hidden lg:inline">{CONTACT_EMAIL_SECONDARY}</span>
            <span className="lg:hidden hidden sm:inline">galaxy…</span>
          </a>
        </div>
      </div>
    </div>
  )
}
