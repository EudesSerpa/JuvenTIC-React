import React from 'react'

import '../StyleAdmin/StyleGeneral.css'
import '../StyleAdmin/comentAdmin.css'

export default function Comentarios(props) {
    return <div className="contentMenuAdmin">
        <div className="headerContentMenu">
            <h2>Comentarios</h2>
        </div>
        <div className="contentCardComent">
            {props.comentarios.map( comment => {
                return <div className="cardComentAdmin">
                    <div className="headerCmonetAdmin">
                        <h2>UsuarioName</h2>
                        <span>00/00/00</span>
                    </div>
                    <span className="namePlatoAdmin">{props.platos.filter( plato =>  plato._id === comment._id )}</span>
                    <div className="textcomentAdmin">
                        <p>{comment.comentario}</p>
                    </div>
                    <div className="accionComent">
                        <button>
                            <ion-icon name="trash-outline"></ion-icon>
                        </button>
                    </div>
                </div>
            } )}
            <div className="cardComentAdmin">
                <div className="headerCmonetAdmin">
                    <h2>UsuarioName</h2>
                    <span>00/00/00</span>
                </div>
                <span className="namePlatoAdmin">Pescado</span>
                <div className="textcomentAdmin">
                    <p>lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem</p>
                </div>
                <div className="accionComent">
                    <button>
                        <ion-icon name="trash-outline"></ion-icon>
                    </button>
                </div>
            </div>
        </div>
    </div>
}
