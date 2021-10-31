import React, { Component } from 'react'


export default class RealizarComprar extends Component {

    state = {
        nombre: '',
        correo: '',
        mensaje:''
    }

    onSubmit = (e) => {
        e.preventDefault()
        console.log(this.state)
        this.props.doCompra()
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
