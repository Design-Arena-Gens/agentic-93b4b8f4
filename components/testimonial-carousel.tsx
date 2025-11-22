"use client";

import { motion } from "framer-motion";
import { storylines } from "@/lib/data";

export function TestimonialCarousel() {
  return (
    <section
      id="stories"
      className="relative overflow-hidden border-y border-white/10 bg-gradient-to-br from-brand/10 via-transparent to-transparent py-24"
    >
      <div className="absolute -z-10 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-brand/20 blur-[220px]" />
      <div className="mx-auto max-w-5xl px-6 text-center">
        <p className="text-sm uppercase tracking-[0.35em] text-brand">
          Resonance Stories
        </p>
        <h2 className="mt-6 text-3xl font-semibold md:text-4xl">
          Communities invite Dاللوى تل into their rituals.
        </h2>
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {storylines.map((story, index) => (
            <motion.blockquote
              key={story.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-[32px] border border-brand/20 bg-white/70 p-8 text-left shadow-lg shadow-brand/15 dark:bg-white/[0.05]"
            >
              <p className="text-sm leading-relaxed text-black/70 dark:text-white/70">
                {story.quote}
              </p>
              <footer className="mt-6 flex flex-col gap-2 text-sm font-semibold text-brand dark:text-brand-light">
                <span>{story.name}</span>
                <span className="text-xs font-medium uppercase tracking-[0.3em] text-brand/80 dark:text-brand/60">
                  {story.metric}
                </span>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
