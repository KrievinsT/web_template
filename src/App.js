import React from "react";
import './App.css'; 
import LandingPage from './components/LandingPage';
import Features from "./components/Features";
import PricingPage from "./components/Pricing";  
import About from "./components/About";

function App() { 
  return(
    <div className="App"> 
      <LandingPage />
      <Features />
      <PricingPage />  
      <About />
    </div>
  );
}

export default App;
