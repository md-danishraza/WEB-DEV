import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Contact from "./Contact";
import Hero from "./Hero";
import Project from "./Project";

import React, { useEffect } from "react";
import revealSections from "./utils/Reveal.js";
const App = () => {
  useEffect(() => {
    revealSections();
  }, []);
  return (
    <main>
      <Navbar />
      <Hero />
      <Project />
      <Contact />
      <Footer />
    </main>
  );
};
export default App;
