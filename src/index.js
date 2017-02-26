import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import App from './App';
import './index.css';

const config = {
  apiKey: "AIzaSyDitW7uHb6tE6qtbLgS_1d9tajYWDjdwxY",
  authDomain: "pseudogram-ed48c.firebaseapp.com",
  databaseURL: "https://pseudogram-ed48c.firebaseio.com",
  storageBucket: "pseudogram-ed48c.appspot.com",
  messagingSenderId: "887707537740"
};

firebase.initializeApp(config);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
