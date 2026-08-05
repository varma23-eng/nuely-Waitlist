import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import WaitlistForm from "../components/WaitlistForm";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Header />

      <main className="hero-layout">
        <HeroSection />
        <WaitlistForm />
      </main>

      <Footer />
    </>
  );
}