import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm'


class App extends Component {

  state = {  loggedIn: null }

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCxaRexqVV6OCLFDSmbNYr4ex5EVentwuc',
      authDomain: 'auth-eb26f.firebaseapp.com',
      databaseURL: 'https://auth-eb26f.firebaseio.com',
      projectId: 'auth-eb26f',
      storageBucket: 'auth-eb26f.appspot.com',
      messagingSenderId: '57614860138'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <Button onPress={ () => firebase.auth().signOut() }>
            Log Out
          </Button>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
