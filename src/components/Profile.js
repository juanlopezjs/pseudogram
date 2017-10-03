import React from 'react';
import { Link } from "react-router-dom";
import ImageLoader from 'react-imageloader';
import Settings from 'material-ui-icons/Settings';

const style = {
    textAlign: 'center'
}

const preloader = () => {
    return <div className="preloadAnimated"></div>
}

const Profile = (props) =>{
    let perfil = props.perfil
    let user = props.user != null ? (props.user.usuario) : null;
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
                        {user === perfil.usuario &&
                            <Link to="/explore">
                                <button className="btnEditPerfil">Editar perfil</button>
                            </Link>
                        }
                        {user === perfil.usuario &&
                            <div className="settings">
                                <button className="btnSettings"><Settings/></button>
                            </div>
                        }

                        {user !== perfil.usuario &&
                            <div>
                                <div>
                                    <button>Seguir</button>
                                </div>
                                <div>
                                    <button>
                                        ...
                                    </button>
                                </div>
                            </div>
                        }
                    </div>
                    <ul className="ulCont">
                        <li><span>{props.picturesPerfil.length}</span> publicaciones</li>
                        <li>seguidores</li>
                        <li>seguidos</li>
                    </ul>
                    <div className="desUser">
                        <h2>{perfil.nombres}</h2>
                        <span></span>
                    </div>
                </div>
            </header>
            <div className="grid">
            {
                props.picturesPerfil.map(picture => (
                    <div className="gridPhoto" key={picture.id}>
                        <ImageLoader
                            src={picture.image}
                            preloader={preloader}>
                        </ImageLoader>
                        <div className="links">
                            <a href=""><i className="fa fa-heart"></i><span></span></a>
                            <a href=""><i className="fa fa-comment"></i><span></span></a>
                        </div>
                    </div>
                ))
            }
            </div>
        </article>
    )
    
}

export default Profile;