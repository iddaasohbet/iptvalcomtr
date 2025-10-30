import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Packages from "@/components/Packages";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-orange-50 via-white to-blue-50">
      <Header />
      <main>
        <Hero />
        <Packages />
        <Features />
      </main>
      <Footer />
      <FloatingContact />
    </div>
  );
}

