import { fakeAuth } from '../utils/AuthService';
import { openToast, messagesLoad } from './toastAction';

const authenticate = () => {
    return {
        type: "AUTHENTICATE"
    }
};

export const loginButton = provider => (dispatch) => {
    fakeAuth.authenticate(provider).then(result => {
        localStorage.setItem("isAuthenticated", true)
        dispatch(authenticate())
    }).catch(error => {
        dispatch(messagesLoad(`${error.message}`));
        dispatch(openToast(true));
    });
}

export const redirectHome = () => (dispatch) => {
    if (localStorage.getItem("isAuthenticated")) {
        dispatch(authenticate())
    }
}