"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';

export const TrustedBy = () => {
  return (
    <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-20 border-t border-white/5">
      <h2 className="font-mono text-center text-sm leading-4 font-normal uppercase text-neutral-500 tracking-wider">
        Trusted by fast-growing startups
      </h2>
      <div className="mx-auto mt-12 flex max-w-6xl flex-wrap items-center justify-center gap-x-8 gap-y-8 md:gap-x-20 md:gap-y-14">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="relative h-8 w-32 md:h-10 md:w-40 grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300">
            <div className="absolute inset-0 flex items-center justify-center font-bold text-xl md:text-2xl text-white/40">
              LOGO {i}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
