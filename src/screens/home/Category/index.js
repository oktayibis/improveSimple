import React, {useEffect, useState, useCallback} from 'react';
import {View, Text} from 'react-native';
import {getCategoriesAction} from '../../../appState/categories/actions';
import {InitialCategories} from '../../../constant/initialData';
import {useDispatch, useSelector} from 'react-redux';

import styles from './category.styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState(1);
  const {categoriesList, categoriesLoading} = useSelector(
    (state) => state.categories,
  );
  const dispatch = useDispatch();

  // Call inital data
  const getCategries = useCallback(() => {
    dispatch(getCategoriesAction(InitialCategories));
  }, [dispatch]);

  useEffect(() => {
    getCategries();
  }, [getCategries]);

  return (
    <View style={styles.navContainer}>
      {!categoriesLoading &&
        categoriesList.map((category) => (
          <TouchableOpacity
            key={category.categoryId}
            onPress={() => setSelectedCategory(category.categoryId)}>
            <Text
              style={
                selectedCategory === category.categoryId
                  ? [styles.navLink, styles.navLinkSelected]
                  : styles.navLink
              }>
              {category.name}
            </Text>
          </TouchableOpacity>
        ))}
    </View>
  );
};

export default Index;
