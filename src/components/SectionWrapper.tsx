"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode, useMemo } from "react";
import { sectionReveal } from "@/lib/motion";

type Props = {
  id: string;
  number: string;
  title: string;
  children: ReactNode;
  className?: string;
};

export default function SectionWrapper({
  id,
  number,
  title,
  children,
  className = "",
}: Props) {
  const reduceMotion = useReducedMotion();
  const variants = useMemo(
    () =>
      reduceMotion
        ? {
            hidden: { opacity: 0, y: 16 },
            show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
          }
        : sectionReveal,
    [reduceMotion],
  );

  return (
    <motion.section
      id={id}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.12, margin: "0px 0px -8% 0px" }}
      className={`relative scroll-mt-24 px-6 py-16 md:px-10 md:py-20 lg:px-16 lg:py-24 ${className}`}
    >
      <div className="mx-auto w-full max-w-6xl section-shell">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="font-mono text-[11px] tracking-[0.24em] text-zinc-500"
        >
          {number}
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
          className="mt-3 text-3xl font-semibold tracking-tight text-zinc-100 md:text-4xl"
        >
          {title}
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.12 }}
          className="mt-8 md:mt-9"
        >
          {children}
        </motion.div>
      </div>
    </motion.section>
  );
}
