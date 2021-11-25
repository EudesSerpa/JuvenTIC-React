import React from 'react';
import History from '../../Components/About/History'
import Card from '../../Components/About/Card'
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