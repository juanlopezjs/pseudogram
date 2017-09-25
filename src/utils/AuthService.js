import React from 'react';
import firebase from 'firebase';
import { Route, Redirect } from 'react-router-dom';

export function logout() {
    firebase.auth().signOut()
        .then(() => {
            localStorage.removeItem("isAuthenticated");
            window.location = "/login";
        })
        .catch(error => console.error(error.message));

}

export async function register(email, password) {
    return await firebase.auth().createUserWithEmailAndPassword(email,password);
}

export const fakeAuth = {
    isAuthenticated: localStorage.getItem("isAuthenticated"),
    async authenticate(provider) {
        const auth = firebase.auth();
        if (provider) {
            let google = new firebase.auth.GoogleAuthProvider();
            return await auth.signInWithPopup(google)
        } else {
            const form = document.forms[0];
            return await auth.signInWithEmailAndPassword(form.txtEmail.value, form.txtPass.value);
        }
    },
    signout(cb) {
        localStorage.setItem("isAuthenticated", false)
        setTimeout(cb, 100)
    }
}

export const PrivateRoute = ({ component: Component, ...rest }) => {
    return ( <Route {...rest } render={ props => 
                (
                    localStorage.getItem("isAuthenticated") ? ( <Component {...props }/>
                ) : ( 
                    <Redirect to={{pathname:'/login', state:{ from: props.location }}}/>
                )
            )}/>
    )
}