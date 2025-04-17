// components/TransitionWrapper.tsx
'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation'; // Use the Next.js navigation hook for the path

const TransitionWrapper = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname(); // Get the current path for transitions

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}  // Use the pathname to trigger animation on route change
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.5 }}  // Adjust the duration for smoother transitions
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default TransitionWrapper;
