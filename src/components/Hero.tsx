"use client";
import Image from "next/image";
import bgImage from "./photo-1519155031214-e8d583928bf2.avif";
import Button from "./Button";
import Marquee from "react-fast-marquee";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
export default function Hero() {
  return (
    <div className="w-screen h-screen overflow-y-hidden">
      <div className="Background absolute top-0 w-full bg-cover bg-center z-0">
        <Image
          src={bgImage}
          alt="alt-image"
          className="w-full h-screen object-cover"
        ></Image>
      </div>
      <div className="foreground z-10 relative flex justify-end flex-col w-screen h-screen">
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.8,
            filter: "blur(8px)",
          }}
          animate={{
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
          }}
          transition={{
            duration: 0.6,
            ease: "easeIn",
            type: "spring"
          }}
        >
          <div className="container-custom flex flex-col gap-3">
            <h1 className="text-white font-semibold text-6xl">
              Your Next WorkSpace <br></br> Start Here
            </h1>

            <p className="text-white text-lg">
              A flexible coworking space built for freelancers, remote teams,
              and creative minds.
            </p>
            <div>
              <Button type="lg">Find Your Desk</Button>
            </div>
            <br></br>
            <p className="text-md text-white">Trusted by 100+ company</p>
            <div className="w-2/6">
              <Marquee>
                <div className="flex items-center gap-12">
                  <span className="text-md font-medium text-white font-semibold">
                    CoworkHub
                  </span>
                  <span className="text-md font-medium text-white font-semibold">
                    WorkNest
                  </span>
                  <span className="text-md font-medium text-white font-semibold">
                    FocusSpace
                  </span>
                </div>
              </Marquee>
            </div>
            <br></br>
          </div>
        </motion.div>
      </div>
      <div className="absolute h-screen inset-0 bg-black/40 z-5" />
      <div className="h-screen w-full"></div>
    </div>
  );
}
