import React, {useEffect, useCallback} from 'react';
import {View, FlatList, Text, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {getNewArrivalAction} from '../../../appState/newArrival/actions';
import {initalArrivalData} from '../../../constant/initialData';
import BrandCard from '../../../components/BrandCard';
import {Colors} from '../../../constant/theme';

const Index = (props) => {
  const dispatch = useDispatch();
  const {newList, newListLoading} = useSelector(
    (state) => state.newArrivalList,
  );

  const getArrivals = useCallback(() => {
    dispatch(getNewArrivalAction(initalArrivalData));
  }, [dispatch]);

  useEffect(() => {
    getArrivals();
  }, [getArrivals]);

  return (
    <View>
      <View>
        {newListLoading ? (
          <Text>Loading</Text>
        ) : (
          <FlatList
            ListFooterComponent={props.footer}
            ListHeaderComponent={props.header}
            numColumns={2}
            data={newList}
            ListEmptyComponent={() => <Text>Empty List</Text>}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({item}) => <BrandCard item={item} />}
          />
        )}
      </View>
    </View>
  );
};

export default Index;
