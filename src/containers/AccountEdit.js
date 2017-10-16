import React from 'react';
import { Route, Switch, Redirect, NavLink } from "react-router-dom";
import ListItemAction from "../components/ListItemAction";
import NotFound from '../components/NotFound';
import Explorer from '../components/Explorer';

const AccountEdit = (props) => {
    let array = {
    lisItems : [
        {item:'Editar perfil', attr: {component: NavLink, to: "/accounts/edit/", activeClassName:"listItemActiveEdit", className: "listItemEditUser"}},
        {item:'Cambiar contraseña', attr: {component: NavLink, to: "/accounts/password/change/", activeClassName:"listItemActiveEdit", className: "listItemEditUser"}},
        {item:'Comentarios', attr: {component: NavLink, to: "/accounts/comment_filter/", activeClassName:"listItemActiveEdit", className: "listItemEditUser"}}
    ],
    listContentView : [
        {component: Route, attr: {exact: true, path: "/accounts/edit/", component: NotFound}},
        {component: Route, attr: {exact:true, path: "/accounts/password/change/", component: Explorer}},
        {component: Route, attr: {exact: true, path: "/accounts/comment_filter/", component: Explorer}},
        {component: Redirect, attr: {from:"/accounts/", to:"/accounts/edit/"}}   
    ]
}

    return(
        <div className="editUser">
            <div className="listNavEdit">
                <ListItemAction  arrayActions={array.lisItems}/>
            </div>
            <div className="contentEditUser">
                <Switch>
                {
                    array.listContentView.map((contentView, i) =>(
                        <contentView.component {...contentView.attr} key={i}/>
                    ))
                }
                </Switch>
            </div>
        </div>
    )
}

export default AccountEdit;