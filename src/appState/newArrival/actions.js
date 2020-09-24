import {GET_NEWARRIVAL} from './types';

export const getNewArrivalAction = (newList) => {
  return (dispatch) => {
    dispatch({type: GET_NEWARRIVAL, newList});
  };
};
