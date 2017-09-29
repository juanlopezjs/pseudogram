import React from 'react';
import { Link } from "react-router-dom";

const style = {
    textAlign: 'center',
    marginTop: '95px'
}

const Profile = (props) =>{
    let {perfil} = props.perfil
    return (   
        <article style={style}>
            <header>
                <div className="photo">
                    <div>
                        <img src={perfil.photoURL} alt={perfil.usuario} />
                    </div>
                </div>
                <div className="divDataPerfil">
                    <div className="nameUserPerfil">
                        <h1 className="perfilUser">{perfil.usuario}</h1>
                        <Link to="/explore">
                            <button className="btnEditPerfil">Editar perfil</button>
                        </Link>
                        <div>
                            <button></button>
                        </div>
                    </div>
                    <ul>
                        <li>ejemplo 1</li>
                        <li>ejemplo 2</li>
                        <li>ejemplo 3</li>
                    </ul>
                    <div></div>
                </div>
            </header>
            <div className="grid">
                 <div className="gridPhoto">
                    <div className="example"></div>
                </div>
                <div className="gridPhoto">
                    <div className="example"></div>
                </div>
                <div className="gridPhoto">
                    <div className="example"></div>
                </div>
                <div className="gridPhoto">
                    <div className="example"></div>
                </div>
                <div className="gridPhoto">
                    <div className="example"></div>
                </div>
                <div className="gridPhoto">
                    <div className="example"></div>
                </div>
                <div className="gridPhoto">
                    <div className="example"></div>
                </div>
                <div className="gridPhoto">
                    <div className="example"></div>
                </div>
                

            </div>
        </article>
    )
    
}

export default Profile;