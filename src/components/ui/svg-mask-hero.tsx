"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export function SvgMaskHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const maskRef = useRef<SVGCircleElement>(null);
  const bgTextRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Initial entrance animation
    gsap.fromTo(
      maskRef.current,
      { r: 0 },
      { r: window.innerWidth < 768 ? 150 : 250, duration: 1.8, ease: "power3.out" }
    );
    gsap.fromTo(
      bgTextRef.current,
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, delay: 0.5, ease: "power4.out" }
    );
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current || !maskRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      gsap.to(maskRef.current, {
        cx: x,
        cy: y,
        duration: 0.5,
        ease: "power2.out",
      });
    };

    const handleMouseEnter = () => {
      setIsHovered(true);
      gsap.to(maskRef.current, {
        r: window.innerWidth < 768 ? 200 : 400,
        duration: 0.5,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
      gsap.to(maskRef.current, {
        r: window.innerWidth < 768 ? 150 : 250,
        cx: "50%",
        cy: "50%",
        duration: 0.8,
        ease: "power2.out",
      });
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
      container.addEventListener("mouseenter", handleMouseEnter);
      container.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (container) {
        container.removeEventListener("mousemove", handleMouseMove);
        container.removeEventListener("mouseenter", handleMouseEnter);
        container.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  const ErrorTrace = ({ isMask = false }) => (
    <div className={`text-left font-mono text-sm md:text-xl lg:text-2xl leading-relaxed whitespace-pre-wrap ${isMask ? 'text-[#050b14]' : 'text-white/30'}`}>
      <span className={isMask ? 'text-primary font-bold' : ''}>Import trace:</span>
      <br />  <span className={isMask ? 'text-accent' : ''}>Server Component:</span>
      <br />    <span className={isMask ? 'text-[#050b14]/70' : ''}>./src/components/Footer.tsx</span>
      <br />    <span className={isMask ? 'text-[#050b14]/70' : ''}>./src/app/layout.tsx</span>
      <br />
      <br /> <span className={isMask ? 'text-magenta font-bold' : ''}>GET / 500 in 33ms</span> (next.js: 12ms, application-code: 21ms)
      <br /><span className={isMask ? 'text-primary' : ''}>[browser] Uncaught Error:</span> ./src/components/Footer.tsx:3:1
      <br /><span className={isMask ? 'bg-primary/20 p-1 rounded font-bold' : 'font-bold'}>Export Facebook doesn't exist in target module</span>
      <br />  1 | import Link from 'next/link';
      <br />  2 | import Image from 'next/image';
      <br /><span className={isMask ? 'text-magenta font-bold' : ''}>{`> 3 | import { Instagram, Facebook, Twitter, Linkedin } from 'lucide-react';`}</span>
      <br />    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    </div>
  );

  return (
    <section
      ref={containerRef}
      className="relative w-full h-[100vh] min-h-[600px] overflow-hidden bg-[#050b14] flex items-center justify-center cursor-default pt-16"
    >
      {/* Background Base Layer (Dark/Subtle) */}
      <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center z-10 pointer-events-none">
        <div ref={bgTextRef} className="max-w-6xl mx-auto border border-white/5 bg-white/5 p-8 rounded-2xl backdrop-blur-sm">
          <ErrorTrace />
        </div>
        <p className="absolute bottom-16 text-sm text-white/20 font-medium tracking-wide">
          Hover to debug the matrix.
        </p>
      </div>

      {/* SVG Clip Path Definition */}
      <svg className="absolute w-0 h-0">
        <defs>
          <clipPath id="hero-mask">
            <circle ref={maskRef} cx="50%" cy="50%" r="0" />
          </clipPath>
        </defs>
      </svg>

      {/* Masked Foreground Layer (Vibrant/Revealed) */}
      <div 
        className="absolute inset-0 z-20 flex flex-col items-center justify-center p-8 text-center bg-white"
        style={{ clipPath: "url(#hero-mask)" }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-accent to-magenta opacity-30 pointer-events-none mix-blend-multiply" />
        
        {/* Subtle grid background inside the mask */}
        <div className="absolute inset-0 opacity-[0.15] mix-blend-multiply pointer-events-none" style={{ backgroundImage: 'linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

        <div className="relative z-30 flex flex-col items-center justify-center pointer-events-none w-full max-w-6xl mx-auto">
          <div className="border-2 border-primary/30 bg-white/40 p-8 rounded-2xl backdrop-blur-md shadow-2xl shadow-primary/20 w-full text-left">
            <ErrorTrace isMask={true} />
          </div>
        </div>
      </div>
    </section>
  );
}
