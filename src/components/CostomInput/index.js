import React from 'react';
import {View, Text, TextInput} from 'react-native';
import {Colors} from '../../constant/theme';
import styles from './input.styles';
const Index = (props) => {
  return (
    <TextInput
      placeholderTextColor={Colors.light}
      style={styles.input}
      {...props}
    />
  );
};

export default Index;
