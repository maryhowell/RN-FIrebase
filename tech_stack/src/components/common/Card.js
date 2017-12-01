import React from 'react';
import { View } from 'react-native';

const Card = (props) => {
  return (
    <View style={styles.constainerStyle}>
    {props.children}
    </View>
  );
};

const styles = {
  constainerStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor:'#ddd',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    elevation: 1,
    marginRight: 5,
    marginLeft: 5,
    marginTop: 10
  }
};

export { Card };
