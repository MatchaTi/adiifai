"use client";

import { motion } from "framer-motion";

interface FadeUpContainerProps {
  children: React.ReactNode;
  index: number;
  className?: string;
}

export default function ListContainer(
  { children, index, className }: FadeUpContainerProps,
) {
  return (
    <motion.li
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: 0.3 * index }}
      className={className}
      key={index}
    >
      {children}
    </motion.li>
  );
}
