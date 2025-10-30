import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import HakkimizdaContent from "./HakkimizdaContent";

export const metadata = {
  title: "Hakkımızda - Tulya IPTV | Türkiye'nin Premium IPTV Platformu",
  description:
    "Tulya IPTV hakkında. 2020'den beri HD-4K kalitede 10.000+ kanal, 15.000+ kullanıcı, %99.9 uptime. Bein Sports, Lig TV, spor kanalları ve dünya yayınları.",
  keywords: "tulya iptv hakkında, iptv türkiye, lig tv izle, bein sports iptv, premium iptv",
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
