import React, { Fragment, useState, useContext }  from 'react';
import proyectoContext from '../../context/proyectos/ProyectoContext';

const NuevoProyecto = () => {

    // Obtener el state del formulario 
    const proyectosContext = useContext(proyectoContext);

    const { formulario, mostrarFormulario } = proyectosContext;

    const [ proyecto, guardarProyecto ] = useState({
        nombre: ''
    });
    console.log(formulario);
    // Extraer nombre de proyecto
    const { nombre } = proyecto;

    // Lee los contenidos del input
    const onchangeProyecto = e => {
        guardarProyecto({
            ...proyecto,
            [e.target.name] : e.target.value
        });
    }        

    // Cuando el usuario envia un proyecto
    const onSubmitProyecto = e => {
        e.preventDefault();

        // Validar el proyecto
        
        // Agregar el state
        
        // Reiniciar el form
    }

    return ( 
        <Fragment>
            <button
            type="button"
            className="btn btn-block btn-primario"
            onClick={() => mostrarFormulario()}
        >
            Nuevo Proyecto
        </button>
        { 
            formulario 
            ? (
                <form
                    className="formulario-nuevo-proyecto"
                    onSubmit={onSubmitProyecto}
                >
                    <input 
                        type="text"
                        className="input-text"
                        placeholder="Nombre Proyecto"
                        name="nombre"
                        value={nombre}
                        onChange={onchangeProyecto}
                    />
                    <input 
                        type="submit"
                        className="btn btn-primario btn-block"
                        value="Agregar Proyecto"
                    />
                </form>
            )
            
            : null
        }
        
        </Fragment>
     );
}
 
export default NuevoProyecto;