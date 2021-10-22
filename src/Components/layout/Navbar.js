import React, {Fragment} from 'react';

const Navbar = ()=>{
	return(
		<Fragment>
			<nav className="nav-main navbar navbar-expand-md navbar-light bg-black shadow-sm">
				<div className="container-xxl wrapper">
					<a className="nav-main--logo navbar-brand ms-3 ms-lg-5" href="#">
            			<img src="https://i.postimg.cc/5y3c0dMJ/logo-2x.png" alt="Restaurant Logo" width="70" height="50"/>
          			</a>

          			<button className="nav-main--button-collapse navbar-toggler p-2 me-3 bg-white bg-opacity-50" type="button" data-bs-toggle="collapse" data-bs-target="#dataNavbarCollapsed" aria-controls="dataNavbarCollapsed" aria-expanded="false" aria-label="Toggle navigation">
            			<span className="navbar-toggler-icon"></span>
          			</button>

          			<div id="dataNavbarCollapsed" className="collapse navbar-collapse justify-content-end">
            			<div className="nav-main--links navbar-nav">
			              <a href="#" className="nav-link px-3 text-white">Menú</a>
			              <a href="#" className="nav-link px-3 text-white">Servicios</a>
			              <a href="#" className="nav-link px-3 text-white">Mapa del sitio</a>
			              <a href="#" className="nav-link px-3 text-white">Contáctanos</a>
			              <a href="#" className="nav-link px-3 text-white">Nosotros</a>
            			</div>
          			</div>
				</div>
			</nav>
		</Fragment>
	);
}

export default Navbar;