"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";
import { currentlyBuilding } from "@/lib/data";
import { useUptime } from "@/lib/hooks";

export default function CurrentlyBuilding() {
  const uptime = useUptime(currentlyBuilding.startDate);

  return (
    <SectionWrapper id="building" number="07." title="Currently Building">
      <motion.article
        initial={{ opacity: 0, x: -24 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.12 }}
        transition={{ duration: 0.45 }}
        className="lux-card overflow-hidden"
      >
        <div className="flex items-center justify-between border-b border-zinc-800 px-5 py-4">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
            <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
            <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
          </div>
          <p className="eyebrow">System Status</p>
        </div>
        <div className="space-y-5 p-7 md:p-8">
          <p className="font-mono text-xs tracking-[0.14em] text-zinc-200">
            STATUS: ACTIVE{" "}
            <span className="ml-2 inline-block h-2 w-2 animate-pulse rounded-full bg-amber-500" />
          </p>
          <h3 className="text-2xl font-semibold tracking-tight text-zinc-100">{currentlyBuilding.title}</h3>
          <p className="max-w-3xl text-[15px] leading-7 text-zinc-400">{currentlyBuilding.description}</p>
          <div className="space-y-2">
            <p className="font-mono text-xs text-zinc-400">PROGRESS</p>
            <div className="h-2 overflow-hidden rounded bg-zinc-900">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${currentlyBuilding.progress}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="h-full bg-cyan-300"
              />
            </div>
            <p className="font-mono text-xs text-cyan-300">{currentlyBuilding.progress}%</p>
          </div>
          <p className="font-mono text-xs text-zinc-500">UPTIME: {uptime}</p>
        </div>
      </motion.article>
    </SectionWrapper>
  );
}
