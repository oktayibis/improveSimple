import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './btn.styles';
const Index = (props) => {
  return (
    <TouchableOpacity style={styles.btnContainer}>
      <Text style={styles.label}>{props.label}</Text>
    </TouchableOpacity>
  );
};

export default Index;
