import React, { Component } from 'react'

import '../Styles/comentarioStyle.css'

export default class Comentario extends Component {
    render() {
        const comentario = this.props.comentario

        return <div className="contestComent"> 
            <div className="iconUser">

            </div>
            <div className="textComt">
                <h5>{comentario.usuario.nombre}</h5>
                <p>{comentario.texto}</p>
            </div>
        </div>
    }
}
