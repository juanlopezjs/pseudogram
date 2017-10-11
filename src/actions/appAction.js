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

export const onAuthStateChanged = () => (dispatch) => {
    return new Promise(function(resolve) {
        firebase.auth().onAuthStateChanged(data => {
            let userRef = firebase.database().ref(`users/${data.uid}`);
            userRef.once('value').then(dataUser => {
                resolve(dispatch(user(dataUser.val())));
            })
        });
    });
}

export const loadPicture = () => (dispatch, getState) => {
    //.limitToLast(11)
    firebase.database().ref('pictures').orderByKey().on('child_added', snapshot => {
        let userRef = firebase.database().ref(`users/${snapshot.val().uid}`);
        userRef.once('value').then(user => {
            let picture = snapshot.val();
            picture['user'] = user.val()
            dispatch(pictutes(picture))
        })
    });
}