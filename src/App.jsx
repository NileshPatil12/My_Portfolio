import React, { Suspense, lazy } from "react";
import Navbar from "./components/Navbar";
import { ThemeProvider } from './context/ThemeContext';
import Home from "./components/Home";
import About from "./components/About";
const PortFolio = lazy(() => import('./components/PortFolio'));
const TechStack = lazy(() => import('./components/TechStack'));
const Contact = lazy(() => import('./components/Contact'));
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <ThemeProvider>
      <>
        <div className="min-h-screen pt-16 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-200">
          <Navbar />
        <Home />
        <About />
        <Suspense fallback={<div className="p-6 text-center">Loading portfolio...</div>}>
          <PortFolio />
        </Suspense>
        <Suspense fallback={<div className="p-6 text-center">Loading tech stack...</div>}>
          <TechStack />
        </Suspense>
        <Suspense fallback={<div className="p-6 text-center">Loading contact...</div>}>
          <Contact />
        </Suspense>
        <Footer />
      </div>
        <Toaster />
      </>
    </ThemeProvider>
  );
}

export default App;
