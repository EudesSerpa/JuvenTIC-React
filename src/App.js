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

// import route for dashboard
import RutaPrivada from './Components/rutas/RutaPrivada';
import Sidebar from './Components/layout/Sidebar'
import HomeD from './Components/dashboar/pages/Home'
import PlatosD from './Components/dashboar/pages/Platos'
import ServicesD from './Components/dashboar/pages/Services'
import UserD from './Components/dashboar/pages/User'
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
          <div className="flex">
            <Sidebar/>
            <div className="content">
              <RutaPrivada exact path="/homeD" component={HomeD}/>
              <RutaPrivada exact path="/platosD" component={PlatosD}/>
              <RutaPrivada exact path="/servicesD" component={ServicesD}/>
              <RutaPrivada exact path="/userD" component={UserD}/>
            </div>
          </div>
          <Route path="*" component={NotFound} />
        </Switch>
        <Footer />
      </Router>
    </AuthState>
      
    </div>
  );
}

export default App;