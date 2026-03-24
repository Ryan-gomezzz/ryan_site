"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function JourneyProgress() {
  const { scrollYProgress } = useScroll();
  const smooth = useSpring(scrollYProgress, {
    stiffness: 95,
    damping: 22,
    mass: 0.2,
  });

  return (
    <div className="pointer-events-none fixed right-3 top-20 z-40 hidden h-[72vh] w-[2px] bg-zinc-800/80 md:block">
      <motion.div style={{ scaleY: smooth }} className="origin-top h-full w-full bg-cyan-300 shadow-signal" />
    </div>
  );
}
