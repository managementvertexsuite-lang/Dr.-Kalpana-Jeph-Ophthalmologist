import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import CataractSurgery from './pages/CataractSurgery';
import GlaucomaCare from './pages/GlaucomaCare';
import LasikSurgery from './pages/LasikSurgery';
import DiabeticRetina from './pages/DiabeticRetina';
import PediatricEyeCare from './pages/PediatricEyeCare';
import DryEyeClinic from './pages/DryEyeClinic';

function App() {
  const [showAdmin, setShowAdmin] = useState(false);

  const handleAdminToggle = (value) => {
    setShowAdmin(value);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Router>
      <div className="app-wrapper">
        <TopBar />
        <Header onAdminToggle={handleAdminToggle} showAdmin={showAdmin} />

        <main>
          <Routes>
            <Route path="/" element={
              showAdmin ? (
                <DoctorDashboard />
              ) : (
                <>
                  <Hero />
                  <Stats />
                  <Services />
                  <BookingForm />
                  <FloatingCTA />
                </>
              )
            } />
            <Route path="/cataract-surgery" element={<CataractSurgery />} />
            <Route path="/glaucoma-care" element={<GlaucomaCare />} />
            <Route path="/lasik-surgery" element={<LasikSurgery />} />
            <Route path="/diabetic-retina" element={<DiabeticRetina />} />
            <Route path="/pediatric-eye-care" element={<PediatricEyeCare />} />
            <Route path="/dry-eye-clinic" element={<DryEyeClinic />} />
          </Routes>
        </main>

        <Footer onAdminToggle={handleAdminToggle} showAdmin={showAdmin} />
      </div>
    </Router>
  );
}

export default App;
