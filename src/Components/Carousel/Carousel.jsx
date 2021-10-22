import React, { useRef, useEffect, useCallback} from 'react';

import { ReactComponent as ArrowLeft } from "../../assets/arrowLeft.svg";
import { ReactComponent as ArrowRight } from "../../assets/arrowRight.svg";

import { SlidesImages } from '../../services/Carousels/sliderMain';
import { SlidesTestimonials } from '../../services/Carousels/testimonials';

import styled from 'styled-components';



const Carousel = ({
        controls = true,
        autoPlay = true,
        speedTransition = '700',
        intervalTime = '5000',
        type='Images',
    }) => {
    const slides = useRef(null);
    const intervalID = useRef(null);

    const previousSlide = () => {
        let hasChildren = slides.current?.children.length > 0;

        if(hasChildren) {
            // Obtenemos la ultima slide
            const indexLastSlide = slides.current.children.length - 1;
            const lastSlide = slides.current.children[indexLastSlide];

            slides.current.insertBefore(lastSlide, slides.current.firstChild);

            slides.current.style.transition = 'none';

            const sizeSlide = slides.current.children[0].offsetWidth;
            slides.current.style.transform = `translateX(-${sizeSlide}px)`;

            setTimeout(() => {
                slides.current.style.transition = `${speedTransition}ms ease-out all`;
                slides.current.style.transform = `translateX(0px)`;
            }, 30);
        }
    }

    const nextSlide = useCallback(() => {
        let hasChildren = slides.current?.children.length > 0;

        if(hasChildren) {
            // Obtenemos la primera slide
            const firstSlide = slides.current.children[0];
            // Establecemos la transition
            slides.current.style.transition = `${speedTransition}ms ease-out all`;

            // Movemos el slide
            const sizeSlide = firstSlide.offsetWidth;
            slides.current.style.transform = `translateX(-${sizeSlide}px)`;

            const transitionEnded = () =>{
                // Reiniciar position del slide
                slides.current.style.transition = 'none';
                slides.current.style.transform = `translateX(0)`;

                // El primer elemento se enlista la final del slide
                slides.current.appendChild(firstSlide);


                slides.current.removeEventListener('transitionend', transitionEnded);
            };

            // Event Listener para cuando termine la transition del slide
            slides.current.addEventListener('transitionend', transitionEnded);
        }
    }, [speedTransition]);


    useEffect(() => {
        if(autoPlay) {
            intervalID.current = setInterval(() => { nextSlide() }, intervalTime);

            // Limpiar el intervalo
            slides.current.addEventListener('mouseenter', () => {
                clearInterval(intervalID.current);
            });

            // Iniciar de nuevo el intervalo
            slides.current.addEventListener('mouseleave', () => {
                intervalID.current = setInterval(() => { nextSlide() }, intervalTime);
            });
        }
    }, [autoPlay, intervalTime, nextSlide]);


    return (
        <WrapperCarousel>
            <WrapperSlides ref={slides}>
                { type === 'Images' ? SlidesImages : SlidesTestimonials}
            </WrapperSlides>

            {controls &&
                <Controls>
                    <Button left onClick={previousSlide}>
                        <ArrowLeft />
                    </Button>
                    <Button right onClick={nextSlide}>
                        <ArrowRight />
                    </Button>
                </Controls>}
        </WrapperCarousel>
    );
}



// Estilos
const WrapperCarousel = styled.div`
    position: relative;
    width: 100%;
    overflow: hidden;
`;

const WrapperSlides = styled.div`
    display: flex;
    flex-wrap: nowrap;
    width: 100%;
`;

const Controls = styled.div`
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 20;
`;

const Button = styled.button`
    position: absolute;
    width: 50px;
    height: 100%;
    background: none;
    border: none;
    cursor: pointer;
    outline: none;
    text-align: center;
    pointer-events: all;
    transition: .3s ease all;

    ${props => props.right ? 'right: 0': 'left: 0'};

    &:hover {
        background: rgba(0, 0, 0, .2);
        path {
            fill: #fff;
        }
    };

    path {
        filter: ${props => (props.right)
            ? 'drop-shadow(-3px 0 1px #fff)'
            : 'drop-shadow(3px 0 1px #fff)'};
    };
`;



export { Carousel };
React.memo( Carousel );