import React from 'react';

const Profile = (props) =>{
    let {perfil} = props.perfil
    return (   
        <header>
            <div className="photo">
                <div>
                    <img src={perfil.photoURL} alt={perfil.usuario} />
                </div>
            </div>
            <div className="divDataPerfil">
                <div className="nameUserPerfil">
                    <h1>{perfil.usuario}</h1>
                </div>
                <ul>
                    <li>ejemplo 1</li>
                    <li>ejemplo 2</li>
                    <li>ejemplo 3</li>
                </ul>
                <div></div>
            </div>
        </header>
    )
    
}

export default Profile;