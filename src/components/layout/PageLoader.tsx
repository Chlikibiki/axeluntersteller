"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Logo } from "@/components/shared/Logo";
export function PageLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {loading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-starlight-bg px-8"
          role="status"
          aria-label="Chargement"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-[1] flex justify-center"
          >
            <Logo size="xl" linked={false} priority className="mx-auto object-center" />
          </motion.div>
          <motion.div
            className="absolute bottom-16 left-1/2 z-[1] h-px w-32 -translate-x-1/2 bg-starlight-border"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformOrigin: "center" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
