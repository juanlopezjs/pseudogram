import firebase from 'firebase';

const perfil = (perfil) => {
    return {
        type: "PERFIL",
        perfil
    }
};

const picturesPerfil = (pictures) => {
    return {
        type: 'LOAD_PICTURES_PERFIL',
        pictures
    }
}

const getUser = async(user, callback) => {
    let userRef = await firebase.database().ref('users').orderByChild('usuario').equalTo(user);
    let userF = await userRef.once('value');
    return userF;
}

export const btnSeguir = (userRequests, userFollow) => {

    return async dispatch => {
        try {
            let bdFirebase = firebase.database()
            let followed = await bdFirebase.ref('users/' + userRequests)
                .child("followed/" + userFollow)
            followed.set({ uid: userFollow })

            /*Seguidores */
            let followers = await bdFirebase.ref('users/' + userFollow)
            followers.child("followers/" + userRequests).set({ uid: userRequests })

            let user = await followers.once('value') //, (user) => {
            dispatch(perfil(user.val()));
        } catch (e) {
            console.log(e)
        }
        //})
    }
}

export const userFollowed = (arrayFollowed, userUid) => {
    let arr = (arrayFollowed === undefined) ? {} : arrayFollowed;
    return dispatch => Object.keys(arr).includes(userUid)
}


export const loadPerfil = (id) => async(dispatch) => {
    //.limitToLast(11)
    let user = await getUser(id)
    if (user.val() != null) {
        let keyID = Object.keys(user.val())[0];
        let userPerfil = user.child(keyID).val();
        dispatch(perfil(userPerfil));
        let pictures = await firebase.database().ref('pictures').orderByChild('uid').equalTo(keyID)
        let prue = await pictures.once("value")
        dispatch({ type: 'RESET' })
        dispatch(picturesPerfil(Object.values(prue.val())));
        return true
    } else {
        dispatch(perfil(null));
        return false
    }
}