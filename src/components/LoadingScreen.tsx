"use client";

import { AnimatePresence, motion } from "framer-motion";

type Props = { show: boolean };

export default function LoadingScreen({ show }: Props) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
          className="loader-backdrop fixed inset-0 z-[70] flex flex-col items-center justify-center gap-8"
        >
          <div className="cube-wrap">
            <div className="cube">
              <span className="cube-face" />
              <span className="cube-face" />
              <span className="cube-face" />
              <span className="cube-face" />
              <span className="cube-face" />
              <span className="cube-face" />
            </div>
          </div>
          <p className="font-mono text-xs tracking-[0.22em] text-zinc-300">
            INITIALIZING RYAN.OS
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
