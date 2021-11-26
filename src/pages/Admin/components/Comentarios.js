import React, { Component } from 'react'

import '../StyleAdmin/StyleGeneral.css'
import '../StyleAdmin/comentAdmin.css'

export default class Comentarios extends Component {


    comentarios = () => {
        if(this.props.comentarios.length > 0){

            return this.props.comentarios.map( comment => {

                const plato = this.props.platos.filter( plato =>  plato._id === comment._id )
                console.log(plato.nombre)

                return <div className="cardComentAdmin" key={comment._id}>
                        <div className="headerCmonetAdmin">
                            <h2>{comment.usuario.nombre}</h2>
                            <span>00/00/00</span>
                        </div>
            
                        <span className="namePlatoAdmin">{ plato.nombre != "" ? plato.nombre : "Nombre Plato"}</span>
                    
                        <div className="textcomentAdmin">
                            <p>{comment.texto}</p>
                        </div>
                        <div className="accionComent">
                            <button onClick={() => this.props.deleteComentario(comment._id)}>
                                <ion-icon name="trash-outline"></ion-icon>
                            </button>
                        </div>
                </div>
            })
        }
        else {
            return <h1>No Hay comentarios</h1>
        }
    }

    render() {

        this.props.obtenerComentarios()

        return <div className="contentMenuAdmin">
            <div className="headerContentMenu">
                <h2>Comentarios</h2>
            </div>
            <div className="contentCardComent">
                
                {this.comentarios()}
                
            </div>
        </div>
    }
}

{/*<div className="cardComentAdmin">
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
                </div>*/}