import { motion, MotionProps } from "framer-motion";


const stairAnimation = {
  initial: { 
    top: "0%",
  },
  animate: {
    top: "100%",
  },
  exit: {
    top: ["100%", "0%"],
  },
};


const reverseIndex = (index: number) => { 
  const totalSteps = 6; 
  return totalSteps - index - 1; 
};


const MotionDiv = motion.div as React.ElementType<MotionProps & React.HTMLAttributes<HTMLDivElement>>;


const Stairs = () => {
  return (
    <>
      {/* motion divs */}
      {Array.from({ length: 6 }).map((_, index: number) => (
        <MotionDiv
          key={index}
          variants={stairAnimation}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{
            duration: 0.2,
            ease: "easeInOut",
            delay: reverseIndex(index) * 0.1,
          }}
          className="h-full w-full bg-white relative"
        />
      ))}
    </>
  );
};

export default Stairs;
