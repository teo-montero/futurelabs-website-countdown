"use client";

import * as React from "react";
import { motion } from "framer-motion";

export default function Countdown() {
  const [timeLeft, setTimeLeft] = React.useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  React.useEffect(() => {
    const launchDate = new Date("2025-10-12T00:00:00"); // Set launch date here
    const timer = setInterval(() => {
      const now = new Date();
      const diff = launchDate - now;
      if (diff <= 0) {
        clearInterval(timer);
        return;
      }
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / 1000 / 60) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white px-6">
      {/* Logo / Brand */}
      <motion.div
        className="absolute top-6 left-6 text-lg font-semibold tracking-tight"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        MyBrand
      </motion.div>

      {/* Hero Title */}
      <motion.h1
        className="text-6xl md:text-7xl font-semibold mb-8 tracking-tight text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Something New is Coming
      </motion.h1>

      {/* Countdown */}
      <motion.div
        className="flex gap-10 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        {Object.entries(timeLeft).map(([label, value]) => (
          <div key={label}>
            <p className="text-5xl font-bold">{value}</p>
            <p className="uppercase tracking-wide text-gray-400 text-sm">{label}</p>
          </div>
        ))}
      </motion.div>

      {/* Email Signup */}
      <motion.div
        className="mt-12 w-full max-w-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <form className="flex gap-3">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 bg-transparent border-b border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-white transition"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-white text-black font-medium rounded hover:bg-gray-200 transition"
          >
            Notify Me
          </button>
        </form>
      </motion.div>

      {/* Subtext */}
      <motion.p
        className="mt-8 text-gray-400 max-w-lg text-center text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
      >
        We’re working hard behind the scenes. Stay tuned for the launch in just a few days.
      </motion.p>

      {/* Footer */}
      <motion.div
        className="absolute bottom-6 text-gray-500 text-xs"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        © {new Date().getFullYear()} MyBrand. All rights reserved.
      </motion.div>
    </div>
  );
}