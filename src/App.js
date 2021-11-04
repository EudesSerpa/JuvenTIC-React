import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
// Pages
import Home from './pages/Home';
import About from './pages/About';
import Menu from './pages/Menu';
import Services from './pages/Services';
import Reserves from './pages/Reserves';
import Contact from './pages/Contact';
import MapSite from './pages/MapSite'
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Footer from './Components/Footer';
import NotFound from './pages/notFound';
import RutaPrivada from './Components/rutas/RutaPrivada';
import AuthState from './context/autenticacion/authState';


function App() {
  return (
    <div className="App">
    <AuthState>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/menu" component={Menu} />
          <Route path="/services" component={Services} />
          <Route path="/reserve" component={Reserves} />
          <Route path="/contact" component={Contact} />
          <Route path="/map-site" component={MapSite} />
          <Route path="/sign-in" component={SignIn} />
          <Route path="/sign-up" component={SignUp} />
          <Route path="*" component={NotFound} />
        </Switch>
        <Footer />
      </Router>
    </AuthState>
      
    </div>
  );
}

export default App;