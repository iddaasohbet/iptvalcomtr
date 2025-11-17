import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, Tv, Wifi, Clock, Shield, Star, Zap, Globe, Play, TrendingUp } from "lucide-react";

export const metadata: Metadata = {
  title: "Donmayan IPTV Satın Al – En İyi IPTV Al Tavsiyeleri (2025 Rehberi)",
  description: "Donmayan IPTV satın almak isteyenler için 2025'in en güncel IPTV rehberi. En kaliteli IPTV al seçenekleri, fiyatlar, testler ve dikkat edilmesi gerekenler.",
  keywords: "iptv satın al, iptv al, donmayan iptv, iptv 2025, en iyi iptv, iptv fiyatları, stabil iptv, iptv test, kaliteli iptv, 4k iptv, kesintisiz iptv, premium iptv",
  openGraph: {
    title: "Donmayan IPTV Satın Al – En İyi IPTV Al Tavsiyeleri (2025 Rehberi)",
    description: "Donmayan IPTV satın almak isteyenler için 2025'in en güncel IPTV rehberi.",
  },
};

export default function IPTVAlPage() {
  return (
    <div className="bg-gradient-to-br from-orange-50 via-white to-blue-50">
      <Header />
      <main className="min-h-screen pt-32 pb-20">
        {/* Hero Section */}
        <section className="mx-auto max-w-7xl px-6 mb-20">
          <div className="text-center mb-16">
            {/* Logo */}
            <div className="mb-8 flex justify-center">
              <div className="inline-flex items-center gap-4 rounded-2xl bg-white px-8 py-4 shadow-2xl border-2 border-orange-200">
                <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-orange-600">
                  <Tv className="h-8 w-8 text-white" />
                </div>
                <div className="text-left">
                  <div className="text-3xl font-black tracking-tight text-slate-900">
                    IPTV AL
                  </div>
                  <div className="text-xs uppercase tracking-widest text-orange-600 font-semibold">
                    Donmayan Yayın
                  </div>
                </div>
              </div>
            </div>
            
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Donmayan IPTV Satın Al
              <span className="block mt-2 bg-gradient-to-r from-orange-600 to-orange-600 bg-clip-text text-transparent">
                En İyi IPTV Al Tavsiyeleri
              </span>
            </h1>
            <p className="mx-auto mb-12 max-w-3xl text-lg text-slate-600 leading-relaxed">
              Donmayan IPTV satın almak isteyenler için 2025'in en güncel IPTV rehberi. En kaliteli IPTV al seçenekleri, 
              fiyatlar, testler ve dikkat edilmesi gerekenler hakkında kapsamlı bilgi.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <article className="mx-auto max-w-4xl px-6">
          
          {/* IPTV Nedir */}
          <section className="mb-16">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 border-l-4 border-orange-500 pl-4">
              IPTV Nedir? Kısaca ve Basit Anlatım
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-slate-700 leading-relaxed mb-6">
                <strong className="text-slate-900">IPTV (Internet Protocol Television)</strong>, televizyon yayınlarının 
                internet protokolü üzerinden iletilmesini sağlayan bir teknolojidir. Normal uydu antenleri yerine internet 
                bağlantısı kullanır. Bu sayede hem daha kaliteli görüntü sunar hem de çok daha fazla içeriğe erişim sağlar.
              </p>

              <div className="grid md:grid-cols-2 gap-4 my-8">
                <div className="rounded-xl border border-slate-200 bg-gradient-to-br from-orange-50 to-white p-6">
                  <div className="mb-3 flex items-center gap-2">
                    <Tv className="h-6 w-6 text-orange-600" />
                    <h3 className="text-lg font-bold text-slate-900">Görüntü Kalitesi</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                      Full HD, 4K ve 8K yayın desteği
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                      Kristal netliğinde görüntü
                    </li>
                  </ul>
                </div>

                <div className="rounded-xl border border-slate-200 bg-gradient-to-br from-blue-50 to-white p-6">
                  <div className="mb-3 flex items-center gap-2">
                    <Wifi className="h-6 w-6 text-blue-600" />
                    <h3 className="text-lg font-bold text-slate-900">Bağlantı</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                      Donmadan, takılmadan izleme
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                      Kesintisiz yayın kalitesi
                    </li>
                  </ul>
                </div>
              </div>

              <p className="text-slate-700 leading-relaxed">
                Bu yüzden kullanıcılar daha çok <strong className="text-orange-600">donmayan IPTV satın al</strong> arayışına yöneliyor.
              </p>
            </div>
          </section>

          {/* IPTV Fiyatları 2025 */}
          <section className="mb-16">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 border-l-4 border-orange-500 pl-4">
              IPTV Fiyatları 2025 – Güncel Liste
            </h2>
            <p className="mb-6 text-slate-700 leading-relaxed">
              2025 yılı ortalama <strong className="text-orange-600">IPTV fiyat</strong> aralıkları:
            </p>

            <div className="overflow-x-auto rounded-xl border border-slate-200">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
                    <th className="border border-slate-300 px-6 py-4 text-left font-bold">Paket Türü</th>
                    <th className="border border-slate-300 px-6 py-4 text-left font-bold">Fiyat (TL)</th>
                    <th className="border border-slate-300 px-6 py-4 text-left font-bold">Özellik</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  <tr className="hover:bg-orange-50 transition-colors">
                    <td className="border border-slate-200 px-6 py-4 font-semibold text-slate-900">1 Aylık IPTV</td>
                    <td className="border border-slate-200 px-6 py-4 text-orange-600 font-bold">60 – 100 TL</td>
                    <td className="border border-slate-200 px-6 py-4 text-slate-700">Tüm kanallar + arşiv</td>
                  </tr>
                  <tr className="hover:bg-green-50 transition-colors">
                    <td className="border border-slate-200 px-6 py-4 font-semibold text-slate-900">3 Aylık IPTV</td>
                    <td className="border border-slate-200 px-6 py-4 text-green-600 font-bold">150 – 250 TL</td>
                    <td className="border border-slate-200 px-6 py-4 text-slate-700">Ekstra indirimli</td>
                  </tr>
                  <tr className="hover:bg-purple-50 transition-colors bg-purple-50/50">
                    <td className="border border-slate-200 px-6 py-4 font-semibold text-slate-900">6 Aylık IPTV</td>
                    <td className="border border-slate-200 px-6 py-4 text-purple-600 font-bold">300 – 400 TL</td>
                    <td className="border border-slate-200 px-6 py-4 text-slate-700">
                      <span className="inline-flex items-center gap-1">
                        <Star className="h-4 w-4 text-purple-600" />
                        En çok tercih edilen
                      </span>
                    </td>
                  </tr>
                  <tr className="hover:bg-blue-50 transition-colors">
                    <td className="border border-slate-200 px-6 py-4 font-semibold text-slate-900">12 Aylık IPTV</td>
                    <td className="border border-slate-200 px-6 py-4 text-blue-600 font-bold">500 – 700 TL</td>
                    <td className="border border-slate-200 px-6 py-4 text-slate-700">En uygun fiyatlı paket</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* CTA Section */}
          <section className="rounded-3xl bg-gradient-to-r from-orange-500 via-orange-600 to-orange-600 p-12 text-center text-white shadow-2xl">
            <h2 className="mb-4 text-3xl font-bold">
              2025'in En İyi IPTV Deneyimi İçin Hazır mısınız?
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-orange-50">
              Donmayan, kesintisiz, 4K kalitesinde IPTV deneyimi yaşamak için hemen iletişime geçin!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/"
                className="rounded-xl bg-white px-8 py-4 font-bold text-orange-600 shadow-lg transition-all hover:scale-105 hover:shadow-xl"
              >
                Ana Sayfaya Dön
              </Link>
              <a
                href="https://wa.me/447445508352"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border-2 border-white bg-transparent px-8 py-4 font-bold text-white shadow-lg transition-all hover:bg-white hover:text-orange-600"
              >
                WhatsApp ile İletişim
              </a>
            </div>
          </section>

        </article>
      </main>
      <Footer />
      <FloatingContact />
    </div>
  );
}

