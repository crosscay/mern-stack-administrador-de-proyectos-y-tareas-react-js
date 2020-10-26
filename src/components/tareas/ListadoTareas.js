import React, { Fragment } from 'react';
import Tarea from './Tarea';

const ListadoTareas = () => {

    const tareasProyectos = [
        { id: 1, nombre: 'Elegir Plataforma', estado: true },
        { id: 2, nombre: 'Elegir Colores', estado: false },
        { id: 3, nombre: 'Elegir Plataformas de pago', estado: false },
        { id: 4, nombre: 'Elegir Hosting', estado: true }
    ];

    return ( 
        <Fragment>
            <h2>Proyecto: Tienda Virtual</h2>
            <ul className="listado-tareas">
                { tareasProyectos.length === 0
                  ? (<li className="tarea"><p>No hay tareas</p></li>)
                  : tareasProyectos.map(tarea=>(
                    <Tarea 
                        tarea={tarea}
                        key={tarea.id}
                    />
                  ))
                }
            </ul>
            <button 
                type="button"
                className="btn btn-eliminar"
            >
                Eliminar Proyecto &times;
            </button>
        </Fragment>
     );
}
 
export default ListadoTareas;