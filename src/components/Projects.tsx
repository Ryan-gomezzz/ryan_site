"use client";

import { motion, useReducedMotion } from "framer-motion";
import { FolderGit2 } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import { projects } from "@/lib/data";

export default function Projects() {
  const reduceMotion = useReducedMotion();

  return (
    <SectionWrapper id="projects" number="04." title="Selected Case Studies">
      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((project, index) => (
          <motion.article
            key={project.id}
            initial={reduceMotion ? { opacity: 0, y: 10 } : { opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.62, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -4 }}
            className={`lux-card signal-hover group p-6 md:p-7 ${
              project.featured ? "md:col-span-2 md:min-h-[340px]" : "md:min-h-[320px]"
            }`}
          >
            <div className="flex items-start justify-between">
              <p className="eyebrow">{project.id}</p>
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                aria-label={`${project.title} GitHub`}
                className="rounded-md border border-zinc-700 p-2 text-zinc-400 transition-colors hover:text-cyan-300"
              >
                <FolderGit2 size={18} />
              </a>
            </div>

            <h3 className="mt-4 text-2xl font-semibold tracking-tight text-zinc-100">{project.title}</h3>
            <p className="mt-3 max-w-2xl text-[15px] leading-7 text-zinc-400">{project.problem}</p>
            <div className="mt-4 flex h-28 items-center justify-center rounded-xl border border-dashed border-zinc-700 bg-zinc-900/40">
              <p className="font-mono text-[11px] text-zinc-500">
                Add project preview:
                <br />
                {project.image}
              </p>
            </div>
            <div className="mt-5 flex flex-wrap gap-2.5">
              {project.stack.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-zinc-700 px-3 py-1 font-mono text-[11px] text-zinc-300"
                >
                  {item}
                </span>
              ))}
            </div>
            <p className="mt-6 rounded-md border border-amber-500/25 bg-amber-500/10 px-3 py-2 text-sm text-zinc-200">
              {project.impact}
            </p>
          </motion.article>
        ))}
      </div>
    </SectionWrapper>
  );
}
