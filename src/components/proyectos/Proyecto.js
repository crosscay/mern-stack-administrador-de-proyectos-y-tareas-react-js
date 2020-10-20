import React from 'react';

const Proyectos = ({proyecto}) => {
    return ( 
        <li>
            <button
                type="button"
                className="btn btn-blank"
            >
                {proyecto.nombre}
            </button>
        </li>
     );
}
 
export default Proyectos;