"use client";

import { motion } from "framer-motion";
import { Plus, CheckCircle2, Settings, Code, Cloud, ArrowRight, Cpu, Database, BarChart3, Palette, Terminal, Bot } from "lucide-react";
import { FaWhatsapp, FaInstagram, FaTelegramPlane, FaHubspot, FaEnvelope } from "react-icons/fa";
import { SiN8N } from "react-icons/si";
import { Backlight } from "@/components/ui/backlight";
import { Cover } from "@/components/ui/cover";
import { useLocale } from "@/i18n/locale-provider";
import { cn } from "@/lib/utils";

export function CapabilitiesSection() {
  const { t, messages, isRtl } = useLocale();
  const items = messages.capabilities.items;

  return (
    <section className="py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="grid lg:grid-cols-2 gap-8 mb-24 items-end pb-8 border-b border-black/10">
          <div>
            <h2 className={cn(
              "text-4xl md:text-5xl lg:text-5xl font-bold tracking-tight leading-tight pt-4 relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white",
              isRtl && "font-arabic-ui"
            )}>
              {t("capabilities.title")}
            </h2>
          </div>
          <div className="lg:max-w-lg lg:ms-auto">
            <p className={cn("text-gray-700 text-lg leading-relaxed", isRtl && "font-arabic-ui")}>
              {items[0]?.desc}
            </p>
          </div>
        </div>

        {/* Cards Grid */}
        <Backlight blur={40} className="w-full">
          <div className="grid md:grid-cols-3 gap-6">
          
          {/* Card 1: AI Business Automation */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="rounded-3xl bg-[#131316] border border-white/10 p-8 flex flex-col relative overflow-hidden group min-h-[480px] shadow-xl"
          >
            <div className="flex-grow flex items-center justify-center relative">
              {/* Angled UI */}
              <div className="w-full max-w-[260px] relative -rotate-12 group-hover:-rotate-6 transition-transform duration-500 bg-[#1c1c1f] rounded-2xl border border-white/10 p-5 shadow-2xl mt-4">
                <div className="flex items-center gap-2 mb-4 text-gray-300 border-b border-white/10 pb-3">
                  <Settings className="w-4 h-4 text-emerald-400" />
                  <span className="font-semibold text-sm">Automated Workflow</span>
                </div>
                <div className="space-y-3.5">
                  {[
                    { text: "Receive Inquiry", time: "0s", color: "text-emerald-500" },
                    { text: "Analyze Intent", time: "2s", color: "text-emerald-500" },
                    { text: "Fetch Data", time: "3s", color: "text-emerald-500" },
                    { text: "Draft Response", time: "5s", color: "text-yellow-500" }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className={"w-4 h-4 " + item.color} />
                        <span className="text-xs font-medium text-gray-300">{item.text}</span>
                      </div>
                      <span className="text-[10px] text-gray-500 font-mono">≈ {item.time}</span>
                    </div>
                  ))}
                </div>
                
                {/* Floating AI Agent (Robot) Vector */}
                <div className="absolute -top-4 -right-4 bg-gradient-to-br from-indigo-500 to-purple-600 p-2.5 rounded-xl shadow-lg shadow-indigo-500/20 border border-white/20 transform group-hover:rotate-12 group-hover:scale-110 transition-transform duration-500 z-20">
                  <Bot className="w-5 h-5 text-white drop-shadow-sm" />
                </div>
                
                {/* Floating n8n Vector */}
                <div className="absolute -bottom-4 -left-4 bg-gradient-to-br from-orange-500 to-red-600 p-2.5 rounded-xl shadow-lg shadow-red-500/20 border border-white/20 transform group-hover:-rotate-12 group-hover:scale-110 transition-transform duration-500 z-20">
                  <SiN8N className="w-5 h-5 text-white drop-shadow-sm" />
                </div>
              </div>
            </div>
            
            <div className="mt-8 flex flex-col border-t border-white/5 pt-6 relative z-10">
              <div className="flex items-start justify-between mb-3 gap-4">
                <div>
                  <div className={cn("text-xs font-bold text-emerald-400 mb-1 uppercase tracking-wider", isRtl && "font-arabic-ui normal-case")}>{items[0]?.eyebrow}</div>
                  <h3 className={cn("text-xl font-bold text-white leading-snug", isRtl && "font-arabic-ui")}>{items[0]?.title}</h3>
                </div>
                <button className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-colors shrink-0">
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              <p className={cn("text-sm text-gray-400 leading-relaxed", isRtl && "font-arabic-ui")}>{items[0]?.desc}</p>
            </div>
          </motion.div>

          {/* Card 2: AI WhatsApp & Customer Support */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="rounded-3xl bg-[#131316] border border-white/10 p-8 flex flex-col relative overflow-hidden group min-h-[480px] shadow-xl"
          >
            <div className="flex-grow flex items-center justify-center relative">
              {/* Chat UI */}
              <div className="w-full max-w-[250px] aspect-[4/3] relative group-hover:scale-105 transition-transform duration-500 mt-4">
                <div className="absolute inset-0 bg-[#222226] rounded-xl border border-white/10 p-4 shadow-xl flex flex-col gap-4 overflow-hidden">
                  <div className="bg-[#1c1c1f] border border-white/5 rounded-2xl rounded-tl-sm p-3 self-start max-w-[85%] shadow-sm">
                    <p className="text-xs text-gray-300">Hi, I'd like to book an appointment for tomorrow.</p>
                  </div>
                  <div className="bg-emerald-500/20 border border-emerald-500/30 rounded-2xl rounded-tr-sm p-3 self-end max-w-[85%] shadow-sm transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                    <p className="text-xs text-emerald-100">Hello! I'd be happy to help. What time works best for you?</p>
                  </div>
                  <div className="flex gap-1 mt-auto">
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-500 animate-bounce"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-500 animate-bounce" style={{animationDelay: "0.2s"}}></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-500 animate-bounce" style={{animationDelay: "0.4s"}}></div>
                  </div>
                </div>
                {/* Floating WhatsApp Vector */}
                <div className="absolute -top-3 -right-3 bg-[#25D366] p-2.5 rounded-xl shadow-lg shadow-[#25D366]/20 border border-white/20 transform group-hover:rotate-12 group-hover:scale-110 transition-transform duration-500 z-20">
                  <FaWhatsapp className="w-6 h-6 text-white drop-shadow-sm" />
                </div>
              </div>
            </div>
            
            <div className="mt-8 flex flex-col border-t border-white/5 pt-6 relative z-10">
              <div className="flex items-start justify-between mb-3 gap-4">
                <div>
                  <div className={cn("text-xs font-bold text-emerald-400 mb-1 uppercase tracking-wider", isRtl && "font-arabic-ui normal-case")}>{items[1]?.eyebrow}</div>
                  <h3 className={cn("text-xl font-bold text-white leading-snug", isRtl && "font-arabic-ui")}>{items[1]?.title}</h3>
                </div>
                <button className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-colors shrink-0">
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              <p className={cn("text-sm text-gray-400 leading-relaxed", isRtl && "font-arabic-ui")}>{items[1]?.desc}</p>
            </div>
          </motion.div>

          {/* Card 3: Custom Software Development */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="rounded-3xl bg-[#131316] border border-white/10 p-8 flex flex-col relative overflow-hidden group min-h-[480px] shadow-xl"
          >
            <div className="flex-grow flex items-center justify-center relative">
              {/* Layered UI */}
              <div className="relative w-full max-w-[250px] aspect-[4/3] -rotate-6 group-hover:rotate-0 transition-transform duration-500">
                <div className="absolute inset-0 bg-[#1c1c1f] rounded-xl border border-white/5 p-4 shadow-xl translate-y-8 translate-x-4 opacity-40">
                   <div className="flex items-center gap-3 mb-2"><div className="w-4 h-4 rounded bg-gray-500/50"></div><div className="h-2 w-20 bg-gray-500/50 rounded"></div></div>
                </div>
                <div className="absolute inset-0 bg-[#222226] rounded-xl border border-white/10 p-4 shadow-xl translate-y-4 translate-x-2 opacity-70">
                   <div className="flex items-center gap-3 mb-2"><div className="w-4 h-4 rounded bg-gray-400/50"></div><div className="h-2 w-24 bg-gray-400/50 rounded"></div></div>
                </div>
                <div className="absolute inset-0 bg-[#2a2a2f] rounded-xl border border-white/20 p-4 shadow-2xl flex flex-col justify-center transform transition-transform group-hover:-translate-y-2">
                  <div className="flex items-center justify-between mb-4 border-b border-white/10 pb-3">
                    <div className="flex items-center gap-2">
                      <Code className="w-5 h-5 text-gray-300" />
                      <span className="text-white font-medium text-sm">ERP System Core</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden"><div className="w-3/4 h-full bg-cyan-400"></div></div>
                    <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden"><div className="w-1/2 h-full bg-blue-400"></div></div>
                    <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden"><div className="w-5/6 h-full bg-indigo-400"></div></div>
                  </div>
                </div>
                
                {/* Floating Code Vector */}
                <div className="absolute -top-4 -right-4 bg-gradient-to-br from-blue-500 to-indigo-600 p-2.5 rounded-xl shadow-lg shadow-blue-500/20 border border-white/20 transform group-hover:rotate-12 group-hover:scale-110 transition-transform duration-500 z-20">
                  <Terminal className="w-5 h-5 text-white drop-shadow-sm" />
                </div>
                
                {/* Floating UI/UX Vector */}
                <div className="absolute -bottom-2 -left-4 bg-gradient-to-br from-pink-500 to-purple-600 p-2.5 rounded-xl shadow-lg shadow-pink-500/20 border border-white/20 transform group-hover:-rotate-12 group-hover:scale-110 transition-transform duration-500 z-20">
                  <Palette className="w-5 h-5 text-white drop-shadow-sm" />
                </div>
              </div>
            </div>
            
            <div className="mt-8 flex flex-col border-t border-white/5 pt-6 relative z-10">
              <div className="flex items-start justify-between mb-3 gap-4">
                <div>
                  <div className={cn("text-xs font-bold text-cyan-400 mb-1 uppercase tracking-wider", isRtl && "font-arabic-ui normal-case")}>{items[2]?.eyebrow}</div>
                  <h3 className={cn("text-xl font-bold text-white leading-snug", isRtl && "font-arabic-ui")}>{items[2]?.title}</h3>
                </div>
                <button className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-colors shrink-0">
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              <p className={cn("text-sm text-gray-400 leading-relaxed", isRtl && "font-arabic-ui")}>{items[2]?.desc}</p>
            </div>
          </motion.div>

          {/* Card 4: High-Performance Websites & Portals */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="rounded-3xl bg-[#131316] border border-white/10 p-8 flex flex-col relative overflow-hidden group min-h-[480px] shadow-xl"
          >
            <div className="flex-grow flex items-center justify-center relative">
              {/* Laptop & Mobile UI */}
              <div className="relative w-full max-w-[260px] aspect-video flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                {/* Laptop */}
                <div className="w-[85%] aspect-[16/10] bg-[#1c1c1f] rounded-t-xl rounded-b-sm border border-white/10 shadow-2xl flex flex-col relative z-10 -translate-x-4 -translate-y-2">
                  <div className="h-4 bg-[#222226] border-b border-white/5 flex items-center px-2 gap-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-400"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-yellow-400"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>
                  </div>
                  {/* Laptop Website Content */}
                  <div className="p-2.5 flex flex-col gap-2 flex-grow overflow-hidden relative">
                    {/* Header */}
                    <div className="flex justify-between items-center mb-1">
                       <div className="w-1/3 h-2 bg-white/20 rounded"></div>
                       <div className="flex gap-1.5"><div className="w-3 h-1.5 bg-white/10 rounded"></div><div className="w-3 h-1.5 bg-white/10 rounded"></div></div>
                    </div>
                    {/* Hero section */}
                    <div className="w-full h-12 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-md border border-white/5"></div>
                    {/* Grid */}
                    <div className="flex gap-2">
                      <div className="w-1/2 h-8 bg-white/5 rounded border border-white/5"></div>
                      <div className="w-1/2 h-8 bg-white/5 rounded border border-white/5"></div>
                    </div>
                  </div>
                  {/* Laptop Base */}
                  <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-[115%] h-1.5 bg-[#2a2a2f] rounded-b-xl border-t border-white/10 shadow-xl"></div>
                </div>

                {/* Mobile Phone */}
                <div className="absolute right-0 -bottom-4 w-[75px] h-[150px] bg-[#1c1c1f] rounded-[1.25rem] border-[3.5px] border-[#333338] shadow-[0_10px_30px_rgba(0,0,0,0.8)] flex flex-col z-20 group-hover:-translate-y-3 group-hover:translate-x-1 transition-transform duration-500 overflow-hidden">
                  {/* Mobile Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-3.5 bg-[#333338] rounded-b-xl z-30"></div>
                  {/* Mobile Website Content */}
                  <div className="p-2 pt-6 flex flex-col gap-2 flex-grow relative">
                    <div className="w-2/3 h-1.5 bg-white/20 rounded mb-1"></div>
                    <div className="w-full h-12 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded border border-white/5"></div>
                    <div className="w-full h-8 bg-white/5 rounded border border-white/5"></div>
                    <div className="w-full h-8 bg-white/5 rounded border border-white/5"></div>
                  </div>
                  {/* Home indicator */}
                  <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-white/20 rounded-full"></div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 flex flex-col border-t border-white/5 pt-6 relative z-10">
              <div className="flex items-start justify-between mb-3 gap-4">
                <div>
                  <div className={cn("text-xs font-bold text-cyan-400 mb-1 uppercase tracking-wider", isRtl && "font-arabic-ui normal-case")}>{items[3]?.eyebrow}</div>
                  <h3 className={cn("text-xl font-bold text-white leading-snug", isRtl && "font-arabic-ui")}>{items[3]?.title}</h3>
                </div>
                <button className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-colors shrink-0">
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              <p className={cn("text-sm text-gray-400 leading-relaxed", isRtl && "font-arabic-ui")}>{items[3]?.desc}</p>
            </div>
          </motion.div>

          {/* Card 5: Workflow & Process Automation */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="rounded-3xl bg-[#131316] border border-white/10 p-8 flex flex-col relative overflow-hidden group min-h-[480px] shadow-xl"
          >
            <div className="flex-grow flex items-center justify-center relative">
              {/* Logos Cloud UI */}
              <div className="relative w-full h-full flex items-center justify-center min-h-[160px]">
                {/* Central Node */}
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-blue-600 p-[1px] shadow-[0_0_30px_rgba(139,92,246,0.3)] z-20 group-hover:shadow-[0_0_50px_rgba(139,92,246,0.5)] transition-shadow duration-500">
                  <div className="w-full h-full rounded-2xl bg-[#131316] flex items-center justify-center">
                    <Settings className="w-6 h-6 text-white group-hover:animate-spin-slow" />
                  </div>
                </div>
                
                {/* Orbiting / Floating Logos */}
                <motion.div animate={{ y: [0, -6, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} className="absolute top-4 left-6 w-9 h-9 rounded-full bg-[#222226] border border-white/10 flex items-center justify-center shadow-lg">
                  <FaWhatsapp className="w-4 h-4 text-green-500" />
                </motion.div>
                
                <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }} className="absolute bottom-4 left-10 w-9 h-9 rounded-full bg-[#222226] border border-white/10 flex items-center justify-center shadow-lg">
                  <FaInstagram className="w-4 h-4 text-pink-500" />
                </motion.div>
                
                <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="absolute top-2 right-12 w-9 h-9 rounded-full bg-[#222226] border border-white/10 flex items-center justify-center shadow-lg">
                  <FaTelegramPlane className="w-4 h-4 text-blue-400" />
                </motion.div>
                
                <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }} className="absolute bottom-6 right-6 w-9 h-9 rounded-full bg-[#222226] border border-white/10 flex items-center justify-center shadow-lg">
                  <FaHubspot className="w-4 h-4 text-orange-500" />
                </motion.div>
                
                <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 2 }} className="absolute top-1/2 -translate-y-1/2 left-0 w-8 h-8 rounded-full bg-[#222226] border border-white/10 flex items-center justify-center shadow-lg">
                  <FaEnvelope className="w-3.5 h-3.5 text-blue-300" />
                </motion.div>
                
                <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }} className="absolute top-1/2 -translate-y-1/2 right-0 w-8 h-8 rounded-full bg-[#222226] border border-white/10 flex items-center justify-center shadow-lg">
                  <SiN8N className="w-3.5 h-3.5 text-red-500" />
                </motion.div>
              </div>
            </div>
            
            <div className="mt-8 flex flex-col border-t border-white/5 pt-6 relative z-10">
              <div className="flex items-start justify-between mb-3 gap-4">
                <div>
                  <div className={cn("text-xs font-bold text-purple-400 mb-1 uppercase tracking-wider", isRtl && "font-arabic-ui normal-case")}>{items[4]?.eyebrow}</div>
                  <h3 className={cn("text-xl font-bold text-white leading-snug", isRtl && "font-arabic-ui")}>{items[4]?.title}</h3>
                </div>
                <button className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-colors shrink-0">
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              <p className={cn("text-sm text-gray-400 leading-relaxed", isRtl && "font-arabic-ui")}>{items[4]?.desc}</p>
            </div>
          </motion.div>

          {/* Card 6: Dashboards & Business Intelligence */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="rounded-3xl bg-[#131316] border border-white/10 p-8 flex flex-col relative overflow-hidden group min-h-[480px] shadow-xl"
          >
            <div className="flex-grow flex items-center justify-center relative">
              {/* Dashboard Chart UI */}
              <div className="w-full max-w-[210px] h-36 bg-[#1c1c1f] rounded-xl border border-white/10 shadow-2xl overflow-hidden flex items-end justify-between p-4 gap-2 relative">
                <div className="absolute top-3 left-3 flex flex-col gap-1.5 w-full pr-6">
                  <div className="flex items-center gap-1.5">
                    <BarChart3 className="w-3.5 h-3.5 text-gray-400" />
                    <span className="text-[10px] text-gray-400 font-medium">Live Metrics</span>
                  </div>
                  <div className="flex gap-3">
                    <div className="flex flex-col">
                      <span className="text-[7.5px] text-gray-500 uppercase tracking-wider">Revenue</span>
                      <span className="text-[11px] text-emerald-400 font-mono font-bold">$124k</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[7.5px] text-gray-500 uppercase tracking-wider">Sales</span>
                      <span className="text-[11px] text-blue-400 font-mono font-bold">+24%</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[7.5px] text-gray-500 uppercase tracking-wider">Leads</span>
                      <span className="text-[11px] text-purple-400 font-mono font-bold">842</span>
                    </div>
                  </div>
                </div>
                
                <div className="w-full bg-gradient-to-t from-blue-600/20 to-blue-500/80 rounded-t-sm group-hover:h-[80%] transition-all duration-700" style={{height: "20%"}}></div>
                <div className="w-full bg-gradient-to-t from-blue-600/20 to-blue-500/80 rounded-t-sm group-hover:h-[80%] transition-all duration-700 delay-75" style={{height: "35%"}}></div>
                <div className="w-full bg-gradient-to-t from-blue-600/20 to-blue-500/80 rounded-t-sm group-hover:h-[80%] transition-all duration-700 delay-100" style={{height: "25%"}}></div>
                <div className="w-full bg-gradient-to-t from-blue-600/20 to-blue-500/80 rounded-t-sm group-hover:h-[80%] transition-all duration-700 delay-150" style={{height: "50%"}}></div>
                <div className="w-full bg-gradient-to-t from-cyan-500/20 to-cyan-400 rounded-t-sm group-hover:h-[100%] transition-all duration-700 delay-200" style={{height: "70%"}}></div>
              </div>
            </div>
            
            <div className="mt-8 flex flex-col border-t border-white/5 pt-6 relative z-10">
              <div className="flex items-start justify-between mb-3 gap-4">
                <div>
                  <div className={cn("text-xs font-bold text-blue-400 mb-1 uppercase tracking-wider", isRtl && "font-arabic-ui normal-case")}>{items[5]?.eyebrow}</div>
                  <h3 className={cn("text-xl font-bold text-white leading-snug", isRtl && "font-arabic-ui")}>{items[5]?.title}</h3>
                </div>
                <button className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-colors shrink-0">
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              <p className={cn("text-sm text-gray-400 leading-relaxed", isRtl && "font-arabic-ui")}>{items[5]?.desc}</p>
            </div>
          </motion.div>

          </div>
        </Backlight>
      </div>
    </section>
  );
}
