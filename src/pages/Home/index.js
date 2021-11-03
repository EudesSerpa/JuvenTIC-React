import React from 'react'
import { Carousel } from '../../Components/Carousel/Carousel';
import Events from '../../Components/Home/Events';
import OurProposal from '../../Components/Home/OurProposal';
import Recomendations from '../../Components/Home/Recomendations';
import NavBar from '../../Components/NavBar';


export default function Home() {
    return (
        <>
            <NavBar fixed={true} />

            <Carousel type='Images' />

            <OurProposal />

            <Recomendations />

            <Events />

            <Carousel
                type='Testimonials'
                intervalTime='7000'
                speedTransition='900'
            />
        </>
    )
}