import React, {useEffect, useCallback} from 'react';
import {ScrollView} from 'react-native';
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

  const setImages = useCallback(() => {
    dispatch(getVerticalImagesAction(initalVerticalImages));
  }, [dispatch]);

  useEffect(() => {
    setImages();
  }, [setImages]);

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
