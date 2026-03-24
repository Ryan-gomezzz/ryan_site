"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useMemo } from "react";
import { profile } from "@/lib/data";
import TextScramble from "@/components/TextScramble";
import { heroOpen } from "@/lib/motion";
import Image from "next/image";

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const shell = useMemo(
    () =>
      reduceMotion
        ? {
            hidden: { opacity: 0, y: 12 },
            show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
          }
        : heroOpen,
    [reduceMotion],
  );

  return (
    <motion.section
      id="hero"
      className="relative px-6 pb-14 pt-32 md:px-10 lg:px-16"
      variants={shell}
      initial="hidden"
      animate="show"
    >
      <div className="mx-auto grid w-full max-w-6xl items-end gap-8 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="lux-card p-7 md:p-10">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="eyebrow"
          >
            {profile.label}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-zinc-50 md:text-6xl"
          >
            {profile.headline}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.45 }}
            className="mt-5 font-mono text-sm text-zinc-300 md:text-base"
          >
            <span className="text-zinc-500">Specializing in</span>{" "}
            <TextScramble words={profile.roles} className="text-cyan-300" />
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.32, duration: 0.45 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="inline-flex rounded-md bg-cyan-300 px-6 py-3 font-mono text-sm tracking-wide text-zinc-950 transition hover:bg-cyan-200"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex rounded-md border border-zinc-700 px-6 py-3 font-mono text-sm tracking-wide text-zinc-200 transition hover:border-zinc-500"
            >
              Contact
            </a>
          </motion.div>
          <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4">
            {profile.stats.map((item) => (
              <div key={item.label} className="rounded-md border border-zinc-800 bg-zinc-900/55 p-3">
                <p className="font-mono text-sm text-cyan-300">{item.value}</p>
                <p className="mt-1 text-xs text-zinc-400">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="lux-card p-4 md:p-5">
          <div className="relative h-[420px] overflow-hidden rounded-xl border border-zinc-800/80 bg-zinc-900">
            <Image
              src={profile.profileImage}
              alt="Ryan Gomez profile portrait"
              fill
              priority
              className="object-cover object-center"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-zinc-950/65 via-transparent to-zinc-950/25" />
            <div className="absolute bottom-4 left-4 rounded-md border border-zinc-700 bg-zinc-950/70 px-3 py-2">
              <p className="font-mono text-[11px] tracking-[0.18em] text-zinc-300">{profile.location}</p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
