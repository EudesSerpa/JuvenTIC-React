import React from "react";
import './sliderMain.css';

const imagesCarousel = [
    {
        img: "https://i.postimg.cc/fW653gbn/foto1-2x.png",
        text: "Sabores que exaltan tus sentidos",
    },
    {
        img: "https://i.postimg.cc/L4ZVRqX5/foto-Slide2.jpg",
        text: "Platos preparados por los mejores con amor para ti",
    },
    {
        img: "https://i.postimg.cc/kGrXWYK0/foto-Slide.jpg",
        text: "Disfruta de nuestros eventos y servicios",
    },
];

const SlidesImages = imagesCarousel.map((slide, i) => {
    return (
        <div className="slide" key={`${i}-${slide.img}`}>
            <img src={ slide.img } className='carousel-img' alt={`Plates Slide ${i}`} loading='lazy' />
            <div className="carousel-caption">
                <img src="https://i.postimg.cc/5y3c0dMJ/logo-2x.png" alt="Restaurant Logo" />
                <p>{ slide.text }</p>
            </div>
        </div>
    );
});

export { SlidesImages };