import React from 'react';
import Settings from 'material-ui-icons/Settings';

const HeaderActionProfile = (props) =>{
    
    let user = props.user != null ? (props.user.usuario) : null;

    if(user === props.perfil.perfil.usuario){
        return (
            <div className="divContentSeguir">
                <div>
                    <button className="btnEditPerfil">Editar perfil</button>
                </div>
                <div className="settings">
                    <button className="btnSettings"><Settings/></button>
                </div>
            </div>
        )
    }else if(user != null && props.userFollowed(props.user.followed, props.perfil.perfil.uid) === true){
        return (
            <div className="divContentSeguir">
                <div>
                <button className="btnEditPerfil">Seguido</button>
                </div>
                <div className="divOpciones">
                    <button className="btnOpciones">...</button>
                </div>
            </div>
        )
    }else{
        return (
            <div className="divContentSeguir">
                <div>
                    <button className="btnSeguir" onClick={() => props.btnSeguir(props.user.uid, props.perfil.perfil.uid)}>Seguir</button>
                </div>
                <div className="divOpciones">
                    <button className="btnOpciones">...</button>
                </div>
            </div>
        )
    } 
}
export default HeaderActionProfile;