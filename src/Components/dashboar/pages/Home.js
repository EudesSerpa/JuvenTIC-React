import React, {/*useState,*/ useContext, useEffect} from 'react';
import AuthContext from '../../../context/autenticacion/authContext';
const Home = (props)=>{
	const authContext = useContext(AuthContext);
	const {/*autenticado,*/ usuarioAutenticado/*, usuario*/} = authContext;

	useEffect(()=>{
		usuarioAutenticado()
	}, [])
    
	return(
		<div>
			<h1>Home</h1>
		</div>
	);
}

export default Home;