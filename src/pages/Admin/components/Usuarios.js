import React, { Component } from 'react'

import '../StyleAdmin/menuAdm.css'
import '../StyleAdmin/StyleGeneral.css'

export default class Usuarios extends Component {
    render() {
        return <div className="contentMenuAdmin">
            <div className="headerContentMenu">
                <h2>Usuarios Regitrados</h2>
            </div>
            <div className="listadoDatosAdmin">
                <table>
                    <thead>
                        <tr>
                            <td>Nombre</td>
                            <td>Correo</td>
                            <td>Rol</td>
                            <td>Accion</td>
                        </tr>
                    </thead>
                    <tbody>
                        <Usuario/>
                    </tbody>
                </table>
            </div>
        </div>
    }
}

class Usuario extends Component{
    
    state = {
        rol: 'USER_ROLE'
    }

    cambiarRol = () => {
        if(this.state.rol === 'USER_ROLE'){
            this.setState({rol: "EMPLOYEE_ROLE"})
        }
        else if(this.state.rol === "EMPLOYEE_ROLE"){
            this.setState({rol: "USER_ROLE"})
        }
    }

    render(){
        return <tr>
            <td>David</td>
            <td>salysalsa@gmail.com</td>
            <td>Empleado</td>
            <td>
                <button className="btnMenu btnadminRole" onClick={this.cambiarRol}>
                    {this.state.rol == "USER_ROLE" 
                        ? <ion-icon name="person-circle-outline"></ion-icon>
                        : this.state.rol == "ADMIN_ROLE" 
                            ? <ion-icon name="construct-outline"></ion-icon>
                            : this.state.rol == "EMPLOYEE_ROLE" 
                                ? <ion-icon name="people-circle-outline"></ion-icon> 
                                : <ion-icon name="help-outline"></ion-icon>
                    }
                </button>
                <button className="btnMenu menuDel">
                    <ion-icon name="trash-outline"></ion-icon>
                </button>
            </td>
        </tr>
    }
}



