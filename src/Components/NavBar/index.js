import React from 'react';
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from './NavBarElements';

const NavBar = () => {
    // Estado para el click del menu en mobile

    return (
        <header className="header__navbar">
            <Nav className="wrapper wrapper-xxl">
                <NavLink to="/" className="header__navbar-logo">
                    <img src="https://i.postimg.cc/5y3c0dMJ/logo-2x.png" alt="Restaurant Logo" width="70" height="50" />
                </NavLink>

                <Bars />

                <NavMenu className="header__navbar-links">
                    <NavLink to="/about">Nosotros</NavLink>
                    <NavLink to="/services">Servicios</NavLink>
                    <NavLink to="/menu">Menu</NavLink>
                    <NavLink to="/contact">Contáctanos</NavLink>
                    <NavLink to="/sign-up">Registrarse</NavLink>

                    <NavBtn>
                        <NavBtnLink to="/sign-in">Iniciar Sesión</NavBtnLink>
                    </NavBtn>
                </NavMenu>
            </Nav>
        </header>
    );
}

export default NavBar;