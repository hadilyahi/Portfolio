"use client";
import { motion, MotionProps } from "framer-motion";
import Image from "next/image";
const MotionDiv = motion.div as React.ElementType<
  MotionProps & React.HTMLAttributes<HTMLDivElement>
>;
const Photo = () => {
  return (
    <div className="w-full h-full relative ">
      <MotionDiv
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.2, ease: "easeIn" },
        }}
      >
        <MotionDiv
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2, duration: 0.2, ease: "easeInOut" },
          }}
          className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] mix-blend-lighten absolute "
        >
          <Image
            src="/myPhoto.png"
            priority
            quality={100}
            fill
            alt="my photo"
            className="object-contain"
          />
        </MotionDiv>
      </MotionDiv>
      <motion.svg
        className="w-[300px] xl:w-[506px] h-[300px] xl:h-[506px] "
        fill="transparent"
        viewBox="0 0 506 506"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.circle
          cx="253"
          cy="253"
          r="250"
          strokeWidth="4"
          stroke="#00ff99"
          strokeLinejoin="round"
          initial={{ strokeDasharray:"24 10 0 0"}}
          animate={{
            strokeDasharray:["15 120 25 25","16 25 92 72","4 250 22 22"],
           rotate:[120,360],
           transition: { repeat:Infinity,  repeatType:"reverse", duration: 20, ease: "easeInOut" },
          }}
        />
      </motion.svg>
    </div>
  );
};

export default Photo;