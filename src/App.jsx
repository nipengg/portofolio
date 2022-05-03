import React, { useState } from 'react'
import { Navbar, Home, About, Skills, Work } from './components';

function App() {

  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Work />
    </div>
  );
}

export default App;
