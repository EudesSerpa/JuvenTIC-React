import React, { Component } from 'react'

export default class ModalServicio extends Component {

    state = {
        edit: this.props.editServ,
        nombre: this.props.dato.nombre,
        descripcion: this.props.dato.descripcion,
        imagen: this.props.dato.imgURL,
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

    editarF = () => {
        this.props.editServicio()
    }

    onSubmit = (e) => {
        e.preventDefault()
        this.editarF()

        console.log('')

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
                            name = "nombre"
                            placeholder="Nombre del Servicio" 
                            onChange={this.onChange} 
                            value={this.state.nombre}
                            required
                        />
                        <textarea 
                            className="opcInput textArea" 
                            name = "descripcion"
                            placeholder="Descripcion" 
                            onChange={this.onChange} 
                            value={this.state.descripcion}
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
                
                <div className="ventanaModalP" >

                    <div className="BotonCerrar">
                        <button className="close" onClick={this.props.editServicio}>X</button>
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
