import firebase from 'firebase';
import { openToast, messagesLoad } from './toastAction';

const uploadPicture = (uploadValue) => {
    return {
        type: 'UPLOAD_PICTURE',
        uploadValue
    }
}

export const handleUpload = event => (dispatch, getState) => {

    const file = event.target.files[0];

    if (!(/\.(jpg|png|gif|jpeg)$/i).test(file.name)) {
        dispatch(messagesLoad(`El archivo no tiene formato de una imagen.`))
        dispatch(openToast(true))
        return false;
    }

    const storageRef = firebase.storage().ref(`/fotos/${file.name}`);
    const task = storageRef.put(file);

    task.on('state_changed', (snapshot) => {
        let percentage = Math.floor((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        dispatch(uploadPicture(percentage))

    }, error => {
        dispatch(messagesLoad(`Ha ocurrido un error: ${error.message}`))
        dispatch(openToast(true))
    }, () => {
        dispatch(messagesLoad('Archivo subido!'))

        const record = {
            id: Math.floor(task.snapshot.bytesTransferred * Math.random()),
            image: task.snapshot.downloadURL,
            uid: getState().user.uid,
            timeCreated: task.snapshot.metadata.timeCreated
        };

        const dbRef = firebase.database().ref('pictures');
        const newPicture = dbRef.push();
        newPicture.set(record);

        document.getElementById("file").value = "";
        dispatch(openToast(true))
    });
}