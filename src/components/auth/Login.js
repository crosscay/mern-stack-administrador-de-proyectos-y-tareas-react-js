import React, { useState } from 'react';

const Login = () => {

    // State para iniciar sesión
    const [usuario, guardarUsuario] = useState({
        email: '',
        password: ''
    });
    // const onChange = () => {
    // }

    return (
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Iniciar Sesión</h1>
                <forrm>
                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email" 
                            id="email"
                            name="email"
                            placeholder="email"
                            // onChange={onChange}
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="password">Password</label>
                        <input 
                            type="password" 
                            id="password"
                            name="password"
                            placeholder="Tu Password"
                            // onChange={onChange}
                        />
                    </div>
                </forrm>
            </div>
        </div>  
    );
}
 
export default Login;