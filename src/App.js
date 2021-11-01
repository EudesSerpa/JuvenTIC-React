import React, { Component, useContext } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

// import NavBar from './Components/NavBar';
import Home from './pages/Home';
import About from './pages/About';
import Menu from './pages/Menu';
import Carrito from './pages/Carrito/Carrito'
import Services from './pages/Services';
import Reserves from './pages/Reserves';
import Contact from './pages/Contact';
import MapSite from './pages/MapSite'
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Footer from './Components/Footer';
import Header from './pages/Generales/Header'

// import route for dashboard
import RutaPrivada from './Components/rutas/RutaPrivada';
import Sidebar from './Components/layout/Sidebar'
import HomeD from './Components/dashboar/pages/Home'
import PlatosD from './Components/dashboar/pages/Platos'
import ServicesD from './Components/dashboar/pages/Services'
import UserD from './Components/dashboar/pages/User'
import AuthState from './context/autenticacion/authState';

/* */
import comentario from './samples/Comentarios.json'

class App extends Component{
  
  state = {
    rol: "ADMIN_ROLE",
    productos: [],
    comentarios: comentario,
    compras: [],
    nav: null,
  }

  async componentDidMount(){
    const link = 'https://my-json-server.typicode.com/JohanDavidPortocarrero/filejson/productos'
    const resp = await fetch(link)
    const datos = await resp.json();
    this.setState({
      productos: datos
    })
  }

  cambiarRol = (newRol) => {
    this.setState({rol: newRol})
  }

  actualizarComentario = (newComentario) => {
    this.setState({comentarios: newComentario})
  }

  actualizarProductosS = (newProducto) => {
    this.setState({productos: newProducto})
  }

  actualizarCompras = (newCompras) => {
    this.setState({compras: newCompras})
  }

  render(){
    return (
      <div className="App">
      <AuthState>
        <Router>
          {/* <NavBar fixed={true}/> */}
          <Header/>
          {console.log(this.state.authContext)}

          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/menu" render={() => {
                return <Menu 
                  rol={this.state.rol} 
                  datos = {this.state.productos} 
                  comentarios = {this.state.comentarios} 
                  actualizarDatos = {this.actualizarProductosS} 
                  actualizarComent = {this.actualizarComentario}
                  actualizarCompras = {this.actualizarCompras}
                  compras = {this.state.compras} 
                  cambiarRol = {this.cambiarRol}
                />
            }}/>
            <Route path="/services" component={Services} />
            <Route path="/reserves" component={Reserves} />
            <Route path="/contact" component={Contact} />
            <Route path="/carrito" render={() => {
              return <Carrito 
                compras = {this.state.compras} 
                datos = {this.state.productos}
                actualizarCompras = {this.actualizarCompras}
              />
            }}/> 
            <Route path="/mapa" render={() => {
              return <MapSite/>
            }}/> 
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
          </Switch>

          <Footer />
        </Router>
      </AuthState>
        
      </div>
    );
  }
  
}

export default App;