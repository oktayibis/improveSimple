import {GET_TRENDING_LIST} from './types';

const initalState = {
  trendingList: null,
  trendingListLoading: true,
};

export default (state = initalState, action) => {
  switch (action.type) {
    case GET_TRENDING_LIST:
      return {
        trendingList: action.trendingList,
        trendingListLoading: false,
      };

    default:
      return {...state};
  }
};
