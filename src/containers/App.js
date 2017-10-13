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
        <div className="App-header">
          <div className="item">
            <Link to="/" className="home">
              <Photo style={{ width: 20, height: 20, }} /><h2>Pseudogram</h2>
            </Link>
          </div>
          <div className="searchBar">
            <input type="text" placeholder="Buscar" />
          </div>
          <div className="user">
            <Link to="/explore" className="itemsMenu">
              <Explore style={{ width: 24, height: 24, }} />
            </Link>
            <Link to="#" ref={node => {this.button = node;}} className="itemsMenu" onClick={() => this.props.togglePopover(this.button)}>
              <Favorite style={{ width: 24, height: 24, }} />
            </Link>
            <Link to={perfil} className="itemsMenu">
              <Profile style={{ width: 24, height: 24, }} />
            </Link>
            <Link to="#" className="itemsMenu" onClick={logout.bind(this)}>
              <Exit style={{ width: 24, height: 24, }} />
            </Link>
          </div>
        </div>
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
          className="popover"
          open={this.props.popover.open}
          anchorEl={this.props.popover.anchorEl}
          onRequestClose={() => this.props.handleRequestClose()}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'center',
            horizontal: 'center',
          }}>
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
