import React, {useEffect, useContext}  from 'react';
import History from './History'
import Card from './Card'
import Footer from '../layout/Footer'
import {Carousel} from '../Carousel'
import AuthContext from '../../context/autenticacion/authContext';

const About = ()=>{
	const authContext = useContext(AuthContext);
	const {usuarioAutenticado} = authContext;

	useEffect(()=>{
		usuarioAutenticado()
	}, [])
	return(
		<div>
			<History/>
			<Card/>
			<Carousel/>
			<Footer/>
		</div>
	)
}

export default About;