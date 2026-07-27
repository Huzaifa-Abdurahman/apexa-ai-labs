"use client";

import { motion } from "framer-motion";
import { Bot, Code, Cpu, Globe, Rocket, Smartphone } from "lucide-react";

const services = [
  {
    title: "AI Automations",
    description: "Designed to perfection, Apexa helps you take your business to the next level through our expert AI automations and workflows.",
    icon: <Bot className="size-6 text-primary" />,
    className: "lg:col-span-6 lg:row-span-2",
  },
  {
    title: "Custom Software",
    description: "We build custom software tailored exactly to your unique business needs.",
    icon: <Code className="size-6 text-primary" />,
    className: "lg:col-span-4 lg:row-span-1",
  },
  {
    title: "Web Platforms",
    description: "High-performance web applications built for scale and conversion.",
    icon: <Globe className="size-6 text-primary" />,
    className: "lg:col-span-4 lg:row-span-1",
  },
  {
    title: "Mobile Apps",
    description: "Native and cross-platform mobile experiences that delight users.",
    icon: <Smartphone className="size-6 text-primary" />,
    className: "lg:col-span-4 lg:row-span-1",
  },
  {
    title: "System Architecture",
    description: "Robust cloud infrastructure and system design.",
    icon: <Cpu className="size-6 text-primary" />,
    className: "lg:col-span-4 lg:row-span-1",
  },
];

export const ServicesGrid = () => {
  return (
    <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-20">
      <div className="flex flex-col gap-4 mb-12">
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white">
          Replace your Engineering Team
        </h2>
        <p className="text-lg text-neutral-400 max-w-2xl">
          Get access to a dedicated team of elite developers, designers, and AI engineers for a fraction of the cost.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-10 gap-4">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            className={`group relative overflow-hidden rounded-2xl bg-neutral-900 border border-white/10 p-6 sm:p-8 flex flex-col justify-end min-h-[300px] hover:border-primary/50 transition-colors duration-500 ${service.className}`}
          >
            {/* Background Gradient Effect on Hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10 flex flex-col gap-4">
              <div className="w-12 h-12 rounded-full bg-black border border-white/10 flex items-center justify-center">
                {service.icon}
              </div>
              <div>
                <h3 className="text-xl font-medium text-white mb-2">{service.title}</h3>
                <p className="text-neutral-400">{service.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
