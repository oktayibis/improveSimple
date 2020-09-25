import {GET_NEWARRIVAL} from './types';

// This is assume that data fetching from api or connected with backend. So redux-saga or similiar tech ready to use.
export const getNewArrivalAction = (newList) => {
  return (dispatch) => {
    dispatch({type: GET_NEWARRIVAL, newList});
  };
};
