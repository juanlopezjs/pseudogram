import React from 'react';
import ListItemAction from "../components/ListItemAction";

const arraySettings = (props) => [
    {item:'Cambiar contraseña', attr: {onClick: () => {
        props.handleRequestClose();
        props.history.push('/accounts/password/change/');
    }}},
    {item:'Cerrar sesión', attr: {onClick: () => {alert("mal")}}},
    {item:'Cancelar', attr: {onClick: () => {props.handleRequestClose()}}}
]

const arrayUserFollowed = (props) => [
    {item:'Reportar usuario', attr: {onClick: () => {alert("bn")}}},
    {item:'Bloquear a este usuario', attr: {onClick: () => {alert("mal")}}},
    {item:'Cancelar', attr: {onClick: () => {props.handleRequestClose()}}}
]

const arrayUserIn = (props) => [
    {item:'Cambiar foto de perfil', attr: {disabled: true}},
    {item:'Eliminar foto actual', attr: {onClick: () => {alert("mal")}}},
    {item:'Subir foto', attr: {onClick: () => {alert("mal")}}},
    {item:'Cancelar', attr: {onClick: () => {props.handleRequestClose()}}}
]


const actions = (accion, props) =>{
    let array = [];
    if(accion === 'SETTINGS'){
        array = arraySettings(props)
    }else if(accion === 'USER_FOLLOWED'){
        array = arrayUserFollowed(props)
    }else if(accion === 'USER_IN'){
        array = arrayUserIn(props)
    }

    return(<ListItemAction {...props} arrayActions={array} className="list"/>)
}

export default actions;

