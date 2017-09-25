import React from 'react';


const Profile = (props) => {
    
    props.loadPerfil(props.match.params.id)
    return (   
        <header>
            <div>
                <div>
                    <img src={props.perfil.photoURL} alt={props.perfil.usuario} />
                </div>
            </div>
            <div>
                <div>
                    <h1>{props.perfil.usuario}</h1>
                </div>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                <div></div>
                <h3>ID: {props.match.params.id}</h3>
            </div>
        </header>
    )
}

export default Profile;