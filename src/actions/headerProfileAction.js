import React from 'react';
import ListItemAction from "../components/ListItemAction";
import {
    arraySettings,
    arrayUserFollowed,
    arrayUserIn
} from '../data/dataHeaderProfileAction'

const actions = (accion, props) =>{
    let array = [];
    if(accion === 'SETTINGS'){
        array = arraySettings(props)
    }else if(accion === 'USER_FOLLOWED'){
        array = arrayUserFollowed(props)
    }else if(accion === 'USER_IN'){
        array = arrayUserIn(props)
    }

    return(<ListItemAction {...props} data={array} className="list"/>)
}

export default actions;

