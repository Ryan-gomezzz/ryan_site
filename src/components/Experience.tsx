"use client";

import SectionWrapper from "@/components/SectionWrapper";
import { education, experience } from "@/lib/data";

export default function Experience() {
  return (
    <SectionWrapper id="experience" number="03." title="Experience + Education">
      <div className="grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">
        <div className="lux-card p-7 md:p-8">
          <p className="eyebrow">Experience</p>
          <div className="mt-7 space-y-7">
            {experience.map((item) => (
              <article key={`${item.org}-${item.role}`} className="relative pl-8">
                <span className="absolute left-0 top-2 h-2 w-2 rounded-full bg-cyan-300" />
                <span className="absolute left-[3px] top-4 h-[calc(100%-8px)] w-px bg-zinc-800" />
                <p className="text-xl font-semibold tracking-tight text-zinc-100">{item.role}</p>
                <p className="mt-1 font-mono text-xs tracking-wide text-zinc-400">
                  {item.org}  |  {item.duration}
                </p>
                <ul className="mt-3 space-y-2 text-[15px] leading-7 text-zinc-300">
                  {item.points.map((point) => (
                    <li key={point}>- {point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>

        <div className="lux-card p-7 md:p-8">
          <p className="eyebrow">Education</p>
          <div className="mt-5 space-y-5">
            {education.map((item) => (
              <article key={item.school} className="rounded-lg border border-zinc-800/80 bg-zinc-900/50 p-4">
                <p className="text-base font-semibold tracking-tight text-zinc-100">{item.school}</p>
                <p className="mt-1 text-sm text-zinc-300">{item.degree}</p>
                <p className="mt-1 font-mono text-xs text-zinc-400">{item.duration}</p>
                <p className="mt-1 font-mono text-xs text-amber-400">{item.score}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
