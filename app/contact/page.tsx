"use client";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

import { Input } from "@/components/ui/input";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "0660717211",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "hadiltech17@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Algerie/Djelfa",
  },
];
import { motion } from "framer-motion";
const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form  */}
          <div className="xl:h-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-8 bg-[#27272c] rounded-xl ">
              <h3 className="text-4xl text-accent">Lets work together</h3>
              <p className="text-white/60">
                For more details or inquiries, feel free to contact me directly!
              </p>
              {/* input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="firstname" placeholder="Firstname" />
                <Input type="Lastname" placeholder="Lastname" />
                <Input type="email" placeholder="Email address" />
                <Input type="phone" placeholder="Phone number" />
              </div>
              <Textarea
                className="h-[200px] "
                placeholder="Type Your message here."
              />
              <Button size="default" className="max-w-40 ">Send a message</Button>
            </form>
          </div>
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flec flex-col gap-10">
              {info.map((item,index)=>{
                return (
                  <li key={index} className="flex items-center gap-6">
                        <div className="w-[52px] h-[52px]  xl:w-[52px] xl:h-[52px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                          <div className="text-[28px]">{item.icon}</div>
                        </div>
                        <div className="flex-1">
                          <p className="text-white/60">{item.title}</p>
                          <h3 className="text-xl">{item.description}</h3>
                        </div>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
