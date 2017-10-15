import React from 'react';
import ListItemAction from "../components/ListItemAction";

const arraySettings = [
    {item:'Cambiar contraseña', action: () => {alert("bn")}},
    {item:'Cerrar sesión', action: () => {alert("mal")}},
    {item:'Cancelar', action: () => {alert("mal")}}
]

const arrayUserFollowed = [
    {item:'Reportar usuario', action: () => {alert("bn")}},
    {item:'Bloquear a este usuario', action: () => {alert("mal")}},
    {item:'Cancelar', action: () => {alert("mal")}}
]

const arrayUserIn = [
    {item:'Cambiar foto de perfil', disabled: true},
    {item:'Eliminar foto actual', action: () => {alert("mal")}},
    {item:'Subir foto', action: () => {alert("mal")}},
    {item:'Cancelar', action: () => {alert("mal")}}
]


const actions = (accion) =>{
    let array = [];
    
    if(accion === 'SETTINGS'){
        array = arraySettings
    }else if(accion === 'USER_FOLLOWED'){
        array = arrayUserFollowed
    }else if(accion === 'USER_IN'){
        array = arrayUserIn
    }

    return(<ListItemAction arrayActions={array}/>)
}

export default actions;

