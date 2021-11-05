import React, { useState, useContext } from 'react';
import './navbar.css';
import { NavLink } from 'react-router-dom';
import { ReactComponent as CloseMenu} from '../../assets/menuClose.svg';
import { ReactComponent as MenuIcon} from '../../assets/menuHamburger.svg';
import AuthContext from '../../Context/autenticacion/authContext';


const navLinks = [
    {
        path: "/about",
        field: "Nosotros",
    },
    {
        path: "/services",
        field: "Servicios",
    },
    {
        path: "/menu",
        field: "Menú",
    },
    {
        path: "/carrito",
        field: "carrito",
    },
    {
        path: "/contact",
        field: "Contáctanos",
    },
    {
        path: "/map-site",
        field: "Mapa Sitio",
    }
];

const NavBar = ({ fixed = false }) => {

    const authContext = useContext(AuthContext);
    const {autenticado, usuarioAutenticado, cerrarSesion} = authContext;

    // const { navLinks } = props;
    const [isMenuActive, setStateMenu] = useState(false);

    const handleClick = () => {
        setStateMenu(!isMenuActive);
    }

    const handleCloseMobileMenu = () => {
        setStateMenu(false);
    }

    const links = navLinks.map(link => (
        <li key={link.path} onClick={handleCloseMobileMenu}>
            <NavLink to={link.path}>{link.field}</NavLink>
        </li>
    ));

    return (
        <header className={ fixed ? "header fixed" : "header" }>
            <nav className="navbar-main wrapper wrapper-xxl">
                <div className="navbar__logo--container">
                    <NavLink to="/" className="navbar__logo">
                        <img src="https://i.postimg.cc/5y3c0dMJ/logo-2x.png" alt="Restaurant Logo" width="70" height="60" />
                    </NavLink>
                </div>

                <ul className={isMenuActive ? "header__options active" : "header__options"}>
                    { links }

                    {autenticado
                        ?   <li className="header__options-sigin" onClick={handleCloseMobileMenu}>
                                <NavLink to="/sign-in" onClick={() => cerrarSesion()}>Cerrar Sesión</NavLink>
                            </li>
                        :   <>
                                <li className="header__options-sigup" onClick={handleCloseMobileMenu}>
                                    <NavLink to="/sign-up">Registrarse</NavLink>
                                </li>
                                <li className="header__options-sigin" onClick={handleCloseMobileMenu}>
                                    <NavLink to="/sign-in">Iniciar Sesión</NavLink>
                                </li>
                            </>
                    }
                </ul>

                <div className="mobile__menu-icons" onClick={handleClick}>
                    {
                        isMenuActive
                            ? <CloseMenu className="menu__icon" />
                            : <MenuIcon className="menu__icon" />
                    }
                </div>
            </nav>
        </header>
    );
}

export default NavBar;