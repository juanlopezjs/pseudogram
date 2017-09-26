import firebase from 'firebase';

const perfil = (perfil) => {
    return {
        type: "PERFIL",
        perfil
    }
};

/*const pictutesPerfil = (pictures) => {
    return {
        type: 'LOAD_PICTURES_PERFIL',
        pictures
    }
}*/


export const loadPerfil = (id) => (dispatch, getState) => {
    //.limitToLast(11)
    return new Promise(function(resolve) {
        let userRef = firebase.database().ref('users').orderByChild('usuario').equalTo(id);
        userRef.once('value', (user) => {

            if (user.val() != null) {
                let keyID = Object.keys(user.val())[0];
                let userPerfil = user.child(keyID).val();
                dispatch(perfil(userPerfil));
                resolve(true)
            } else {
                dispatch(perfil(null));
                resolve(false)
            }
        })
    })
}