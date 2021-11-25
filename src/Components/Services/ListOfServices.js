import React, { useEffect } from 'react';
import Service from './Service';

export default function ListOfServices({ services }) {
    // const threshold = .5;

    // const handleIntersect = (entries, observer) => {
    //     entries.forEach(entry => {
    //         if(entry.intersectionRatio >= threshold) {
    //             entry.target.style.opacity = 1;
    //             entry.target.classList.add('showCardFromLeft');
    //         }else {
    //             entry.target.style.opacity = 0;
    //             entry.target.classList.remove('showCardFromLeft');
    //         }
    //     });
    // }

    // const showCards = () => {
    //     const cardsAnimated = document.querySelectorAll('.animationCard');

    //     const observer = new IntersectionObserver(handleIntersect, {
    //         threshold
    //     });

    //     cardsAnimated.forEach(card => {
    //         observer.observe(card);
    //     })
    // }

    // useEffect(() => showCards(), [])

    const serviceList = services.map(({ public_id, imgURL, descripcion, nombre }) =>
        <Service
            key={public_id}
            url={imgURL}
            details={descripcion}
            title={nombre}
        />
    );

    return (
        <div className="grid-container--services">
            { serviceList }
        </div>
    );
}