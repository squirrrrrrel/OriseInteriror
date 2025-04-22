// src/App.js
import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Footer from "./Components/Footer";
import ContactSection from "./Components/ContactSection";
import Testimonials from "./Components/Testimonials";
import Faq from "./Components/Faq";
import Price from "./Components/Price";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Services from "./Components/Services";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      <Services />
      <About />
      {/* <Price /> */}
      <Faq />
      <Testimonials />
      <ContactSection />
      <Footer />
    </>
  );
}

export default App;
