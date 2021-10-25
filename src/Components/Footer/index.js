import React from 'react'
import { NavLink } from 'react-router-dom'
import './footer.css';

export default function Footer() {
    return (
        <footer className="footer-section">
            <div className="wrapper-xxl wrapper">
                <NavLink to="/" className="footer-section--logo">
                    <img src="https://i.postimg.cc/5y3c0dMJ/logo-2x.png" alt="Restaurant logo" />
                </NavLink>

                <div className="footer-credentials">
                    <div className="footer-credentials--nav">
                        <ul>
                            <li>
                                <NavLink to="/map-site">Mapa Sitio</NavLink>
                            </li>
                            <li>
                                <NavLink to="/contact">Contáctanos</NavLink>
                            </li>
                            <li>
                                <NavLink to="/reserve">Reservaciones</NavLink>
                            </li>
                        </ul>
                    </div>

                    <div className="footer-credentials--data">
                        <ul>
                            <li>Restaurante Sal y Salsa Ltda.</li>
                            <li>Calle 33 No. 5 - 15, JuvenTIC</li>
                            <li>reserveTIC@juventic.com</li>
                            <li>333 333 3333</li>
                        </ul>
                        <p className="copyright">juvenTIC © Copyright 2021.</p>
                    </div>
                </div>

                <NavLink to="/" className="footer-section--map">
                    <img src="https://i.postimg.cc/BZ1VhPkM/map.jpg" alt="Direction on Google Maps" />
                </NavLink>
            </div>
        </footer>
    )
}
