import React, { Component } from 'react';
import { Route, Switch, Link } from "react-router-dom";
import { logout } from '../utils/AuthService';
import { connect } from 'react-redux';
import { onAuthStateChanged, loadPicture } from '../actions/appAction';

import Explore from 'material-ui-icons/Explore';
import Favorite from 'material-ui-icons/FavoriteBorder';
import Profile from 'material-ui-icons/PermIdentity';
import Exit from 'material-ui-icons/ExitToApp';
import Photo from 'material-ui-icons/PhotoCamera';
/*View */
import Home from '../containers/HomeContainer';
import Explorer from '../components/Explorer';
import NotFound from '../components/NotFound';
import ProfileView from '../containers/ProfileContainer';


class App extends Component {

  componentWillMount() {
    this.props.onAuthStateChanged().then(() =>{
      this.props.loadPicture();
    })
  }

  render() {

    let perfil = this.props.user != null ? (`/${this.props.user.usuario}`) : "";

    return (
      <div className="App">
        <div className="App-header">
          <div className="item">
            <Link to="/" className="home"><Photo style={{ width: 20, height: 20, }} /><h2>Pseudogram</h2></Link>
          </div>
          <div className="searchBar">
            <input type="text" placeholder="Buscar" />
          </div>
          <div className="user">
            <Link to="/explore" className="itemsMenu"><Explore style={{ width: 24, height: 24, }} /></Link>
            <Link to="/error" className="itemsMenu"><Favorite style={{ width: 24, height: 24, }} /></Link>
            <Link to={perfil} className="itemsMenu"><Profile style={{ width: 24, height: 24, }} /></Link>
            <Link to="#" className="itemsMenu" onClick={logout.bind(this)}><Exit style={{ width: 24, height: 24, }} /></Link>
          </div>
        </div>
        <div className="App-intro">
          <Switch>
            <Route path="/explore" render={() => (<Explorer />)} />
            <Route path="/" exact={true} render={(props) => (<Home {...props} />)} />
            <Route path="/:id" component={ProfileView} />
            <Route path="*" exact={true} component={NotFound} />
          </Switch>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
};


export default connect(
  mapStateToProps, 
  {
    onAuthStateChanged, 
    loadPicture
  }
)(App);
