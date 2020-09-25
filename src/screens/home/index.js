import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

// Home page components
import VerticalImage from './VerticalImages';
import Brands from './Brands';
import NewArrival from './NewArrival';
import Newsletter from './Newsletter';
import Category from './Category';
import Trending from './Trending';
import {Colors} from '../../constant/theme';
import {styles} from './home.styles';

// This is render before flatlist for improve performance issues and avoid vituarilized error.
const flatListHeader = () => (
  <>
    <View style={styles.category}>
      <Category />
    </View>
    <View style={styles.verticalImage}>
      <VerticalImage />
    </View>
    <View style={styles.header}>
      <Text style={styles.title}>New Arrival</Text>
      <Text style={styles.link}>Show All</Text>
    </View>
  </>
);

// This part render after flatlist
const flatListFooter = () => (
  <>
    <View style={styles.trending}>
      <Trending />
    </View>
    <View style={styles.brands}>
      <Brands />
    </View>
    <View style={styles.newsletter}>
      <Newsletter />
    </View>
  </>
);

// Home page render: This is handle performance issues and avoid nested flatlist errors.
const Index = () => {
  return (
    <View testID="testOne" style={styles.main}>
      <NewArrival footer={flatListFooter} header={flatListHeader} />
    </View>
  );
};

export default Index;
