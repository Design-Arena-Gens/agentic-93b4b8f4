"use client";

import { motion } from "framer-motion";
import { features } from "@/lib/data";

export function FeatureGrid() {
  return (
    <section id="features" className="border-y border-white/10 bg-white/60 py-24 dark:bg-white/[0.03]">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-brand">
              Crafted Frequencies
            </p>
            <h2 className="text-3xl font-semibold md:text-4xl">
              Four layers tuned for expressive, bilingual connectivity.
            </h2>
          </div>
          <p className="max-w-md text-sm text-black/70 dark:text-white/60">
            Each module attunes to cultural nuance, letting your signal travel
            elegantly from device to heart.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {features.map((feature, index) => (
            <motion.article
              key={feature.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              viewport={{ once: true, amount: 0.3 }}
              className="group relative overflow-hidden rounded-3xl border border-black/10 bg-white/90 p-8 shadow-lg shadow-brand/10 transition hover:shadow-2xl hover:shadow-brand/20 dark:border-white/10 dark:bg-white/[0.08]"
            >
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand/80">
                {feature.id}
              </span>
              <h3 className="mt-4 text-2xl font-semibold">{feature.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-black/70 dark:text-white/60">
                {feature.description}
              </p>
              <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-brand/80">
                <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                {feature.signal}
              </div>
              <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-brand/20 blur-3xl transition group-hover:bg-brand/40" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
