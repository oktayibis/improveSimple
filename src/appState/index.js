import {combineReducers} from 'redux';
import newArrivalReducers from './newArrival/reducers';
import TrendingReducers from './trending/reducers';
import CategoriesReducers from './categories/reducers';
import VerticalImagesReducers from './verticalImages/reducers';
export default combineReducers({
  newArrivalList: newArrivalReducers,
  trendList: TrendingReducers,
  categories: CategoriesReducers,
  verticalImages: VerticalImagesReducers,
});
