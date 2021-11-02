import React from 'react';
import './notFound.css'
import NavBar from '../../Components/NavBar';

export default function NotFound() {
    return (
        <>
            <NavBar />

            <main className="main-not-found session">
                <p className="main-not-found__code titles">404</p>
                <p tabIndex="0">Página no encontrada</p>
            </main>
        </>
    )
}