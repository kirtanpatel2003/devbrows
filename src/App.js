import React from "react";
import Hyperspeed from './blocks/Backgrounds/Hyperspeed/Hyperspeed'; // Adjust path if needed
import Navbar from "./components/Navbar";
import OverlayText from "./components/OverlayText";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hyperspeed />
      <OverlayText />
      <Footer />
    </div>
  );
}

export default App;
