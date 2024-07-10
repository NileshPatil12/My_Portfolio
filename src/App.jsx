import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import PortFolio from "./components/PortFolio";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Home />
        <About />
        <PortFolio />
        <Experience />
        <Contact />
        <Footer />
      </div>
      <Toaster />
    </>
  );
}

export default App;
