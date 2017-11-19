import React from 'react';
import { Text, View } from 'react-native';

const Header = () => {
  const { textStyle, viewStyles } = styles;

  return  (
    <View style={viewStyles}>
      <Text style={textStyle}>Albums!</Text>
    </View>
  )
};

const styles = {
  viewStyles:{
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15
  },
  textStyle: {
    fontSize: 20
  }
};

export default Header;
