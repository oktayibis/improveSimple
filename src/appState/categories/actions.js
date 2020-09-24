import {GET_CATEGORIES} from './types';

export const getCategoriesAction = (categoriesList) => {
  return (dispatch) => {
    dispatch({type: GET_CATEGORIES, categoriesList});
  };
};
