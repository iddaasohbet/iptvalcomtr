import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const poppins = Poppins({
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "IPTV Satın Al - Donmayan IPTV Paketleri 2025-2026 | IPTVal",
    template: "%s | IPTVal",
  },
  description:
    "IPTV satın al 2025-2026! En ucuz IPTV paketleri ₺99'dan başlıyor. Donmayan IPTV, 60.000+ kanal, Bein Sports, HD-4K kalite. IPTV test, IPTV üyelik, güvenilir IPTV satış. WhatsApp 7/24 destek.",
  keywords: [
    "iptv satın al",
    "iptv al",
    "iptv satın al 2025",
    "iptv satın al 2026",
    "donmayan iptv",
    "iptv paketleri",
    "en iyi iptv",
    "en ucuz iptv",
    "iptv üyelik",
    "iptv whatsapp",
    "ucuz iptv",
    "iptv test",
    "donmayan iptv 2025",
    "iptv test yayın",
    "ip tv üyeliği",
    "spor kanalları iptv",
    "premium iptv",
    "iptv satın al whatsapp",
    "güvenilir iptv satın al",
    "iptv abonelik",
    "iptv fiyatları",
    "iptv satış",
    "bein sports iptv",
    "s sport iptv",
    "lig tv iptv",
  ],
  metadataBase: new URL("https://www.iptval.com.tr"),
  authors: [{ name: "IPTVal" }],
  creator: "IPTVal",
  publisher: "IPTVal",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "IPTVal - Donmayan IPTV Satın Al 2025-2026",
    description:
      "En ucuz IPTV paketleri ₺99'dan başlıyor. 60.000+ kanal, HD-4K kalite, kesintisiz yayın, 7/24 destek.",
    type: "website",
    locale: "tr_TR",
    url: "https://www.iptval.com.tr",
    siteName: "IPTVal",
    images: [
      {
        url: "/og-image.webp",
        width: 1200,
        height: 630,
        alt: "IPTVal - Premium IPTV Satın Al",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IPTVal - Donmayan IPTV Satın Al",
    description:
      "En ucuz IPTV paketleri, HD-4K kalitede binlerce kanal, kesintisiz yayın.",
    images: ["/og-image.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.iptval.com.tr",
  },
  verification: {
    google: "15OKM52KsEl5W38jKOhrlxRX-D9xzQgKu26lEasH6Tk",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "IPTVal",
  "description": "Premium IPTV hizmet sağlayıcısı. Donmayan IPTV, en ucuz IPTV paketleri.",
  "url": "https://www.iptval.com.tr",
  "logo": "https://www.iptval.com.tr/og-image.webp",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+44-7445-508352",
    "contactType": "customer service",
    "availableLanguage": ["tr", "en"],
    "areaServed": "TR"
  },
  "sameAs": [
    "https://www.instagram.com/iptval"
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "15000"
  },
  "priceRange": "₺99 - ₺3999"
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "IPTV Subscription",
  "provider": {
    "@type": "Organization",
    "name": "IPTVal"
  },
  "areaServed": {
    "@type": "Country",
    "name": "Turkey"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "IPTV Paketleri",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Temel IPTV Paketi"
        },
        "price": "99",
        "priceCurrency": "TRY"
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Premium IPTV Paketi"
        },
        "price": "249",
        "priceCurrency": "TRY"
      }
    ]
  }
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "IPTV satın al nasıl yapılır?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "WhatsApp'tan +44 7445 508352 numarasına yazın, size uygun IPTV paketini seçin, ödeme yapın ve anında kurulum bilgilerinizi alın. 5 dakikada tamamlanır."
      }
    },
    {
      "@type": "Question",
      "name": "En ucuz IPTV paketleri hangileri?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "IPTVal'de IPTV paketleri ₺99'dan başlar. Aylık ve yıllık seçenekler mevcut. Yıllık IPTV satın al seçeneklerinde indirimler var."
      }
    },
    {
      "@type": "Question",
      "name": "Donmayan IPTV garantisi var mı?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Evet, %99.9 uptime garantisi veriyoruz. Yüksek hızlı sunucularımızla kesintisiz, donmayan IPTV yayın sağlıyoruz."
      }
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <head>
        <Script
          id="json-ld-organization"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Script
          id="json-ld-service"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
        />
        <Script
          id="json-ld-faq"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      </head>
      <body className={`${poppins.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
