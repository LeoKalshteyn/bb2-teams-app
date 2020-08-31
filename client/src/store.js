// Store holds application state, allows access to state via getState() and state to be updated via dispatch(action).

import {applyMiddleware, createStore, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import TeamsReducer from './reducers/TeamsReducer';
import PlayersReducer from './reducers/PlayersReducer';
import StarPlayersReducer from './reducers/StarPlayersReducer';

const rootReducer = combineReducers({ teams: TeamsReducer, players: PlayersReducer, star_players: StarPlayersReducer });
const store = createStore(rootReducer, compose(

    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

export default store
