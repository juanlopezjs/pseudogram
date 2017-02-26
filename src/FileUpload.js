import React, { Component } from 'react';
import firebase from 'firebase';
import Progress from 'react-progress';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentFile from 'material-ui/svg-icons/file/file-upload';
import {Snackbar} from 'material-ui';

const style = {
  marginRight: 0,
  margin: 0,
  bottom: 30,
  right: 40,
  position: 'fixed'
};


export default class FileUpload extends Component {
    constructor() {
        super();
        this.state = {
            uploadValue: 0,
            message:"",
            open: false,
        }
    }

    handleUpload(event) {

        const file = event.target.files[0];
        const storageRef = firebase.storage().ref(`/fotos/${file.name}`);
        const task = storageRef.put(file);

        task.on('state_changed', (snapshot) => {
            let percentage = Math.floor((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
            this.setState({
                uploadValue: percentage
            });

        }, error => {
            this.setState({
                message: `Ha ocurrido un error: ${error.message}`
            });
            this.handleTouchTap();
        }, () => {

            this.setState({
                message: 'Archivo subido!'
            });

            const record = {
                id: Math.floor(task.snapshot.bytesTransferred * Math.random()),
                photoURL: this.props.user.photoURL,
                displayName: this.props.user.displayName,
                image: task.snapshot.downloadURL,
                uid: this.props.user.uid,
                timeCreated: task.snapshot.metadata.timeCreated
            };

            const dbRef = firebase.database().ref('pictures');
            const newPicture = dbRef.push();
            newPicture.set(record);

            this.refs.file.value = '';
            this.handleTouchTap();
        });
    }

  handleTouchTap = () => {
    this.setState({
      open: true,
    });
  };

  handleRequestClose = () => {
    this.setState({
      open: false,
    });

  }

    render() {
        if (this.props.user) {
            return (
                <div className="file">
                    <div>
                        <Progress color="#3897f0" percent={this.state.uploadValue}/>
                    </div>
                    <Snackbar
                        className="toasd"
                        open={this.state.open}
                        message={this.state.message}
                        autoHideDuration={5000}
                        onRequestClose={this.handleRequestClose}
                    />
                    <FloatingActionButton style={style} backgroundColor='#3897f0'>
                        <input className="file-input" type="file" onChange={this.handleUpload.bind(this)} ref="file" />
                        <ContentFile />
                    </FloatingActionButton>
                </div>
            )
        }else{
            return (
             
                 <div className="App-card collage">
                    <figure className="App-card-image">
                        <img width="120" src="https://ae01.alicdn.com/kf/HTB1VTUhIVXXXXX_XXXXq6xXFXXXd/European-Foumas-font-b-Scene-b-font-Postcards-Wall-Decor-Canvas-font-b-Paintings-b-font.jpg" role="presentation" />
                        <figCaption className="App-card-footer">
                            <img className="App-card-avatar" width="48" src="https://static-dogbuddy-com.s3.amazonaws.com/images/default-avatars/default-avatar-user-240_240.da0d813d1613.png" role="presentation" />
                            <span className="App-card-name">Pseudogram</span>
                        </figCaption>
                    </figure>
                </div>
            );
        }
    }
}