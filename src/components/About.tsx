"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";
import { profile } from "@/lib/data";

export default function About() {
  return (
    <SectionWrapper id="about" number="02." title="Professional Profile">
      <div className="grid gap-6 md:grid-cols-[1.2fr_0.8fr] md:items-start">
        <div className="lux-card space-y-5 p-7 md:p-8">
          {profile.about.map((line, index) => (
            <motion.p
              key={line}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ delay: index * 0.08, duration: 0.45 }}
              className="max-w-2xl text-base leading-8 text-zinc-300 md:text-[17px]"
            >
              {line}
            </motion.p>
          ))}
        </div>
        <aside className="lux-card border-l-2 border-l-cyan-300 p-6">
          <p className="text-2xl italic leading-9 tracking-tight text-zinc-100">{profile.quote}</p>
        </aside>
      </div>
    </SectionWrapper>
  );
}
