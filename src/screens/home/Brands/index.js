import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {Colors, FontSizes, Margins} from '../../../constant/theme';
import {useSelector} from 'react-redux';

import BrandCard from '../../../components/BrandCard';
const Index = () => {
  const {newList} = useSelector((state) => state.newArrivalList);
  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.title}>Brands</Text>
        <Text style={styles.link}>Show All</Text>
      </View>
      <View>
        <ScrollView horizontal>
          {newList &&
            newList.map((item) => <BrandCard key={item.id} item={item} />)}
        </ScrollView>
      </View>
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 5,
    marginVertical: Margins.marginHorizantal,
    marginTop: Margins.marginLeft * 2,
  },
  title: {
    fontWeight: '600',
    fontSize: FontSizes.regular,
  },
  link: {
    color: Colors.softRed,
    fontWeight: '600',
    fontSize: FontSizes.regular,
  },
});
