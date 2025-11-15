"use client";

import { motion } from "framer-motion";

export default function IletisimContent() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-white pt-32 pb-16">
        <div className="mx-auto max-w-4xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="mb-6 text-6xl font-black text-slate-900">
              İletişim
            </h1>
            <p className="text-2xl text-slate-600">
              IPTV satın al, IPTV test talebi veya teknik destek için bize ulaşın. 
              Donmayan IPTV paketleri hakkında detaylı bilgi alın.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info - Simple Grid */}
      <section className="border-t-2 border-slate-100 bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-16 lg:grid-cols-2">
            {/* Left - Primary */}
            <div>
              <h2 className="mb-12 text-4xl font-black text-slate-900">
                İletişim Bilgileri
              </h2>

              <div className="space-y-10">
                {/* WhatsApp */}
                <div>
                  <h3 className="mb-3 text-sm font-bold uppercase tracking-wider text-slate-500">
                    WhatsApp (Önerilen)
                  </h3>
                  <a
                    href="https://wa.me/447445508352"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-block"
                  >
                    <p className="text-3xl font-black text-slate-900 transition-colors group-hover:text-orange-600">
                      +44 7445 508352
                    </p>
                  </a>
                  <p className="mt-2 text-sm text-slate-600">
                    En hızlı yanıt için WhatsApp'tan yazın
                  </p>
                </div>

                {/* Phone */}
                <div>
                  <h3 className="mb-3 text-sm font-bold uppercase tracking-wider text-slate-500">
                    Telefon
                  </h3>
                  <a
                    href="tel:+447445508352"
                    className="group inline-block"
                  >
                    <p className="text-3xl font-black text-slate-900 transition-colors group-hover:text-orange-600">
                      +44 7445 508352
                    </p>
                  </a>
                  <p className="mt-2 text-sm text-slate-600">
                    7/24 arayabilirsiniz
                  </p>
                </div>

                {/* Email */}
                <div>
                  <h3 className="mb-3 text-sm font-bold uppercase tracking-wider text-slate-500">
                    E-posta
                  </h3>
                  <a
                    href="mailto:info@iptval.com.tr"
                    className="group inline-block"
                  >
                    <p className="text-3xl font-black text-slate-900 transition-colors group-hover:text-orange-600">
                      info@iptval.com.tr
                    </p>
                  </a>
                  <p className="mt-2 text-sm text-slate-600">
                    Detaylı bilgi için mail gönderin
                  </p>
                </div>

                {/* Address */}
                <div>
                  <h3 className="mb-3 text-sm font-bold uppercase tracking-wider text-slate-500">
                    Adres
                  </h3>
                  <p className="text-xl font-bold text-slate-900">
                    Türkiye
                  </p>
                  <p className="mt-2 text-sm text-slate-600">
                    Online hizmet veriyoruz
                  </p>
                </div>
              </div>
            </div>

            {/* Right - Support Info */}
            <div className="rounded-2xl border-2 border-slate-200 bg-slate-50 p-10">
              <h2 className="mb-8 text-3xl font-black text-slate-900">
                Destek Konuları
              </h2>

              <div className="space-y-6">
                <div className="border-l-4 border-orange-600 pl-4">
                  <h3 className="mb-2 text-lg font-bold text-slate-900">
                    IPTV Satın Al & Abonelik
                  </h3>
                  <p className="text-sm text-slate-600">
                    IPTV paketleri, fiyatlar, ödeme seçenekleri
                  </p>
                </div>

                <div className="border-l-4 border-orange-600 pl-4">
                  <h3 className="mb-2 text-lg font-bold text-slate-900">
                    IPTV Test Yayını
                  </h3>
                  <p className="text-sm text-slate-600">
                    Ücretsiz test talebi, deneme süresi bilgisi
                  </p>
                </div>

                <div className="border-l-4 border-orange-600 pl-4">
                  <h3 className="mb-2 text-lg font-bold text-slate-900">
                    Kurulum & Teknik Destek
                  </h3>
                  <p className="text-sm text-slate-600">
                    Cihaz kurulumu, bağlantı sorunları, teknik yardım
                  </p>
                </div>

                <div className="border-l-4 border-orange-600 pl-4">
                  <h3 className="mb-2 text-lg font-bold text-slate-900">
                    IPTV Üyelik & Yenileme
                  </h3>
                  <p className="text-sm text-slate-600">
                    Abonelik yenileme, paket değişikliği, fatura
                  </p>
                </div>
              </div>

              <div className="mt-10 rounded-xl bg-white p-6">
                <p className="mb-3 text-sm font-bold uppercase tracking-wider text-slate-500">
                  Çalışma Saatleri
                </p>
                <p className="text-2xl font-black text-slate-900">
                  7 Gün 24 Saat
                </p>
                <p className="mt-2 text-sm text-slate-600">
                  Hafta içi, hafta sonu her zaman hizmetinizdeyiz
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t-2 border-slate-100 bg-slate-50 py-20">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="mb-12 text-center text-5xl font-black text-slate-900">
            Sıkça Sorulan Sorular
          </h2>

          <div className="space-y-6">
            {[
              {
                q: "IPTV aboneliği nasıl alınır?",
                a: "WhatsApp hattımızdan (+44 7445 508352) yazın, size uygun IPTV paketini seçin ve ödeme bilgilerinizi alın. Anında aktivasyon yapılır.",
              },
              {
                q: "IPTV test yapabilir miyim?",
                a: "Evet, WhatsApp'tan IPTV test talebi gönderin. Size test erişimi sağlayacağız.",
              },
              {
                q: "Hangi cihazlarda çalışır?",
                a: "Smart TV, Android Box, MAG Box, iPhone, iPad, Android telefon/tablet, Windows ve Mac bilgisayarlarda çalışır.",
              },
              {
                q: "Kurulum zor mu?",
                a: "Hayır. 5 dakikada kurulum yapabilirsiniz. Detaylı rehber gönderiyoruz ve WhatsApp'tan canlı destek veriyoruz.",
              },
              {
                q: "Ödeme güvenli mi?",
                a: "Evet, SSL şifreli güvenli ödeme altyapımız var. Kredi kartı, havale/EFT ile ödeme yapabilirsiniz.",
              },
              {
                q: "Donmayan IPTV garantisi var mı?",
                a: "Evet, %99.9 uptime garantisi veriyoruz. Yüksek hızlı sunucularımızla kesintisiz yayın sağlıyoruz.",
              },
            ].map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="rounded-xl border-2 border-slate-200 bg-white p-6"
              >
                <h3 className="mb-3 text-lg font-bold text-slate-900">
                  {faq.q}
                </h3>
                <p className="text-base leading-relaxed text-slate-600">
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
          <h2 className="mb-6 text-5xl font-black text-slate-900">
            IPTV Satın Almak İçin
          </h2>
          <p className="mb-10 text-xl text-slate-600">
            Donmayan IPTV paketleri, en ucuz IPTV fiyatları için hemen iletişime geçin
          </p>
          <a
            href="https://wa.me/447445508352"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-xl bg-green-500 px-12 py-6 text-xl font-bold text-white shadow-xl shadow-green-500/30 transition-all hover:bg-green-600 hover:shadow-2xl"
          >
            <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            WhatsApp ile Hemen Yazın
          </a>
          <p className="mt-6 text-sm font-medium text-slate-500">
            Anında yanıt alın • IPTV test • En ucuz IPTV paketleri
          </p>
        </div>
      </section>
    </main>
  );
}
