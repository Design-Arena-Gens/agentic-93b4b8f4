"use client";

import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-gradient-to-br from-brand/10 via-transparent to-transparent">
      <div className="relative mx-auto flex max-w-6xl flex-col gap-16 px-6 pb-28 pt-24 md:flex-row md:items-center md:gap-24 md:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8 md:w-1/2"
        >
          <p className="inline-flex items-center gap-2 rounded-full border border-brand/40 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand shadow-lg shadow-brand/10 dark:bg-white/10 dark:text-brand-light">
            Future Signals
          </p>
          <h1 className="text-4xl font-semibold leading-tight md:text-6xl">
            Dاللوى تل amplifies the{" "}
            <span className="text-brand">emotive frequencies</span> of your
            digital presence.
          </h1>
          <p className="max-w-xl text-base leading-relaxed text-black/70 dark:text-white/70">
            We translate raw telemetry into multi-sensory journeys that resonate
            across dialects and devices. Craft experiences that breathe, listen,
            and evolve with every interaction.
          </p>
          <div className="flex flex-col gap-4 text-sm sm:flex-row">
            <a
              href="#signals"
              className="inline-flex items-center justify-center rounded-full bg-brand px-7 py-3 font-semibold text-white shadow-lg shadow-brand/40 transition hover:bg-brand-dark"
            >
              Explore the signal atlas
            </a>
            <a
              href="#stories"
              className="inline-flex items-center justify-center rounded-full border border-black/10 px-7 py-3 font-semibold text-black/70 transition hover:border-brand hover:text-brand dark:border-white/10 dark:text-white/70"
            >
              Listen to resonance stories
            </a>
          </div>
          <div className="grid gap-4 pt-8 sm:grid-cols-3">
            {[
              { value: "13.7ms", label: "Median signal resonance" },
              { value: "42", label: "Localized dialects supported" },
              { value: "∞", label: "Canvas for human connection" }
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-black/10 bg-white/80 px-5 py-4 text-sm dark:border-white/10 dark:bg-white/[0.04]"
              >
                <p className="text-lg font-semibold text-black dark:text-white">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs uppercase tracking-[0.3em] text-black/60 dark:text-white/50">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="relative md:w-1/2"
        >
          <div className="relative rounded-[28px] border border-white/20 bg-black/80 p-10 shadow-[0_25px_80px_-25px_rgba(127,86,217,0.55)] dark:bg-black">
            <div className="absolute -left-6 -top-6 h-32 w-32 rounded-full bg-brand/30 blur-3xl" />
            <div className="absolute -bottom-10 right-0 h-40 w-40 rounded-full bg-brand-dark/40 blur-3xl" />
            <div className="relative space-y-6">
              <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-white/40">
                <span>Signal Loop</span>
                <span>Dاللوى تل</span>
              </div>
              <div className="grid gap-4 rounded-2xl border border-white/10 bg-white/5 p-6">
                {["Echo", "Pulse", "Aurora", "Whisper"].map((mode, index) => (
                  <motion.div
                    key={mode}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                    className="flex items-center justify-between rounded-xl bg-white/10 px-4 py-3 text-sm text-white/80"
                  >
                    <span>{mode} Stream</span>
                    <span className="rounded-full bg-brand/30 px-3 py-1 text-xs font-semibold text-brand-light">
                      Active
                    </span>
                  </motion.div>
                ))}
              </div>
              <div className="flex items-center gap-3">
                <span className="inline-flex h-4 w-4 items-center justify-center rounded-full border border-white/30">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                <p className="text-sm text-white/60">
                  Live resonance stream synced across 8 cities.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[rgb(var(--background))] to-transparent" />
      <div className="absolute left-1/2 top-10 -z-10 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-brand/20 blur-[180px]" />
    </section>
  );
}
