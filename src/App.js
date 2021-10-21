import React from 'react';
import './App.css';
import { Carousel } from './Components/Carousel';

function App() {
  return (
    <div className="App">
      <Carousel type='Images' />
      <Carousel type='Testimonials' intervalTime='7000' speedTransition='900' />
    </div>
  );
}

export default App;