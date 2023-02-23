import React from "react";

//importing all files from one line from index js inside conteiner and components
import { Footer,Blog,Posibility,Features,WhatGPT3,Header } from "./containers";
import { CTA,Brand,Navbar } from "./components";
import './App.css';


function App() {
  return (
    <div className="App">
     <div className="gradient__bg">
      <Navbar />
      <Header />
     </div>
     <Brand />
     <WhatGPT3 />
     <Features />
     <Posibility />
     <CTA />
     <Blog />
     <Footer />
    </div>
  );
}

export default App;
