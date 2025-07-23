"use client"
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}

      className="absolute w-screen text-white z-10"
    >
      <div className="container-custom flex mx-auto w-full justify-between items-center py-3">
        <div className="right-side flex items-center gap-10">
          <div className="logo">
            <p className="text-2xl font-semibold">WorkingSpace</p>
          </div>
          <div className="menu hidden md:flex">
            <ul className="flex gap-3">
              <li className="text-lg text-white hover:text-gray-600 transition-all 1s">
                Home
              </li>
              <li className="text-lg text-white hover:text-gray-600 transition-all 1s">
                Location
              </li>
              <li className="text-lg text-white hover:text-gray-600 transition-all 1s">
                About us
              </li>
              <li className="text-lg text-white hover:text-gray-600 transition-all 1s">
                Blogs
              </li>
            </ul>
          </div>
        </div>
        <div>
          <button className="border border-white text-white rounded-full px-4 py-2">
            Find your desk
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
