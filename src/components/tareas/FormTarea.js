import React, { useState, useContext } from 'react';
import proyectoContext from '../../context/proyectos/ProyectoContext';

const FormTarea = () => {

    // Extraer si un proyecto esta activo
    const proyectosContext = useContext(proyectoContext);
    const { proyecto } = proyectosContext;

    // Si no hay proyecto seleccionado
    if (!proyecto) return null;

    // Array Destructuring para extraer el proyecto actual
    const [proyectoActual] = proyecto;

    const nombre = '';
    
    // const [ tarea, guardarTarea ] = useState({});
    return ( 
        <div className="formulario">
            <form>
                <div className="contenedor-input">
                    <input 
                        type="text"
                        className="input-text"
                        placeholder="Nombre Tarea..."
                        value={nombre}
                    />
                </div>
                <div className="contenedor-input">
                    <input 
                        type="text"
                        className="btn btn-primario btn-submit btn-block"
                        value="Agregar Tarea"
                    />
                </div>
            </form>
        </div>
     );
}
 
export default FormTarea;