"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, Phone, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer id="iletisim" className="relative overflow-hidden bg-slate-900">
      {/* Gradient Top Line */}
      <div className="h-1 w-full bg-gradient-to-r from-orange-500 via-orange-600 to-orange-500"></div>

      <div className="mx-auto max-w-7xl px-6 py-16">
        {/* Main Content - Centered */}
        <div className="mb-12 text-center">
          {/* Logo */}
          <div className="mb-6 inline-flex items-center gap-3">
            <div className="relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-orange-500 to-orange-600">
              {/* TV Icon */}
              <svg className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <rect x="2" y="7" width="20" height="13" rx="2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M17 2l-5 5-5-5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              {/* Signal Animation */}
              <motion.div
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.6, 0, 0.6],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 rounded-xl border-2 border-white"
              />
            </div>
            <div className="text-left">
              <div className="text-2xl font-black text-white">IPTVal</div>
              <div className="text-[10px] font-bold uppercase tracking-wider text-orange-500">Premium Service</div>
            </div>
          </div>

          <p className="mx-auto max-w-2xl text-base text-slate-400">
            Premium IPTV hizmeti ile kesintisiz TV deneyimi
          </p>
        </div>

        {/* Contact Cards - Horizontal */}
        <div className="mb-12 grid gap-4 sm:grid-cols-3">
          <motion.a
            href="https://wa.me/447445508352"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -4 }}
            className="flex items-center gap-4 rounded-xl border border-slate-700 bg-slate-800/50 p-6 transition-all hover:border-green-500"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-green-600">
              <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
            </div>
            <div className="text-left">
              <p className="text-xs font-semibold uppercase text-slate-500">WhatsApp</p>
              <p className="font-bold text-white">+44 7445 508352</p>
            </div>
          </motion.a>

          <motion.a
            href="mailto:info@iptval.com.tr"
            whileHover={{ y: -4 }}
            className="flex items-center gap-4 rounded-xl border border-slate-700 bg-slate-800/50 p-6 transition-all hover:border-orange-500"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-orange-600">
              <Mail className="h-6 w-6 text-white" />
            </div>
            <div className="text-left">
              <p className="text-xs font-semibold uppercase text-slate-500">E-posta</p>
              <p className="font-bold text-white">info@iptval.com.tr</p>
            </div>
          </motion.a>

          <motion.a
            href="#"
            target="_blank"
            whileHover={{ y: -4 }}
            className="flex items-center gap-4 rounded-xl border border-slate-700 bg-slate-800/50 p-6 transition-all hover:border-pink-500"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-pink-500 to-purple-600">
              <Instagram className="h-6 w-6 text-white" />
            </div>
            <div className="text-left">
              <p className="text-xs font-semibold uppercase text-slate-500">Instagram</p>
              <p className="font-bold text-white">@iptval</p>
            </div>
          </motion.a>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-700 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-slate-500">
              © {new Date().getFullYear()} <span className="font-bold text-slate-400">IPTVal</span> • Tüm hakları saklıdır.
            </p>
            <Link
              href="https://www.dijitalwebsite.com/"
              target="_blank"
              className="text-sm font-semibold text-orange-500 transition-colors hover:text-orange-400"
            >
              Dijital Website
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
