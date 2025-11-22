"use client";

import { motion } from "framer-motion";

export function ConnectPanel() {
  return (
    <section
      id="connect"
      className="relative overflow-hidden bg-white py-24 dark:bg-white/[0.04]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#7f56d915,transparent_60%)]" />
      <div className="relative mx-auto max-w-4xl rounded-[36px] border border-brand/20 bg-white/70 p-12 shadow-2xl shadow-brand/15 dark:border-brand/40 dark:bg-black/60">
        <div className="grid gap-12 md:grid-cols-[1.2fr,1fr] md:items-center">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.3em] text-brand">
              Begin Resonance
            </p>
            <h2 className="text-3xl font-semibold text-black dark:text-white">
              Co-create a ritual crafted for your community&apos;s dialect.
            </h2>
            <p className="text-sm leading-relaxed text-black/70 dark:text-white/60">
              Tell us your story. We&apos;ll translate ambition into a sensory
              journey that speaks fluently across Arabic and English touchpoints.
            </p>
            <ul className="grid gap-3 text-sm text-black/70 dark:text-white/60">
              <li>• Signal cartography session within 48 hours.</li>
              <li>• Prototype ritual delivered in 10 days.</li>
              <li>• Multilingual stewardship and on-demand tuning.</li>
            </ul>
          </div>
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl border border-black/10 bg-white p-8 shadow-lg shadow-brand/10 dark:border-white/10 dark:bg-black/40"
          >
            <label className="block text-xs font-semibold uppercase tracking-[0.3em] text-black/40 dark:text-white/50">
              Name
              <input
                type="text"
                name="name"
                placeholder="Your full name"
                className="mt-2 w-full rounded-2xl border border-black/10 bg-black/5 px-4 py-3 text-sm text-black focus:border-brand focus:outline-none dark:bg-white/10 dark:text-white"
              />
            </label>
            <label className="mt-6 block text-xs font-semibold uppercase tracking-[0.3em] text-black/40 dark:text-white/50">
              Email
              <input
                type="email"
                name="email"
                placeholder="you@story.world"
                className="mt-2 w-full rounded-2xl border border-black/10 bg-black/5 px-4 py-3 text-sm text-black focus:border-brand focus:outline-none dark:bg-white/10 dark:text-white"
              />
            </label>
            <label className="mt-6 block text-xs font-semibold uppercase tracking-[0.3em] text-black/40 dark:text-white/50">
              Resonance Vision
              <textarea
                name="vision"
                placeholder="Share the ritual you imagine…"
                className="mt-2 h-32 w-full rounded-2xl border border-black/10 bg-black/5 px-4 py-3 text-sm text-black focus:border-brand focus:outline-none dark:bg-white/10 dark:text-white"
              />
            </label>
            <button
              type="submit"
              className="mt-8 w-full rounded-full bg-brand px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-brand-dark"
            >
              Request a signal call
            </button>
            <p className="mt-4 text-[11px] text-black/50 dark:text-white/40">
              We respond in English and Arabic within 24 hours.
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
