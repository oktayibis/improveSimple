import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './brandCard.styles';
const Index = (props) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: props.url}} />
    </View>
  );
};

export default Index;
