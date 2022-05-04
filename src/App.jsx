import React, { useState } from 'react'
import { Navbar, Home, About, Skills, Work, Contact } from './components';

function App() {

  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
