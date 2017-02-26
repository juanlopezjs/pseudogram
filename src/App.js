import React, { Component } from 'react';
import firebase from 'firebase';
import ListFile from './ListFile';
import FileUpload from './FileUpload';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {

  constructor() {
    super();
    this.state = {
      user: null,
      pictures: []
    };

  }

  componentWillMount() {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ user });
    });

    firebase.database().ref('pictures').on('child_added', snapshot => {
      this.setState({
        pictures: this.state.pictures.concat(snapshot.val())
      });
    });
  }

  handleAuth() {
    const provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider)
      .then(result => {
        console.log(result.user);
        this.componentWillMount();
      })
      .catch(error => console.error(`Error ${error.code}: ${error.message}`));
  }

  handleLogout() {
    firebase.auth().signOut()
      .then(() => console.log(`ha cerrado sesíon`))
      .catch(error => console.error(error.message));
  }


  renderLoginButton() {
    //Si el usuario está logueado
    if (this.state.user) {
      return (
        <div className="user">
          {this.state.user.displayName}
          <button onClick={this.handleLogout.bind(this)} className="App-btn">Salir</button>
        </div>
      );
    } else {
      return (
        <div className="user">
          <button onClick={this.handleAuth.bind(this)} className="App-btn">Login con Google</button>
        </div>
      );
    }
  }

  render() {
    return (
      <MuiThemeProvider>
      <div className="App">
        <div className="App-header">
          <h2>Pseudogram</h2>
          {this.renderLoginButton()}
        </div>
        <div className="App-intro">
          <FileUpload user={this.state.user} />
          <ListFile user={this.state.user} pictures={this.state.pictures} />
        </div>
      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
