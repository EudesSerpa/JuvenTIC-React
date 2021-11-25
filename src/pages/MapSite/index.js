import React, { Component } from 'react';
import NavBar from '../../Components/NavBar/index';
import Footer from '../../Components/Footer'

import '../Styles/mapaS.css'
import { Link } from 'react-router-dom';

export default class MapaSitio extends Component{
    render(){
        return  <>
        <NavBar/>
        <div className="bodyMS">
            <div  className="contTitle">
                <h2>Mapa del Sitio</h2>
            </div>
            <div className="containerMS">
                <div className="general cardMS">
                    <h4>
                        <Link to="/">GENERAL</Link>
                    </h4>
                    <ul>
                        <li><a className="link" href="/">INICIO</a></li>
                        <li><a className="link" href="/#our-proporsal">NUESTRA PROPUESTA</a></li>
                        <li><a className="link" href="/#recomendations">RECOMENDADO DEL CHEF</a></li>
                        <li><a className="link" href="/#events">ORGANIZAMOS TUS EVENTOS</a></li>
                        <li><a className="link" href="/#testimonials">TESTIMONIOS</a></li>
                    </ul>
                </div>

                <div className="nosotros cardMS">
                    <h4>
                        <Link to="/about">NOSOTROS</Link>
                    </h4>
                    <ul>
                        <li><Link className="link" to="/about/#our-history">NUESTRA HISTORIA</Link></li>
                        <li><a className="link" href="/about/#employees">PLANTILLA DE COLABORADORES</a></li>
                        <li><a className="link" href="/about/#testimonials">TESTIMONIOS</a></li>
                    </ul>
                </div>

                <div className="menu cardMS">
                    <h4>
                        <Link to="/menu">El MENÚ</Link>
                    </h4>
                    <div>

                    </div>
                </div>

                <div className="servicios cardMS">
                    <h4>
                        <Link to="/services">SERVICIOS</Link>
                    </h4>
                    <ul>
                        <li><Link className="link" to="/services">CELEBRACION DE CUMPLEAÑOS</Link></li>
                        <li><Link className="link" to="/services">ANIVERSARIO</Link></li>
                        <li><Link className="link" to="/services">FIESTAS INFANTILES</Link></li>
                        <li><Link className="link" to="/services">DECLARACIONES O PROPUESTAS</Link></li>
                        <li><Link className="link" to="/services">DESPEDIDAS</Link></li>
                        <li><Link className="link" to="/services">CENA CON AMIGOS</Link></li>
                    </ul>
                </div>

                <div className="contacto cardMS">
                    <h4>CONTACTENOS</h4>
                    <div>

                    </div>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    }
}