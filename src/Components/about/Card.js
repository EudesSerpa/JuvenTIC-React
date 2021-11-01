import React from 'react';

const Card = ()=>{
	return(
		<div className="grid-container-card wrapper">
          <div className="header-card">
              <img src="https://res.cloudinary.com/universidad-de-cartagena/image/upload/v1631326381/personal1_2x_sdbx7o.png" className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-titulo">Juan Manuel Gómez B.</h5>
                <hr/>
                <p className="card-text">Administrador</p>
              </div>
          </div>

          <div className="header-card">
            <img src="https://res.cloudinary.com/universidad-de-cartagena/image/upload/v1631584013/MG_3442_2_e4yljs.jpg" className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Ana Isabel Casallas B.</h5>
              <hr/>
              <p className="card-text">Recepcionista</p>
            </div>
          </div>

          <div className="header-card">
            <img src="https://res.cloudinary.com/universidad-de-cartagena/image/upload/v1631584113/foto_cv_lc_es_12_ywnpqr.jpg" className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">María Paulina Veloza G.</h5>
              <hr/>
              <p className="card-text">Chef</p>
            </div>
          </div>

          <div className="header-card">
            <img src="https://res.cloudinary.com/universidad-de-cartagena/image/upload/v1631584358/fotografia_curriculum_linkedin_corporativa_madrid_011_wvxeja.jpg" className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Juancho de la Esprella Fernadéz</h5>
              <hr/>
              <p className="card-text">Mesero</p>
            </div>
          </div>

          <div className="header-card">
            <img src="https://res.cloudinary.com/universidad-de-cartagena/image/upload/v1631584559/79ce41d07b3216fdc0d8d17b52cee50d--tamara_x4icyf.jpg" className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Gabriela Chance Gerrero</h5>
              <hr/>
              <p className="card-text">Gourmet</p>
            </div>
          </div>

          <div className="header-card">
            <img src="https://res.cloudinary.com/universidad-de-cartagena/image/upload/v1631584454/guy-headshot-business_result_hj722x.webp" className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Rous Von Oberestaim</h5>
              <hr/>
              <p className="card-text">Catador</p>
            </div>
          </div>
        </div>
	);
}

export default Card;