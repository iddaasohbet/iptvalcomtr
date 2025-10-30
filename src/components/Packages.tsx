"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const packages = [
  {
    name: "Temel - En Ucuz IPTV",
    price: "99",
    features: ["500+ Kanal", "HD Kalite", "1 Cihaz", "Destek"],
  },
  {
    name: "Standart - Donmayan IPTV",
    price: "149",
    features: ["2000+ Kanal", "HD Kalite", "2 Cihaz", "7/24 WhatsApp Destek", "EPG Rehberi"],
  },
  {
    name: "Premium - En İyi IPTV",
    price: "249",
    features: ["5000+ Kanal", "Donmayan 4K", "3 Cihaz", "Öncelikli Destek", "EPG + VOD", "Lig TV + Bein Sports"],
    popular: true,
  },
  {
    name: "VIP - Premium IPTV",
    price: "399",
    features: ["10.000+ Kanal", "Donmayan 4K UHD", "5 Cihaz", "VIP WhatsApp Destek", "Tüm Spor Kanalları", "Film + Dizi Arşivi"],
  },
  {
    name: "Yıllık Pro - Avantajlı",
    price: "2.499",
    subtitle: "12 Aylık IPTV Üyelik",
    features: ["5000+ Kanal", "Donmayan 4K", "3 Cihaz", "12 Ay IPTV", "Öncelikli Destek"],
  },
  {
    name: "Yıllık VIP - En Kapsamlı",
    price: "3.999",
    subtitle: "12 Aylık Premium",
    features: ["10.000+ Kanal", "Donmayan 4K UHD", "5 Cihaz", "Yıllık IPTV Test", "VIP WhatsApp", "Özel Paketler"],
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
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 z-10 -translate-x-1/2">
                  <div className="rounded-full bg-orange-600 px-6 py-2 text-xs font-black uppercase tracking-wide text-white">
                    Popüler
                  </div>
                </div>
              )}

              <div className={`flex w-full flex-col rounded-2xl border-2 bg-white p-8 transition-all duration-300 ${
                pkg.popular
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
                    pkg.popular
                      ? "bg-orange-600 text-white hover:bg-orange-700"
                      : "bg-slate-900 text-white hover:bg-slate-800"
                  }`}
                >
                  Satın Al
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
