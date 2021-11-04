import React, { Component } from 'react'
import {Link} from 'react-router-dom'

import '../Styles/headerS.css'
import imagenD from '../../assets/iconDefaul.png'

export default class Header extends Component {

    state = {
        image: imagenD
    }

    render() {
        return <div className="headerGenery">
                <div className="headerLogo">
                    {/*<h1>LOGO</h1>*/}
                    <img src="https://i.postimg.cc/05wqCRbC/logo-2x.png" alt="...." />
                </div>
                <div className="contetHeader">
                    <div className="headerLinks">
                        <ul>
                            <li><Link className="link" to="/">Home</Link></li>
                            <li><Link className="link" to="/services">Servicios</Link></li>
                            <li><Link className="link" to="/menu">Menu</Link></li>
                            <li><Link className="link" to="/carrito">Carrito</Link></li>
                            <li><Link className="link" to="/about">Nosotros</Link></li>
                            <li><Link className="link" to="/contact">Contacto</Link></li>
                            <li><Link className="link" to="/mapa">Mapa</Link></li>
                        </ul>
                    </div>
                    <div className="iconoPerfil">
                        <button className="iconoHP" ><Link to="/sign-in"><img src={this.state.image} alt="Perfil"/></Link></button>
                    </div>
                </div>
        </div>
    }
}
