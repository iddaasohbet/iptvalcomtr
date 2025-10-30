import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "IPTV Satın Al - Donmayan IPTV Paketleri | Tulya IPTV",
    template: "%s | Tulya IPTV",
  },
  description:
    "IPTV satın al, donmayan IPTV 2024. En ucuz IPTV paketleri, IPTV üyelik, IPTV test. Lig TV, Bein Sports HD-4K kalite. 7/24 WhatsApp destek. Hemen IPTV al!",
  keywords: [
    "iptv al",
    "iptv satın al",
    "donmayan iptv",
    "iptv paketleri",
    "en iyi iptv",
    "en ucuz iptv",
    "iptv üyelik",
    "iptv whatsapp",
    "ucuz iptv",
    "iptv test",
    "donmayan iptv 2024",
    "iptv test yayın",
    "ip tv üyeliği",
    "lig tv iptv",
    "bein sports iptv",
  ],
  metadataBase: new URL("https://www.tulyaiptv.com"),
  authors: [{ name: "Tulya IPTV" }],
  creator: "Tulya IPTV",
  publisher: "Tulya IPTV",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Tulya IPTV - Premium IPTV Hizmetleri",
    description:
      "HD kalitesinde binlerce kanal, kesintisiz yayın, 7/24 destek.",
    type: "website",
    locale: "tr_TR",
    url: "https://www.tulyaiptv.com",
    siteName: "Tulya IPTV",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Tulya IPTV - Premium IPTV",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tulya IPTV - Premium IPTV Hizmetleri",
    description:
      "HD kalitesinde binlerce kanal, kesintisiz yayın.",
    images: ["/og-image.jpg"],
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
    canonical: "https://www.tulyaiptv.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={`${poppins.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

