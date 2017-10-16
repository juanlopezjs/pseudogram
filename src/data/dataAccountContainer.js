import { Route, Redirect, NavLink } from "react-router-dom";
import NotFound from '../components/NotFound';
import Explorer from '../components/Explorer';

const data = {
    lisItems: [
        { item: 'Editar perfil', attr: { component: NavLink, to: "/accounts/edit/", activeClassName: "listItemActiveEdit", className: "listItemEditUser" } },
        { item: 'Cambiar contraseña', attr: { component: NavLink, to: "/accounts/password/change/", activeClassName: "listItemActiveEdit", className: "listItemEditUser" } },
        { item: 'Comentarios', attr: { component: NavLink, to: "/accounts/comment_filter/", activeClassName: "listItemActiveEdit", className: "listItemEditUser" } }
    ],
    listContentView: [
        { component: Route, attr: { exact: true, path: "/accounts/edit/", component: NotFound } },
        { component: Route, attr: { exact: true, path: "/accounts/password/change/", component: Explorer } },
        { component: Route, attr: { exact: true, path: "/accounts/comment_filter/", component: Explorer } },
        { component: Redirect, attr: { from: "/accounts/", to: "/accounts/edit/" } }
    ]
}
export default data;