import {GET_TRENDING_LIST} from './types';

export const getTrandListAction = (trendingList) => {
  return (dispatch) => {
    dispatch({type: GET_TRENDING_LIST, trendingList});
  };
};
