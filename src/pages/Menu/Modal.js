import React, { Component } from 'react'
import Swal from 'sweetalert2';

import '../Styles/styleModal.css'
import '../Styles/addP.css'

import Comentarios from './Comentarios'

export default class Modal extends Component {

    state = {
        aComent: false,
        pComent: false,
        edit: false,
        title: this.props.dato.nombre,
        precio: this.props.dato.precio,
        descricion: this.props.dato.descripcion,
        imagen: this.props.dato.imgURL,
        imageMustra: this.props.dato.imgURL,
        nameImagen: ''
    }

    abrirComentarios = (pComentar) =>{
        this.setState({
            aComent: !this.state.aComent,
            pComent: pComentar
        })
    }

    agregarCompra = (dato) => {
        this.props.agregarCarrito(dato._id, dato.nombre, dato.precio)
        this.props.abrirModal()
        Swal.fire({
            icon: 'success',
            title: 'Producto agregado con exito',
            showConfirmButton: false,
            timer: 2000,
        });
    }

    botonesModal = () => {
        if(this.props.rol === 'USER_ROLE' || this.props.rol === 'ADMIN_ROLE' || this.props.rol === 'EMPLOYEE_ROLE' ){
            return <div className="buttonModal">
                <button className="abrirComentarios" onClick={this.abrirComentarios.bind(this, true)}>
                    <ion-icon name="chatbubble-ellipses-outline"></ion-icon>
                </button>
            </div>
        }
        else{
            return <div className="buttonModal">
                <button className="abrirComentarios" onClick={this.abrirComentarios.bind(this, false)}>
                    <ion-icon name="chatbubble-ellipses-outline"></ion-icon>
                </button>
            </div>
        }
    }


    editDatos = (dato) => {
        return <div className="form modal">
                <div id="info">
                    <h2 className="tituloP i">{dato.nombre}</h2>
                    <div className="contImgP">
                        <img className="imgP" src={dato.imgURL} alt="..." ></img>
                    </div>
                    <h3 className="precioP">{"$"+dato.precio}</h3>
                    <p className="descP">{dato.descripcion}</p>
                </div>
                <div className="contButton">
                    <button 
                        onClick={this.agregarCompra.bind(this, dato)} 
                        className="addCarrito"
                    >
                        <ion-icon name="bag-add-outline"></ion-icon>
                    </button>
                </div>
            </div>
    }

    estadoModal = (dato, estado) => {
        if( estado ){
            return <div className="containerModal modalOpen">
                
                <div className="ventanaModalP">

                    <div className="BotonCerrar">
                        <button className="close" onClick={this.props.abrirModal}>X</button>
                    </div>

                    <div className="mondalDatos">
                        <div className="contBM">

                            {this.editDatos(dato)}

                            {this.botonesModal( dato )}

                        </div>
                        <Comentarios 
                            mComentar = {this.state.aComent} 
                            addC = {this.props.addC}
                            comentariosL = {this.props.comentariosL}
                            idPlato = {dato._id}
                            puedoComentar = {this.state.pComent}
                        />
                    </div>
                    
                </div>

            </div>
        }
        return <div>

        </div>
    }
    
    render() {
        const dato = this.props.dato
        const estado = this.props.estado

        return this.estadoModal(dato, estado)
    }
}

