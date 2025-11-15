import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import IletisimContent from "./IletisimContent";

export const metadata = {
  title: "İletişim - IPTVal | 7/24 Müşteri Hizmetleri ve Teknik Destek",
  description:
    "IPTVal ile iletişime geçin. WhatsApp: +44 7445 508352, 7/24 canlı destek, hızlı yanıt. IPTV abonelik, teknik destek ve satış için bize ulaşın.",
  keywords: "iptval iletişim, iptv destek, iptv satış, whatsapp iptv, iptv müşteri hizmetleri",
};

export default function IletisimPage() {
  return (
    <div className="bg-white">
      <Header />
      <IletisimContent />
      <Footer />
      <FloatingContact />
    </div>
  );
}
