import {GET_NEWARRIVAL} from './types';

const initalState = {
  newList: null,
  newListLoading: true,
};

export default (state = initalState, action) => {
  switch (action.type) {
    case GET_NEWARRIVAL:
      return {
        newList: action.newList,
        newListLoading: false,
      };

    default:
      return {...state};
  }
};
