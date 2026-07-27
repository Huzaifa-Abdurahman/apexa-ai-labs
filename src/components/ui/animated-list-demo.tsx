"use client";

import { AnimatedList } from "@/components/ui/animated-list";
import { cn } from "@/lib/utils";

let notifications = [
  { name: "New sign up", description: "Magic UI", time: "15m ago", icon: "💸", color: "#00C9A7" },
  { name: "User signed in", description: "Magic UI", time: "10m ago", icon: "👤", color: "#FFB800" },
  { name: "New message", description: "Magic UI", time: "5m ago", icon: "💬", color: "#FF3D71" },
  { name: "New event", description: "Magic UI", time: "2m ago", icon: "🗞️", color: "#1E86FF" },
];

export default function AnimatedListDemo({ className }: { className?: string }) {
  return (
    <div className={cn("flex w-full flex-col items-center justify-center p-6", className)}>
      <AnimatedList>
        {notifications.map((item, idx) => (
          <figure
            key={idx}
            className={cn(
              "relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-2xl p-4",
              "transition-all duration-200 ease-in-out hover:scale-[103%]",
              "bg-white shadow-[0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
              "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]"
            )}
          >
            <div className="flex flex-row items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-2xl" style={{ backgroundColor: item.color }}>
                <span className="text-lg">{item.icon}</span>
              </div>
              <div className="flex flex-col overflow-hidden">
                <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white">
                  <span className="text-sm sm:text-lg">{item.name}</span>
                  <span className="mx-1">·</span>
                  <span className="text-xs text-gray-500">{item.time}</span>
                </figcaption>
                <p className="text-sm font-normal dark:text-white/60">{item.description}</p>
              </div>
            </div>
          </figure>
        ))}
      </AnimatedList>
    </div>
  );
}
