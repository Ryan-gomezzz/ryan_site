"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useMemo, useState } from "react";
import { bandReveal } from "@/lib/motion";
import { techIconUrl, techStackLogos } from "@/lib/techLogos";

function LogoTile({ name, slug }: { name: string; slug: string }) {
  const [active, setActive] = useState(false);
  const color = active ? "22d3ee" : "71717a";

  return (
    <div
      className="group flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-xl border border-zinc-800/90 bg-zinc-950/50 shadow-inner transition duration-300 hover:border-cyan-500/35 hover:shadow-[0_0_24px_rgba(34,211,238,0.12)] md:h-14 md:w-14"
      title={name}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
    >
      <Image
        src={techIconUrl(slug, color)}
        alt=""
        width={28}
        height={28}
        unoptimized
        className="object-contain transition duration-300 group-hover:scale-110"
      />
    </div>
  );
}

export default function TechLogoWall() {
  const reduceMotion = useReducedMotion();
  const variants = useMemo(
    () =>
      reduceMotion
        ? {
            hidden: { opacity: 0, y: 12 },
            show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
          }
        : bandReveal,
    [reduceMotion],
  );

  const rowA = useMemo(() => [...techStackLogos, ...techStackLogos], []);
  const rowB = useMemo(() => {
    const half = Math.ceil(techStackLogos.length / 2);
    const rotated = [...techStackLogos.slice(half), ...techStackLogos.slice(0, half)];
    return [...rotated, ...rotated];
  }, []);

  if (reduceMotion) {
    return (
      <motion.section
        aria-label="Technologies"
        className="px-6 py-8 md:px-10 lg:px-16"
        variants={variants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="mx-auto max-w-6xl lux-card px-6 py-8 md:px-8">
          <p className="eyebrow">Stack &amp; tools</p>
          <p className="mt-2 max-w-2xl text-sm text-zinc-400">
            Languages, ML frameworks, cloud, and product tooling aligned with my{" "}
            <a
              href="https://github.com/Ryan-gomezzz"
              className="text-cyan-400/90 underline-offset-2 hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              GitHub profile
            </a>
            .
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3 md:justify-start">
            {techStackLogos.map((t) => (
              <LogoTile key={t.slug} name={t.name} slug={t.slug} />
            ))}
          </div>
        </div>
      </motion.section>
    );
  }

  return (
    <motion.section
      aria-label="Technologies"
      className="px-6 py-8 md:px-10 lg:px-16"
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="tech-marquee-outer mx-auto max-w-6xl lux-card overflow-hidden px-4 py-7 md:px-6 md:py-8">
        <p className="eyebrow text-center md:text-left">Stack &amp; tools</p>
        <p className="mx-auto mt-2 max-w-2xl text-center text-sm text-zinc-400 md:mx-0 md:text-left">
          Languages, ML frameworks, cloud, and product tooling — same breadth as my public{" "}
          <a
            href="https://github.com/Ryan-gomezzz"
            className="text-cyan-400/90 underline-offset-2 hover:underline"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>{" "}
          work.
        </p>

        <div className="tech-marquee-wrap mt-8 space-y-5">
          <div className="overflow-hidden">
            <div className="tech-marquee-track">
              {rowA.map((t, i) => (
                <LogoTile key={`a-${t.slug}-${i}`} name={t.name} slug={t.slug} />
              ))}
            </div>
          </div>
          <div className="overflow-hidden">
            <div className="tech-marquee-track tech-marquee-track-reverse">
              {rowB.map((t, i) => (
                <LogoTile key={`b-${t.slug}-${i}`} name={t.name} slug={t.slug} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
