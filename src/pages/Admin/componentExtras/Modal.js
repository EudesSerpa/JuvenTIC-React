import React, { Component } from 'react'
import Swal from 'sweetalert2';

import '../../Styles/styleModal.css'
import '../../Styles/addP.css'

export default class Modal extends Component {

    state = {
        edit: this.props.edit,
        title: this.props.dato.nombre,
        precio: this.props.dato.precio,
        descricion: this.props.dato.descripcion,
        imagen: this.props.dato.imgURL,
        imageMustra: this.props.dato.imgURL,
        nameImagen: ''
    }

    changeImage = (e) => {
        if (e.target.files[0] !== undefined) {
            this.setState({nameImagen: e.target.files[0].name})
            this.setState({imagen: e.target.files[0]})
            const reader = new FileReader();
            reader.readAsDataURL(e.target.files[0]);
            reader.onload = (e) => {
                e.preventDefault();
                this.setState({imageMustra: e.target.result}); // le damos el binario de la imagen para mostrarla en pantalla
            };
        }
    };

    editarF = () => {
        this.props.editarPlato()
    }


    onSubmit = (e) => {
        e.preventDefault()
        this.editarF()

        const data = {
            '_id': this.props.dato._id,
            'imgURL': this.state.imagen,
            'public_id': this.props.dato.public_id,
            'nombre': this.state.title,
            'descripcion': this.state.descricion,
            'precio': this.state.precio,
            'usuario': this.props.dato.usuario
        };

        this.props.editPlato(data)
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
                            <img src={this.state.imageMustra} alt="...."/>
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
                    <h2 className="tituloP i">{dato.nombre}</h2>
                    <div className="contImgP">
                        <img className="imgP" src={dato.imgURL} alt="..." ></img>
                    </div>
                    <h3 className="precioP">{"$"+dato.precio}</h3>
                    <p className="descP">{dato.descripcion}</p>
                </div>
            </div>
        }
    }

    estadoModal = (dato, estado) => {
        if( estado ){
            return <div className="containerModal modalOpen">
                
                <div className="ventanaModalP" style={{background:'none'}}>

                    <div className="BotonCerrar">
                        <button className="close" onClick={this.props.abrirModal}>X</button>
                    </div>

                    <div className="mondalDatos">
                        <div className="contBM">

                            {this.editDatos(dato)}

                        </div>
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

