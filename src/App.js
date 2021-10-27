import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import { Carousel } from './Components/Carousel';
import About from './Components/about/about';
import Login from './Components/auth/Login';
import NuevaCuenta from './Components/auth/Nueva_cuenta';
import Menu from './Components/menu/menu';
import Sidebar from './Components/layout/Sidebar'
import Home from './Components/dashboar/pages/Home'
import Platos from './Components/dashboar/pages/Platos'
import Services from './Components/dashboar/pages/Services'
import User from './Components/dashboar/pages/User'
import AuthState from './context/autenticacion/authState';
import RutaPrivada from './Components/rutas/RutaPrivada';
import Navbar from './Components/layout/Navbar'

function App() {
  return (
    <AuthState>
      <Router>
      <Navbar/>
        <Switch>
          <Route exact path="/" component={About}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/nueva-cuenta" component={NuevaCuenta}/>
          <Route exact path="/menu" component={Menu}/>
          <div className="flex">
            <Sidebar/>
            <div className="content">
              <RutaPrivada exact path="/home" component={Home}/>
              <RutaPrivada exact path="/platos" component={Platos}/>
              <RutaPrivada exact path="/services" component={Services}/>
              <RutaPrivada exact path="/user" component={User}/>
            </div>
          </div>
        </Switch>
      </Router>
    </AuthState>
  );
} 

export default App;