import React from 'react'

import '../StyleAdmin/menuAdm.css'
import '../StyleAdmin/StyleGeneral.css'

export default function Menu(props) {
    return <div className="contentMenuAdmin">
        <div className="headerContentMenu">
            <h2>Platos</h2>
            <button className="iconAddAdmin">
                <ion-icon name="add-circle-outline"></ion-icon>
            </button>
        </div>
        <div className="listadoDatosAdmin">
            <table>
                <thead>
                    <tr>
                        <td>Nombre</td>
                        <td>Precio</td>
                        <td>Descripcion</td>
                        <td>Accion</td>
                    </tr>
                </thead>
                <tbody>
                    {props.platos.map( plato => {
                        return <tr>
                            <td>{plato.nombre}</td>
                            <td>{'$'+plato.precio}</td>
                            <td>
                                <button className="btnVerAdm">Ver</button>
                            </td>
                            <td>
                                <button className="btnMenu menuEdit">
                                    <ion-icon name="create-outline"></ion-icon>
                                </button>
                                <button className="btnMenu menuDel">
                                    <ion-icon name="trash-outline"></ion-icon>
                                </button>
                            </td>
                        </tr>
                    })}
                    {/*<tr>
                        <td>Pescado</td>
                        <td>$20000</td>
                        <td>
                            <button className="btnVerAdm">Ver</button>
                        </td>
                        <td>
                            <button className="btnMenu menuEdit">
                                <ion-icon name="create-outline"></ion-icon>
                            </button>
                            <button className="btnMenu menuDel">
                                <ion-icon name="trash-outline"></ion-icon>
                            </button>
                        </td>
                    </tr>*/}
                </tbody>
            </table>
        </div>
    </div>
}
