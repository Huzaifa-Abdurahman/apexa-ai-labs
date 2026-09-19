"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, MessageCircle, Send, Sparkles, X } from "lucide-react";
import { BorderBeam } from "@/components/ui/border-beam";
import { ChatbotFace } from "@/components/chatbot/chatbot-face";
import { getBotReply } from "@/components/chatbot/chat-engine";
import { useLocale } from "@/i18n/locale-provider";
import { cn } from "@/lib/utils";

type Msg = {
  id: string;
  role: "user" | "bot";
  text: string;
};

const copy = {
  en: {
    title: "Apexa AI Assistant",
    subtitle: "Ask about AI, software & global solutions",
    placeholder: "Ask anything about Apexa…",
    welcome:
      "Hi — I'm your Apexa guide. Ask about custom software, AI agents, industries, or how we help teams across the UK and USA.",
    typing: "Apexa is typing",
    online: "Online · London HQ",
    suggestions: ["What services?", "WhatsApp AI", "Cities you serve", "Book a call"],
    contactCta: "Talk to a human",
    open: "Open Apexa AI chat",
    close: "Close chat",
  },
  ar: {
    title: "مساعد أبيكسا الذكي",
    subtitle: "اسأل عن الذكاء الاصطناعي والبرمجيات وحلول بريطانيا وأمريكا",
    placeholder: "اسأل أي شيء عن أبيكسا…",
    welcome:
      "مرحباً — أنا مرشدك في أبيكسا. اسأل عن البرمجيات المخصصة أو وكلاء الذكاء أو القطاعات أو كيف نساعد الفرق في بريطانيا وأمريكا.",
    typing: "أبيكسا تكتب",
    online: "متصل · مقر لندن",
    suggestions: ["ما خدماتكم؟", "واتساب ذكي", "المدن", "احجز مكالمة"],
    contactCta: "تحدث مع فريقنا",
    open: "فتح محادثة أبيكسا",
    close: "إغلاق المحادثة",
  },
} as const;

function TypingDots() {
  return (
    <div className="flex items-center gap-1 px-1 py-0.5">
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          className="size-1.5 rounded-full bg-cyan-400"
          animate={{ y: [0, -4, 0], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 0.7, repeat: Infinity, delay: i * 0.15 }}
        />
      ))}
    </div>
  );
}

export function AiChatbot() {
  const { locale, isRtl } = useLocale();
  const t = copy[locale === "ar" ? "ar" : "en"];
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([]);
  const [pulse, setPulse] = useState(true);
  const listRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!open) return;
    setMessages((prev) =>
      prev.length
        ? prev
        : [{ id: "welcome", role: "bot", text: t.welcome }]
    );
    const id = window.setTimeout(() => inputRef.current?.focus(), 280);
    return () => window.clearTimeout(id);
  }, [open, t.welcome]);

  useEffect(() => {
    const el = listRef.current;
    if (!el) return;
    el.scrollTo({ top: el.scrollHeight, behavior: "smooth" });
  }, [messages, typing, open]);

  const send = (raw: string) => {
    const text = raw.trim();
    if (!text || typing) return;

    const userMsg: Msg = { id: `u-${Date.now()}`, role: "user", text };
    setMessages((m) => [...m, userMsg]);
    setInput("");
    setTyping(true);
    setPulse(false);

    const delay = 700 + Math.min(1200, text.length * 18);
    window.setTimeout(() => {
      const reply = getBotReply(text, locale === "ar" ? "ar" : "en");
      setMessages((m) => [...m, { id: `b-${Date.now()}`, role: "bot", text: reply }]);
      setTyping(false);
    }, delay);
  };

  return (
    <div
      className={cn(
        "fixed bottom-4 z-[90] flex flex-col items-end gap-3 sm:bottom-6",
        isRtl ? "left-4 sm:left-6" : "right-4 sm:right-6"
      )}
    >
      <AnimatePresence>
        {open && (
          <motion.div
            key="panel"
            initial={{ opacity: 0, y: 24, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ type: "spring", stiffness: 320, damping: 28 }}
            className={cn(
              "relative flex h-[min(560px,72vh)] w-[min(100vw-2rem,380px)] flex-col overflow-hidden rounded-[28px] border border-white/10 bg-[#070b12]/95 shadow-[0_24px_80px_-20px_rgba(6,182,212,0.45)] backdrop-blur-xl",
              isRtl && "font-arabic-ui"
            )}
          >
            <BorderBeam size={120} duration={9} colorFrom="#06b6d4" colorTo="#f97316" borderWidth={1.5} />

            {/* Header */}
            <div className="relative flex items-center gap-3 border-b border-white/10 bg-gradient-to-r from-cyan-500/15 via-transparent to-orange-500/15 px-4 py-3.5">
              <ChatbotFace size={44} speaking={typing} />
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <h2 className="truncate font-heading text-sm font-bold text-white">{t.title}</h2>
                  <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/15 px-2 py-0.5 text-[10px] font-semibold text-emerald-300">
                    <span className="size-1.5 animate-pulse rounded-full bg-emerald-400" />
                    {t.online}
                  </span>
                </div>
                <p className="truncate text-xs text-white/50">{t.subtitle}</p>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="flex size-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition hover:bg-white/10 hover:text-white"
                aria-label={t.close}
              >
                <X className="size-4" />
              </button>
            </div>

            {/* Messages */}
            <div
              ref={listRef}
              className="flex-1 space-y-3 overflow-y-auto px-4 py-4 scrollbar-thin"
            >
              <AnimatePresence initial={false}>
                {messages.map((msg) => (
                  <motion.div
                    key={msg.id}
                    initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ duration: 0.28 }}
                    className={cn(
                      "flex",
                      msg.role === "user" ? "justify-end" : "justify-start"
                    )}
                  >
                    <div
                      className={cn(
                        "max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed shadow-sm",
                        msg.role === "user"
                          ? "rounded-br-md bg-gradient-to-br from-cyan-500 to-cyan-600 text-white"
                          : "rounded-bl-md border border-white/10 bg-white/[0.06] text-white/90"
                      )}
                    >
                      {msg.role === "bot" && (
                        <span className="mb-1.5 flex items-center gap-1 text-[10px] font-semibold uppercase tracking-wider text-cyan-300/80">
                          <Sparkles className="size-3" /> Apexa AI
                        </span>
                      )}
                      {msg.text}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>

              {typing && (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="rounded-2xl rounded-bl-md border border-white/10 bg-white/[0.06] px-3 py-2.5">
                    <p className="mb-1 text-[10px] font-semibold text-white/40">{t.typing}</p>
                    <TypingDots />
                  </div>
                </motion.div>
              )}
            </div>

            {/* Suggestions */}
            {messages.length <= 1 && !typing && (
              <div className="flex flex-wrap gap-2 px-4 pb-2">
                {t.suggestions.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => send(s)}
                    className="rounded-full border border-cyan-400/25 bg-cyan-500/10 px-3 py-1.5 text-xs font-medium text-cyan-100 transition hover:border-cyan-300/50 hover:bg-cyan-500/20"
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <div className="border-t border-white/10 bg-black/30 p-3">
              <form
                className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-2 py-1.5 focus-within:border-cyan-400/40"
                onSubmit={(e) => {
                  e.preventDefault();
                  send(input);
                }}
              >
                <input
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder={t.placeholder}
                  className="min-w-0 flex-1 bg-transparent px-2 py-2 text-sm text-white outline-none placeholder:text-white/35"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || typing}
                  className="flex size-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-orange-500 text-white shadow-lg shadow-cyan-500/20 transition enabled:hover:scale-105 disabled:opacity-40"
                  aria-label="Send"
                >
                  <Send className="size-4" />
                </button>
              </form>
              <Link
                href="/contact"
                className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-orange-300/90 transition hover:text-orange-200"
              >
                {t.contactCta} <ArrowUpRight className="size-3.5" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Launcher */}
      <motion.button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? t.close : t.open}
        aria-expanded={open}
        className="group relative flex items-center justify-center"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.96 }}
      >
        {pulse && !open && (
          <motion.span
            className="absolute inset-0 rounded-full bg-cyan-400/30"
            animate={{ scale: [1, 1.55, 1], opacity: [0.55, 0, 0.55] }}
            transition={{ duration: 2.2, repeat: Infinity }}
          />
        )}

        <AnimatePresence mode="wait" initial={false}>
          {open ? (
            <motion.span
              key="close"
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.6, opacity: 0 }}
              className="flex size-14 items-center justify-center rounded-full border border-white/15 bg-[#0b1220] text-white shadow-2xl shadow-cyan-500/30 sm:size-16"
            >
              <MessageCircle className="size-6" />
            </motion.span>
          ) : (
            <motion.span
              key="face"
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.6, opacity: 0 }}
              className="relative flex size-16 items-center justify-center sm:size-[72px]"
            >
              <ChatbotFace size={64} speaking={false} className="sm:scale-110" />
              <span className="absolute -bottom-0.5 -end-0.5 flex size-5 items-center justify-center rounded-full border-2 border-[#05070b] bg-gradient-to-br from-orange-400 to-orange-600 text-[9px] font-bold text-white shadow">
                AI
              </span>
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
