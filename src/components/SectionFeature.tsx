"use client";
import Button from "./Button";
import { PiFlame } from "react-icons/pi";
import { PiOfficeChair } from "react-icons/pi";
import { PiDesk } from "react-icons/pi";
import { MdOutlineMeetingRoom } from "react-icons/md";
import { FaWifi } from "react-icons/fa";
import { TbLockAccess } from "react-icons/tb";
import { GiOfficeChair } from "react-icons/gi";
import { BiDrink } from "react-icons/bi";
import { GiSoundOff } from "react-icons/gi";
import { FaParking } from "react-icons/fa";
import { GiVacuumCleaner } from "react-icons/gi";
import { FaAmericanSignLanguageInterpreting } from "react-icons/fa";
import { TbToolsKitchen2 } from "react-icons/tb";
import { PiPlant } from "react-icons/pi";
import { PiDog } from "react-icons/pi";
import { motion } from "framer-motion";
import { Variants } from "framer-motion";
export default function SectionFeature() {
  const parentVariant: Variants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const childrenVariant: Variants = {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
  };
  return (
    <div className="container-custom mx-auto flex flex-col py-10">
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.8,
          filter: "blur(8px)",
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
        }}
        transition={{
          duration: 0.6,
          ease: "easeIn",
          type: "spring",
        }}
        className="w-full md:w-2/3 text-center mx-auto text-2xl md:text-3xl mt-10"
      >
        Work solo, meet others, or build your team — all in one flexible space.
        Our coworking spaces are designed for comfort, community, and deep
        focus.
      </motion.div>
      <motion.div
        initial="initial"
        whileInView="animate"
        variants={parentVariant}
        className="flex flex-wrap mx-auto justify-center w-full md:w-1/2 gap-2 mt-5 text-sm md:text-lg"
      >
        <motion.span
          variants={childrenVariant}
          className="px-2 py-1 rounded-lg flex gap-1 justify-center items-center text-sm bg-gray-200"
        >
          <PiFlame /> Hot desks
        </motion.span>
        <motion.span
          variants={childrenVariant}
          className="px-2 py-1 rounded-lg flex gap-1 justify-center items-center text-sm bg-gray-200"
        >
          <PiOfficeChair /> Private offices
        </motion.span>
        <motion.span
          variants={childrenVariant}
          className="px-2 py-1 rounded-lg flex gap-1 justify-center items-center text-sm bg-gray-200"
        >
          <PiDesk /> Dedicated desks
        </motion.span>
        <motion.span
          variants={childrenVariant}
          className="px-2 py-1 rounded-lg flex gap-1 justify-center items-center text-sm bg-gray-200"
        >
          <MdOutlineMeetingRoom /> Meeting rooms
        </motion.span>
        <motion.span
          variants={childrenVariant}
          className="px-2 py-1 rounded-lg flex gap-1 justify-center items-center text-sm bg-gray-200"
        >
          <FaWifi />
          500 Mbps Wifi
        </motion.span>
        <motion.span
          variants={childrenVariant}
          className="px-2 py-1 rounded-lg flex gap-1 justify-center items-center text-sm bg-gray-200"
        >
          <TbLockAccess />
          24/7 Access
        </motion.span>
        <motion.span
          variants={childrenVariant}
          className="px-2 py-1 rounded-lg flex gap-1 justify-center items-center text-sm bg-gray-200"
        >
          <GiOfficeChair />
          Ergonomic Chairs
        </motion.span>
        <motion.span
          variants={childrenVariant}
          className="px-2 py-1 rounded-lg flex gap-1 justify-center items-center text-sm bg-gray-200"
        >
          <BiDrink />
          Barista
        </motion.span>
        <motion.span
          variants={childrenVariant}
          className="px-2 py-1 rounded-lg flex gap-1 justify-center items-center text-sm bg-gray-200"
        >
          <GiSoundOff />
          Soundproof booths
        </motion.span>
        <motion.span
          variants={childrenVariant}
          className="px-2 py-1 rounded-lg flex gap-1 justify-center items-center text-sm bg-gray-200"
        >
          <FaParking />
          On-site Parking
        </motion.span>
        <motion.span
          variants={childrenVariant}
          className="px-2 py-1 rounded-lg flex gap-1 justify-center items-center text-sm bg-gray-200"
        >
          <GiVacuumCleaner />
          Daily Cleaning
        </motion.span>
        <motion.span
          variants={childrenVariant}
          className="px-2 py-1 rounded-lg flex gap-1 justify-center items-center text-sm bg-gray-200"
        >
          <TbToolsKitchen2 />
          Kitchen & lounge
        </motion.span>
        <motion.span
          variants={childrenVariant}
          className="px-2 py-1 rounded-lg flex gap-1 justify-center items-center text-sm bg-gray-200"
        >
          <PiPlant /> Calm & green spaces
        </motion.span>
        <motion.span
          variants={childrenVariant}
          className="px-2 py-1 rounded-lg flex gap-1 justify-center items-center text-sm bg-gray-200"
        >
          <FaAmericanSignLanguageInterpreting />
          Wellness room
        </motion.span>
        <motion.span
          variants={childrenVariant}
          className="px-2 py-1 rounded-lg flex gap-1 justify-center items-center text-sm bg-gray-200"
        >
          <PiDog />
          Dog-friendly
        </motion.span>
      </motion.div>
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.8,
          filter: "blur(8px)",
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
        }}
        transition={{
          duration: 0.6,
          ease: "easeIn",
          type: "spring",
        }}
        className="w-full flex flex-wrap mt-30"
      >
        {/* Left Text */}
        <div className="max-h-[200vh] h-full w-full md:w-1/2 md:sticky top-10  mb-5 md:mb-0">
          <div className="w-full pr-10 md:sticky top-[20px]">
            <h2 className="text-4xl font-bold mb-6">
              Find Your Space Your Way
            </h2>
            <p className="text-gray-600 mb-6">
              Scroll through the cards to explore our rooms. Each space is
              designed with productivity and comfort in mind.
            </p>
            <Button type="lg">Book a Tour</Button>
          </div>
        </div>

        {/* Right Cards */}
        <div className="w-full md:w-1/2 max-h-screen ">
          {[1, 2, 3].map((n) => (
            <div
              key={n}
              className="p-3 mb-3 bg-white rounded-lg w-full md:sticky top-10"
              style={{
                top: `{10*n} px`,
              }}
            >
              <div></div>
              <div className="border-l-1 border-gray-600 pl-3">
                <p className="text-lg">Dedicated Desk</p>
                <p className="text-sm text-gray-600">Your own desk</p>
                <p className="text-md">
                  every day Enjoy your personal workstation in an open space.
                  Perfect for regular use, with storage and 24/7 access
                  included.
                </p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
