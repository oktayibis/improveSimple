import React, {useEffect, useCallback} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {getTrandListAction} from '../../../appState/trending/actions';
import {initalArrivalData} from '../../../constant/initialData';

import TrendCard from '../../../components/TrendCard';
import {Colors, FontSizes, Margins} from '../../../constant/theme';

const Index = () => {
  const dispatch = useDispatch();
  const {trendingList} = useSelector((state) => state.trendList);

  const setTrandingList = useCallback(() => {
    dispatch(getTrandListAction(initalArrivalData));
  }, [dispatch]);

  useEffect(() => {
    setTrandingList();
  }, [setTrandingList]);

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
    marginVertical: Margins.marginHorizantal,
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
