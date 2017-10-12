import { fakeAuth, userExist } from '../utils/AuthService';
import { openToast, messagesLoad } from './toastAction';
import { createUser } from './registerAction'

const authenticate = () => {
    return {
        type: "AUTHENTICATE"
    }
};

export const loginButton = provider => async(dispatch) => {
    try {
        let result = await fakeAuth.authenticate(provider) //.then((result) => {
        if (provider) {
            let exist = await userExist(result.user.uid) //.then((exist) => {
            if (exist === false) {
                let user = {
                    uid: result.user.uid,
                    nombres: result.user.displayName,
                    usuario: result.user.email.split("@")[0],
                    email: result.user.email,
                    photoURL: result.user.photoURL
                }
                createUser(user)
            }
        }
        localStorage.setItem("isAuthenticated", true)
        dispatch(authenticate())
    } catch (error) {
        dispatch(messagesLoad(`${error.message}`));
        dispatch(openToast(true));
    };
}

export const redirectHome = () => (dispatch) => {
    if (localStorage.getItem("isAuthenticated")) {
        dispatch(authenticate())
    }
}