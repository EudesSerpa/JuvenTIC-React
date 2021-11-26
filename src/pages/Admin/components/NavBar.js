import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../../Context/autenticacion/authContext';

import '../StyleAdmin/adminS.css'

export default function NavBar({active, handleCloseMobileMenu}) {
    const authContext = useContext(AuthContext);
    const {cerrarSesion} = authContext;

    return <>
        <div className={active ? "navigation active" : "navigation" }>
            <ul>
                <li>
                    <Link to="/" onClick={handleCloseMobileMenu}>
                        <span className="iconAdmin"><ion-icon name="apps-outline"></ion-icon></span>
                        <span className="title">Sal&Salsa</span>
                    </Link>
                </li>
                <li>
                    <Link to="/admin" onClick={handleCloseMobileMenu}>
                        <span className="iconAdmin"><ion-icon name="home-outline"></ion-icon></span>
                        <span className="title">Home</span>
                    </Link>
                </li>
                <li>
                    <Link to="/usuariosAdmin" onClick={handleCloseMobileMenu}>
                        <span className="iconAdmin"><ion-icon name="people-outline"></ion-icon></span>
                        <span className="title">Customer</span>
                    </Link>
                </li>
                <li>
                    <Link to="/serviciosAdmin" onClick={handleCloseMobileMenu}>
                        <span className="iconAdmin"><ion-icon name="pricetags-outline"></ion-icon></span>
                        <span className="title">Services</span>
                    </Link>
                </li>
                <li>
                    <Link to="/commentsAdmin" onClick={handleCloseMobileMenu}>
                        <span className="iconAdmin"><ion-icon name="chatbox-ellipses-outline"></ion-icon></span>
                        <span className="title">Comments</span>
                    </Link>
                </li>
                <li>
                    <Link to="/menuAdmin" onClick={handleCloseMobileMenu}>
                        <span className="iconAdmin"><ion-icon name="restaurant-outline"></ion-icon></span>
                        <span className="title">Menu</span>
                    </Link>
                </li>
                <li>
                    <Link to="/bookingAdmin" onClick={handleCloseMobileMenu}>
                        <span className="iconAdmin"><ion-icon name="calendar-outline"></ion-icon></span>
                        <span className="title">Bookings</span>
                    </Link>
                </li>
                <li>
                    <Link to="/aboutusAdmin" onClick={handleCloseMobileMenu}>
                        <span className="iconAdmin"><ion-icon name="information-circle-outline"></ion-icon></span>
                        <span className="title">info</span>
                    </Link>
                </li>
                <li>
                    <Link to="/sing-in" onClick={handleCloseMobileMenu}>
                        <span className="iconAdmin"><ion-icon name="log-out-outline"></ion-icon></span>
                        <span onClick={() => cerrarSesion()} className="title">Sign Out</span>
                    </Link>
                </li>
            </ul>
        </div>
    </>
}
