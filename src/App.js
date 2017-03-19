import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
  componentWillMount() {
      const config = {
        apiKey: "AIzaSyDv2m0gvjL3FdG8l-Gst6kaWDQuAJU5gew",
        authDomain: "manager-b7567.firebaseapp.com",
        databaseURL: "https://manager-b7567.firebaseio.com",
        storageBucket: "manager-b7567.appspot.com",
        messagingSenderId: "297463827572"
    };
    firebase.initializeApp(config);
  }

  render() {
    const store =createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
