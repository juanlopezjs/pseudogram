import firebase from 'firebase';

const perfil = (perfil) => {
    return {
        type: "PERFIL",
        perfil
    }
};

const pictutesPerfil = (pictures) => {
    return {
        type: 'LOAD_PICTURES_PERFIL',
        pictures
    }
}

export const loadPerfil = (id) => (dispatch, getState) => {
    //.limitToLast(11)
    let userRef = firebase.database().ref('users').orderByChild('usuario').equalTo(id);
    userRef.once('value', (user) => {
        console.log(user.val())
            //dispatch(perfil(user.val()));
    })
}