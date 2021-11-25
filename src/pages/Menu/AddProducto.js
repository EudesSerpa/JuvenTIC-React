import React, { Component } from 'react'
import Swal from 'sweetalert2';

import '../Styles/addP.css'
import '../Styles/styleModal.css'

export default class AddProducto extends Component {

    state = {
        title: '',
        precio: '',
        descricion: '',
        imagen: null,
        imageMustra: null,
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

    mouseF = () => {
        const btn = document.querySelector('.buttonAP')
        window.onload = function(e){ //window.onload - btn.onmousemove
            const x = e.pageX - btn.offsetLeft
            const y = e.pageY - btn.offsetTop

            btn.style.setProperty('--x', x + 'px')
            btn.style.setProperty('--y', y + 'px')
        }
    }

    onSubmit = (e) => {
        e.preventDefault()
        this.props.agregar()
        this.props.agregarFunc(this.state.title, this.state.precio, this.state.descricion, this.state.imagen)
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
                        <h2 className="titleAP">Agregar Producto</h2>
                        <div className = "obtenerDatos">
                            <input 
                                className="opcInput" 
                                type="text" 
                                name = "title"
                                placeholder="Nombre del plato" 
                                onChange={this.onChange} 
                                value={this.state.title}
                                required
                                autoComplete="off"
                            />
                            <input 
                                className="opcInput" 
                                type="number" 
                                name = "precio" 
                                placeholder="Precio" 
                                onChange={this.onChange} 
                                value={this.state.precio}
                                required
                                autoComplete="off"
                            />
                            <textarea 
                                className="opcInput textArea" 
                                name = "descricion"
                                placeholder="Descricion" 
                                onChange={this.onChange} 
                                value={this.state.descricion}
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
                                <img src={this.state.imageMustra} alt="...."/>
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

            <script>
                {this.mouseF()}
            </script>

        </div>
    }
}
