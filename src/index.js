import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import App from './App';
import './index.css';

const config = {
  apiKey: "INGRESAR KEY",
  authDomain: "INGRESAR DOMINIO",
  databaseURL: "INGRESAR URL",
  storageBucket: "INGRESAR STORAGE",
  messagingSenderId: "INGRESAR ID"
};

firebase.initializeApp(config);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
