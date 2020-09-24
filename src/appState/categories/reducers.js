import {GET_CATEGORIES} from './types';

const initalState = {
  categoriesList: null,
  categoriesLoading: true,
};

export default (state = initalState, action) => {
  switch (action.type) {
    case GET_CATEGORIES:
      return {
        categoriesList: action.categoriesList,
        categoriesLoading: false,
      };

    default:
      return {...state};
  }
};
