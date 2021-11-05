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
import RutaPrivada from './Components/rutas/RutaPrivada';
import AuthState from './Context/autenticacion/authState';
import ComentState from './Context/comentarios/comentState';
import PlatosState from './Context/platos/platosState';
// Contexts
import { ServicesContextProvider } from './Context/ServicesContext';

function App() {
  return (
    <div className="App">
      <AuthState>
        <ComentState>
          <PlatosState>
            <ServicesContextProvider>
              <Router>
                <Switch>
                  <Route path="/JuvenTIC-React" exact component={Home} />
                  <Route path="/" exact component={Home} />
                  <Route path="/about" component={About} />
                  <Route path="/menu"render={() => {
                    return <Menu/>
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
                  <Route path="*" component={NotFound} />
                </Switch>
                <Footer />
              </Router>
            </ServicesContextProvider>
          </PlatosState>
        </ComentState>
      </AuthState>
    </div>
  );
}

export default App;