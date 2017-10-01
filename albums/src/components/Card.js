import React from 'react';
import { View } from 'react-native';

const Card = () => {
  return (
    <View style={styles.constainerStyle}></View>
  );
};

const styles = {
  constainerStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor:'#ddd',
    boderWidthBottom: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRaduis: 2,
    elevation: 1,
    marginRight: 5,
    marginLeft: 5,
    margintop: 10
  }
};

export default Card;
