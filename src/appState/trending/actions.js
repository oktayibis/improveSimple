import {GET_TRENDING_LIST} from './types';

// This is assume that data fetching from api or connected with backend. So redux-saga or similiar tech ready to use.
export const getTrandListAction = (trendingList) => {
  return (dispatch) => {
    dispatch({type: GET_TRENDING_LIST, trendingList});
  };
};
