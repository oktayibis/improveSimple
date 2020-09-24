import {GET_VERTICAL_IMAGES} from './types';

export const getVerticalImagesAction = (verticalImages) => {
  return (dispatch) => {
    dispatch({type: GET_VERTICAL_IMAGES, verticalImages});
  };
};
