import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import Packages from "@/components/Packages";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IPTV Paketleri ve Fiyatları 2025 | En Ucuz IPTV Satın Al - IPTVal",
  description:
    "IPTV paketleri ve fiyatları 2025! En ucuz IPTV satın al, donmayan IPTV paketleri ₺99'dan başlayan fiyatlarla. IPTV üyelik, aylık-yıllık IPTV abonelik seçenekleri. Premium IPTV satın al güvenle.",
  keywords: [
    "iptv paketleri",
    "iptv fiyatları",
    "en ucuz iptv",
    "iptv satın al",
    "iptv abonelik",
    "iptv üyelik",
    "ucuz iptv paketleri",
    "aylık iptv",
    "yıllık iptv",
    "donmayan iptv paketleri",
    "iptv paket fiyatları 2025",
    "premium iptv paketleri",
    "iptv satın al ucuz",
  ],
  openGraph: {
    title: "IPTV Paketleri ve Fiyatları 2025 | IPTVal",
    description: "₺99'dan başlayan IPTV paketleri. Donmayan IPTV satın al, en ucuz fiyatlarla premium hizmet.",
    type: "website",
    url: "https://www.iptval.com.tr/paketler",
  },
};

export default function PaketlerPage() {
  return (
    <div className="bg-white">
      <Header />
      <main className="pt-20">
        <div className="bg-gradient-to-br from-orange-50 via-white to-blue-50 py-16">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-12 text-center">
              <h1 className="mb-4 text-5xl font-black text-slate-900 md:text-6xl">
                IPTV Paketleri ve Fiyatları
              </h1>
              <p className="mx-auto max-w-3xl text-xl text-slate-600">
                <strong className="font-bold text-slate-900">En ucuz IPTV satın al</strong> fırsatları! 
                ₺99'dan başlayan <strong className="font-bold text-slate-900">donmayan IPTV paketleri</strong>. 
                Aylık ve yıllık <strong className="font-bold text-slate-900">IPTV üyelik</strong> seçenekleri ile 
                güvenli <strong className="font-bold text-slate-900">IPTV satın al</strong> işlemi.
              </p>
            </div>
            <Packages />
          </div>
        </div>
      </main>
      <Footer />
      <FloatingContact />
    </div>
  );
}

