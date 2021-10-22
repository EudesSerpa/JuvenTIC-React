import React from 'react'
import { Carousel } from '../../Components/Carousel/Carousel';

export default function Home() {
    return (
        <div className="wrapper wrapper-xxl">
            <h1>Home</h1>
            <Carousel type='Images' />
            <Carousel
                type='Testimonials'
                intervalTime='7000'
                speedTransition='900'
            />
        </div>
    )
}