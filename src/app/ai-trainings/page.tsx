"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Bot, Code2, GraduationCap, Sparkles as SparklesIcon, CheckCircle2 } from "lucide-react";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { Sparkles } from "@/components/ui/sparkles";
import { cn } from "@/lib/utils";
import { useLocale } from "@/i18n/locale-provider";

const services = [
  {
    id: "consulting",
    title: "AI Consulting",
    subtitle: "Clear roadmaps for where AI creates real value in your operations — not hype.",
    icon: Bot,
    accent: "from-blue-500 to-cyan-500",
    features: [
      "Strategic AI roadmap",
      "Technology assessment",
      "ROI analysis",
      "Best-practice recommendations"
    ]
  },
  {
    id: "implementation",
    title: "AI Implementation",
    subtitle: "Custom-built agents, automations, and platforms — from broken processes to production.",
    icon: Code2,
    accent: "from-purple-500 to-fuchsia-500",
    features: [
      "End-to-end development",
      "Seamless integrations",
      "Quality assurance",
      "Production-ready architecture"
    ]
  },
  {
    id: "training",
    title: "AI Training & Placement",
    subtitle: "Hands-on enablement so your team owns the systems we build together.",
    icon: GraduationCap,
    accent: "from-orange-500 to-amber-500",
    features: [
      "Interactive workshops",
      "Engineer placement",
      "Custom training programs",
      "Ongoing support"
    ]
  }
];

const tools = [
  { name: "ChatGPT", logo: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg" },
  { name: "Claude", logo: "https://upload.wikimedia.org/wikipedia/commons/7/78/Anthropic_logo.svg" },
  { name: "Midjourney", logo: "https://upload.wikimedia.org/wikipedia/commons/e/e6/Midjourney_Emblem.png" },
  { name: "Gemini", logo: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Google_Gemini_logo.svg" },
  { name: "Claude CoWork", logo: "https://upload.wikimedia.org/wikipedia/commons/7/78/Anthropic_logo.svg" },
  { name: "Nano Banana", logo: "/robot-assistant.webp" },
];

export default function AITrainingsPage() {
  const { isRtl } = useLocale();

  return (
    <div className="min-h-screen bg-[#F8FAFC] pb-24 overflow-hidden relative">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(139,92,246,0.08),_transparent_45%),radial-gradient(ellipse_at_bottom,_rgba(6,182,212,0.08),_transparent_40%)]" />
      <Sparkles
        className="absolute inset-0 pointer-events-none"
        density={40}
        speed={0.55}
        opacity={0.6}
        color="#8B5CF6"
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-50 px-4 py-1.5 mb-6"
        >
          <SparklesIcon className="size-4 text-purple-600" />
          <span className="text-sm font-bold uppercase tracking-widest text-purple-700">How we work with you</span>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 mb-6"
        >
          From strategy to <span className="bg-gradient-to-r from-purple-600 to-cyan-500 bg-clip-text text-transparent">shipped systems</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed"
        >
          Consulting, implementation, and enablement — designed for teams that need clarity and results.
        </motion.p>
      </section>

      {/* Services Grid */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="group relative overflow-hidden rounded-[28px] border border-slate-200/60 bg-white p-8 shadow-xl shadow-slate-200/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                <div className={cn("mb-6 inline-flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br shadow-lg", service.accent)}>
                  <Icon className="size-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold font-heading text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 font-medium leading-relaxed mb-6 h-16">{service.subtitle}</p>
                
                <ul className="space-y-3 mb-8">
                  {service.features.map(feature => (
                    <li key={feature} className="flex items-center gap-3 text-sm font-semibold text-slate-700">
                      <CheckCircle2 className="size-4 text-cyan-500 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link href="/contact" className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors group-hover:underline underline-offset-4">
                  Discuss this <ArrowRight className="size-4" />
                </Link>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* Free Training Offer & Tools */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 p-10 md:p-16 shadow-2xl"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(6,182,212,0.15),_transparent_50%)]" />
          
          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <div className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-orange-500/20 to-amber-500/20 border border-orange-500/30 text-orange-400 font-bold text-sm tracking-wide mb-6">
              100% FREE FOR YOUR TEAM
            </div>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6 leading-tight">
              Free AI Training for Your Employees
            </h2>
            <p className="text-lg text-slate-300 font-medium mb-12">
              We empower your workforce with hands-on training in the latest AI technologies. No fees, no hidden charges. Master the tools that run the modern office.
            </p>

            <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 mb-12">
              {tools.map((tool) => (
                <div key={tool.name} className="flex flex-col items-center gap-3 opacity-80 hover:opacity-100 transition-opacity">
                  <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center p-3 backdrop-blur-sm border border-white/10">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={tool.logo} alt={tool.name} className="w-full h-full object-contain" />
                  </div>
                  <span className="text-xs font-semibold text-white/70">{tool.name}</span>
                </div>
              ))}
            </div>

            <Link href="/contact" className="inline-block">
              <InteractiveHoverButton>Claim Your Free Training</InteractiveHoverButton>
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
