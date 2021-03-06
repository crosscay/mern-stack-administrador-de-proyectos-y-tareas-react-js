import React, { useContext, useEffect } from 'react';
import Proyecto from './Proyecto';
import proyectoContext from '../../context/proyectos/ProyectoContext';


const ListadoProyectos = () => {

     // Extraer proyectos del state inicial 
     const proyectosContext = useContext(proyectoContext);
     const { proyectos, obtenerProyectos } = proyectosContext;

     // Obtener proyectso cuando carga el componente 
     useEffect(() => {
        obtenerProyectos();
     }, [obtenerProyectos]) 

     // revisar si proyectos tiene contenido
     if (proyectos.length === 0) return <p>No hay proyectos, comienza creando uno</p>; 

    return ( 
        <ul className="listado-proyectos">
            {proyectos.map(proyecto => (
                <Proyecto 
                    proyecto={proyecto}
                    key={proyecto.id}
                />
            ))}
        </ul>
     );
}
 
export default ListadoProyectos;