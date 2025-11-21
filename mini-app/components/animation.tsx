"use client";

import { motion } from "framer-motion";

export function Animation() {
  return (
    <motion.div
      animate={{ scale: [1, 1.1, 1] }}
      transition={{ duration: 2, repeat: Infinity }}
      className="h-64 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg"
    >
      <p className="text-center text-white pt-24">Battle Arena</p>
    </motion.div>
  );
}
