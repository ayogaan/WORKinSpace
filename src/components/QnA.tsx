"use client"
import { motion } from "framer-motion";
export default function ContactUs() {
  return (
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
      className="container-custom mx-auto mt-30"
    >
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col gap-3 mb-5 md:mb-0">
          <p className="text-4xl">
            Got Questions ?<br></br> We Have an Aswer
          </p>
          <p className="text-gray-600">
            Here's everything you might be wondering before joining us - from
            how <br></br> to book to whats included and how flexible it really
            is.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <div className="border border-gray-300 rounded-md p-3 gap-3">
            <div className="flex justify-between">
              <p className="text-lg text-gray-800">
                Can I visit before signing up ?
              </p>
            </div>
          </div>

          <div className="border border-gray-300 rounded-md p-3 gap-3">
            <div className="flex justify-between">
              <p className="text-lg text-gray-800">
                What are your opening hours ?
              </p>
            </div>
          </div>

          <div className="border border-gray-300 rounded-md p-3 gap-3">
            <div className="flex justify-between">
              <p className="text-lg text-gray-800">
                Whats the diffrence between hoot desk and dedicated desk ?
              </p>
            </div>
          </div>

          <div className="border border-gray-300 rounded-md p-3 gap-3">
            <div className="flex justify-between">
              <p className="text-lg text-gray-800">Are pets allowed ?</p>
            </div>
          </div>
          <div className="border border-gray-300 rounded-md p-3 gap-3">
            <div className="flex justify-between">
              <p className="text-lg text-gray-800">
                Is the Wi-Fi really that fast ?
              </p>
            </div>
          </div>
          <div className="border border-gray-300 rounded-md p-3 gap-3">
            <div className="flex justify-between">
              <p className="text-lg text-gray-800">
                Can I switch plans later on ?
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
