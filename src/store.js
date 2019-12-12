import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import teamsReducer from './reducers/teamsReducer.js';
import playersReducer from './reducers/playersReducer.js';
import starplayersReducer from './reducers/starplayersReducer.js';

const reducer = combineReducers({
  teams:teamsReducer,
  players:playersReducer,
  star_players:starplayersReducer
})


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))

export default store;
