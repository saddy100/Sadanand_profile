import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// Custom animations CSS
const customStyles = `
  @keyframes fade-in {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
  }
  
  .animate-fade-in {
    animation: fade-in 0.8s ease-out;
  }
  
  .animate-fade-in-delay-1 {
    animation: fade-in 0.8s ease-out 0.2s both;
  }
  
  .animate-fade-in-delay-2 {
    animation: fade-in 0.8s ease-out 0.4s both;
  }
  
  .animate-fade-in-delay-3 {
    animation: fade-in 0.8s ease-out 0.6s both;
  }
  
  .animate-fade-in-delay-4 {
    animation: fade-in 0.8s ease-out 0.8s both;
  }
  
  .animate-fade-in-delay-5 {
    animation: fade-in 0.8s ease-out 1s both;
  }
  
  html {
    scroll-behavior: smooth;
  }
  
  /* Custom scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
  }
  
  ::-webkit-scrollbar-track {
    background: #f1f5f9;
  }
  
  ::-webkit-scrollbar-thumb {
    background: #3b82f6;
    border-radius: 4px;
  }
  
  ::-webkit-scrollbar-thumb:hover {
    background: #2563eb;
  }
`;

function App() {
  return (
    <div className="App">
      <style>{customStyles}</style>
      <BrowserRouter>
        <div className="min-h-screen bg-white">
          <Header />
          <main>
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Contact />
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;