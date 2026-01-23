"use client";

import { motion } from "framer-motion";

type AnimatedSectionProps = {
  title: string;
  eyebrow?: string;
  children: React.ReactNode;
};

export function AnimatedSection({ title, eyebrow, children }: AnimatedSectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="space-y-6"
    >
      <header className="space-y-2">
        {eyebrow ? (
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
            {eyebrow}
          </p>
        ) : null}
        <h2 className="text-2xl font-semibold text-slate-900">{title}</h2>
      </header>
      {children}
    </motion.section>
  );
}
