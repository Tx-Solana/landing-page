import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import WhyWeDoIt from './components/WhyWeDoIt';
import WhatWeStandFor from './components/WhatWeStandFor';
import HowWeDoIt from './components/HowWeDoIt';
import FAQs from './components/FAQs';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <WhyWeDoIt />
      <WhatWeStandFor />
      <HowWeDoIt />
      <FAQs />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
