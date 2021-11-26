import React from 'react';
import History from '../../Components/about/History'
import Card from '../../Components/about/Card'
import { Carousel } from '../../Components/Carousel/Carousel';
import NavBar from '../../Components/NavBar';
import Footer from '../../Components/Footer'

const About = ()=>{
	return(
		<div>
			<NavBar />
			<History />
			<Card />
			<Carousel type="Testimonials" />
			<Footer/>
		</div>
	)
}

export default About;