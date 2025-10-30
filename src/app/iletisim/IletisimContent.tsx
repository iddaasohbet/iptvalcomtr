"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MessageCircle, MapPin, Clock, Headphones, MessageSquare, Send } from "lucide-react";

export default function IletisimContent() {
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
              İletişim
            </div>

            <h1 className="mb-6 text-6xl font-black leading-tight text-slate-900 lg:text-7xl">
              Bize Ulaşın
            </h1>

            <p className="mb-4 text-2xl font-bold text-orange-600">
              7/24 Hizmetinizdeyiz
            </p>

            <p className="mx-auto max-w-3xl text-xl leading-relaxed text-slate-600">
              <strong className="font-bold text-slate-900">IPTV satın al</strong>, 
              <strong className="font-bold text-slate-900">IPTV test</strong> talebi, 
              <strong className="font-bold text-slate-900">IPTV paketleri</strong> hakkında bilgi almak için 
              <strong className="font-bold text-slate-900">IPTV WhatsApp</strong> hattımızdan ulaşın. 
              <strong className="font-bold text-slate-900">Donmayan IPTV</strong> ve 
              <strong className="font-bold text-slate-900">en ucuz IPTV</strong> fiyatları için bize yazın.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Primary Contact - WhatsApp CTA */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-4xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-3xl border-2 border-green-500 bg-gradient-to-br from-green-50 to-white p-12 text-center shadow-2xl"
          >
            <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-green-500">
              <MessageCircle className="h-10 w-10 text-white" />
            </div>
            <h2 className="mb-4 text-4xl font-black text-slate-900">
              En Hızlı İletişim: WhatsApp
            </h2>
            <p className="mb-8 text-2xl font-bold text-green-600">
              +44 7445 508352
            </p>
            <p className="mb-8 text-lg text-slate-600">
              Anında yanıt için WhatsApp'tan mesaj gönderin
            </p>
            <a
              href="https://wa.me/447445508352"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-xl bg-green-500 px-10 py-5 text-lg font-bold text-white shadow-xl shadow-green-500/30 transition-all hover:bg-green-600 hover:shadow-2xl"
            >
              <MessageCircle className="h-6 w-6" />
              WhatsApp ile Mesaj Gönder
            </a>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods Grid */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-5xl font-black text-slate-900">
              İletişim Kanalları
            </h2>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Phone */}
            <motion.a
              href="tel:+447445508352"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className="group rounded-2xl border-2 border-blue-200 bg-white p-8 text-center transition-all hover:border-blue-600 hover:shadow-xl"
            >
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-blue-600">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <h3 className="mb-3 text-xl font-black text-slate-900">
                Telefon
              </h3>
              <p className="mb-2 text-lg font-bold text-blue-600">
                +44 7445 508352
              </p>
              <p className="text-sm font-medium text-slate-600">
                Arayarak bilgi alın
              </p>
            </motion.a>

            {/* Email */}
            <motion.a
              href="mailto:info@tulyaiptv.com"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              whileHover={{ y: -4 }}
              className="group rounded-2xl border-2 border-orange-200 bg-white p-8 text-center transition-all hover:border-orange-600 hover:shadow-xl"
            >
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-orange-600">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <h3 className="mb-3 text-xl font-black text-slate-900">
                E-posta
              </h3>
              <p className="mb-2 text-lg font-bold text-orange-600">
                info@tulyaiptv.com
              </p>
              <p className="text-sm font-medium text-slate-600">
                Detaylı bilgi için mail atın
              </p>
            </motion.a>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="rounded-2xl border-2 border-slate-200 bg-white p-8 text-center"
            >
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-slate-700">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <h3 className="mb-3 text-xl font-black text-slate-900">
                Konum
              </h3>
              <p className="mb-2 text-lg font-bold text-slate-700">
                Türkiye
              </p>
              <p className="text-sm font-medium text-slate-600">
                Online hizmet
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Support Info */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Working Hours */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border-2 border-slate-200 bg-gradient-to-br from-slate-50 to-white p-10"
            >
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-orange-600">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="mb-4 text-3xl font-black text-slate-900">
                Çalışma Saatleri
              </h3>
              <p className="mb-6 text-2xl font-bold text-orange-600">
                7 Gün 24 Saat
              </p>
              <p className="text-base leading-relaxed text-slate-700">
                Hafta içi, hafta sonu fark etmeksizin her gün, her saat 
                hizmetinizdeyiz. Gece gündüz destek alabilir, sorunlarınızı 
                çözebilirsiniz.
              </p>
            </motion.div>

            {/* Support Types */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border-2 border-slate-200 bg-gradient-to-br from-slate-50 to-white p-10"
            >
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-blue-600">
                <Headphones className="h-8 w-8 text-white" />
              </div>
              <h3 className="mb-4 text-3xl font-black text-slate-900">
                Destek Konuları
              </h3>
              <ul className="space-y-3 text-base font-semibold text-slate-700">
                <li className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-orange-600"></div>
                  Abonelik ve Paket Bilgileri
                </li>
                <li className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-orange-600"></div>
                  Kurulum Desteği
                </li>
                <li className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-orange-600"></div>
                  Teknik Sorunlar
                </li>
                <li className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-orange-600"></div>
                  Ödeme ve Faturalama
                </li>
                <li className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-orange-600"></div>
                  Genel Sorular
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Teaser */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-4xl px-6">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-black text-slate-900">
              Sıkça Sorulan Sorular
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "IPTV aboneliği nasıl alınır?",
                a: "WhatsApp veya telefon ile iletişime geçin, size uygun paketi seçin ve ödeme yapın. Hemen kullanmaya başlayabilirsiniz.",
              },
              {
                q: "Hangi cihazlarda kullanabilirim?",
                a: "Smart TV, Android Box, MAG Box, telefon, tablet, bilgisayar - tüm cihazlarda kullanabilirsiniz.",
              },
              {
                q: "Kurulum zor mu?",
                a: "Hayır! 5 dakikada kurulum tamamlanır. Detaylı rehber ve canlı destek ile yardımcı oluyoruz.",
              },
              {
                q: "Test süresi var mı?",
                a: "Evet, bilgi almak için WhatsApp'tan yazın.",
              },
            ].map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="rounded-xl border border-slate-200 bg-white p-6"
              >
                <h3 className="mb-2 text-lg font-black text-slate-900">
                  {faq.q}
                </h3>
                <p className="text-sm font-medium text-slate-600">
                  {faq.a}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border-2 border-orange-500 bg-gradient-to-br from-orange-50 to-white p-12"
          >
            <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600">
              <Send className="h-10 w-10 text-white" />
            </div>
            <h2 className="mb-4 text-4xl font-black text-slate-900">
              Hemen Başlayın
            </h2>
            <p className="mb-8 text-lg text-slate-600">
              Sorunuz mu var? Size yardımcı olmaktan mutluluk duyarız.
            </p>
            <a
              href="https://wa.me/447445508352"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 px-10 py-5 text-lg font-bold text-white shadow-xl shadow-orange-500/30 transition-all hover:shadow-2xl"
            >
              <MessageCircle className="h-6 w-6" />
              WhatsApp ile Yaz
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

