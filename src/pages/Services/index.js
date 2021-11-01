import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import './services.css';
import NavBar from '../../Components/NavBar'


const services = [
    {
        img: "https://i.postimg.cc/FKRrHWtg/celebrations.jpg",
        title: "Celebración de cumpleaños",
        details: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate veniam magnam earum mollitia ipsum, praesentium animi eius sunt dolores dolor!",
    },
    {
        img: "https://i.postimg.cc/FKRrHWtg/celebrations.jpg",
        title: "Aniversarios",
        details: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate veniam magnam earum mollitia ipsum, praesentium animi eius sunt dolores dolor!",
    },
    {
        img: "https://i.postimg.cc/FKRrHWtg/celebrations.jpg",
        title: "Feistas infantiles",
        details: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate veniam magnam earum mollitia ipsum, praesentium animi eius sunt dolores dolor!",
    },
    {
        img: "https://i.postimg.cc/FKRrHWtg/celebrations.jpg",
        title: "Declaraciones o Propuestas",
        details: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate veniam magnam earum mollitia ipsum, praesentium animi eius sunt dolores dolor!",
    },
    {
        img: "https://i.postimg.cc/FKRrHWtg/celebrations.jpg",
        title: "Despedidas",
        details: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate veniam magnam earum mollitia ipsum, praesentium animi eius sunt dolores dolor!",
    },
    {
        img: "https://i.postimg.cc/FKRrHWtg/celebrations.jpg",
        title: "Cenas con amigos",
        details: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate veniam magnam earum mollitia ipsum, praesentium animi eius sunt dolores dolor!",
    },
];

export default function Services() {
    const showCards = () => {
        const cardsAnimated = document.querySelectorAll('.animationCard');

        cardsAnimated.forEach(card => {
            //Posicion, relativa al viewport, de las cards
            const cardPosition = card.getBoundingClientRect().top;

            //Altura de la ventana
            const viewportHeight = window.innerHeight / 1.5;

            if(cardPosition < viewportHeight){
                card.style.opacity = 1;
                card.classList.add('showCardFromLeft');
            }
        });
    }

    useEffect(() => {
        console.log(services);
        window.addEventListener('scroll', showCards);

        return () => {
            window.removeEventListener('scroll', showCards)
        }
    }, [])


    const cardServices = services.map(service => (
        <article key={service.title} className="service-card animationCard">
            <img className="service-card--img" src={service.img} alt={service.title} />

            <div className="service-card--body">
                <h5 className="service-card--title">{service.title}</h5>
                <p className="service-card--details">{service.details}</p>

                <NavLink to="/reserve" className="contact-btn">
                    ¿PREGUNTAS? CONTÁCTANOS
                </NavLink>
            </div>
        </article>
    ));

    return (
        <>
            <NavBar />

            <section className="services-section wrapper wrapper-xxl">
                <h1 className="titles page--title">Servicios</h1>
                <article className="services-section--description">
                    <div className="description-intro">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim magni velit sint tempora alias modi odio facere deserunt doloremque. Laborum autem et necessitatibus, magni sit inventore optio, laboriosam saepe exercitationem obcaecati illo, cum sapiente magnam porro reiciendis eius placeat dolorum?</p>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto nemo rem voluptas tenetur repudiandae consequatur omnis mollitia perferendis quia quod.</p>
                    </div>
                    <div className="description-end">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim magni velit sint tempora alias modi odio facere deserunt doloremque. Laborum autem et necessitatibus, magni sit inventore optio, laboriosam saepe exercitationem obcaecati illo, cum sapiente magnam porro reiciendis eius placeat dolorum?</p>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto nemo rem voluptas tenetur repudiandae consequatur omnis mollitia perferendis quia quod.</p>
                    </div>
                </article>

                {/* Services Grid */}
                <div className="grid-container--services">
                    { cardServices }
                </div>
            </section>
        </>
    )
}