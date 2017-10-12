import firebase from 'firebase';

const user = (user) => {
    return {
        type: "USER",
        user
    }
};

const pictutes = (pictures) => {
    return {
        type: 'LOAD_PICTURES',
        pictures
    }
}

export const onAuthStateChanged = () => async(dispatch) => {
    return firebase.auth().onAuthStateChanged(async(data) => {
        let userRef = await firebase.database().ref(`users/${data.uid}`);
        let dataUser = await userRef.once('value');
        dispatch(user(dataUser.val()));
    });
}

export const loadPicture = () => (dispatch, getState) => {
    //.limitToLast(11)
    firebase.database().ref('pictures').orderByKey().on('child_added', async(snapshot) => {
        let userRef = await firebase.database().ref(`users/${snapshot.val().uid}`);
        let user = await userRef.once('value')
        let picture = snapshot.val();
        picture['user'] = user.val()
        dispatch(pictutes(picture))
    });
}