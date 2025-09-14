import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Hero />
      {/* Add other components here */}
    </div>
  );
}

export default App;