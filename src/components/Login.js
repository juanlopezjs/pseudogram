import React from 'react';
import { Link } from "react-router-dom";

const Login = (props) => {
    return (
        <div style={{ margin: '3em' }}>
            <div className="login">
                <h1>Pseudogram</h1>
                <form noValidate>
                    <div>
                        <input type="text" name="txtEmail" placeholder="Nombre de usuario" />
                    </div>
                    <div>
                        <input type="password" name="txtPass" placeholder="Contraseña" />
                    </div>
                </form>
                <button className="App-btn" onClick={() => props.loginButton(false)}>Iniciar Sesión</button>
                <div className="_c4769">
                    <div className="_1aktk"></div>
                    <div className="_n1zo0">o</div>
                    <div className="_1aktk"></div>
                </div>
                <div onClick={() => props.loginButton(true)} className="App-btn-google ">
                    <span className="btn-google"></span>
                    <span>Iniciar sesión con Google</span>
                </div>
                <Link to="/login/identify" className="resetpass">¿Olvidaste tu contraseña?</Link>
            </div>
            <div className="divRegister">
                <p>¿No tienes una cuenta?  &nbsp;
                    <Link to="/register" style={{ color: '#3897f0' }}>Regístrate</Link>
                </p>
            </div>
        </div>
    );
}

export default Login;