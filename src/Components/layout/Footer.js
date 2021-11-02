import React from 'react';

const Footer = ()=>{
	return(
		<footer>
			<div className="container">
			<div className="cole">
				<div className="my-4">
				<img src="https://res.cloudinary.com/universidad-de-cartagena/image/upload/v1631726989/logo_2x_t0bph6.png" width="220px" height="200px" alt=""/>
				</div>

				<div className="miniNav my-4">
				<ul>
					<a href="#" className="">MAPA DEL SITIO</a>
					<a href="#" className="">CONTACTANOS</a>
					<a href="#" className="">RESERVAS</a>
				</ul>
				<p>Restaurante Sal y Salsa Ltda.<br/>
					Calle 19No.7-30. Bogotá <br/>
					reservas@salysalsa.com <br/>
					31232525321
				</p>
				<p>&copy Copyright 2020.</p>
				</div>
			</div>
			</div>
		</footer>
	)
}

export default Footer;