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
        title: this.props.dato.title,
        precio: this.props.dato.precio,
        descricion: this.props.dato.descrip,
        imagen: this.props.dato.thumbnailUrl,
        nameImagen: ''
    }

    changeImage = (e) => {
        if (e.target.files[0] !== undefined) {
            this.setState({nameImagen: e.target.files[0].name})
            const reader = new FileReader();
            reader.readAsDataURL(e.target.files[0]);
            reader.onload = (e) => {
                e.preventDefault();
                this.setState({imagen: e.target.result}); // le damos el binario de la imagen para mostrarla en pantalla
            };
        }
    };

    abrirComentarios = (pComentar) =>{
        this.setState({
            aComent: !this.state.aComent,
            pComent: pComentar
        })
    }

    editarF = () => {
        this.setState({edit: !this.state.edit})
    }

    eliminar = (id) => {
        this.props.delete(id)
        this.props.abrirModal()
        Swal.fire({
            icon: 'success',
            title: 'Producto Eliminado Con Exito',
            showConfirmButton: false,
            timer: 2000,
        });
    }

    actualizar = ( title, precio, description ) => {
        const datosE = {
            title: title,
            precio: precio,
            descrip: description,
            urlImg: this.state.imagen
        }
        this.props.update(this.props.dato.id, datosE)
    }

    agregarCompra = (dato) => {
        this.props.agregarCarrito(dato.id, dato.title, dato.precio)
        this.props.abrirModal()
        Swal.fire({
            icon: 'success',
            title: 'Producto agregado con exito',
            showConfirmButton: false,
            timer: 2000,
        });
    }

    botonesModal = () => {
        if(this.props.rol === 'ADMIN_ROLE'){
            return <div className="buttonModal">
                <button className="abrirComentarios" onClick={this.eliminar.bind(this, this.props.dato.id)} >
                    <ion-icon name="trash-outline"></ion-icon>
                </button>
                <button className="abrirComentarios" onClick={this.editarF}>
                    <ion-icon name="create-outline"></ion-icon>
                </button>
                <button className="abrirComentarios" onClick={this.abrirComentarios.bind(this, true)}>
                    <ion-icon name="chatbubble-ellipses-outline"></ion-icon>
                </button>
            </div>
        }
        else if(this.props.rol === 'USER_ROLE'){
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

    onSubmit = (e) => {
        e.preventDefault()
        this.editarF()
        this.actualizar(this.state.title, this.state.precio, this.state.descricion)
    }

    onChange = e => {
        this.setState({
                [e.target.name]: e.target.value
        })
    }

    editDatos = (dato) => {
        if(this.state.edit){
            return <div>
                    
                <form className="form modal modalAP" onSubmit={this.onSubmit}>
                    <h2 className="titleAP">Editar Producto</h2>
                    <div className = "obtenerDatos" >
                        <input 
                            className="opcInput" 
                            type="text" 
                            name = "title"
                            placeholder="Nombre del plato" 
                            onChange={this.onChange} 
                            value={this.state.title}
                            required
                        />
                        <input 
                            className="opcInput" 
                            type="number" 
                            name = "precio" 
                            placeholder="Precio" 
                            onChange={this.onChange} 
                            value={this.state.precio}
                            required
                        />
                        <textarea 
                            className="opcInput textArea" 
                            name = "descricion"
                            placeholder="Descricion" 
                            onChange={this.onChange} 
                            value={this.state.descricion}
                            required
                        >
                        </textarea>
                        <div className="contentImagen">
                            <img src={this.state.imagen} alt="...."/>
                            <p>{this.state.nameImagen}</p>
                            <label className="custom-file-upload">
                                <input 
                                    type="file" 
                                    onChange={(e) => {
                                        this.changeImage(e);
                                    }}
                                />
                                Cambiar Imagen
                            </label>
                        </div>
                    </div>

                    <div className="enviar">
                        <button className="buttonAP opcCan" onClick={this.editarF}><span>CANCELAR</span></button> 
                        <button className="buttonAP opcAgr"><span>EDITAR</span></button> 
                    </div>
                </form>

            </div>
        }
        else{
            return <div className="form modal">
                <div id="info">
                    <h2 className="tituloP i">{dato.title}</h2>
                    <div className="contImgP">
                        <img className="imgP" src={dato.thumbnailUrl} alt="..." ></img>
                    </div>
                    <h3 className="precioP">{"$"+dato.precio}</h3>
                    <p className="descP">{dato.descrip}</p>
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
                            idPlato = {dato.id}
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

