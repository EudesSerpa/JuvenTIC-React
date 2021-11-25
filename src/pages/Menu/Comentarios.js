import React, { Component } from 'react'

import '../Styles/styleModal.css'

import Comentario from './Comentario'

export default class Comentarios extends Component {

    state = {
        comentario: ''
    }

    onSubmit = (e) => {
        if(this.props.puedoComentar){
            e.preventDefault()
            this.props.addC(this.props.idPlato, this.state.comentario)
            this.setState({comentario: ''})
        }
    }

    onChange = e => {
        if(this.props.puedoComentar){
            this.setState({
                [e.target.name]: e.target.value
            })
        }
    }

    ponerComentarios = (coment) => {
        if(coment.plato === this.props.idPlato){
            return <Comentario comentario = {coment} key={coment._id}/>
        }
    }

    comentarios = () => {
        if(this.props.mComentar){
            return <div className="form modal comentariosM">
                <div className="comentariosU">
                    <div className="comentarioList">
                        {this.props.comentariosL.map( c => this.ponerComentarios(c))}
                    </div>
                </div>

                <div className="ingresarComent">
                    <form onSubmit={this.onSubmit}>
                        <input 
                            className="fIngresarC" 
                            type="text" 
                            name = "comentario"
                            placeholder="Comentario" 
                            onChange={this.onChange} 
                            value={this.state.comentario}
                            autoComplete="off"
                            required
                        />
                        <input type="submit" value="C" className="bIngresarC" />
                    </form>
                </div>
            </div>
        }
        else{
            return <div>

            </div>
        }
    }

    render() {
        return this.comentarios()
    }
}
