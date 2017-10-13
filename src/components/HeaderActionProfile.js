import React from 'react';
import Settings from 'material-ui-icons/Settings';
import { Link } from "react-router-dom";
import Dialogs from "./Dialog"

const HeaderActionProfile = (props) =>{
    
    let user = props.user != null ? (props.user.usuario) : null;
    console.log(props)

    if(user === props.perfil.perfil.usuario){
        return (
            <div className="divContentSeguir">
                <Link to="/accounts/edit/">
                    <div>
                        <button className="btnEditPerfil">Editar perfil</button>
                    </div>
                </Link>
                <div className="settings">
                    <button className="btnSettings" onClick={()=>props.handleClickOpen()}><Settings/></button>
                </div>
                <Dialogs {...props}><div className="pruebaD">pruebas</div></Dialogs>
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