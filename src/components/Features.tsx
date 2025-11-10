"use client";

import { motion } from "framer-motion";
import { Trophy, Tv, Smartphone, Zap, Shield, Headphones } from "lucide-react";

const features = [
  {
    icon: Trophy,
    title: "Premium Spor Kanalları",
    description: "Tüm lig maçları canlı. Donmayan IPTV ile kesintisiz spor yayını",
  },
  {
    icon: Tv,
    title: "10.000+ Donmayan Kanal",
    description: "En iyi IPTV kalitesi. Türkiye ve dünya kanalları HD-4K",
  },
  {
    icon: Smartphone,
    title: "IPTV Test - Her Cihazda",
    description: "IPTV üyelik sonrası telefon, tablet, Smart TV destekli",
  },
  {
    icon: Zap,
    title: "IPTV Satın Al 2025-2026",
    description: "IPTV satın al, en ucuz IPTV paketleri, %99.9 uptime garantisi",
  },
  {
    icon: Shield,
    title: "Güvenli IPTV Satın Al",
    description: "IPTV satın al güvenle. SSL şifreli, korumalı ödeme sistemi",
  },
  {
    icon: Headphones,
    title: "IPTV WhatsApp Destek",
    description: "7/24 canlı destek. IPTV test, kurulum, teknik yardım",
  },
];

export default function Features() {
  return (
    <section id="ozellikler" className="border-t-2 border-slate-100 bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-20 text-center">
          <h2 className="mb-4 text-5xl font-black text-slate-900">
            IPTV Satın Al - En İyi Özellikler
          </h2>
          <p className="text-xl text-slate-600">
            <strong className="font-bold text-slate-900">IPTV satın al 2025-2026</strong> teknolojisi. 
            <strong className="font-bold text-slate-900">IPTV satın al</strong>, <strong className="font-bold text-slate-900">IPTV test yayını</strong> iste. 
            WhatsApp ile anında <strong className="font-bold text-slate-900">IPTV satın al</strong> işlemi.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group rounded-2xl border-2 border-slate-200 bg-white p-8 transition-all duration-300 hover:border-orange-500 hover:shadow-xl"
            >
              <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-orange-600">
                <feature.icon className="h-7 w-7 text-white" strokeWidth={2.5} />
              </div>
              <h3 className="mb-3 text-xl font-black text-slate-900">
                {feature.title}
              </h3>
              <p className="text-sm font-medium leading-relaxed text-slate-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
