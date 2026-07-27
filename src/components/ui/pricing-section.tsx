"use client";

import { Check } from "lucide-react";
import Link from "next/link";

const plans = [
  {
    name: "Design & Dev",
    description: "Perfect for early-stage startups and small businesses.",
    price: "$4,995",
    period: "/mo",
    features: [
      "One request at a time",
      "Average 48 hour delivery",
      "Unlimited brands",
      "Unlimited users",
      "Cancel anytime",
      "Pause anytime",
    ],
    highlight: false,
    buttonText: "Get started",
  },
  {
    name: "AI & Engineering",
    description: "For scaling companies that need advanced AI solutions.",
    price: "$8,995",
    period: "/mo",
    features: [
      "Two requests at a time",
      "Average 48 hour delivery",
      "Dedicated Project Manager",
      "Custom AI Integrations",
      "Advanced System Architecture",
      "Cancel anytime",
    ],
    highlight: true,
    buttonText: "Get started",
  },
];

export const PricingSection = () => {
  return (
    <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-24">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-4">
          Simple, transparent pricing
        </h2>
        <p className="text-lg text-neutral-400">
          No hidden fees. No surprise charges. Pause or cancel anytime.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {plans.map((plan, i) => (
          <div
            key={i}
            className={`relative p-8 rounded-3xl border ${
              plan.highlight
                ? "bg-neutral-900 border-primary shadow-[0_0_40px_rgba(139,92,246,0.1)]"
                : "bg-black border-white/10"
            } flex flex-col`}
          >
            {plan.highlight && (
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-3 py-1 bg-primary text-black text-xs font-bold uppercase tracking-widest rounded-full">
                Most Popular
              </div>
            )}
            
            <div className="mb-8">
              <h3 className="text-2xl font-medium text-white mb-2">{plan.name}</h3>
              <p className="text-neutral-400 text-sm h-10">{plan.description}</p>
            </div>
            
            <div className="mb-8 flex items-baseline gap-1">
              <span className="text-5xl font-bold text-white">{plan.price}</span>
              <span className="text-neutral-400 font-medium">{plan.period}</span>
            </div>

            <Link
              href="/contact"
              className={`w-full py-4 rounded-xl flex items-center justify-center font-semibold text-lg transition-all duration-300 ${
                plan.highlight
                  ? "bg-white text-black hover:bg-neutral-200"
                  : "bg-neutral-900 text-white border border-white/10 hover:bg-neutral-800"
              }`}
            >
              {plan.buttonText}
            </Link>

            <div className="mt-8 space-y-4 flex-1">
              {plan.features.map((feature, j) => (
                <div key={j} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-neutral-300 text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
