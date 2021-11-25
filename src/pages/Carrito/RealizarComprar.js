import React, { Component } from 'react'
import Swal from 'sweetalert2';


export default class RealizarComprar extends Component {

    state = {
        nombre: this.props.usuario ? this.props.usuario.nombre : '',
        correo: this.props.usuario ? this.props.usuario.correo : '',
        metodoPago: '',
        mensaje: ''
    }

    onSubmit = (e) => {
        e.preventDefault()
        console.log(this.state)
        this.props.doCompra()
        this.props.vaciarCarrito()
        Swal.fire({
            icon: 'success',
            title: 'Compra finalizada con Exito',
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
                    <h2 className="titleAP">Finalizar Compra</h2>
                    <div className = "obtenerDatos">
                        <input 
                            className="opcInput" 
                            type="text" 
                            name = "nombre"
                            placeholder="Nombre" 
                            onChange={this.onChange} 
                            value={this.state.nombre}
                            required
                            autoComplete="off"
                        />
                        <input 
                            className="opcInput" 
                            type="email" 
                            name = "correo" 
                            placeholder="Correo" 
                            onChange={this.onChange} 
                            value={this.state.correo}
                            required
                            autoComplete="off"
                        />
                        <select 
                            name="metodoPago" 
                            className="inputMetodoPago"
                        >
                            <option>Efectivo</option>
                            <option>Tarjeta</option>
                        </select>
                        <textarea 
                            className="opcInput textArea" 
                            name = "mensaje"
                            placeholder="mensaje (opcional)" 
                            onChange={this.onChange} 
                            value={this.state.mensaje}
                            autoComplete="off"
                        >
                        </textarea>
                    </div>

                    <div className="enviar">
                        <button className="buttonAP opcCan" onClick={this.props.doCompra}><span>CANCELAR</span></button> 
                        <button className="buttonAP opcAgr"><span>FINALIZAR</span></button> 
                    </div>
                </form>

            </div>
        </div>
    </div>
    }
}
