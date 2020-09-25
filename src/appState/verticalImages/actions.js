import {GET_VERTICAL_IMAGES} from './types';

// This is assume that data fetching from api or connected with backend. So redux-saga or similiar tech ready to use.
export const getVerticalImagesAction = (verticalImages) => {
  return (dispatch) => {
    dispatch({type: GET_VERTICAL_IMAGES, verticalImages});
  };
};
