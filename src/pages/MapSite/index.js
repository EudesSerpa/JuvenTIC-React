import React, { Component } from 'react';
import NavBar from '../../Components/NavBar/index';

import '../Styles/mapaS.css'

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
                    <h4>GENERAL</h4>
                    <ul>
                        <li><a className="link" href="-">INICIO</a></li>
                        <li><a className="link" href="-">NUESTRA PROPUESTA</a></li>
                        <li><a className="link" href="-">RECOMENDADO DEL CHEF</a></li>
                        <li><a className="link" href="-">ORGANIZAMOS TUS EVENTOS</a></li>
                        <li><a className="link" href="-">TESTIMONIOS</a></li>
                    </ul>
                </div>

                <div className="nosotros cardMS">
                    <h4>NOSOTROS</h4>
                    <ul>
                        <li><a className="link" href="-">NUESTRA HISTORIA</a></li>
                        <li><a className="link" href="-">PLANTILLA DE COLABORADORES</a></li>
                        <li><a className="link" href="-">TESTIMONIOS</a></li>
                    </ul>
                </div>

                <div className="menu cardMS">
                    <h4>EL MENU</h4>
                    <div>

                    </div>
                </div>

                <div className="servicios cardMS">
                    <h4>SERVICIOS</h4>
                    <ul>
                        <li><a className="link" href="-">CELEBRACION DE CUMPLEAÑOS</a></li>
                        <li><a className="link" href="-">ANIVERSARIO</a></li>
                        <li><a className="link" href="-">FIESTAS INFANTILES</a></li>
                        <li><a className="link" href="-">DECLARACIONES O PROPUESTAS</a></li>
                        <li><a className="link" href="-">DESPEDIDAS</a></li>
                        <li><a className="link" href="-">CENA CON AMIGOS</a></li>
                    </ul>
                </div>

                <div className="contacto cardMS">
                    <h4>CONTACTENOS</h4>
                    <div>

                    </div>
                </div>
            </div>
        </div>
        </>
    }
}