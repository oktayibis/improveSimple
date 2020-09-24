import React, {useEffect, useCallback} from 'react';
import {ScrollView, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {getVerticalImagesAction} from '../../../appState/verticalImages/actions';
import {initalVerticalImages} from '../../../constant/initialData';
// Component
import ImageCard from '../../../components/ImageCard';
const Index = () => {
  const dispatch = useDispatch();
  const {verticalImages, verticalImagesLoading} = useSelector(
    (state) => state.verticalImages,
  );
  const getImages = useCallback(() => {
    dispatch(getVerticalImagesAction(initalVerticalImages));
  }, []);
  useEffect(() => {
    getImages();
  }, []);
  return (
    <ScrollView horizontal>
      {!verticalImagesLoading &&
        verticalImages.map((image) => (
          <ImageCard key={image.id} url={image.url} />
        ))}
    </ScrollView>
  );
};

export default Index;
