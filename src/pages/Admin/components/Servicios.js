import React, { Component } from 'react'

/*
class Servicio extends Component {
    render(){
        const dato = this.props.dato
        return <tr>
            <td>{dato.nombre}</td>
            <td>
                <button className="btnVerAdm" onClick={this.verInformacion}>Ver</button>
            </td>
            <td>
                <button className="btnMenu menuEdit" onClick={this.editarPlato}>
                    <ion-icon name="create-outline"></ion-icon>
                </button>
                <button className="btnMenu menuDel" onClick = {() => this.props.deletePlato(plato._id)}>
                    <ion-icon name="trash-outline"></ion-icon>
                </button>
            </td>

            {this.modalInfo()}

        </tr>
    }
}
abrirM

export default class Servicios extends Component {
    render() {
        return <div className="contentMenuAdmin">
            <div className="headerContentMenu">
                <h2>Servicios</h2>
                <button className="iconAddAdmin" onClick={this.agregarProductoM}>
                    <ion-icon name="add-circle-outline"></ion-icon>
                </button>
            </div>
            <div className="listadoDatosAdmin">
                <table>
                    <thead>
                        <tr> 
                            <td>Tipo</td>
                            <td>Descripcion</td>
                            <td>Accion</td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.servicios.map( servicio => {
                            return <Servicio 
                                dato = {servicio} 
                                key = {servicio._id}
                                editPlato = {this.props.editPlato}
                                deletePlato = {this.props.deletePlato}
                            />
                        })}                        
                    </tbody>
                </table>
            </div>
        </div>
    }
}

*/

export default class Servicios extends Component {
    render(){
        return <></>
    }
}
