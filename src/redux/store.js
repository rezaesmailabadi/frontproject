import { createStore, applyMiddleware } from 'redux'
// import logger from 'redux-logger';
import thunk from 'redux-thunk';
import reducers from './rootReducer'

const store = createStore(reducers, applyMiddleware(thunk));

export default store;