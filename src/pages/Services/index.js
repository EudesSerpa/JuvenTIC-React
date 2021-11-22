import React, { useEffect } from 'react';
import './services.css';

import NavBar from '../../Components/NavBar';

import ListOfServices from '../../Components/Services/ListOfServices';
import { useServices } from '../../Hooks/useServices';


export default function Services() {
    const { services } = useServices();

    const showCards = () => {
        const cardsAnimated = document.querySelectorAll('.animationCard');

        cardsAnimated.forEach(card => {
            //Posicion, relativa al viewport, de las cards
            const cardPosition = card.getBoundingClientRect().top;

            //Altura de la ventana
            const viewportHeight = window.innerHeight / 1.25;

            if(cardPosition < viewportHeight){
                card.style.opacity = 1;
                card.classList.add('showCardFromLeft');
            }
        });
    }

    useEffect(() => {
        window.addEventListener('scroll', showCards);

        return () => {
            window.removeEventListener('scroll', showCards)
        }
    }, [])


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
                <ListOfServices services={services} />
            </section>
        </>
    )
}