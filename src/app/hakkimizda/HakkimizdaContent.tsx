"use client";

import { motion } from "framer-motion";
import { Trophy, Shield, Users, Target, Award, Heart, TrendingUp } from "lucide-react";

export default function HakkimizdaContent() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-white to-blue-50 pt-32 pb-20">
        <div className="mx-auto max-w-5xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="mb-6 inline-block rounded-full bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-2 text-sm font-bold text-white">
              Hakkımızda
            </div>

            <h1 className="mb-6 text-6xl font-black leading-tight text-slate-900 lg:text-7xl">
              Tulya IPTV
            </h1>

            <p className="mb-4 text-3xl font-bold text-orange-600">
              Türkiye'nin Premium IPTV Platformu
            </p>

            <p className="mx-auto max-w-3xl text-xl leading-relaxed text-slate-600">
              2020 yılından bu yana <strong className="font-bold text-slate-900">donmayan IPTV</strong> hizmeti sunuyoruz. 
              <strong className="font-bold text-slate-900">IPTV satın al</strong>, 
              <strong className="font-bold text-slate-900">IPTV üyelik</strong> için 
              en güvenilir adres. HD-4K kalitede <strong className="font-bold text-slate-900">iptv paketleri</strong>, 
              7/24 WhatsApp destek ile <strong className="font-bold text-slate-900">en iyi IPTV</strong> deneyimi.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Info */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-5xl font-black text-slate-900">
              Tulya IPTV Kimdir?
            </h2>
          </div>

          <div className="space-y-8 text-lg leading-relaxed text-slate-700">
            <p>
              <strong className="font-bold text-slate-900">Tulya IPTV</strong>, 
              <strong className="font-bold text-slate-900">IPTV satın al</strong> arayanlar için 
              <strong className="font-bold text-slate-900">en iyi IPTV</strong> çözümü sunar. 
              <strong className="font-bold text-slate-900">Donmayan IPTV 2024</strong> teknolojisi ile 
              Türkiye'nin en güvenilir IPTV platformuyuz.
            </p>

            <p>
              <strong className="font-bold text-slate-900">10.000+ donmayan kanal</strong> 
              ile Lig TV, Bein Sports, S Sport, TRT ve tüm dünya kanallarını HD-4K kalitede izleyin. 
              <strong className="font-bold text-slate-900">IPTV paketleri</strong> arasından 
              size uygun olanı seçin. <strong className="font-bold text-slate-900">En ucuz IPTV</strong> 
              fiyatlarıyla <strong className="font-bold text-slate-900">IPTV üyelik</strong> avantajı.
            </p>

            <p>
              <strong className="font-bold text-slate-900">IPTV test yayını</strong> talebiniz için 
              WhatsApp hattımızdan ulaşın. <strong className="font-bold text-slate-900">%99.9 uptime</strong> 
              garantili <strong className="font-bold text-slate-900">donmayan IPTV</strong> altyapımız, 
              SSL şifreli güvenli bağlantı ile hizmet verir.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border-2 border-slate-200 bg-white p-10"
            >
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-orange-600">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h2 className="mb-6 text-4xl font-black text-slate-900">
                Misyonumuz
              </h2>
              <p className="text-lg leading-relaxed text-slate-700">
                Kullanıcılarımıza en kaliteli IPTV hizmetini sunarak, 
                HD ve 4K kalitesinde geniş kanal seçenekleri ile kesintisiz 
                ve güvenilir platform sağlamak.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border-2 border-slate-200 bg-white p-10"
            >
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-blue-600">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h2 className="mb-6 text-4xl font-black text-slate-900">
                Vizyonumuz
              </h2>
              <p className="text-lg leading-relaxed text-slate-700">
                Türkiye'nin en büyük ve güvenilir IPTV platformu olmak. 
                Müşteri memnuniyetini ön planda tutarak sektörde lider konuma ulaşmak.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-5xl font-black text-slate-900">
              Temel Değerlerimiz
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Trophy,
                title: "Kalite",
                description: "HD-4K kesintisiz yayın",
              },
              {
                icon: Shield,
                title: "Güvenilirlik",
                description: "%99.9 uptime garantisi",
              },
              {
                icon: Users,
                title: "Müşteri Odaklılık",
                description: "7/24 canlı destek",
              },
              {
                icon: Heart,
                title: "Memnuniyet",
                description: "15.000+ mutlu kullanıcı",
              },
            ].map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl border-2 border-slate-200 bg-white p-6 text-center transition-all hover:border-orange-500 hover:shadow-lg"
              >
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-orange-600">
                  <value.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="mb-3 text-xl font-black text-slate-900">
                  {value.title}
                </h3>
                <p className="text-sm font-medium text-slate-600">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-orange-50 to-blue-50 py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-6 text-5xl font-black text-slate-900">
              Hemen Başlayın
            </h2>
            <p className="mb-8 text-xl text-slate-600">
              Premium IPTV deneyimini yaşamak için bize ulaşın
            </p>
            <a
              href="https://wa.me/447445508352"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 px-10 py-5 text-lg font-bold text-white shadow-xl shadow-orange-500/30 transition-all hover:shadow-2xl"
            >
              WhatsApp ile İletişime Geç
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
