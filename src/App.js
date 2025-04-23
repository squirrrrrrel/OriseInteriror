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
import Haven from "./Components/Haven";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <Hero />
        <Projects />
        <Services />
        <About />
        <Faq />
        <Testimonials />
        <ContactSection />
        <Footer />
      </>
    ),
  },
  {
    path: "/projects/Haven",
    element: (
      <>
        <Navbar />
        <Haven />
        <ContactSection />
        <Footer />
      </>
    ),
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
