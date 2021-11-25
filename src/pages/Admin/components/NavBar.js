import React from 'react'

import '../StyleAdmin/adminS.css'

export default function NavBar() {
    return <>
        <div className="navigation">
            <ul>
                <li>
                    <a href="#">
                        <span className="iconAdmin"><ion-icon name="apps-outline"></ion-icon></span>
                        <span className="title">Sal&Salsa</span>
                    </a> 
                </li>
                <li>
                    <a href="admin">
                        <span className="iconAdmin"><ion-icon name="home-outline"></ion-icon></span>
                        <span className="title">Home</span>
                    </a> 
                </li>
                <li>
                    <a href="usuariosAdmin">
                        <span className="iconAdmin"><ion-icon name="people-outline"></ion-icon></span>
                        <span className="title">Customer</span>
                    </a> 
                </li>
                <li>
                    <a href="serviciosAdmin">
                        <span className="iconAdmin"><ion-icon name="pricetags-outline"></ion-icon></span>
                        <span className="title">Services</span>
                    </a> 
                </li>
                <li>
                    <a href="commentsAdmin">
                        <span className="iconAdmin"><ion-icon name="chatbox-ellipses-outline"></ion-icon></span>
                        <span className="title">Comments</span>
                    </a> 
                </li>
                <li>
                    <a href="menuAdmin">
                        <span className="iconAdmin"><ion-icon name="restaurant-outline"></ion-icon></span>
                        <span className="title">Menu</span>
                    </a> 
                </li>
                <li>
                    <a href="bookingAdmin">
                        <span className="iconAdmin"><ion-icon name="calendar-outline"></ion-icon></span>
                        <span className="title">Bookings</span>
                    </a> 
                </li>
                <li>
                    <a href="aboutusAdmin">
                        <span className="iconAdmin"><ion-icon name="information-circle-outline"></ion-icon></span>
                        <span className="title">info</span>
                    </a> 
                </li>
                <li>
                    <a href="home">
                        <span className="iconAdmin"><ion-icon name="log-out-outline"></ion-icon></span>
                        <span className="title">Sign Out</span>
                    </a> 
                </li>
            </ul>
        </div>
    </>
}
