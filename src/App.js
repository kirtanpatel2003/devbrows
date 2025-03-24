import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import ReactGA from "react-ga";
import Navbar from "./components/Navbar";
import OverlayText from "./components/OverlayText";
import AboutUs from "./pages/AboutUs";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Threads from "./blocks/Backgrounds/Threads/Threads";

// Initialize GA only once
const TRACKING_ID = "G-JYSGZCXZF0"; // Replace with your own GA Tracking ID
ReactGA.initialize(TRACKING_ID);

// Custom hook for tracking page views
function usePageTracking() {
  const location = useLocation();

  useEffect(() => {
    ReactGA.set({ page: location.pathname });
    ReactGA.pageview(location.pathname + location.search);
  }, [location]);
}

function HomePage() {
  return (
    <>
      <div style={{ width: '100%', height: '1200px', position: 'relative' }}>
        <Threads amplitude={1} distance={0} enableMouseInteraction={true} />
      </div>
      <OverlayText />
    </>
  );
}

function AppContent() {
  usePageTracking();

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

function App() {
  return (
    <div className="App">
      <Router>
        <AppContent />
      </Router>
    </div>
  );
}

export default App;
