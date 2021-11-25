import React from 'react'

import '../StyleAdmin/menuAdm.css'
import '../StyleAdmin/StyleGeneral.css'

export default function Usuarios() {
    return <div className="contentMenuAdmin">
        <div className="headerContentMenu">
            <h2>Usuarios Regitrados</h2>
            <button className="iconAddAdmin">
                <ion-icon name="add-circle-outline"></ion-icon>
            </button>
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
                    <tr>
                        <td>David</td>
                        <td>salysalsa@gmail.com</td>
                        <td>Empleado</td>
                        <td>
                            <button className="btnMenu menuEdit">
                                <ion-icon name="create-outline"></ion-icon>
                            </button>
                            <button className="btnMenu menuDel">
                                <ion-icon name="trash-outline"></ion-icon>
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
}
