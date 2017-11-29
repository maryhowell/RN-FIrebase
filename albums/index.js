// Index.ios.js - place code in here for IOS!!
// Import Library to help create component
 import React from 'react';
 import { AppRegistry, View, Text } from 'react-native';
 import Header from './src/components/header';
 import AlbumList from './src/components/AlbumList'


// Create a component
const App = () => (
  <View style={{ flex:1 }}>
    <Header headerText={'Albums'} />
    <AlbumList />
  </View>
);


// render it to the device
AppRegistry.registerComponent('albums', () => App);
