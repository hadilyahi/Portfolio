"use client";

import { AnimatePresence, motion, MotionProps } from "framer-motion";
import { usePathname } from "next/navigation";


const MotionDiv = motion.div as React.ElementType<MotionProps & React.HTMLAttributes<HTMLDivElement>>;

interface PageTransitionProps {
  children: React.ReactNode;
}

const PageTransition = ({ children }: PageTransitionProps) => {
  const pathname = usePathname();

  return (
    <AnimatePresence>
        <div key={pathname}>
      <MotionDiv
        initial={{ opacity: 1 }}
        animate={{
          opacity: 0,
          transition: { delay: 1, duration: 0.4, ease: "easeInOut" }
        }}
        className="h-screen w-screen fixed bg-primary top-0 pointer-events-none"
      />
        {children}
        </div>
     
    </AnimatePresence>
  );
};

export default PageTransition;
