import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import WaitlistForm from "./components/WaitlistForm";
import Footer from "./components/Footer";

import "./styles/App.css";

function App() {
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

export default App;