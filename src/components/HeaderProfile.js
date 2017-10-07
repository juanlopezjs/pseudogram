import React from 'react';
import HeaderActionProfile from './HeaderActionProfile';

const HeaderProfile = (props) => {

    let perfil = props.perfil
    let followed = perfil != null && props.perfil.followed ? (props.perfil.followed) : {};
    let followers = perfil != null && props.perfil.followers ? (props.perfil.followers) : {};

    return (
        <header>
            <div className="photo">
                <div>
                    <img src={perfil.photoURL} alt={perfil.usuario} />
                </div>
            </div>
            <div className="divDataPerfil">
                <div className="nameUserPerfil">
                    <h1 className="perfilUser">{perfil.usuario}</h1>
                    <HeaderActionProfile {...props}/>
                </div>
                <ul className="ulCont">
                    <li><span>{props.picturesPerfil.length}</span> publicaciones</li>
                    <li><span>{Object.keys(followers).length}</span> seguidores</li>
                    <li><span>{Object.keys(followed).length}</span> seguidos</li>
                </ul>
                <div className="desUser">
                    <h2>{perfil.nombres}</h2>
                    <span></span>
                </div>
            </div>
        </header>
    )
}

export default HeaderProfile;