"use client";
import React, { useState, useEffect } from "react";

import { Database, Cloud, MessageSquare, Layers, Globe, Cpu } from "lucide-react";

const ICONS = [
  <Database key="db" className="w-full h-full text-blue-500" />,
  <Cloud key="cloud" className="w-full h-full text-indigo-500" />,
  <MessageSquare key="msg" className="w-full h-full text-green-500" />,
  <Layers key="layers" className="w-full h-full text-orange-500" />,
  <Globe key="globe" className="w-full h-full text-cyan-500" />,
  <Cpu key="cpu" className="w-full h-full text-purple-500" />,
];

interface SemiCircleOrbitProps {
  radius: number;
  centerX: number;
  centerY: number;
  count: number;
  iconSize: number;
}

function SemiCircleOrbit({ radius, centerX, centerY, count, iconSize }: SemiCircleOrbitProps) {
  return (
    <>
      {/* Semi-circle glow background */}
      <div className="absolute inset-0 flex justify-center">
        <div
          className="
            w-[1000px] h-[1000px] rounded-full 
            bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.25),transparent_70%)]
            dark:bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.25),transparent_70%)]
            blur-3xl 
            -mt-40 
            pointer-events-none
          "
          style={{ zIndex: 0 }}
        />
      </div>

      {/* Orbit icons */}
      {Array.from({ length: count }).map((_, index) => {
        const angle = (index / (count - 1)) * 180;
        const x = radius * Math.cos((angle * Math.PI) / 180);
        const y = radius * Math.sin((angle * Math.PI) / 180);
        const icon = ICONS[index % ICONS.length];

        // Tooltip positioning — above or below based on angle
        const tooltipAbove = angle > 90;

        return (
          <div
            key={index}
            className="absolute flex flex-col items-center group"
            style={{
              left: `${centerX + x - iconSize / 2}px`,
              top: `${centerY - y - iconSize / 2}px`,
              zIndex: 5,
            }}
          >
            <div 
              className="object-contain cursor-pointer transition-transform hover:scale-110 flex items-center justify-center bg-background rounded-full p-2 border border-white/10 shadow-xl"
              style={{ width: iconSize, height: iconSize }}
            >
              {icon}
            </div>

            {/* Tooltip */}
            <div
              className={`absolute ${
                tooltipAbove ? "bottom-[calc(100%+8px)]" : "top-[calc(100%+8px)]"
              } hidden group-hover:block w-28 rounded-lg bg-black px-2 py-1 text-xs text-white shadow-lg text-center`}
            >
              App {index + 1}
              <div
                className={`absolute left-1/2 -translate-x-1/2 w-3 h-3 rotate-45 bg-black ${
                  tooltipAbove ? "top-full" : "bottom-full"
                }`}
              ></div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default function MultiOrbitSemiCircle() {
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateSize = () => setSize({ width: window.innerWidth, height: window.innerHeight });
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const baseWidth = Math.min(size.width * 0.8, 700);
  const centerX = baseWidth / 2;
  const centerY = baseWidth * 0.5;

  const iconSize =
    size.width < 480
      ? Math.max(24, baseWidth * 0.05)
      : size.width < 768
      ? Math.max(28, baseWidth * 0.06)
      : Math.max(32, baseWidth * 0.07);

  return (
    <section className="py-12 relative w-full overflow-hidden flex flex-col items-center justify-center">
      <div className="relative flex flex-col items-center text-center z-10 w-full max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">AI Automations & <span className="text-gradient">Integrations</span></h2>
        <p className="mb-12 max-w-2xl text-gray-400 text-lg mx-auto leading-relaxed">
          Seamlessly connect your custom software and intelligent workflows with your favorite applications. We architect integrations that run autonomously and boost efficiency.
        </p>

        <div
          className="relative mx-auto mt-12"
          style={{ width: baseWidth, height: baseWidth * 0.6 }}
        >
          <SemiCircleOrbit radius={baseWidth * 0.22} centerX={centerX} centerY={centerY} count={6} iconSize={iconSize} />
          <SemiCircleOrbit radius={baseWidth * 0.36} centerX={centerX} centerY={centerY} count={8} iconSize={iconSize} />
          <SemiCircleOrbit radius={baseWidth * 0.5} centerX={centerX} centerY={centerY} count={10} iconSize={iconSize} />
        </div>
      </div>
    </section>
  );
}
