import React from 'react';
import {render} from 'react-dom';
import firebase from 'firebase';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from 'history';
import { PrivateRoute } from './utils/AuthService';
import store from './store/store';
import { Provider } from 'react-redux';

import App from './containers/App';
import Login from './containers/LoginContainer';
import Toast from './containers/ToastContainer';
import Register from './containers/RegisterContainer';
import Dialogs from "./containers/DialogContainer";
/*Style */
import './App.css';
import config from './data/dataConfig'

const history = createBrowserHistory();
firebase.initializeApp(config);

render(
    <Provider store={store}>
        <div>
            <Toast/>
            <Dialogs/>
            <BrowserRouter history={history}>
                <Switch>
                    <Route exact path="/login" name="Login Page" component={Login} />
                    <Route exact path="/register" name="Login Page" component={Register} />
                    <Route exact path="/login/identify" name="Login Page" component={Login} />
                    <PrivateRoute path="/" component={App} />
                </Switch>
            </BrowserRouter >
        </div>
    </Provider>,
    document.getElementById('root')
);