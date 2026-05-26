"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CINEMA_TIME, EASE } from "@/lib/motion";
import { Logo } from "@/components/shared/Logo";

export function PageLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), CINEMA_TIME.loaderHold);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {loading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: CINEMA_TIME.loaderExit,
            ease: [...EASE.silence],
          }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black px-8"
          role="status"
          aria-label="Chargement"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, ease: [...EASE.silence] }}
            className="relative z-[1] flex justify-center"
          >
            <Logo size="xl" linked={false} priority className="mx-auto object-center" />
          </motion.div>
          <motion.div
            className="absolute bottom-[18%] left-1/2 z-[1] h-px w-24 -translate-x-1/2 bg-starlight-border/60 md:w-32"
            initial={{ scaleX: 0, opacity: 0.4 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 1.8, ease: [...EASE.silence], delay: 0.35 }}
            style={{ transformOrigin: "center" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
