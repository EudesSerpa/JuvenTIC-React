import React from 'react';
import Navbar from '../layout/Navbar'
import History from './History'
import Card from './Card'
import Footer from '../layout/Footer'
// import {Carousel} from '../Carousel'

const About = ()=>{
	return(
		<div>
			<Navbar/>
			<History/>
			<Card/>
			{/* <Carousel/> */}
			<Footer/>
		</div>
	)
}

export {About};