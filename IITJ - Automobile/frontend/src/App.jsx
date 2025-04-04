import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import AboutUs from "./components/AboutUs";
import WhyUs from "./components/WhyUs";
import Gallery from "./components/Gallery";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      

      <Navbar />
      <Hero />
      <Services />
      <AboutUs />
      <WhyUs />
      <Gallery />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
