import React from 'react';
import { Link } from "react-router-dom";

const Register = (props) => (
    
    <div style={{ margin: '3em' }}>
        <div className="login">
            <h1>Pseudogram</h1>
            <h2 className="register">Regístrate para ver fotos y videos de tus amigos.</h2>
            <form>
                <div>
                    <input type="email" name="txtEmail" placeholder="Correo electrónico" required />
                </div>
                <div>
                    <input type="text" name="txtName" placeholder="Nombre completo" required />
                </div>
                <div>
                    <input type="text" name="txtUser" placeholder="Nombre de usuario" required />
                </div>
                <div>
                    <input type="password" name="txtPass" placeholder="Contraseña" required />
                </div>
            </form>
            <button className="App-btn" onClick={() => props.registerButton()}>Registrarte</button>
            <p className="conditions">Al registrarte, aceptas nuestras Condiciones y la Política de privacidad.</p>
        </div>
        <div className="divRegister">
            <p>¿Tienes una cuenta?  &nbsp;
                <Link to="/login" style={{ color: '#3897f0' }}>Inicia sesión</Link>
            </p>
        </div>
    </div>
)

export default Register;