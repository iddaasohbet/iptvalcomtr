import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IPTV Sıkça Sorulan Sorular (SSS) | IPTV Satın Al Rehberi - IPTVal",
  description:
    "IPTV satın al için tüm sorularınızın cevabı! IPTV nedir, nasıl çalışır, hangi cihazlarda izlenir? IPTV test, kurulum, donmayan IPTV hakkında merak ettikleriniz.",
  keywords: [
    "iptv sss",
    "iptv nedir",
    "iptv nasıl çalışır",
    "iptv satın al rehberi",
    "iptv kurulum",
    "iptv test nasıl alınır",
    "donmayan iptv nedir",
    "iptv hangi cihazlarda çalışır",
    "iptv güvenli mi",
    "iptv fiyatları neden ucuz",
  ],
};

const faqs = [
  {
    category: "Genel Bilgiler",
    questions: [
      {
        q: "IPTV nedir? IPTV satın al ne demek?",
        a: "IPTV (Internet Protocol Television), internet üzerinden canlı TV yayınlarını izleme teknolojisidir. IPTV satın al işlemi ile binlerce kanalı HD-4K kalitede, donmadan izleyebilirsiniz. Geleneksel kablo TV'ye göre çok daha ekonomik ve esnek bir çözümdür."
      },
      {
        q: "Donmayan IPTV nedir? IPTVal neden donmuyor?",
        a: "Donmayan IPTV, yüksek kapasiteli sunucular ve optimize edilmiş altyapı sayesinde kesintisiz yayın sunan IPTV hizmetidir. IPTVal olarak %99.9 uptime garantisi ile premium sunucular kullanıyoruz. 10 Gbps bağlantı hızı ve CDN altyapımız sayesinde donma sorunu yaşamazsınız."
      },
      {
        q: "IPTV yasal mı? IPTV satın al güvenli mi?",
        a: "IPTV teknolojisi yasaldır ve internet üzerinden yayın yapan bir servistir. IPTVal olarak SSL şifreli güvenli bağlantı kullanıyoruz ve müşteri bilgilerinizi koruyoruz. Güvenilir ödeme yöntemleri ile IPTV satın al işleminizi güvenle yapabilirsiniz."
      }
    ]
  },
  {
    category: "Satın Alma ve Fiyatlandırma",
    questions: [
      {
        q: "En ucuz IPTV paketleri hangileri? IPTV fiyatları nedir?",
        a: "IPTVal'de IPTV paketleri ₺99'dan başlar. Temel paket aylık ₺99, Standart ₺149, Premium ₺249, VIP ₺399. Yıllık IPTV satın al seçeneklerinde %40'a varan indirimler var. En ucuz IPTV arayanlar için Temel paket idealdir."
      },
      {
        q: "IPTV satın al nasıl yapılır? Ödeme yöntemleri neler?",
        a: "IPTV satın al işlemi çok kolay: 1) WhatsApp'tan +44 7445 508352 numarasına yazın, 2) Size uygun IPTV paketini seçin, 3) Kredi kartı veya havale/EFT ile ödeme yapın, 4) Anında kurulum bilgilerinizi alın. 5 dakikada IPTV üyelik işlemi tamamlanır."
      },
      {
        q: "IPTV test yapabilir miyim? Ücretsiz deneme var mı?",
        a: "Evet! WhatsApp'tan IPTV test talebi gönderdiğinizde size demo erişimi sağlıyoruz. Böylece IPTV satın al kararını vermeden önce hizmetimizi test edebilirsiniz. IPTV test yayını ile kalitemizi görebilirsiniz."
      },
      {
        q: "IPTV üyelik nasıl yenilenir? Otomatik yenileme var mı?",
        a: "IPTV üyelik yenileme işlemini WhatsApp üzerinden kolayca yapabilirsiniz. Abonelik bitiş tarihinden 3 gün önce hatırlatma mesajı gönderiyoruz. Dilediğiniz zaman paket değişikliği yapabilir veya yıllık IPTV satın al seçeneğine geçebilirsiniz."
      }
    ]
  },
  {
    category: "Teknik ve Kurulum",
    questions: [
      {
        q: "IPTV hangi cihazlarda çalışır? Kaç cihazda izlenebilir?",
        a: "IPTVal IPTV tüm cihazlarda çalışır: Smart TV (Samsung, LG, Sony), Android Box, MAG Box, iPhone, iPad, Android telefon/tablet, Windows PC, Mac, Fire TV Stick. Paketinize göre 1-4 cihazda eş zamanlı izleyebilirsiniz."
      },
      {
        q: "IPTV kurulum zor mu? Nasıl kurulur?",
        a: "IPTV kurulum çok kolay! 5 dakikada kurarsınız. IPTV satın al işlemi sonrası size detaylı kurulum rehberi ve M3U/Xtream kodları gönderiyoruz. WhatsApp üzerinden canlı destek ile adım adım yardım ediyoruz. Video kurulum rehberimiz de mevcut."
      },
      {
        q: "IPTV için internet hızı ne kadar olmalı? Donmayan IPTV için kaç Mbps gerekir?",
        a: "Donmayan IPTV izlemek için minimum 10 Mbps internet hızı yeterlidir. HD kalite için 15-20 Mbps, 4K izlemek için 25-30 Mbps öneriyoruz. IPTVal'in optimize edilmiş altyapısı sayesinde düşük internet hızlarında bile akıcı izleme deneyimi yaşarsınız."
      },
      {
        q: "Hangi IPTV uygulamasını kullanmalıyım?",
        a: "IPTVal ile tüm popüler IPTV uygulamaları çalışır: IPTV Smarters Pro, TiviMate, GSE Smart IPTV, Perfect Player, VLC Media Player. Smart TV'lerde Smart IPTV, SS IPTV kullanabilirsiniz. Size en uygun uygulamayı öneriyoruz."
      }
    ]
  },
  {
    category: "Kanal ve İçerik",
    questions: [
      {
        q: "IPTV'de hangi kanallar var? Spor kanalları izlenebilir mi?",
        a: "IPTVal'de 60.000+ canlı kanal var. Tüm Türkiye kanalları, spor kanalları (Bein Sports, S Sport, TRT Spor), film-dizi kanalları, çocuk kanalları, haber, müzik ve dünya kanalları. Tüm ligler ve maçları HD-4K kalitede donmadan izleyin."
      },
      {
        q: "Yabancı kanal ve dünya kanalları var mı?",
        a: "Evet! 150+ ülkeden binlerce yabancı kanal mevcut. İngilizce, Arapça, Almanca, Fransızca, İspanyolca kanallar. UK, USA, Arap, Avrupa kanallarını izleyebilirsiniz. Premium IPTV satın al ile dünya yayınlarına erişin."
      },
      {
        q: "Film ve dizi arşivi var mı? VOD içeriği nasıl?",
        a: "Evet! 50.000+ film ve dizi VOD arşivimiz var. Netflix, Amazon Prime, BluTV içerikleri dahil. En yeni filmler ve popüler dizileri istediğiniz zaman izleyebilirsiniz. IPTV satın al ile sınırsız içerik erişimi."
      }
    ]
  },
  {
    category: "Destek ve Güvenilirlik",
    questions: [
      {
        q: "IPTV destek hizmeti nasıl? 7/24 destek var mı?",
        a: "IPTVal olarak 7/24 WhatsApp canlı destek veriyoruz. Teknik sorun, kurulum yardımı, paket değişikliği için +44 7445 508352 numarasından bize ulaşabilirsiniz. Ortalama yanıt süresi 5 dakika. Türkçe destek garantisi."
      },
      {
        q: "Donma veya kasma sorunu olursa ne yapmalıyım?",
        a: "Donmayan IPTV garantisi veriyoruz ama nadir durumlarda internet bağlantınızdan kaynaklı sorun yaşanabilir. WhatsApp'tan bize yazın, anında sunucu değişikliği yapıyoruz. %99.9 uptime garantimiz var. Sorun çözülmezse para iadesi yapıyoruz."
      },
      {
        q: "IPTVal güvenilir mi? Neden IPTVal'den IPTV satın al yapmalıyım?",
        a: "IPTVal, 2020'den beri IPTV satın al hizmeti veren güvenilir bir platformdur. 15.000+ aktif kullanıcı, %99.9 uptime, 7/24 destek, SSL güvenlik, hızlı kurulum. En ucuz IPTV fiyatları ve premium kalite. Müşteri memnuniyeti odaklı çalışıyoruz."
      }
    ]
  }
];

export default function SSSPage() {
  return (
    <div className="bg-white">
      <Header />
      <main className="pt-32 pb-20">
        <div className="mx-auto max-w-4xl px-6">
          <div className="mb-16 text-center">
            <h1 className="mb-6 text-5xl font-black text-slate-900 md:text-6xl">
              Sıkça Sorulan Sorular
            </h1>
            <p className="text-xl text-slate-600">
              <strong className="font-bold text-slate-900">IPTV satın al</strong> hakkında merak ettikleriniz. 
              Donmayan IPTV, IPTV paketleri, kurulum ve daha fazlası.
            </p>
          </div>

          {faqs.map((category, idx) => (
            <div key={idx} className="mb-12">
              <h2 className="mb-6 text-3xl font-black text-slate-900">
                {category.category}
              </h2>
              <div className="space-y-6">
                {category.questions.map((faq, qIdx) => (
                  <div 
                    key={qIdx}
                    className="rounded-2xl border-2 border-slate-200 bg-slate-50 p-6 transition-all hover:border-orange-500"
                  >
                    <h3 className="mb-4 text-xl font-bold text-slate-900">
                      {faq.q}
                    </h3>
                    <p className="leading-relaxed text-slate-700">
                      {faq.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* CTA */}
          <div className="mt-16 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 p-10 text-center text-white">
            <h2 className="mb-4 text-3xl font-black">
              Başka Sorunuz mu Var?
            </h2>
            <p className="mb-6 text-lg opacity-90">
              IPTV satın al, donmayan IPTV ve paketler hakkında detaylı bilgi için bize ulaşın
            </p>
            <a
              href="https://wa.me/447445508352"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-xl bg-white px-8 py-4 font-bold text-orange-600 shadow-xl transition-all hover:scale-105"
            >
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              WhatsApp ile Sor
            </a>
          </div>
        </div>
      </main>
      <Footer />
      <FloatingContact />
    </div>
  );
}

