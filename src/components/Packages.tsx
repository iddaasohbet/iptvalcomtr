"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const packages = [
  {
    name: "KAMPANYA: 2 x 12 Ay",
    price: "2.000",
    subtitle: "2 Cihaz - 12 Ay Premium IPTV",
    features: [
      "2 Cihaz Desteği",
      "Premium Kanallar",
      "Spor Kanalları",
      "Belgesel Kanalları",
      "Film & Dizi Kanalları",
      "7 Gün İçinde Geri İade",
      "7/24 Teknik Destek"
    ],
    campaign: true,
  },
  {
    name: "6 Aylık IPTV Paketi",
    price: "800",
    subtitle: "6 Ay Premium IPTV",
    features: [
      "Premium Kanallar",
      "Spor Kanalları",
      "Belgesel Kanalları",
      "Film & Dizi Kanalları",
      "7 Gün İçinde Geri İade",
      "7/24 Teknik Destek"
    ],
  },
  {
    name: "12 Aylık IPTV Paketi",
    price: "1.200",
    subtitle: "12 Ay Premium IPTV",
    features: [
      "Premium Kanallar",
      "Spor Kanalları",
      "Belgesel Kanalları",
      "Film & Dizi Kanalları",
      "7 Gün İçinde Geri İade",
      "7/24 Teknik Destek"
    ],
    popular: true,
  },
  {
    name: "24 Aylık IPTV Paketi",
    price: "2.000",
    subtitle: "24 Ay Premium IPTV",
    features: [
      "Premium Kanallar",
      "Spor Kanalları",
      "Belgesel Kanalları",
      "Film & Dizi Kanalları",
      "7 Gün İçinde Geri İade",
      "7/24 Teknik Destek"
    ],
  },
  {
    name: "36 Aylık IPTV Paketi",
    price: "2.900",
    subtitle: "36 Ay Premium IPTV",
    features: [
      "Premium Kanallar",
      "Spor Kanalları",
      "Belgesel Kanalları",
      "Film & Dizi Kanalları",
      "7 Gün İçinde Geri İade",
      "7/24 Teknik Destek"
    ],
  },
  {
    name: "Süresiz Ömür Boyu",
    price: "6.000",
    subtitle: "Ömür Boyu Premium IPTV",
    features: [
      "Premium Kanallar",
      "Spor Kanalları",
      "Belgesel Kanalları",
      "Film & Dizi Kanalları",
      "7 Gün İçinde Geri İade",
      "7/24 Teknik Destek"
    ],
  },
];

export default function Packages() {
  return (
    <section id="paketler" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-20 text-center">
          <h2 className="mb-4 text-5xl font-black text-slate-900">
            IPTV Paketleri - En Uygun Fiyatlar
          </h2>
          <p className="text-xl text-slate-600">
            <strong className="font-bold text-slate-900">Donmayan IPTV</strong> paketlerini inceleyin. 
            IPTV üyelik için <strong className="font-bold text-slate-900">en ucuz IPTV</strong> fiyatları. 
            IPTV test talebi için WhatsApp ile ulaşın.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group relative flex h-full"
            >
              {pkg.campaign && (
                <div className="absolute -top-4 left-1/2 z-10 -translate-x-1/2">
                  <div className="rounded-full bg-gradient-to-r from-red-600 to-pink-600 px-6 py-2 text-xs font-black uppercase tracking-wide text-white shadow-lg shadow-red-600/30 animate-pulse">
                    🔥 KAMPANYA
                  </div>
                </div>
              )}
              {pkg.popular && !pkg.campaign && (
                <div className="absolute -top-4 left-1/2 z-10 -translate-x-1/2">
                  <div className="rounded-full bg-orange-600 px-6 py-2 text-xs font-black uppercase tracking-wide text-white">
                    Popüler
                  </div>
                </div>
              )}

              <div className={`flex w-full flex-col rounded-2xl border-2 bg-white p-8 transition-all duration-300 ${
                pkg.campaign
                  ? 'border-red-600 shadow-xl shadow-red-600/20 bg-gradient-to-br from-red-50 to-pink-50'
                  : pkg.popular
                  ? 'border-orange-600 shadow-xl shadow-orange-600/10'
                  : 'border-slate-200 shadow-lg hover:border-slate-300 hover:shadow-xl'
              }`}>
                {/* Name */}
                <div className="mb-6">
                  <h3 className="text-2xl font-black text-slate-900">
                    {pkg.name}
                  </h3>
                  {pkg.subtitle && (
                    <p className="mt-1 text-sm font-semibold text-slate-500">{pkg.subtitle}</p>
                  )}
                </div>

                {/* Price */}
                <div className="mb-8">
                  <div className="flex items-baseline gap-1">
                    <span className="text-6xl font-black text-slate-900">₺{pkg.price}</span>
                  </div>
                </div>

                {/* Divider */}
                <div className="mb-6 h-px bg-slate-200"></div>

                {/* Features */}
                <ul className="mb-8 flex-1 space-y-4">
                  {pkg.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-3">
                      <Check className="h-5 w-5 shrink-0 text-orange-600" strokeWidth={3} />
                      <span className="text-sm font-semibold text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Button */}
                <a
                  href="https://wa.me/447445508352"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-auto flex w-full items-center justify-center rounded-xl py-4 font-bold transition-all ${
                    pkg.campaign
                      ? "bg-gradient-to-r from-red-600 to-pink-600 text-white hover:from-red-700 hover:to-pink-700 shadow-lg shadow-red-600/30"
                      : pkg.popular
                      ? "bg-orange-600 text-white hover:bg-orange-700"
                      : "bg-slate-900 text-white hover:bg-slate-800"
                  }`}
                >
                  {pkg.campaign ? "🎉 Kampanyadan Yararlan" : "Satın Al"}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
