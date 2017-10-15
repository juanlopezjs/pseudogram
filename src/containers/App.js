import React, { Component } from 'react';
import { Route, Switch, Link } from "react-router-dom";
import { logout } from '../utils/AuthService';
import { connect } from 'react-redux';
import { onAuthStateChanged, loadPicture } from '../actions/appAction';
import { togglePopover, handleRequestClose } from '../actions/popoverAction';

import Explore from 'material-ui-icons/Explore';
import Favorite from 'material-ui-icons/FavoriteBorder';
import Profile from 'material-ui-icons/PermIdentity';
import Exit from 'material-ui-icons/ExitToApp';
import Photo from 'material-ui-icons/PhotoCamera';
import Popover from 'material-ui/Popover';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';

/*View */
import Home from '../containers/HomeContainer';
import Explorer from '../components/Explorer';
import ProfileView from '../containers/ProfileContainer';
import NotFound from '../components/NotFound';
import AccountEdit from '../containers/AccountEdit';

const style = {
  margin: "20px",
  width:"400px",
  maxHeight: "362px",
    minHeight: "100px",
    overflowY: "auto",
    overflowX: "hidden"
}


class App extends Component {
  
  async componentDidMount() {
    await this.props.onAuthStateChanged().then(() =>{
       this.props.loadPicture();
    })
  }

  button = null;

  render() {

    let perfil = this.props.user != null ? (`/${this.props.user.usuario}`) : "";

    return (
      <div className="App">
        <AppBar position="fixed" className="App-header">
            <Toolbar>
              <div className="item">
                <Link to="/" className="home">
                  <Photo style={{ width: 20, height: 20, }} /><h2>Pseudogram</h2>
                </Link>
              </div>
              <div className="searchBar">
                <input type="text" placeholder="Buscar" />
              </div>
              <div className="user">
                  <Link to="/explore">
                    <IconButton className="itemsMenu">
                      <Explore style={{ width: 24, height: 24, }} />
                    </IconButton>
                  </Link>
                  <IconButton className="itemsMenu" onClick={this.props.togglePopover}>
                      <Favorite style={{ width: 24, height: 24, }} />
                  </IconButton>
                  <Link to={perfil}>
                    <IconButton className="itemsMenu">
                      <Profile style={{ width: 24, height: 24, }} />
                    </IconButton>
                  </Link>
                  <Link to="#" onClick={logout.bind(this)}>
                    <IconButton className="itemsMenu">
                      <Exit style={{ width: 24, height: 24, }} />
                    </IconButton>
                  </Link>
              </div>
            </Toolbar>
        </AppBar>
        <div className="App-intro">
          <Switch>
            <Route exact path="/explore" render={() => (<Explorer />)} />
            <Route exact path="/" render={(props) => (<Home {...props} />)} />
            <Route exact path="/accounts/edit/" component={AccountEdit}/>
            <Route exact path="/:id" component={ProfileView} />
            <Route path="*" component={NotFound} />
          </Switch>
        </div>
        <Popover
          open={this.props.popover.open}
          anchorEl={this.props.popover.anchorEl}
          anchorOrigin={{horizontal: 'right', vertical: 'top'}}
          transformOrigin={{horizontal: 'left', vertical: 'bottom'}}
          onRequestClose={this.props.handleRequestClose}
          animated={true}
          >
            <h2 style={style}>example</h2>
          </Popover>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
        popover: state.popover
    }
};


export default connect(
  mapStateToProps, 
  {
    onAuthStateChanged, 
    loadPicture,
    togglePopover,
    handleRequestClose
  }
)(App);
