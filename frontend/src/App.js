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
import ScrollToTop from "./components/ScrollToTop";

// Enhanced custom animations and styles CSS
const customStyles = `
  @keyframes fade-in {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
  }
  
  @keyframes slide-in-left {
    from { opacity: 0; transform: translateX(-50px); }
    to { opacity: 1; transform: translateX(0); }
  }
  
  @keyframes slide-in-right {
    from { opacity: 0; transform: translateX(50px); }
    to { opacity: 1; transform: translateX(0); }
  }
  
  @keyframes bounce-gentle {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
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
  
  .animate-slide-in-left {
    animation: slide-in-left 0.6s ease-out;
  }
  
  .animate-slide-in-right {
    animation: slide-in-right 0.6s ease-out;
  }
  
  .animate-bounce-gentle {
    animation: bounce-gentle 2s ease-in-out infinite;
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
  
  /* Enhanced loading animation */
  .page-loading {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: linear-gradient(90deg, #3b82f6, #8b5cf6, #3b82f6);
    background-size: 200% 100%;
    animation: loading-bar 2s ease-in-out;
    z-index: 9999;
  }
  
  @keyframes loading-bar {
    0% { width: 0%; opacity: 1; }
    50% { width: 100%; opacity: 1; }
    100% { width: 100%; opacity: 0; }
  }
  
  /* Enhanced focus styles for accessibility */
  .focus\\:ring-2:focus {
    box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.5);
  }
  
  /* Professional transitions */
  .transition-professional {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  /* Gradient text */
  .text-gradient {
    background: linear-gradient(135deg, #3b82f6, #8b5cf6);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

function App() {
  return (
    <div className="App">
      <style>{customStyles}</style>
      <BrowserRouter>
        <div className="min-h-screen bg-white relative">
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
          <ScrollToTop />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;