import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import { Carousel } from './Components/Carousel';
import About from './Components/about/about';
import Login from './Components/auth/Login';
import NuevaCuenta from './Components/auth/Nueva_cuenta';
import Menu from './Components/menu/menu';
import AuthState from './context/autenticacion/authState';
import RutaPrivada from './Components/rutas/RutaPrivada';

function App() {
  return (
    <AuthState>
      <Router>
        <Switch>
          <Route exact path="/" component={About}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/nueva-cuenta" component={NuevaCuenta}/>
          <RutaPrivada exact path="/menu" component={Menu}/>
        </Switch>
      </Router>
    </AuthState>
  );
} 

export default App;