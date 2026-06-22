import React, { useState } from 'react';
import './App.css';
import TopBar from './components/TopBar';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Services from './components/Services';
import BookingForm from './components/BookingForm';
import DoctorDashboard from './components/DoctorDashboard';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';

function App() {
  const [showAdmin, setShowAdmin] = useState(false);

  const handleAdminToggle = (value) => {
    setShowAdmin(value);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="app-wrapper">
      <TopBar />
      <Header onAdminToggle={handleAdminToggle} showAdmin={showAdmin} />
      
      <main>
        {showAdmin ? (
          <DoctorDashboard />
        ) : (
          <>
            <Hero />
            <Stats />
            <Services />
            <BookingForm />
            <FloatingCTA />
          </>
        )}
      </main>
      
      <Footer onAdminToggle={handleAdminToggle} showAdmin={showAdmin} />
    </div>
  );
}

export default App;
