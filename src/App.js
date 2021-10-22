import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import { Carousel } from './Components/Carousel';
import About from './Components/about/about'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={About}/>
      </Switch>
    </Router>
  );
} 

export default App;