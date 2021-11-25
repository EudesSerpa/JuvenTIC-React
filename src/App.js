import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
// Pages
import Home from './pages/Home';
import About from './pages/About';
import Menu from './pages/Menu';
import Carrito from './pages/Carrito';
import Services from './pages/Services';
import Reserves from './pages/Reserves';
import Contact from './pages/Contact';
import MapSite from './pages/MapSite'
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Footer from './Components/Footer';
import NotFound from './pages/notFound';
import Admin from './pages/Admin'
import RutaPrivada from './Components/rutas/RutaPrivada';

import AuthState from './Context/autenticacion/authState';
import ComentState from './Context/comentarios/comentState';
import PlatosState from './Context/platos/platosState';
import CarritoState from './Context/carrtio/CarritoState';
import ServicioContext from './Context/servicio/servicioContext'

import Ejemplo from './samples/ejemplo'

import HomeA from './pages/Admin/components/Home'


// Contexts
import { ServicesContextProvider } from './Context/ServicesContext';

function App() {

  return (
    <div className="App">
      <AuthState>
        <ComentState>
          <PlatosState>
            <CarritoState>
                <ServicesContextProvider>
                  <Router>
                    <Switch>
                      <Route path="/home" exact component={Home} />
                      <Route path="/" exact component={Home} />
                      <Route path="/about" component={About} />
                      <Route path="/ejemplo" component={Ejemplo} />
                      <Route path="/menu"render={() => {
                        return <Menu />
                      }}/>
                      <Route path="/carrito" render={() => {
                        return <Carrito/>
                      }}/>
                      <Route path="/services" component={Services} />
                      <Route path="/reserve" component={Reserves} />
                      <Route path="/contact" component={Contact} />
                      <Route path="/map-site" component={MapSite} />
                      <Route path="/sign-in" component={SignIn} />
                      <Route path="/sign-up" component={SignUp} />
                      {/*
                      <RutaPrivada exact path='/admin' component={'home'} />
                      <RutaPrivada exact path='/usuariosAdmin' component = {'user'} />
                      <RutaPrivada exact path='/menuAdmin' component = {'menu'} />
                      <RutaPrivada exact path='/serviciosAdmin' component = {'servicios'} />
                      */}
                      <Route path="/admin" render={() => {
                        return <Admin active={'home'} />
                      }} />
                      <Route path="/menuAdmin" render={() => {
                        return <Admin active={'menu'} />
                      }} />
                      <Route path="/usuariosAdmin" render={() => {
                        return <Admin active={'user'} />
                      }} />
                      <Route path="/serviciosAdmin" render={() => {
                        return <Admin active={'servicios'} />
                      }} />
                      <Route path="/commentsAdmin" render={() => {
                        return <Admin active={'comentarios'} />
                      }} />
                      <Route path="/bookingAdmin" render={() => {
                        return <Admin active={'reservas'} />
                      }} />
                      <Route path="/aboutusAdmin" render={() => {
                        return <Admin active={'nosotros'} />
                      }} />

                      <Route path="*" component={NotFound} />
                    </Switch>
                  </Router>
                </ServicesContextProvider>
            </CarritoState>
          </PlatosState>
        </ComentState>
      </AuthState>
    </div>
  );
}

export default App;