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
    <section className="relative overflow-hidden pt-20 pb-12 md:pt-32 md:pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-8 md:gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-4 md:mb-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 px-4 py-1.5 md:px-5 md:py-2 text-xs md:text-sm font-bold text-white shadow-lg">
              <Star className="h-3 w-3 md:h-4 md:w-4 fill-white" />
              Premium IPTV
            </div>

            <h1 className="mb-4 md:mb-6 text-4xl sm:text-5xl md:text-6xl font-black leading-[1.1] md:leading-[1.05] text-slate-900 lg:text-7xl">
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

            <p className="mb-6 md:mb-10 text-base sm:text-lg md:text-xl leading-relaxed text-slate-600">
              <strong className="font-bold text-slate-900">Donmayan IPTV</strong> ile 
              Lig TV, Bein Sports ve tüm spor kanallarını izleyin.
              <br className="hidden sm:block" />
              <strong className="font-bold text-slate-900">En ucuz IPTV paketleri</strong>, 
              HD-4K kalitede kesintisiz yayın.
            </p>

            <div className="mb-8 md:mb-16 flex flex-col sm:flex-row gap-3 md:gap-4">
              <a
                href="https://wa.me/447445508352"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-3 md:px-8 md:py-4 text-sm md:text-base font-bold text-white shadow-xl shadow-orange-500/30 transition-all hover:shadow-2xl"
              >
                <Play className="h-4 w-4 md:h-5 md:w-5 fill-white" />
                Hemen Başla
              </a>
              <a
                href="https://wa.me/447445508352"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl border-2 border-slate-200 bg-white px-6 py-3 md:px-8 md:py-4 text-sm md:text-base font-bold text-slate-900 transition-all hover:border-orange-500"
              >
                İletişim
              </a>
            </div>

            {/* Stats - Counter Animation */}
            <div className="flex items-center gap-4 sm:gap-6 md:gap-8 overflow-x-auto">
              <div className="flex-shrink-0">
                <p className="mb-1 text-2xl sm:text-3xl md:text-4xl font-black tabular-nums text-slate-900">
                  <Counter target={60000} />+
                </p>
                <p className="text-[10px] sm:text-xs font-bold uppercase tracking-wider sm:tracking-widest text-slate-500">Kanal</p>
              </div>
              
              <div className="h-10 sm:h-12 w-px bg-slate-300 flex-shrink-0"></div>
              
              <div className="flex-shrink-0">
                <p className="mb-1 text-2xl sm:text-3xl md:text-4xl font-black tabular-nums text-slate-900">
                  <Counter target={15000} />+
                </p>
                <p className="text-[10px] sm:text-xs font-bold uppercase tracking-wider sm:tracking-widest text-slate-500">Kullanıcı</p>
              </div>
              
              <div className="h-10 sm:h-12 w-px bg-slate-300 flex-shrink-0"></div>
              
              <div className="flex-shrink-0">
                <p className="mb-1 text-2xl sm:text-3xl md:text-4xl font-black tabular-nums text-slate-900">
                  <Counter target={99.9} suffix="%" />
                </p>
                <p className="text-[10px] sm:text-xs font-bold uppercase tracking-wider sm:tracking-widest text-slate-500">Uptime</p>
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
            <div className="relative overflow-hidden rounded-2xl md:rounded-3xl border-2 border-slate-200 bg-white p-3 md:p-4">
              <div className="relative aspect-video overflow-hidden rounded-xl md:rounded-2xl">
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
                <div className="absolute right-2 top-2 md:right-4 md:top-4">
                  <div className="flex items-center gap-1.5 md:gap-2 rounded-lg bg-red-600 px-2.5 py-1.5 md:px-4 md:py-2 text-xs md:text-sm font-bold text-white shadow-lg">
                    <div className="h-1.5 w-1.5 md:h-2 md:w-2 animate-pulse rounded-full bg-white"></div>
                    CANLI
                  </div>
                </div>

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex h-16 w-16 md:h-20 md:w-20 items-center justify-center rounded-full border-3 md:border-4 border-white/50 bg-white/20 backdrop-blur-md transition-all hover:scale-110 hover:bg-white/30">
                    <Play className="ml-1 h-8 w-8 md:h-10 md:w-10 fill-white text-white" />
                  </div>
                </div>
              </div>

              {/* Quality Badges */}
              <div className="mt-3 md:mt-4 grid grid-cols-3 gap-1.5 md:gap-2">
                <div className="rounded-lg md:rounded-xl bg-slate-100 py-2 md:py-3 text-center">
                  <p className="text-[10px] md:text-xs font-bold uppercase tracking-wider text-slate-700">HD</p>
                </div>
                <div className="rounded-lg md:rounded-xl bg-slate-100 py-2 md:py-3 text-center">
                  <p className="text-[10px] md:text-xs font-bold uppercase tracking-wider text-slate-700">4K</p>
                </div>
                <div className="rounded-lg md:rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 py-2 md:py-3 text-center">
                  <p className="text-[10px] md:text-xs font-bold uppercase tracking-wider text-white">Lig TV</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
