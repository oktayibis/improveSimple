import {GET_VERTICAL_IMAGES} from './types';

const initalState = {
  verticalImages: null,
  verticalImagesLoading: true,
};

export default (state = initalState, action) => {
  switch (action.type) {
    case GET_VERTICAL_IMAGES:
      return {
        verticalImages: action.verticalImages,
        verticalImagesLoading: false,
      };

    default:
      return {...state};
  }
};