import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const NuevaCuenta = () => {

    // State para iniciar sesión
    const [usuario, guardarUsuario] = useState({
        nombre: '',
        email: '',
        password: '',
        confirmar: ''
    });

    // extraer de usuario
    const { nombre, email, password, confirmar } = usuario;

    const onChange = (e) => {
        e.preventDefault();
        guardarUsuario({
            ...usuario,
            [e.target.name] : e.target.value
        });
    }

    // Cuando el usuario quiere iniciar sesión
    const onSubmit = e => {
        e.preventDefault();

        // validar que no hayan campos vacios

        // Password minimo de 6 caracteres

        // Los 2 passwords son iguales

        // Pasarlo al action
    }

    return (
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Obtener una cuenta</h1>
                <forrm
                    onSubmit={onSubmit}
                >
                    <div className="campo-form">
                        <label htmlFor="email">Nombre</label>
                        <input 
                            type="text" 
                            id="nombre"
                            name="nombre"
                            placeholder="Tu Nombre"
                            onChange={onChange}
                            value={nombre}
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email" 
                            id="email"
                            name="email"
                            placeholder="email"
                            onChange={onChange}
                            value={email}
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="password">Password</label>
                        <input 
                            type="password" 
                            id="password"
                            name="password"
                            placeholder="Tu Password"
                            onChange={onChange}
                            value={password}
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="password">Confirmar Password</label>
                        <input 
                            type="password" 
                            id="confirmar"
                            name="confirmar"
                            placeholder="Repite Tu Password"
                            onChange={onChange}
                            value={confirmar}
                        />
                    </div>
                    <iv className="campo-form">
                        <input type="submit" className="btn btn-primario btn-block" value="Registrar" />        
                    </iv>
                </forrm>
                <Link to={'/'} className="enlace-cuenta">
                    Volver a Iniciar Sesión
                </Link>
            </div>
        </div>  
    );
}
 
export default NuevaCuenta;