import React from 'react';
import { NavLink } from 'react-router-dom';
import { GoPlus } from 'react-icons/go';
import './events.css';

const services = [
    {
        service: "Fiestas",
        img: "https://i.postimg.cc/7LfqW6r2/icono1-2x.png",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis id voluptate a non, praesentium nemo laboriosam? Tempora dolor neque suscipit!"
    },
    {
        service: "Celebraciones",
        img: "https://i.postimg.cc/TPFTM6TH/icono2-2x.png",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis id voluptate a non, praesentium nemo laboriosam? Tempora dolor neque suscipit!"
    },
    {
        service: "Comidas",
        img: "https://i.postimg.cc/26WrCK6j/icono3-2x.png",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis id voluptate a non, praesentium nemo laboriosam? Tempora dolor neque suscipit!"
    },
    {
        service: "Cumpleaños",
        img: "https://i.postimg.cc/7Pgwcddm/icono4-2x.png",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis id voluptate a non, praesentium nemo laboriosam? Tempora dolor neque suscipit!"
    },
];

export default function Events() {

    const serviceCards = services.map(service => (
        <article className="card">
            <header>
                <img src={ service.img } className="card-img-top" alt={`Event ${service.service} icon`} loading='lazy' />
                <p className="card--title">{ service.service }</p>
            </header>
            <p className="card-details">
                { service.description }
            </p>
            <footer>
                <NavLink to="/services" className="icon" aria-label={`Más información sobre ${service.service}`}>
                    <GoPlus />
                </NavLink>
            </footer>
        </article>
    ));

    return (
        <section className="events-section">
            <div className="wrapper-xxl wrapper">
                <h2 className="events-section--title titles">Organizamos tu evento</h2>

                <div className="wrapper-cards">
                    { serviceCards }
                </div>
            </div>
        </section>
    )
}
