import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './trendcard.styles';

const Index = (props) => {
  const {name, brand, price, image} = props.item;
  return (
    <View style={styles.trendContainer}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{uri: image}} />
      </View>
      <View style={styles.content}>
        <Text style={styles.nameText}>{name}</Text>
        <Text style={styles.brandText}>{brand}</Text>
      </View>
      <View style={styles.priceFooter}>
        <Text style={styles.priceText}>$ {price.toFixed(2)}</Text>
      </View>
    </View>
  );
};

export default Index;
