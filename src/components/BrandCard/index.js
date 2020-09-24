import React from 'react';
import {View, Text, Image} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Colors} from '../../constant/theme';

import styles from './brandCard.styles';
const Index = (props) => {
  const {name, brand, price, discountPrice, image, isLiked} = props.item;
  return (
    <View style={styles.brandCardContainer}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{uri: image}} />
        <FontAwesome
          style={styles.heart}
          name="heart"
          color={isLiked ? Colors.softRed : Colors.light}
          size={20}
        />
      </View>
      <View style={styles.content}>
        <Text style={styles.nameText}>{name}</Text>
        <Text style={styles.brandText}>{brand}</Text>
      </View>
      <View style={styles.footer}>
        <Text style={styles.priceText}>$ {price.toFixed(2)}</Text>
        <Text style={styles.discountText}>$ {discountPrice.toFixed(2)}</Text>
      </View>
    </View>
  );
};

export default Index;

/**
 * {
    id: 111,
    name: 'Avant Men Bolt Shoes',
    brand: 'Adidas',
    price: 765.0,
    discountPrice: 42.0,
    image:
 */
