import { combineReducers } from 'redux';
import categoryReducer from './category/categoryReducer';

const reducers = combineReducers({
    categoryState: categoryReducer
});

export default reducers;