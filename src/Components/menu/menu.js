import React, {useEffect, useContext} from 'react';
import Navbar from '../layout/Navbar'
import Footer from '../layout/Footer'
import AuthContext from '../../context/autenticacion/authContext';

const Menu = ()=>{

	const authContext = useContext(AuthContext);
	const {usuario, usuarioAutenticado, cerrarSesion} = authContext;

	useEffect(()=>{
		usuarioAutenticado()
	}, [])


	return(
		<div>
			<Navbar/>
			{usuario ? <h1>Hola: {usuario.nombre}</h1> : null}
			<button 
				class="btn btn-primary btn-login " 
				type="submit"
				onClick={()=>cerrarSesion()}
				>
				Cerrar Sesion
		    </button>
			<Footer/>
		</div>
	)
}

export default Menu;