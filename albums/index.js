// Index.ios.js - place code in here for IOS!!
// Import Library to help create component
 import React from 'react';
 import { AppRegistry, View, Text } from 'react-native';
 import Header from './src/components/header';


// Create a component
const App = () => (
  <Header />
);


// render it to the device
AppRegistry.registerComponent('albums', () => App);
