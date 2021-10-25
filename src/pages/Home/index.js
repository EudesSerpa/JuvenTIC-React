import React from 'react'
import { Carousel } from '../../Components/Carousel/Carousel';
import Events from '../../Components/Events';
import OurProposal from '../../Components/OurProposal';
import Recomendations from '../../Components/Recomendations';

export default function Home() {
    return (
        <div className="wrapper wrapper-xxl">
            <Carousel type='Images' />

            <OurProposal />

            <Recomendations />

            <Events />

            <Carousel
                type='Testimonials'
                intervalTime='7000'
                speedTransition='900'
            />
        </div>
    )
}