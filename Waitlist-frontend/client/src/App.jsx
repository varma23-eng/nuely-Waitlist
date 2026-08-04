import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import WaitlistForm from './components/WaitlistForm';
import Footer from './components/Footer'; /* Add this import */
import './styles/App.css';

function App() {
  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <HeroSection />
        <WaitlistForm />
      </main>
      <Footer /> {/* Add the component here */}
    </div>
  );
}

export default App;
