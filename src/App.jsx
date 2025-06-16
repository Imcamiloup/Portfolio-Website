import React from "react";
import { BrowserRouter } from "react-router-dom";
import {
  Navbar,
  Hero,
  About,
  Experience,
  Tech,
  Works,
  Feedbacks,
  Contact,
  StarsCanvas,
} from "./components/components";

function App() {
  return (
    <BrowserRouter basename="/Portfolio-Website">
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <section id="hero">
            <Hero />
          </section>
        </div>
        <section id="about">
          <About />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="tech">
          <Tech />
        </section>
        <section id="works">
          <Works />
        </section>
        {/* <Feedbacks />*/}
      </div>
      <div className="relative z-0 bg-tertiary">
        <section id="contact">
          <Contact />
        </section>
        <StarsCanvas />
      </div>
    </BrowserRouter>
  );
}

export default App;
