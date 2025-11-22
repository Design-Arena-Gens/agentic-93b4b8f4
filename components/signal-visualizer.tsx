"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { signalPhases } from "@/lib/data";

const spectralScales = [
  "from-[#8E8BFF] via-[#7F56D9] to-[#3D1B81]",
  "from-[#F9C6FF] via-[#AA6EFF] to-[#4F21A5]",
  "from-[#63E7F7] via-[#1B9AAA] to-[#05445E]",
  "from-[#FFD29D] via-[#FF8A4C] to-[#C05621]"
];

export function SignalVisualizer() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="signals" className="bg-black py-28 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.4em] text-white/50">
              Resonance Sequencer
            </p>
            <h2 className="text-3xl font-semibold md:text-4xl">
              Tune each phase of your multi-language signal journey.
            </h2>
          </div>
          <p className="max-w-md text-sm text-white/60">
            Select a band to inspect the choreography. Watch the gradient pulse
            adapt and preview how Dاللوى تل orchestrates the experience.
          </p>
        </div>
        <div className="grid gap-10 lg:grid-cols-[340px,1fr]">
          <div className="space-y-4">
            {signalPhases.map((phase, index) => {
              const isActive = index === activeIndex;
              return (
                <button
                  key={phase.key}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`group w-full rounded-2xl border border-white/10 p-5 text-left transition ${
                    isActive
                      ? "border-brand bg-white/10 shadow-[0_25px_80px_-25px_rgba(127,86,217,0.65)]"
                      : "hover:border-brand/60 hover:bg-white/[0.06]"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono uppercase tracking-[0.3em] text-white/50">
                      {phase.key}
                    </span>
                    <span
                      className={`inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-xs font-semibold uppercase tracking-wider transition group-hover:border-brand/40 group-hover:text-brand ${
                        isActive ? "border-brand text-brand" : ""
                      }`}
                    >
                      {index + 1}
                    </span>
                  </div>
                  <h3 className="mt-3 text-xl font-semibold">{phase.title}</h3>
                  <p className="mt-2 text-sm text-white/60">{phase.detail}</p>
                </button>
              );
            })}
          </div>
          <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-8">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0.3, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className={`relative h-96 w-full overflow-hidden rounded-[28px] bg-gradient-to-br ${spectralScales[activeIndex]} p-1`}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#ffffff22,transparent_55%)]" />
              <motion.div
                key={`${activeIndex}-trace`}
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.8, ease: "easeInOut" }}
              >
                <svg
                  viewBox="0 0 600 400"
                  className="h-full w-full"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <defs>
                    <linearGradient id="trace" gradientTransform="rotate(90)">
                      <stop offset="0%" stopColor="rgba(255,255,255,0.85)" />
                      <stop offset="100%" stopColor="rgba(255,255,255,0.25)" />
                    </linearGradient>
                  </defs>
                  <motion.path
                    d="M-10 320 C 80 80, 160 360, 240 180 S 400 40, 500 220 S 640 360, 640 360"
                    stroke="url(#trace)"
                    strokeWidth={8}
                    fill="transparent"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2.4, ease: "easeInOut" }}
                  />
                  <g fill="rgba(255,255,255,0.4)">
                    {Array.from({ length: 12 }).map((_, index) => (
                      <motion.circle
                        key={index}
                        cx={40 + index * 48}
                        cy={200 + Math.sin((index + activeIndex) * 0.6) * 120}
                        r={5 + (index % 3)}
                        initial={{ scale: 0.7, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{
                          delay: 0.25 + index * 0.06,
                          duration: 0.4,
                          ease: "easeOut"
                        }}
                      />
                    ))}
                  </g>
                </svg>
              </motion.div>
              <div className="absolute bottom-6 right-6 rounded-full border border-white/20 bg-black/50 px-4 py-2 text-xs uppercase tracking-[0.3em] text-white/60 backdrop-blur">
                Live · {signalPhases[activeIndex].key}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
