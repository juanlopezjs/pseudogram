import firebase from 'firebase';
import { register } from '../utils/AuthService';
import { openToast, messagesLoad } from './toastAction';
import {loginButton } from './loginAction';

export const registerButton = () => (dispatch, getState) => {
    let form = document.forms[0];
    let email = form.txtEmail.value;
    let password = form.txtPass.value;
    let nombres = form.txtName.value;
    let usuario = form.txtUser.value;

    register(email, password).then((user) => {

        firebase.database().ref(`users/${user.uid}`).set({
            uid: user.uid,
            nombres: nombres,
            usuario: usuario,
            email: email,
            photoURL: 'https://scontent-frx5-1.cdninstagram.com/t51.2885-19/11906329_960233084022564_1448528159_a.jpg'
        }).then(() => {
            loginButton(false)(dispatch)
        }).catch(error => {
            dispatch(messagesLoad(`${error.message}`));
            dispatch(openToast(true));
        });
    }).catch(error => {
        dispatch(messagesLoad(`${error.message}`));
        dispatch(openToast(true));
    });
}