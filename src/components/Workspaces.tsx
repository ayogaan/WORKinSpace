"use client"
import Image from "next/image";
import Button from "./Button";
import workingspace from "./workingspace.avif";
import { motion, Variants } from "framer-motion";
export default function Workspace({}) {
  const parentVariant: Variants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const childrenVariant: Variants = {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
  };

  return (
    <div className="container-custom mx-auto mt-30">
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
        className="flex items-start md:justify-between flex-col md:flex-row items-end"
      >
        <div className="flex flex-col gap-3 mb-5 md:mb-0">
          <p className="text-3xl font-semibold">Find Your Workspace</p>
          <p>
            Enclosed, lockable offices designed for 2–10 people. Fully furnished
            and customizable <br></br> — ideal for startups and growing teams.
          </p>
        </div>
        <Button type="lg">View All Location</Button>
      </motion.div>
      <motion.div
        initial="initial"
        whileInView="animate"
        variants={parentVariant}
        className="grid grid-cols-1 md:grid-cols-3 gap-10 jusify-around mt-20"
      >
        <motion.div
        variants={childrenVariant}
        className="flex-1 relative basis-1/3 bg-white shadow rounded-xl p-4 flex">
          <div className=" w-full h-[428px]">
            <Image
              className="object-cover object-center rounded-lg"
              src={workingspace}
              alt="workingspace"
              fill={true}
            ></Image>
          </div>

          <div className="absolute bottom-0 left-0 right-0 z-10 p-4 text-white ">
            <h2 className="text-lg font-semibold">Semarang</h2>
            <p className="text-gray-200">
              6 Av. du Général Lemonnier, 75001 Paris.
            </p>
          </div>
          <div className="absolute bottom-0 left-0 right-0 z-5 p-4 h-64 bg-gradient-to-t from-black/60 to-transparent rounded-lg"></div>
        </motion.div>

        <motion.div
        variants={childrenVariant}
        className="flex-1 relative basis-1/3 bg-white shadow rounded-xl p-4 flex">
          <div className=" w-full h-[428px]">
            <Image
              className="object-cover object-center rounded-lg"
              src={workingspace}
              alt="workingspace"
              fill={true}
            ></Image>
          </div>

          <div className="absolute bottom-0 left-0 right-0 z-10 p-4 text-white ">
            <h2 className="text-lg font-semibold">Semarang</h2>
            <p className="text-gray-200">
              6 Av. du Général Lemonnier, 75001 Paris.
            </p>
          </div>
          <div className="absolute bottom-0 left-0 right-0 z-5 p-4 h-64 bg-gradient-to-t from-black/60 to-transparent rounded-lg"></div>
        </motion.div>

        <motion.div
        variants={childrenVariant}
        className="flex-1 relative basis-1/3 bg-white shadow rounded-xl p-4 flex">
          <div className=" w-full h-[428px]">
            <Image
              className="object-cover object-center rounded-lg"
              src={workingspace}
              alt="workingspace"
              fill={true}
            ></Image>
          </div>

          <div className="absolute bottom-0 left-0 right-0 z-10 p-4 text-white ">
            <h2 className="text-lg font-semibold">Semarang</h2>
            <p className="text-gray-200">
              6 Av. du Général Lemonnier, 75001 Paris.
            </p>
          </div>
          <div className="absolute bottom-0 left-0 right-0 z-5 p-4 h-64 bg-gradient-to-t from-black/60 to-transparent rounded-lg"></div>
        </motion.div>

        <motion.div
        variants={childrenVariant}
        className="flex-1 relative basis-1/3 bg-white shadow rounded-xl p-4 flex">
          <div className=" w-full h-[428px]">
            <Image
              className="object-cover object-center rounded-lg"
              src={workingspace}
              alt="workingspace"
              fill={true}
            ></Image>
          </div>

          <div className="absolute bottom-0 left-0 right-0 z-10 p-4 text-white ">
            <h2 className="text-lg font-semibold">Semarang</h2>
            <p className="text-gray-200">
              6 Av. du Général Lemonnier, 75001 Paris.
            </p>
          </div>
          <div className="absolute bottom-0 left-0 right-0 z-5 p-4 h-64 bg-gradient-to-t from-black/60 to-transparent rounded-lg"></div>
        </motion.div>

        <motion.div
        variants={childrenVariant}
        className="flex-1 relative basis-1/3 bg-white shadow rounded-xl p-4 flex">
          <div className=" w-full h-[428px]">
            <Image
              className="object-cover object-center rounded-lg"
              src={workingspace}
              alt="workingspace"
              fill={true}
            ></Image>
          </div>

          <div className="absolute bottom-0 left-0 right-0 z-10 p-4 text-white ">
            <h2 className="text-lg font-semibold">Semarang</h2>
            <p className="text-gray-200">
              6 Av. du Général Lemonnier, 75001 Paris.
            </p>
          </div>
          <div className="absolute bottom-0 left-0 right-0 z-5 p-4 h-64 bg-gradient-to-t from-black/60 to-transparent rounded-lg"></div>
        </motion.div>

        <motion.div
        variants={childrenVariant}
        className="flex-1 relative basis-1/3 bg-white shadow rounded-xl p-4 flex">
          <div className=" w-full h-[428px]">
            <Image
              className="object-cover object-center rounded-lg"
              src={workingspace}
              alt="workingspace"
              fill={true}
            ></Image>
          </div>

          <div className="absolute bottom-0 left-0 right-0 z-10 p-4 text-white ">
            <h2 className="text-lg font-semibold">Semarang</h2>
            <p className="text-gray-200">
              6 Av. du Général Lemonnier, 75001 Paris.
            </p>
          </div>
          <div className="absolute bottom-0 left-0 right-0 z-5 p-4 h-64 bg-gradient-to-t from-black/60 to-transparent rounded-lg"></div>
        </motion.div>
      </motion.div>
    </div>
  );
}
