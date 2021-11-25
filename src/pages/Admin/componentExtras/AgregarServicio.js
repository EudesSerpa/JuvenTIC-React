import React, { Component } from 'react'
import Swal from 'sweetalert2';

import '../../Styles/addP.css'
import '../../Styles/styleModal.css'

export default class AgregarServicio extends Component {

    state = {
        nombre: '',
        descripcion: '',
        imagen: null,
        imageView: null,
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
                this.setState({imageView: e.target.result}); // le damos el binario de la imagen para mostrarla en pantalla
            };
        }
    };

    onSubmit = (e) => {
        e.preventDefault()
        this.props.agregar()

        Swal.fire({
            icon: 'success',
            title: 'Producto Agregado',
            showConfirmButton: false,
            timer: 2000,
        });
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return <div className="containerModal modalOpen">
                
            <div className="contBM">
                <div>
                    
                    <form className="form modal modalAP" onSubmit={this.onSubmit}>
                        <h2 className="titleAP">Agregar Servicio</h2>
                        <div className = "obtenerDatos">
                            <input 
                                className="opcInput" 
                                type="text" 
                                name = "nombre"
                                placeholder="Nombre del plato" 
                                onChange={this.onChange} 
                                value={this.state.nombre}
                                required
                                autoComplete="off"
                            />
                            <textarea 
                                className="opcInput textArea" 
                                name = "descripcion"
                                placeholder="Descripcion" 
                                onChange={this.onChange} 
                                value={this.state.descripcion}
                                required
                                autoComplete="off"
                            >
                            </textarea>
                            <div className="contentImagen">
                                <label className="custom-file-upload">
                                    <input 
                                        type="file" 
                                        onChange={(e) => {
                                            this.changeImage(e);
                                        }}
                                    />
                                    Subir Imagen
                                </label>
                                <img src={this.state.imageView} alt="...."/>
                                <p>{this.state.nameImagen}</p>
                            </div>
                        </div>

                        <div className="enviar">
                            <button className="buttonAP opcCan" onClick={this.props.agregar}><span>CANCELAR</span></button> 
                            <button className="buttonAP opcAgr"><span>AGREGAR</span></button> 
                        </div>
                    </form>

                </div>
            </div>

        </div>
    }
}
