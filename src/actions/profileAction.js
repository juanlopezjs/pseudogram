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
    let userRef = firebase.database().ref('users').orderByChild('usuario').equalTo(id);
    userRef.once('value', (user) => {
        let keyID = Object.keys(user.val())[0];
        let userPerfil = user.child(keyID).val();
        dispatch(perfil(userPerfil));
    })
}