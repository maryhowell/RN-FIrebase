import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm'


class App extends Component {
  
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCxaRexqVV6OCLFDSmbNYr4ex5EVentwuc',
      authDomain: 'auth-eb26f.firebaseapp.com',
      databaseURL: 'https://auth-eb26f.firebaseio.com',
      projectId: 'auth-eb26f',
      storageBucket: 'auth-eb26f.appspot.com',
      messagingSenderId: '57614860138'
    });
  }


  render() {
    return (
      <View>
      <Header headerText='Authentication' />
        <LoginForm />
      </View>
    );
  }
}

export default App;
