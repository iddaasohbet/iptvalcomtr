"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Play, Star } from "lucide-react";
import { useState, useEffect } from "react";

const rotatingWords = ["Her Maç", "Her Kanal", "Her Lig", "Tüm Sporlar", "Dünya TV"];

function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [target]);

  return <>{count.toLocaleString()}{suffix}</>;
}

export default function Hero() {
  const [currentWord, setCurrentWord] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % rotatingWords.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);
  return (
    <section className="relative overflow-hidden pt-32 pb-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 px-5 py-2 text-sm font-bold text-white shadow-lg">
              <Star className="h-4 w-4 fill-white" />
              Premium IPTV
            </div>

            <h1 className="mb-6 text-6xl font-black leading-[1.05] text-slate-900 lg:text-7xl">
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentWord}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="inline-block bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent"
                >
                  {rotatingWords[currentWord]}
                </motion.span>
              </AnimatePresence>
              <br />
              <span className="text-slate-900">
                Tek Platformda
              </span>
            </h1>

            <p className="mb-10 text-xl leading-relaxed text-slate-600">
              <strong className="font-bold text-slate-900">Donmayan IPTV</strong> ile 
              Lig TV, Bein Sports ve tüm spor kanallarını izleyin.
              <br className="hidden sm:block" />
              <strong className="font-bold text-slate-900">En ucuz IPTV paketleri</strong>, 
              HD-4K kalitede kesintisiz yayın.
            </p>

            <div className="mb-16 flex gap-4">
              <a
                href="https://wa.me/447445508352"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 px-8 py-4 font-bold text-white shadow-xl shadow-orange-500/30 transition-all hover:shadow-2xl"
              >
                <Play className="h-5 w-5 fill-white" />
                Hemen Başla
              </a>
              <a
                href="https://wa.me/447445508352"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border-2 border-slate-200 bg-white px-8 py-4 font-bold text-slate-900 transition-all hover:border-orange-500"
              >
                İletişim
              </a>
            </div>

            {/* Stats - Counter Animation */}
            <div className="flex items-center gap-8">
              <div>
                <p className="mb-1 text-4xl font-black tabular-nums text-slate-900">
                  <Counter target={10000} />+
                </p>
                <p className="text-xs font-bold uppercase tracking-widest text-slate-500">Kanal</p>
              </div>
              
              <div className="h-12 w-px bg-slate-300"></div>
              
              <div>
                <p className="mb-1 text-4xl font-black tabular-nums text-slate-900">
                  <Counter target={15000} />+
                </p>
                <p className="text-xs font-bold uppercase tracking-widest text-slate-500">Kullanıcı</p>
              </div>
              
              <div className="h-12 w-px bg-slate-300"></div>
              
              <div>
                <p className="mb-1 text-4xl font-black tabular-nums text-slate-900">
                  <Counter target={99.9} suffix="%" />
                </p>
                <p className="text-xs font-bold uppercase tracking-widest text-slate-500">Uptime</p>
              </div>
            </div>
          </motion.div>

          {/* Right - IPTV Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-3xl border-2 border-slate-200 bg-white p-4">
              <div className="relative aspect-video overflow-hidden rounded-2xl">
                <Image
                  src="https://www.iptvsatinalcix.com/images/iptv-izle.webp"
                  alt="IPTV Canlı TV İzle"
                  fill
                  className="object-cover"
                  priority
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

                {/* Live Badge */}
                <div className="absolute right-4 top-4">
                  <div className="flex items-center gap-2 rounded-lg bg-red-600 px-4 py-2 font-bold text-white shadow-lg">
                    <div className="h-2 w-2 animate-pulse rounded-full bg-white"></div>
                    CANLI
                  </div>
                </div>

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full border-4 border-white/50 bg-white/20 backdrop-blur-md transition-all hover:scale-110 hover:bg-white/30">
                    <Play className="ml-1 h-10 w-10 fill-white text-white" />
                  </div>
                </div>
              </div>

              {/* Quality Badges */}
              <div className="mt-4 grid grid-cols-3 gap-2">
                <div className="rounded-xl bg-slate-100 py-3 text-center">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-700">HD</p>
                </div>
                <div className="rounded-xl bg-slate-100 py-3 text-center">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-700">4K</p>
                </div>
                <div className="rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 py-3 text-center">
                  <p className="text-xs font-bold uppercase tracking-wider text-white">Lig TV</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
