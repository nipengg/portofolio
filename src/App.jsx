import React, { useState } from 'react'
import { Navbar, Home, About, Skills } from './components';

function App() {

  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
    </div>
  );
}

export default App;
