import {GET_CATEGORIES} from './types';

// This is assume that data fetching from api or connected with backend. So redux-saga or similiar tech ready to use.
export const getCategoriesAction = (categoriesList) => {
  return (dispatch) => {
    dispatch({type: GET_CATEGORIES, categoriesList});
  };
};
