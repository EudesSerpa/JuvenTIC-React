import React, { Component } from 'react';
import NavBar from '../../Components/NavBar/index';
import { Link } from 'react-router-dom';

import '../Styles/mapaS.css'

export default class MapaSitio extends Component{
    render(){
        return  <>
        <NavBar/>
        <div className="bodyMS wrapper wrapper-xxl">
            <div  className="contTitle">
                <h2 className="titles page--title">Mapa del Sitio</h2>
            </div>
            <div className="containerMS">
                <div className="general cardMS">
                    <h4>
                        <Link className="link" to="/">GENERAL</Link>
                    </h4>
                    <ul>
                        <li><Link className="link" to="/">INICIO</Link></li>
                        <li><a className="link" href="/#our-proporsal">NUESTRA PROPUESTA</a></li>
                        <li><a className="link" href="/#recomendations">RECOMENDADO DEL CHEF</a></li>
                        <li><a className="link" href="/#events">ORGANIZAMOS TUS EVENTOS</a></li>
                        <li><a className="link" href="/#testimonials">TESTIMONIOS</a></li>
                    </ul>
                </div>

                <div className="nosotros cardMS">
                    <h4>
                        <Link className="link" to="/about">NOSOTROS</Link>
                    </h4>
                    <ul>
                        <li><Link className="link" to="/about">NUESTRA HISTORIA</Link></li>
                        <li><a className="link" href="/about#collaborators">PLANTILLA DE COLABORADORES</a></li>
                        <li><a className="link" href="/about#testimonials">TESTIMONIOS</a></li>
                    </ul>
                </div>

                <div className="menu cardMS">
                    <h4>
                        <Link className="link" to="/menu">EL MENU</Link>
                    </h4>
                    <div>

                    </div>
                </div>

                <div className="servicios cardMS">
                    <h4>
                        <Link className="link" to="/services">SERVICIOS</Link>
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
                    <h4>
                        <Link className="link" to="/contact">CONTACTENOS</Link>
                    </h4>
                    <div>
                    </div>
                </div>
            </div>
        </div>
        </>
    }
}