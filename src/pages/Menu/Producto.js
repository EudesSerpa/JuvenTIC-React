import React, { Component } from 'react';

import '../Styles/styleP.css'

import Modal from './Modal';

class Producto extends Component{

    state = {
        estado: false
    }

    abrirModal = () => {
        this.setState({estado: !this.state.estado})
    }

    render(){
        const dato = this.props.dato
        const rol = this.props.rol

        return <div className="cards">
                <div className="imgBx">
                    <img src={dato.imgURL} alt=""></img>
                </div>
                <div className="content">
                    <div className="details">
                        <h2>{dato.nombre}<br/><span>{"$"+dato.precio}</span></h2>
                        <button className="vermas" onClick={this.abrirModal}>Ver mas</button>
                    </div>
                </div>
                <div id="Modal">    
                    <Modal 
                        dato = {dato} 
                        rol = {rol} 
                        nombre = {this.props.nombre}
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