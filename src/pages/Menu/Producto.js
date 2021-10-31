import React, { Component } from 'react';

import '../Styles/styleP.css'

import Modal from './Modal';

class Producto extends Component{

    state = {
        rol: this.props.rol,
        estado: false
    }

    abrirModal = () => {
        this.setState({estado: !this.state.estado})
    }

    render(){
        const dato = this.props.dato

        return <div className="cards">
                <div className="imgBx">
                    <img src={dato.thumbnailUrl} alt=""></img>
                </div>
                <div className="content">
                    <div className="details">
                        <h2>{dato.title}<br/><span>{"$"+dato.precio}</span></h2>
                        <button className="vermas" onClick={this.abrirModal}>Ver mas</button>
                    </div>
                </div>
                <div id="Modal">    
                    <Modal 
                        dato = {dato} 
                        rol = {this.state.rol} 
                        estado = {this.state.estado} 
                        abrirModal = {this.abrirModal}
                        delete = {this.props.deleteP}
                        update = {this.props.updateP}
                        addC = {this.props.addC}
                        comentariosL = {this.props.comentariosL}
                        agregarCarrito = {this.props.agregarCarrito}
                    />
                </div>
            </div>
    }
}

export default Producto;