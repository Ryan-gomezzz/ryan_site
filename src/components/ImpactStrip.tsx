"use client";

import { animate, motion, useInView, useMotionValue, useReducedMotion, useTransform } from "framer-motion";
import { useEffect, useMemo, useRef } from "react";
import { impactMetrics } from "@/lib/data";
import { bandReveal } from "@/lib/motion";

function Counter({
  target,
  label,
  prefix = "",
  suffix = "",
}: {
  target: number;
  label: string;
  prefix?: string;
  suffix?: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));

  useEffect(() => {
    if (!inView) return;
    const controls = animate(count, target, { duration: 1.1, ease: "easeOut" });
    return () => controls.stop();
  }, [count, inView, target]);

  return (
    <div ref={ref} className="lux-card p-4 md:p-5">
      <p className="font-mono text-2xl text-cyan-300 md:text-3xl">
        {prefix}
        <motion.span>{rounded}</motion.span>
        {suffix}
      </p>
      <p className="mt-1 text-xs text-zinc-400 md:text-sm">{label}</p>
    </div>
  );
}

export default function ImpactStrip() {
  const reduceMotion = useReducedMotion();
  const stripVariants = useMemo(
    () =>
      reduceMotion
        ? {
            hidden: { opacity: 0, y: 16 },
            show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
          }
        : bandReveal,
    [reduceMotion],
  );

  return (
    <motion.section
      className="px-6 py-8 md:px-10 lg:px-16"
      variants={stripVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      <div className="mx-auto w-full max-w-6xl">
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
          {impactMetrics.map((metric) => (
            <Counter
              key={metric.label}
              target={metric.value}
              label={metric.label}
              prefix={metric.prefix}
              suffix={metric.suffix}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
}
