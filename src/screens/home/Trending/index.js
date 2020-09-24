import React, {useEffect, useCallback} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {getTrandListAction} from '../../../appState/trending/actions';
import {
  initalArrivalData,
  initialTrendingData,
} from '../../../constant/initialData';

import TrendCard from '../../../components/TrendCard';
import {Colors} from '../../../constant/theme';
const Index = () => {
  const dispatch = useDispatch();
  const {trendingList} = useSelector((state) => state.trendList);

  const setItems = useCallback(() => {
    dispatch(getTrandListAction(initalArrivalData));
  }, []);

  useEffect(() => {
    setItems();
  }, []);

  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.title}>What's trending</Text>
        <Text style={styles.link}>Show All</Text>
      </View>
      <View>
        {trendingList &&
          trendingList.map((trend) => (
            <TrendCard key={trend.name + Math.random()} item={trend} />
          ))}
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
