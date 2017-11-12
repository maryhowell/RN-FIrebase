// Index.ios.js - place code in here for IOS!!
// Import Library to help create component
 import React from 'react';
 import { AppRegistry, View, Text } from 'react-native';


// Create a component
const App = () => (
  <Text>Some Text</Text>
);


// render it to the device
AppRegistry.registerComponent('albums', () => App);
