import React from 'react';
import './notFound.css'
import NavBar from '../../Components/NavBar';
import Footer from '../../Components/Footer'
import { Link } from 'react-router-dom';

export default function NotFound() {
    return (
        <>
            <NavBar />

            <main className="main-not-found session">
                <p className="main-not-found__code titles">404</p>
                <p tabIndex="0">Página no encontrada</p>

                <Link to="/" className="main-not-found__btn">Regresa <span aria-label="Regresar">↩</span></Link>
            </main>

            <Footer/>
        </>
    )
}