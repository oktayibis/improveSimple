import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

// Home page components
import VerticalImage from './VerticalImages';
import Brands from './Brands';
import NewArrival from './NewArrival';
import Newsletter from './Newsletter';
import Category from './Category';
import Trending from './Trending';
import {Colors, Margins} from '../../constant/theme';
import {styles} from './home.styles';

const flatListHeader = () => (
  <>
    <View style={styles.category}>
      <Category />
    </View>
    <View style={styles.verticalImage}>
      <VerticalImage />
    </View>
    <View style={styles2.header}>
      <Text style={styles2.title}>New Arrival</Text>
      <Text style={styles2.link}>Show All</Text>
    </View>
  </>
);

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
const Index = () => {
  return (
    <View style={styles.main}>
      <NewArrival footer={flatListFooter} header={flatListHeader} />
    </View>
  );
};

export default Index;

const styles2 = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 5,
    marginVertical: 10,
  },
  title: {
    fontWeight: '600',
    fontSize: 14,
  },
  link: {
    color: Colors.softRed,
    fontWeight: '600',
    fontSize: 14,
  },
});
