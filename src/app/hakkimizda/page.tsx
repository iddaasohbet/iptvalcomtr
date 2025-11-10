import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import HakkimizdaContent from "./HakkimizdaContent";

export const metadata = {
  title: "IPTV Satın Al - Hakkımızda | Tulya IPTV 2025-2026",
  description:
    "IPTV satın al Tulya IPTV'den. 2020'den beri HD-4K kalitede 10.000+ kanal. IPTV satın al güvenle, 15.000+ kullanıcı, %99.9 uptime. Premium IPTV satın al.",
  keywords: "iptv satın al, tulya iptv hakkında, iptv satın al 2025, güvenilir iptv satın al, premium iptv, iptv paketleri",
};

export default function HakkimizdaPage() {
  return (
    <div className="bg-white">
      <Header />
      <HakkimizdaContent />
      <Footer />
      <FloatingContact />
    </div>
  );
}
