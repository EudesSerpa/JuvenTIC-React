import React, {useContext, useEffect} from 'react'
import { Carousel } from '../../Components/Carousel/Carousel';
import Events from '../../Components/Home/Events';
import OurProposal from '../../Components/Home/OurProposal';
import Recomendations from '../../Components/Home/Recomendations';

import AuthContext from '../../context/autenticacion/authContext';

export default function Home() {
    const authContext = useContext(AuthContext);
    const {usuarioAutenticado} = authContext;

    useEffect(()=>{
        usuarioAutenticado()
    }, [])
    return (
        <>
            {/*<NavBar fixed={true} />*/}

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