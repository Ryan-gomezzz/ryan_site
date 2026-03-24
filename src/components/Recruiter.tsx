"use client";

import { MapPin } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import { recruiter } from "@/lib/data";

export default function Recruiter() {
  return (
    <SectionWrapper id="recruiter" number="08." title="Recruiter Snapshot">
      <div className="lux-card border-y border-cyan-800/50 p-7 md:p-10">
        <h3 className="text-3xl font-semibold tracking-tight text-zinc-100 md:text-5xl">
          Open to opportunities in Europe
        </h3>
        <div className="mt-5 flex flex-wrap gap-3">
          {recruiter.locations.map((location) => (
            <span
              key={location}
              className="inline-flex items-center gap-2 rounded-full border border-zinc-700 px-3 py-1.5 font-mono text-xs text-zinc-200"
            >
              <MapPin size={13} className="text-cyan-300" />
              {location}
            </span>
          ))}
        </div>
        <p className="mt-6 font-mono text-sm leading-8 text-zinc-300">
          {recruiter.roles.map((role) => `> ${role}`).join("   ")}
        </p>
        <a
          href="#contact"
          className="mt-8 inline-flex rounded-md bg-cyan-300 px-5 py-2.5 font-mono text-sm text-zinc-900 transition-colors hover:bg-cyan-200"
        >
          Let&apos;s Talk
        </a>
      </div>
    </SectionWrapper>
  );
}
