import React, { Component } from 'react';
import { View, Text} from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';


class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyC8gCuI2BqtUNT4CeCLeGx31yY6R2KKvns',
      authDomain: 'managers-d61c1.firebaseapp.com',
      databaseURL: 'https://managers-d61c1.firebaseio.com',
      projectId: 'managers-d61c1',
      storageBucket: 'managers-d61c1.appspot.com',
      messagingSenderId: '73904527882'
    };
    firebase.initializeApp(config);
  }
  
  render() {
    return (
      <Provider store={ createStore(reducers) }>
        <View>
          <Text>dkfgh </Text>
        </View>
      </Provider>
    );
  }
}

export default App;
