import React from 'react';
import './Service.css';
import { NavLink } from 'react-router-dom';

export default function Service({ url, details, title }) {
    return (
        <article className="service-card animationCard">
            <img className="service-card--img" src={url} alt={title} loading="lazy" />

            <div className="service-card--body">
                <h5 className="service-card--title">{title}</h5>
                <p className="service-card--details">{details}</p>

                <NavLink to="/reserve" className="contact-btn">
                    ¿PREGUNTAS? CONTÁCTANOS
                </NavLink>
            </div>
        </article>
    );
}
