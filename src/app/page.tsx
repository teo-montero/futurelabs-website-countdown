"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const launchDate = new Date("2025-10-10T00:00:00");
    const timer = setInterval(() => {
      const now = new Date();
      const diff = launchDate.getTime() - now.getTime();
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
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-[#0f172a] to-black text-white px-6">
      {/* Headline */}
      <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-center mb-12">
        FutureLabs is Launching Soon
      </h1>

      {/* Countdown */}
      <div className="flex gap-10 text-center">
        {Object.entries(timeLeft).map(([label, value]) => (
          <div key={label}>
            <p className="text-6xl md:text-7xl font-bold">{value}</p>
            <p className="mt-2 text-sm uppercase tracking-wide text-gray-400">{label}</p>
          </div>
        ))}
      </div>

      {/* Subtext */}
      <p className="mt-16 text-gray-400 max-w-lg text-center text-lg leading-relaxed">
        We’re preparing something special. Stay tuned.
      </p>

      {/* Footer */}
      <footer className="absolute bottom-8 text-gray-500 text-sm">
        © {new Date().getFullYear()} FutureLabs. All rights reserved.
      </footer>
    </main>
  );
}
