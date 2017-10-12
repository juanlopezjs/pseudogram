import firebase from 'firebase';
import { register } from '../utils/AuthService';
import { openToast, messagesLoad } from './toastAction';
import { loginButton } from './loginAction';

export const createUser = (user) => {

    firebase.database().ref(`users/${user.uid}`).set({
        uid: user.uid,
        nombres: user.nombres,
        usuario: user.usuario,
        email: user.email,
        photoURL: user.photoURL
    })
}

export const registerButton = () => async(dispatch, getState) => {
    try {
        let form = document.forms[0];
        let email = form.txtEmail.value;
        let password = form.txtPass.value;
        let nombres = form.txtName.value;
        let usuario = form.txtUser.value;

        let data = await register(email, password)

        let user = {
            uid: data.uid,
            email: email,
            usuario: usuario,
            nombres: nombres,
            photoURL: 'https://scontent-frx5-1.cdninstagram.com/t51.2885-19/11906329_960233084022564_1448528159_a.jpg'
        }
        createUser(user)
        dispatch(loginButton(false))
    } catch (error) {
        dispatch(messagesLoad(`${error.message}`));
        dispatch(openToast(true));
    }
}