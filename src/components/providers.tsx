"use client";

import type { ReactNode } from "react";
import { AiChatbot } from "@/components/chatbot/ai-chatbot";
import { LocaleProvider } from "@/i18n/locale-provider";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <LocaleProvider>
      {children}
      <AiChatbot />
    </LocaleProvider>
  );
}
