// components/TransitionWrapper.tsx
'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation'; // This is the correct way to get the current path in the App Router

export function RouteTransition({ children }: { children: React.ReactNode }){
  const pathname = usePathname(); // Get the current path for transitions

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}  // Ensure key changes only when the route changes
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.5 }}  // Duration of the transition
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};
